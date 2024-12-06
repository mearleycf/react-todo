# Current error handling structure

## Flow of events for error handling

--> `App` component calls `useTodos()` hook 
    --> `useTodos()` requests the appropriate data from the API route in `routes/todos`
        --> the router uses the `TodoService` class methods to perform the actions on the requested method, and returns the expected response (note--`TodoService` doesn't do any error handling--just happy path handling)
            - we're using `console.log()` instead of `logApiOperation()` for some reason, in the router functions--in addition to ALSO using `logApiOperation()`...
                - `logApiOperation()` is logging both successes and errors
                    - in the instance where it is logging errors, it is selecting an error message from the `defaultApiLogs` object, OR from the `customMessage` string property
                        - The `defaultApiLogs` object uses `ApiLogs`, which is just a tuple of `OperationType` and `ApiLogMessages`
                            - `OperationType` logs the type of API operation being performed (either 'system' or HttpMethod, which is 'get', 'post', 'patch', 'delete')
                            - `ApiLogMessages` defines the shape of the types of responses that the API might need--'request', 'success', 'error', and 'info'; note, we shoehorned 'info' in here so we could respond to non-Api messages
            - we're using `console.error()` here, instead of using `createApiError()`--but we're ALSO using `createApiError()` here;
                - `createApiError(method: HttpMethod, status: number): ApiError`
                    - `HttpMethod` = 'get', 'post', 'patch', 'delete'
                    - `status` is just http status codes--but for some reason we're NOT using our `ErrorStatus` type, which contains a union of http 400 and 500 status codes...
            - `router` also calls validators in `validateTodo.ts`
                    - `validateTodoText(req, res, next):  void` takes in a request method, and `request.body.text`, which has to be a string; if it's not a string, we throw `createApiError()` and `logApiOperation()`
                    - `validateTodoId(req, res, next): void` validates that the passed `req.params.id` value is an int, and uses `logApiOperation()` and `createApiError()` for errors
                    - `validateTodoUpdate(req, res, next): void` destructures text and completed from `req.body`, validates text is not undefined, and is a string; validates completed is not undefined, and is a boolean; and validates if both text and completed were undefined
                        - for whatever reason, we are NOT using `logApiOperation()` or `createApiError()` for `validateTodoUpdate`! But it's basically returning a `res.status(400).json({error: 'text must be a string'})`, which could be passed to `createApiError()` easily enough
            - we're using `logApiOperation()` in `TodoService`, only in `readTodos(): Todo`
                - we're not using our `OperationType` type here, we're just passing 'system' manually; we're also not using the `HttpMethod` type, we're just passing 'request' or 'error' manually; we're passing a custom string for each one
            - we aren't taking full advantage of the `router.use()` method or the `app.use((err, req, res, next)=> {})` method appropriately to extract some of the logging from the individual routes
        --> the router receives the updated object from `TodoService` and either creates a response object with the updated `todos`, or returns a response object with the appropriate `error`, this return going back to `useTodos()`
            - we're using `logApiOperation()` again to log the response to the `TodoService` call
    --> `useTodos()` receives the async callback response and either sets the `todos` object or sets the `error` object, and returns those objects as well as all of the `useTodos` functions back to `App`
        - we're fumbling a bit here, as everywhere in the app, except here, we're using the lower case value 'get', but here we're using 'GET', and we're not using our `HttpMethod` type for type safety either
        - We're using `TypeError` here, which is a typescript library type defined by the typescript library interface `TypeErrorConstructor extends ErrorConstructor`
            - contains a method `new (message?: string): TypeError` and `(message?: string): TypeError` method
                - `ErrorConstructor` is an interface that has the same shape as `TypeErrorConstructor`--the same two methods
--> `App` takes passed `todos` and `error` objects and passes them to `TodoList` as props 
    --> this is where I stopped on error handling--the `TodoList` component would either take the `todos` object from the prop passed in to the component, OR it takes the `error` object from the prop passed in to the component
        --> if an `error` is received, it is then passed on to the `ErrorMessage` component, which would render the error modal, and, depending on type of error, allow the user to retry the operation (or not)
        
## Summary

* We're basically performing two sets of operations: we're logging all activity, and we're creating and returning error objects
* For logging activity, we're using a combination of console methods and logApiOperation()
    * logApiOperation() is named poorly
    * the params it takes in can be better constructed to be more generic
    * we need to get rid of the console logs--if we're using them for debugging purposes, maybe we should create a new function for debugging that is more verbose
* For error handling, we are using a mix of console.error and createApiError for the most part
    * we're fumbling this a bit, because both useTodos() and the router.*() methods are creating ApiError objects--so router.get() is returning an ApiError defined error object, but the useTodos() getTodos() method is not using that returned error object--it's creating a new one! For no reason. 
    * ApiError is a bad name for our error handling type object, and probably can be reworked to be more generic, instead of requiring it contain a status, method, and message