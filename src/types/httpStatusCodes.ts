export type HttpStatus = {
  success: {
    200: {
      response: 'OK'
      verboseResponse: {
        get: 'The resource has been fetched and transmitted in the response body.'
        head: 'Representation headers are included in the response without any message body.'
        put: 'The resource describing the result of the action is transmitted in the message body.'
        post: 'The resource describing the result of the action is transmitted in the message body.'
        trace: 'The message body contains the request as received by the server.'
      }
    }
    201: {
      response: 'Created'
      verboseResponse: 'The request succeeded, and a new resource was created as a result.'
    }
    202: {
      response: 'Accepted'
      verboseResponse: 'The request has been received, but not yet acted upon.'
    }
    203: {
      response: 'Non-Authoritative Information'
      verboseResponse: 'The returned metadata is not exactly the same as is available from the origin server, but is collected from a local or third party copy.'
    }
    204: {
      response: 'No Content'
      verboseResponse: 'There is no content to send for this request, but the headers are useful. The user agent may update its cached headers for this resource with the new ones.'
    }
    205: {
      response: 'Reset Content'
      verboseResponse: 'User Agent should reset the document which sent this request.'
    }
    206: {
      response: 'Partial Content'
      verboseResponse: 'This is a response to a range request, the client has requested part or parts of a resource.'
    }
    207: {
      response: 'Multi-Status'
    }
    208: {
      response: 'Already Reported'
    }
    226: {
      response: 'IM Used'
    }
  }
  redirection: {
    300: {
      response: 'Multiple Choices'
      verboseResponse: 'the request has more than one response, and the user agent should choose one of them.'
    }
    301: {
      response: 'Moved Permanently'
      verboseResponse: 'The URL of the requested resource has changed permanently. The new URL is given in the response.'
    }
    302: {
      response: 'Found'
      verboseResponse: 'The URI of the requested resource has been temporarily changed. Further changes in the URI might be made in the future. Continue using the same URI.'
    }
    303: {
      response: 'See Other'
      verboseResponse: 'The server sent this response to direct the client to get the requested resource at another URI with a GET request.'
    }
    304: {
      response: 'Not Modified'
      verboseResponse: 'This response is for caching purposes. It tells the client that the response has not been modified, so the client can continue using the same cached version of the response.'
    }
    307: {
      response: 'Temporary Redirect'
      verboseResponse: 'The server is directing the client to get the requested resource at another URI with the same method that was used in the prior request.'
    }
    308: {
      response: 'Permanent Redirect'
      verboseResponse: 'The resource has permanently moved to another URI, specified by the Location response Header. '
    }
  }
  clientError: {
    400: {
      response: 'Bad Request'
      verboseResponse: 'The server cannot or will not process the request due to client error.'
    }
    401: {
      response: 'Unauthorized'
      verboseResponse: 'The client must authenticate itself to get the requested response.'
    }
    403: {
      response: 'Forbidden'
      verboseResponse: 'The client does not have access rights to the content. The clients identity is known to the server--they just do not have access rights'
    }
    404: {
      response: 'Not Found'
      verboseResponse: 'The server cannot find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean the endpoint is valid, but the resource itself does not exist. This response may also be sent instead of 403 Forbidden to hide the existence of a resource from an unauthorized client.'
    }
    405: {
      response: 'Method Not Allowed'
      verboseResponse: 'The request method is known by the server but is not supported by the target resource.'
    }
    406: {
      response: 'Not Acceptable'
      verboseResponse: 'The server has performed server-driven content negotiation, and has not found content that conforms to the request.'
    }
    407: {
      response: 'Proxy Authentication Required'
      verboseResponse: 'Authentication is required, and must be done by a proxy.'
    }
    408: {
      response: 'Request Timeout'
      verboseResponse: 'The server would like to shut down an unused connection.'
    }
    409: {
      response: 'Conflict'
      verboseResponse: 'The request conflicts with the current state of the server.'
    }
    410: {
      response: 'Gone'
      verboseResponse: 'The requested content has been permanently deleted from the server, with no forwarding address. Remove any caches and links to the resource.'
    }
    411: {
      response: 'Length Required'
      verboseResponse: 'The Content-Length header field is not defined, but the server requires it.'
    }
    412: {
      response: 'Precondition Failed'
      verboseResponse: 'The client has indicated preconditions in the Headers which the server does not meet.'
    }
    413: {
      response: 'Content Too Large'
      verboseResponse: 'The request body is larger than limits defined by the server.'
    }
    414: {
      response: 'URI Too Long'
      verboseResponse: 'The URI requested by the client is longer than the server is willing to interpret.'
    }
    415: {
      response: 'Unsupported Media Type'
      verboseResponse: ''
    }
    416: {
      response: 'Range Not Satisfiable'
      verboseResponse: 'The server cannot provide the requested range.'
    }
    418: {
      response: "I'm a Teapot"
      verboseResponse: 'The server refuses the attempt to brew coffee with a teapot.'
    }
    421: {
      response: 'Misdirected Request'
      verboseResponse: 'The request was directed at a server that is not able to produce a response.'
    }
    422: {
      response: 'Unprocessable Entity'
      verboseResponse: 'The request was well-formed but was unable to be followed due to semantic errors.'
    }
    423: {
      response: 'Locked'
      verboseResponse: 'The resource that is being accessed is locked.'
    }
    424: {
      response: 'Failed Dependency'
      verboseResponse: 'The request failed due to failure of a previous request.'
    }
    426: {
      response: 'Upgrade Required'
      verboseResponse: 'The client should switch to a different protocol such as TLS/1.0.'
    }
    428: {
      response: 'Precondition Required'
      verboseResponse: 'The origin server requires the request to be conditional.'
    }
    429: {
      response: 'Too Many Requests'
      verboseResponse: 'The user has sent too many requests in a given amount of time.'
    }
    431: {
      response: 'Request Header Fields Too Large'
      verboseResponse: 'The server is unwilling to process the request because its header fields are too large.'
    }
    451: {
      response: 'Unavailable For Legal Reasons'
      verboseResponse: 'The user agent requested a resource that cannot legally be provided.'
    }
    500: {
      response: 'Internal Server Error'
      verboseResponse: 'The server has encountered a situation it does not know how to handle.'
    }
    501: {
      response: 'Not Implemented'
      verboseResponse: 'The server either does not recognize the request method, or it lacks the ability to fulfill the request.'
    }
    502: {
      response: 'Bad Gateway'
      verboseResponse: 'The server was acting as a gateway or proxy and received an invalid response from the upstream server.'
    }
    503: {
      response: 'Service Unavailable'
      verboseResponse: 'The server is currently unavailable (because it is overloaded or down for maintenance).'
    }
    504: {
      response: 'Gateway Timeout'
      verboseResponse: 'The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.'
    }
    505: {
      response: 'HTTP Version Not Supported'
      verboseResponse: 'The server does not support the HTTP protocol version that was used in the request.'
    }
    506: {
      response: 'Variant Also Negotiates'
      verboseResponse: 'The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not usable.'
    }
    507: {
      response: 'Insufficient Storage'
      verboseResponse: 'The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.'
    }
    508: {
      response: 'Loop Detected'
      verboseResponse: 'The server detected an infinite loop while processing the request.'
    }
    510: {
      response: 'Not Extended'
      verboseResponse: 'The server does not support the functionality required to fulfill the request.'
    }
    511: {
      response: 'Network Authentication Required'
      verboseResponse: 'The client needs to authenticate to gain network access.'
    }
  }
}
