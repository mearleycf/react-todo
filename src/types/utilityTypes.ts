/**
 * Makes complex types more readable in tooltips
 */
export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

/**
 * Extracts property type from a union type by key
 * Example: ExtractPropertyType<TodoState, 'status'> = 'not started' | 'in progress' | 'completed' | 'deleted' | 'archived'
 */
export type ExtractPropertyType<T, K extends keyof T> = T extends unknown ? T[K] : never

/**
 * Returns keys of type that have string values
 */
export type StringKeysOf<T> = {
  [K in keyof T]: T[K] extends string ? K : never
}[keyof T]

/**
 * Returns keys of type that have Date values
 */
export type DateKeysOf<T> = {
  [K in keyof T]: T[K] extends Date ? K : never
}[keyof T]

/**
 * Returns keys of type that have number values
 */
export type NumberKeysOf<T> = {
  [K in keyof T]: T[K] extends number ? K : never
}[keyof T]

/**
 * Returns keys of type that have boolean values
 */
export type BooleanKeysOf<T> = {
  [K in keyof T]: T[K] extends boolean ? K : never
}[keyof T]

/**
 * Returns keys of type that have object values
 */
export type ObjectKeysOf<T> = {
  [K in keyof T]: T[K] extends object ? K : never
}[keyof T]

/**
 * Returns object with only string properties
 */
export type StringProperties<T> = Pick<T, StringKeysOf<T>>

/**
 * Returns object with only number properties
 */
export type NumberProperties<T> = Pick<T, NumberKeysOf<T>>

/**
 * Returns object with only boolean properties
 */
export type BooleanProperties<T> = Pick<T, BooleanKeysOf<T>>

/**
 * Returns object with only object properties
 */
export type ObjectProperties<T> = Pick<T, ObjectKeysOf<T>>

/**
 * Returns object with only Date properties
 */
export type DateProperties<T> = Pick<T, DateKeysOf<T>>

/**
 * Collects all properties from a union type into a single type
 * Example: UnionToIntersection<TodoState> will have all properties from all todo states
 */
export type UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never

/**
 * Creates a merged type with all properties from a union type
 * Example: MergeUnion<TodoState> will have all properties from all todo states with their correct types
 */
export type MergeUnion<U> = Prettify<UnionToIntersection<U>>

/**
 * Distributes a union type and collects all property keys
 * Example: UnionProperties<TodoState> will have all property keys from all todo states
 */
export type UnionProperties<T> = T extends unknown ? keyof T : never
