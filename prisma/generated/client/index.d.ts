
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model FavFood
 * 
 */
export type FavFood = $Result.DefaultSelection<Prisma.$FavFoodPayload>
/**
 * Model Places
 * 
 */
export type Places = $Result.DefaultSelection<Prisma.$PlacesPayload>
/**
 * Model Special
 * 
 */
export type Special = $Result.DefaultSelection<Prisma.$SpecialPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Userroles: {
  User: 'User',
  Owner: 'Owner',
  Admin: 'Admin'
};

export type Userroles = (typeof Userroles)[keyof typeof Userroles]


export const FoodOrGroc: {
  Food: 'Food',
  Groc: 'Groc',
  Both: 'Both'
};

export type FoodOrGroc = (typeof FoodOrGroc)[keyof typeof FoodOrGroc]

}

export type Userroles = $Enums.Userroles

export const Userroles: typeof $Enums.Userroles

export type FoodOrGroc = $Enums.FoodOrGroc

export const FoodOrGroc: typeof $Enums.FoodOrGroc

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.favFood`: Exposes CRUD operations for the **FavFood** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavFoods
    * const favFoods = await prisma.favFood.findMany()
    * ```
    */
  get favFood(): Prisma.FavFoodDelegate<ExtArgs>;

  /**
   * `prisma.places`: Exposes CRUD operations for the **Places** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Places
    * const places = await prisma.places.findMany()
    * ```
    */
  get places(): Prisma.PlacesDelegate<ExtArgs>;

  /**
   * `prisma.special`: Exposes CRUD operations for the **Special** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Specials
    * const specials = await prisma.special.findMany()
    * ```
    */
  get special(): Prisma.SpecialDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    FavFood: 'FavFood',
    Places: 'Places',
    Special: 'Special'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "favFood" | "places" | "special"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      FavFood: {
        payload: Prisma.$FavFoodPayload<ExtArgs>
        fields: Prisma.FavFoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavFoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavFoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavFoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavFoodPayload>
          }
          findFirst: {
            args: Prisma.FavFoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavFoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavFoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavFoodPayload>
          }
          findMany: {
            args: Prisma.FavFoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavFoodPayload>[]
          }
          create: {
            args: Prisma.FavFoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavFoodPayload>
          }
          createMany: {
            args: Prisma.FavFoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavFoodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavFoodPayload>[]
          }
          delete: {
            args: Prisma.FavFoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavFoodPayload>
          }
          update: {
            args: Prisma.FavFoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavFoodPayload>
          }
          deleteMany: {
            args: Prisma.FavFoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavFoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FavFoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavFoodPayload>
          }
          aggregate: {
            args: Prisma.FavFoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavFood>
          }
          groupBy: {
            args: Prisma.FavFoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavFoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavFoodCountArgs<ExtArgs>
            result: $Utils.Optional<FavFoodCountAggregateOutputType> | number
          }
        }
      }
      Places: {
        payload: Prisma.$PlacesPayload<ExtArgs>
        fields: Prisma.PlacesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlacesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlacesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacesPayload>
          }
          findFirst: {
            args: Prisma.PlacesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlacesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacesPayload>
          }
          findMany: {
            args: Prisma.PlacesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacesPayload>[]
          }
          create: {
            args: Prisma.PlacesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacesPayload>
          }
          createMany: {
            args: Prisma.PlacesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlacesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacesPayload>[]
          }
          delete: {
            args: Prisma.PlacesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacesPayload>
          }
          update: {
            args: Prisma.PlacesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacesPayload>
          }
          deleteMany: {
            args: Prisma.PlacesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlacesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlacesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacesPayload>
          }
          aggregate: {
            args: Prisma.PlacesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaces>
          }
          groupBy: {
            args: Prisma.PlacesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlacesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlacesCountArgs<ExtArgs>
            result: $Utils.Optional<PlacesCountAggregateOutputType> | number
          }
        }
      }
      Special: {
        payload: Prisma.$SpecialPayload<ExtArgs>
        fields: Prisma.SpecialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialPayload>
          }
          findFirst: {
            args: Prisma.SpecialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialPayload>
          }
          findMany: {
            args: Prisma.SpecialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialPayload>[]
          }
          create: {
            args: Prisma.SpecialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialPayload>
          }
          createMany: {
            args: Prisma.SpecialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpecialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialPayload>[]
          }
          delete: {
            args: Prisma.SpecialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialPayload>
          }
          update: {
            args: Prisma.SpecialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialPayload>
          }
          deleteMany: {
            args: Prisma.SpecialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SpecialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialPayload>
          }
          aggregate: {
            args: Prisma.SpecialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecial>
          }
          groupBy: {
            args: Prisma.SpecialGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    favfoods: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favfoods?: boolean | UserCountOutputTypeCountFavfoodsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavfoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavFoodWhereInput
  }


  /**
   * Count Type FavFoodCountOutputType
   */

  export type FavFoodCountOutputType = {
    favtype: number
    favfoodname: number
    favplacename: number
  }

  export type FavFoodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favtype?: boolean | FavFoodCountOutputTypeCountFavtypeArgs
    favfoodname?: boolean | FavFoodCountOutputTypeCountFavfoodnameArgs
    favplacename?: boolean | FavFoodCountOutputTypeCountFavplacenameArgs
  }

  // Custom InputTypes
  /**
   * FavFoodCountOutputType without action
   */
  export type FavFoodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavFoodCountOutputType
     */
    select?: FavFoodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FavFoodCountOutputType without action
   */
  export type FavFoodCountOutputTypeCountFavtypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialWhereInput
  }

  /**
   * FavFoodCountOutputType without action
   */
  export type FavFoodCountOutputTypeCountFavfoodnameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialWhereInput
  }

  /**
   * FavFoodCountOutputType without action
   */
  export type FavFoodCountOutputTypeCountFavplacenameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialWhereInput
  }


  /**
   * Count Type PlacesCountOutputType
   */

  export type PlacesCountOutputType = {
    specialsByName: number
    specialsById: number
  }

  export type PlacesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialsByName?: boolean | PlacesCountOutputTypeCountSpecialsByNameArgs
    specialsById?: boolean | PlacesCountOutputTypeCountSpecialsByIdArgs
  }

  // Custom InputTypes
  /**
   * PlacesCountOutputType without action
   */
  export type PlacesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlacesCountOutputType
     */
    select?: PlacesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlacesCountOutputType without action
   */
  export type PlacesCountOutputTypeCountSpecialsByNameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialWhereInput
  }

  /**
   * PlacesCountOutputType without action
   */
  export type PlacesCountOutputTypeCountSpecialsByIdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialWhereInput
  }


  /**
   * Count Type SpecialCountOutputType
   */

  export type SpecialCountOutputType = {
    favtype: number
    favfoodname: number
    favplacename: number
  }

  export type SpecialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favtype?: boolean | SpecialCountOutputTypeCountFavtypeArgs
    favfoodname?: boolean | SpecialCountOutputTypeCountFavfoodnameArgs
    favplacename?: boolean | SpecialCountOutputTypeCountFavplacenameArgs
  }

  // Custom InputTypes
  /**
   * SpecialCountOutputType without action
   */
  export type SpecialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialCountOutputType
     */
    select?: SpecialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecialCountOutputType without action
   */
  export type SpecialCountOutputTypeCountFavtypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavFoodWhereInput
  }

  /**
   * SpecialCountOutputType without action
   */
  export type SpecialCountOutputTypeCountFavfoodnameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavFoodWhereInput
  }

  /**
   * SpecialCountOutputType without action
   */
  export type SpecialCountOutputTypeCountFavplacenameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavFoodWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    role: $Enums.Userroles | null
    password: string | null
    refreshToken: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    role: $Enums.Userroles | null
    password: string | null
    refreshToken: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    role: number
    password: number
    refreshToken: number
    subscription: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    password?: true
    refreshToken?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    password?: true
    refreshToken?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    password?: true
    refreshToken?: true
    subscription?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    role: $Enums.Userroles
    password: string
    refreshToken: string | null
    subscription: JsonValue | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    refreshToken?: boolean
    subscription?: boolean
    favfoods?: boolean | User$favfoodsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    refreshToken?: boolean
    subscription?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    password?: boolean
    refreshToken?: boolean
    subscription?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favfoods?: boolean | User$favfoodsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      favfoods: Prisma.$FavFoodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      role: $Enums.Userroles
      password: string
      refreshToken: string | null
      subscription: Prisma.JsonValue | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    favfoods<T extends User$favfoodsArgs<ExtArgs> = {}>(args?: Subset<T, User$favfoodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavFoodPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Userroles'>
    readonly password: FieldRef<"User", 'String'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly subscription: FieldRef<"User", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.favfoods
   */
  export type User$favfoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavFood
     */
    select?: FavFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavFoodInclude<ExtArgs> | null
    where?: FavFoodWhereInput
    orderBy?: FavFoodOrderByWithRelationInput | FavFoodOrderByWithRelationInput[]
    cursor?: FavFoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavFoodScalarFieldEnum | FavFoodScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model FavFood
   */

  export type AggregateFavFood = {
    _count: FavFoodCountAggregateOutputType | null
    _avg: FavFoodAvgAggregateOutputType | null
    _sum: FavFoodSumAggregateOutputType | null
    _min: FavFoodMinAggregateOutputType | null
    _max: FavFoodMaxAggregateOutputType | null
  }

  export type FavFoodAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type FavFoodSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type FavFoodMinAggregateOutputType = {
    id: number | null
    type: string | null
    userId: number | null
    place: string | null
    ffoodname: string | null
    fplacename: string | null
    ffoodtype: string | null
    notified: string | null
  }

  export type FavFoodMaxAggregateOutputType = {
    id: number | null
    type: string | null
    userId: number | null
    place: string | null
    ffoodname: string | null
    fplacename: string | null
    ffoodtype: string | null
    notified: string | null
  }

  export type FavFoodCountAggregateOutputType = {
    id: number
    type: number
    userId: number
    place: number
    ffoodname: number
    fplacename: number
    ffoodtype: number
    notified: number
    _all: number
  }


  export type FavFoodAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type FavFoodSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type FavFoodMinAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    place?: true
    ffoodname?: true
    fplacename?: true
    ffoodtype?: true
    notified?: true
  }

  export type FavFoodMaxAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    place?: true
    ffoodname?: true
    fplacename?: true
    ffoodtype?: true
    notified?: true
  }

  export type FavFoodCountAggregateInputType = {
    id?: true
    type?: true
    userId?: true
    place?: true
    ffoodname?: true
    fplacename?: true
    ffoodtype?: true
    notified?: true
    _all?: true
  }

  export type FavFoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavFood to aggregate.
     */
    where?: FavFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavFoods to fetch.
     */
    orderBy?: FavFoodOrderByWithRelationInput | FavFoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavFoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavFoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavFoods
    **/
    _count?: true | FavFoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavFoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavFoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavFoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavFoodMaxAggregateInputType
  }

  export type GetFavFoodAggregateType<T extends FavFoodAggregateArgs> = {
        [P in keyof T & keyof AggregateFavFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavFood[P]>
      : GetScalarType<T[P], AggregateFavFood[P]>
  }




  export type FavFoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavFoodWhereInput
    orderBy?: FavFoodOrderByWithAggregationInput | FavFoodOrderByWithAggregationInput[]
    by: FavFoodScalarFieldEnum[] | FavFoodScalarFieldEnum
    having?: FavFoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavFoodCountAggregateInputType | true
    _avg?: FavFoodAvgAggregateInputType
    _sum?: FavFoodSumAggregateInputType
    _min?: FavFoodMinAggregateInputType
    _max?: FavFoodMaxAggregateInputType
  }

  export type FavFoodGroupByOutputType = {
    id: number
    type: string | null
    userId: number
    place: string | null
    ffoodname: string | null
    fplacename: string | null
    ffoodtype: string | null
    notified: string | null
    _count: FavFoodCountAggregateOutputType | null
    _avg: FavFoodAvgAggregateOutputType | null
    _sum: FavFoodSumAggregateOutputType | null
    _min: FavFoodMinAggregateOutputType | null
    _max: FavFoodMaxAggregateOutputType | null
  }

  type GetFavFoodGroupByPayload<T extends FavFoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavFoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavFoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavFoodGroupByOutputType[P]>
            : GetScalarType<T[P], FavFoodGroupByOutputType[P]>
        }
      >
    >


  export type FavFoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    userId?: boolean
    place?: boolean
    ffoodname?: boolean
    fplacename?: boolean
    ffoodtype?: boolean
    notified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    favtype?: boolean | FavFood$favtypeArgs<ExtArgs>
    favfoodname?: boolean | FavFood$favfoodnameArgs<ExtArgs>
    favplacename?: boolean | FavFood$favplacenameArgs<ExtArgs>
    _count?: boolean | FavFoodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favFood"]>

  export type FavFoodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    userId?: boolean
    place?: boolean
    ffoodname?: boolean
    fplacename?: boolean
    ffoodtype?: boolean
    notified?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favFood"]>

  export type FavFoodSelectScalar = {
    id?: boolean
    type?: boolean
    userId?: boolean
    place?: boolean
    ffoodname?: boolean
    fplacename?: boolean
    ffoodtype?: boolean
    notified?: boolean
  }

  export type FavFoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    favtype?: boolean | FavFood$favtypeArgs<ExtArgs>
    favfoodname?: boolean | FavFood$favfoodnameArgs<ExtArgs>
    favplacename?: boolean | FavFood$favplacenameArgs<ExtArgs>
    _count?: boolean | FavFoodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FavFoodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FavFoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FavFood"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      favtype: Prisma.$SpecialPayload<ExtArgs>[]
      favfoodname: Prisma.$SpecialPayload<ExtArgs>[]
      favplacename: Prisma.$SpecialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string | null
      userId: number
      place: string | null
      ffoodname: string | null
      fplacename: string | null
      ffoodtype: string | null
      notified: string | null
    }, ExtArgs["result"]["favFood"]>
    composites: {}
  }

  type FavFoodGetPayload<S extends boolean | null | undefined | FavFoodDefaultArgs> = $Result.GetResult<Prisma.$FavFoodPayload, S>

  type FavFoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FavFoodFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FavFoodCountAggregateInputType | true
    }

  export interface FavFoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavFood'], meta: { name: 'FavFood' } }
    /**
     * Find zero or one FavFood that matches the filter.
     * @param {FavFoodFindUniqueArgs} args - Arguments to find a FavFood
     * @example
     * // Get one FavFood
     * const favFood = await prisma.favFood.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavFoodFindUniqueArgs>(args: SelectSubset<T, FavFoodFindUniqueArgs<ExtArgs>>): Prisma__FavFoodClient<$Result.GetResult<Prisma.$FavFoodPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FavFood that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FavFoodFindUniqueOrThrowArgs} args - Arguments to find a FavFood
     * @example
     * // Get one FavFood
     * const favFood = await prisma.favFood.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavFoodFindUniqueOrThrowArgs>(args: SelectSubset<T, FavFoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavFoodClient<$Result.GetResult<Prisma.$FavFoodPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FavFood that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavFoodFindFirstArgs} args - Arguments to find a FavFood
     * @example
     * // Get one FavFood
     * const favFood = await prisma.favFood.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavFoodFindFirstArgs>(args?: SelectSubset<T, FavFoodFindFirstArgs<ExtArgs>>): Prisma__FavFoodClient<$Result.GetResult<Prisma.$FavFoodPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FavFood that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavFoodFindFirstOrThrowArgs} args - Arguments to find a FavFood
     * @example
     * // Get one FavFood
     * const favFood = await prisma.favFood.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavFoodFindFirstOrThrowArgs>(args?: SelectSubset<T, FavFoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavFoodClient<$Result.GetResult<Prisma.$FavFoodPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FavFoods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavFoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavFoods
     * const favFoods = await prisma.favFood.findMany()
     * 
     * // Get first 10 FavFoods
     * const favFoods = await prisma.favFood.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favFoodWithIdOnly = await prisma.favFood.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavFoodFindManyArgs>(args?: SelectSubset<T, FavFoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavFoodPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FavFood.
     * @param {FavFoodCreateArgs} args - Arguments to create a FavFood.
     * @example
     * // Create one FavFood
     * const FavFood = await prisma.favFood.create({
     *   data: {
     *     // ... data to create a FavFood
     *   }
     * })
     * 
     */
    create<T extends FavFoodCreateArgs>(args: SelectSubset<T, FavFoodCreateArgs<ExtArgs>>): Prisma__FavFoodClient<$Result.GetResult<Prisma.$FavFoodPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FavFoods.
     * @param {FavFoodCreateManyArgs} args - Arguments to create many FavFoods.
     * @example
     * // Create many FavFoods
     * const favFood = await prisma.favFood.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavFoodCreateManyArgs>(args?: SelectSubset<T, FavFoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FavFoods and returns the data saved in the database.
     * @param {FavFoodCreateManyAndReturnArgs} args - Arguments to create many FavFoods.
     * @example
     * // Create many FavFoods
     * const favFood = await prisma.favFood.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FavFoods and only return the `id`
     * const favFoodWithIdOnly = await prisma.favFood.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavFoodCreateManyAndReturnArgs>(args?: SelectSubset<T, FavFoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavFoodPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FavFood.
     * @param {FavFoodDeleteArgs} args - Arguments to delete one FavFood.
     * @example
     * // Delete one FavFood
     * const FavFood = await prisma.favFood.delete({
     *   where: {
     *     // ... filter to delete one FavFood
     *   }
     * })
     * 
     */
    delete<T extends FavFoodDeleteArgs>(args: SelectSubset<T, FavFoodDeleteArgs<ExtArgs>>): Prisma__FavFoodClient<$Result.GetResult<Prisma.$FavFoodPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FavFood.
     * @param {FavFoodUpdateArgs} args - Arguments to update one FavFood.
     * @example
     * // Update one FavFood
     * const favFood = await prisma.favFood.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavFoodUpdateArgs>(args: SelectSubset<T, FavFoodUpdateArgs<ExtArgs>>): Prisma__FavFoodClient<$Result.GetResult<Prisma.$FavFoodPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FavFoods.
     * @param {FavFoodDeleteManyArgs} args - Arguments to filter FavFoods to delete.
     * @example
     * // Delete a few FavFoods
     * const { count } = await prisma.favFood.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavFoodDeleteManyArgs>(args?: SelectSubset<T, FavFoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavFoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavFoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavFoods
     * const favFood = await prisma.favFood.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavFoodUpdateManyArgs>(args: SelectSubset<T, FavFoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FavFood.
     * @param {FavFoodUpsertArgs} args - Arguments to update or create a FavFood.
     * @example
     * // Update or create a FavFood
     * const favFood = await prisma.favFood.upsert({
     *   create: {
     *     // ... data to create a FavFood
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavFood we want to update
     *   }
     * })
     */
    upsert<T extends FavFoodUpsertArgs>(args: SelectSubset<T, FavFoodUpsertArgs<ExtArgs>>): Prisma__FavFoodClient<$Result.GetResult<Prisma.$FavFoodPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FavFoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavFoodCountArgs} args - Arguments to filter FavFoods to count.
     * @example
     * // Count the number of FavFoods
     * const count = await prisma.favFood.count({
     *   where: {
     *     // ... the filter for the FavFoods we want to count
     *   }
     * })
    **/
    count<T extends FavFoodCountArgs>(
      args?: Subset<T, FavFoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavFoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavFood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavFoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavFoodAggregateArgs>(args: Subset<T, FavFoodAggregateArgs>): Prisma.PrismaPromise<GetFavFoodAggregateType<T>>

    /**
     * Group by FavFood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavFoodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavFoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavFoodGroupByArgs['orderBy'] }
        : { orderBy?: FavFoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavFoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FavFood model
   */
  readonly fields: FavFoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FavFood.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavFoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    favtype<T extends FavFood$favtypeArgs<ExtArgs> = {}>(args?: Subset<T, FavFood$favtypeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialPayload<ExtArgs>, T, "findMany"> | Null>
    favfoodname<T extends FavFood$favfoodnameArgs<ExtArgs> = {}>(args?: Subset<T, FavFood$favfoodnameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialPayload<ExtArgs>, T, "findMany"> | Null>
    favplacename<T extends FavFood$favplacenameArgs<ExtArgs> = {}>(args?: Subset<T, FavFood$favplacenameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FavFood model
   */ 
  interface FavFoodFieldRefs {
    readonly id: FieldRef<"FavFood", 'Int'>
    readonly type: FieldRef<"FavFood", 'String'>
    readonly userId: FieldRef<"FavFood", 'Int'>
    readonly place: FieldRef<"FavFood", 'String'>
    readonly ffoodname: FieldRef<"FavFood", 'String'>
    readonly fplacename: FieldRef<"FavFood", 'String'>
    readonly ffoodtype: FieldRef<"FavFood", 'String'>
    readonly notified: FieldRef<"FavFood", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FavFood findUnique
   */
  export type FavFoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavFood
     */
    select?: FavFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavFoodInclude<ExtArgs> | null
    /**
     * Filter, which FavFood to fetch.
     */
    where: FavFoodWhereUniqueInput
  }

  /**
   * FavFood findUniqueOrThrow
   */
  export type FavFoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavFood
     */
    select?: FavFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavFoodInclude<ExtArgs> | null
    /**
     * Filter, which FavFood to fetch.
     */
    where: FavFoodWhereUniqueInput
  }

  /**
   * FavFood findFirst
   */
  export type FavFoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavFood
     */
    select?: FavFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavFoodInclude<ExtArgs> | null
    /**
     * Filter, which FavFood to fetch.
     */
    where?: FavFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavFoods to fetch.
     */
    orderBy?: FavFoodOrderByWithRelationInput | FavFoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavFoods.
     */
    cursor?: FavFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavFoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavFoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavFoods.
     */
    distinct?: FavFoodScalarFieldEnum | FavFoodScalarFieldEnum[]
  }

  /**
   * FavFood findFirstOrThrow
   */
  export type FavFoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavFood
     */
    select?: FavFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavFoodInclude<ExtArgs> | null
    /**
     * Filter, which FavFood to fetch.
     */
    where?: FavFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavFoods to fetch.
     */
    orderBy?: FavFoodOrderByWithRelationInput | FavFoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavFoods.
     */
    cursor?: FavFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavFoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavFoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavFoods.
     */
    distinct?: FavFoodScalarFieldEnum | FavFoodScalarFieldEnum[]
  }

  /**
   * FavFood findMany
   */
  export type FavFoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavFood
     */
    select?: FavFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavFoodInclude<ExtArgs> | null
    /**
     * Filter, which FavFoods to fetch.
     */
    where?: FavFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavFoods to fetch.
     */
    orderBy?: FavFoodOrderByWithRelationInput | FavFoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavFoods.
     */
    cursor?: FavFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavFoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavFoods.
     */
    skip?: number
    distinct?: FavFoodScalarFieldEnum | FavFoodScalarFieldEnum[]
  }

  /**
   * FavFood create
   */
  export type FavFoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavFood
     */
    select?: FavFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavFoodInclude<ExtArgs> | null
    /**
     * The data needed to create a FavFood.
     */
    data: XOR<FavFoodCreateInput, FavFoodUncheckedCreateInput>
  }

  /**
   * FavFood createMany
   */
  export type FavFoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FavFoods.
     */
    data: FavFoodCreateManyInput | FavFoodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FavFood createManyAndReturn
   */
  export type FavFoodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavFood
     */
    select?: FavFoodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FavFoods.
     */
    data: FavFoodCreateManyInput | FavFoodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavFoodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FavFood update
   */
  export type FavFoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavFood
     */
    select?: FavFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavFoodInclude<ExtArgs> | null
    /**
     * The data needed to update a FavFood.
     */
    data: XOR<FavFoodUpdateInput, FavFoodUncheckedUpdateInput>
    /**
     * Choose, which FavFood to update.
     */
    where: FavFoodWhereUniqueInput
  }

  /**
   * FavFood updateMany
   */
  export type FavFoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavFoods.
     */
    data: XOR<FavFoodUpdateManyMutationInput, FavFoodUncheckedUpdateManyInput>
    /**
     * Filter which FavFoods to update
     */
    where?: FavFoodWhereInput
  }

  /**
   * FavFood upsert
   */
  export type FavFoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavFood
     */
    select?: FavFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavFoodInclude<ExtArgs> | null
    /**
     * The filter to search for the FavFood to update in case it exists.
     */
    where: FavFoodWhereUniqueInput
    /**
     * In case the FavFood found by the `where` argument doesn't exist, create a new FavFood with this data.
     */
    create: XOR<FavFoodCreateInput, FavFoodUncheckedCreateInput>
    /**
     * In case the FavFood was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavFoodUpdateInput, FavFoodUncheckedUpdateInput>
  }

  /**
   * FavFood delete
   */
  export type FavFoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavFood
     */
    select?: FavFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavFoodInclude<ExtArgs> | null
    /**
     * Filter which FavFood to delete.
     */
    where: FavFoodWhereUniqueInput
  }

  /**
   * FavFood deleteMany
   */
  export type FavFoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavFoods to delete
     */
    where?: FavFoodWhereInput
  }

  /**
   * FavFood.favtype
   */
  export type FavFood$favtypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Special
     */
    select?: SpecialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialInclude<ExtArgs> | null
    where?: SpecialWhereInput
    orderBy?: SpecialOrderByWithRelationInput | SpecialOrderByWithRelationInput[]
    cursor?: SpecialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecialScalarFieldEnum | SpecialScalarFieldEnum[]
  }

  /**
   * FavFood.favfoodname
   */
  export type FavFood$favfoodnameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Special
     */
    select?: SpecialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialInclude<ExtArgs> | null
    where?: SpecialWhereInput
    orderBy?: SpecialOrderByWithRelationInput | SpecialOrderByWithRelationInput[]
    cursor?: SpecialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecialScalarFieldEnum | SpecialScalarFieldEnum[]
  }

  /**
   * FavFood.favplacename
   */
  export type FavFood$favplacenameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Special
     */
    select?: SpecialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialInclude<ExtArgs> | null
    where?: SpecialWhereInput
    orderBy?: SpecialOrderByWithRelationInput | SpecialOrderByWithRelationInput[]
    cursor?: SpecialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecialScalarFieldEnum | SpecialScalarFieldEnum[]
  }

  /**
   * FavFood without action
   */
  export type FavFoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavFood
     */
    select?: FavFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavFoodInclude<ExtArgs> | null
  }


  /**
   * Model Places
   */

  export type AggregatePlaces = {
    _count: PlacesCountAggregateOutputType | null
    _avg: PlacesAvgAggregateOutputType | null
    _sum: PlacesSumAggregateOutputType | null
    _min: PlacesMinAggregateOutputType | null
    _max: PlacesMaxAggregateOutputType | null
  }

  export type PlacesAvgAggregateOutputType = {
    id: number | null
  }

  export type PlacesSumAggregateOutputType = {
    id: number | null
  }

  export type PlacesMinAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    type: string | null
    imagepath: string | null
  }

  export type PlacesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    type: string | null
    imagepath: string | null
  }

  export type PlacesCountAggregateOutputType = {
    id: number
    name: number
    location: number
    type: number
    imagepath: number
    _all: number
  }


  export type PlacesAvgAggregateInputType = {
    id?: true
  }

  export type PlacesSumAggregateInputType = {
    id?: true
  }

  export type PlacesMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    type?: true
    imagepath?: true
  }

  export type PlacesMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    type?: true
    imagepath?: true
  }

  export type PlacesCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    type?: true
    imagepath?: true
    _all?: true
  }

  export type PlacesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Places to aggregate.
     */
    where?: PlacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlacesOrderByWithRelationInput | PlacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Places
    **/
    _count?: true | PlacesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlacesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlacesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlacesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlacesMaxAggregateInputType
  }

  export type GetPlacesAggregateType<T extends PlacesAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaces]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaces[P]>
      : GetScalarType<T[P], AggregatePlaces[P]>
  }




  export type PlacesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlacesWhereInput
    orderBy?: PlacesOrderByWithAggregationInput | PlacesOrderByWithAggregationInput[]
    by: PlacesScalarFieldEnum[] | PlacesScalarFieldEnum
    having?: PlacesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlacesCountAggregateInputType | true
    _avg?: PlacesAvgAggregateInputType
    _sum?: PlacesSumAggregateInputType
    _min?: PlacesMinAggregateInputType
    _max?: PlacesMaxAggregateInputType
  }

  export type PlacesGroupByOutputType = {
    id: number
    name: string
    location: string
    type: string
    imagepath: string
    _count: PlacesCountAggregateOutputType | null
    _avg: PlacesAvgAggregateOutputType | null
    _sum: PlacesSumAggregateOutputType | null
    _min: PlacesMinAggregateOutputType | null
    _max: PlacesMaxAggregateOutputType | null
  }

  type GetPlacesGroupByPayload<T extends PlacesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlacesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlacesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlacesGroupByOutputType[P]>
            : GetScalarType<T[P], PlacesGroupByOutputType[P]>
        }
      >
    >


  export type PlacesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    type?: boolean
    imagepath?: boolean
    specialsByName?: boolean | Places$specialsByNameArgs<ExtArgs>
    specialsById?: boolean | Places$specialsByIdArgs<ExtArgs>
    _count?: boolean | PlacesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["places"]>

  export type PlacesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    type?: boolean
    imagepath?: boolean
  }, ExtArgs["result"]["places"]>

  export type PlacesSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    type?: boolean
    imagepath?: boolean
  }

  export type PlacesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialsByName?: boolean | Places$specialsByNameArgs<ExtArgs>
    specialsById?: boolean | Places$specialsByIdArgs<ExtArgs>
    _count?: boolean | PlacesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlacesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlacesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Places"
    objects: {
      specialsByName: Prisma.$SpecialPayload<ExtArgs>[]
      specialsById: Prisma.$SpecialPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      location: string
      type: string
      imagepath: string
    }, ExtArgs["result"]["places"]>
    composites: {}
  }

  type PlacesGetPayload<S extends boolean | null | undefined | PlacesDefaultArgs> = $Result.GetResult<Prisma.$PlacesPayload, S>

  type PlacesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlacesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlacesCountAggregateInputType | true
    }

  export interface PlacesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Places'], meta: { name: 'Places' } }
    /**
     * Find zero or one Places that matches the filter.
     * @param {PlacesFindUniqueArgs} args - Arguments to find a Places
     * @example
     * // Get one Places
     * const places = await prisma.places.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlacesFindUniqueArgs>(args: SelectSubset<T, PlacesFindUniqueArgs<ExtArgs>>): Prisma__PlacesClient<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Places that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlacesFindUniqueOrThrowArgs} args - Arguments to find a Places
     * @example
     * // Get one Places
     * const places = await prisma.places.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlacesFindUniqueOrThrowArgs>(args: SelectSubset<T, PlacesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlacesClient<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Places that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacesFindFirstArgs} args - Arguments to find a Places
     * @example
     * // Get one Places
     * const places = await prisma.places.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlacesFindFirstArgs>(args?: SelectSubset<T, PlacesFindFirstArgs<ExtArgs>>): Prisma__PlacesClient<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Places that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacesFindFirstOrThrowArgs} args - Arguments to find a Places
     * @example
     * // Get one Places
     * const places = await prisma.places.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlacesFindFirstOrThrowArgs>(args?: SelectSubset<T, PlacesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlacesClient<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Places that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Places
     * const places = await prisma.places.findMany()
     * 
     * // Get first 10 Places
     * const places = await prisma.places.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const placesWithIdOnly = await prisma.places.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlacesFindManyArgs>(args?: SelectSubset<T, PlacesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Places.
     * @param {PlacesCreateArgs} args - Arguments to create a Places.
     * @example
     * // Create one Places
     * const Places = await prisma.places.create({
     *   data: {
     *     // ... data to create a Places
     *   }
     * })
     * 
     */
    create<T extends PlacesCreateArgs>(args: SelectSubset<T, PlacesCreateArgs<ExtArgs>>): Prisma__PlacesClient<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Places.
     * @param {PlacesCreateManyArgs} args - Arguments to create many Places.
     * @example
     * // Create many Places
     * const places = await prisma.places.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlacesCreateManyArgs>(args?: SelectSubset<T, PlacesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Places and returns the data saved in the database.
     * @param {PlacesCreateManyAndReturnArgs} args - Arguments to create many Places.
     * @example
     * // Create many Places
     * const places = await prisma.places.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Places and only return the `id`
     * const placesWithIdOnly = await prisma.places.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlacesCreateManyAndReturnArgs>(args?: SelectSubset<T, PlacesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Places.
     * @param {PlacesDeleteArgs} args - Arguments to delete one Places.
     * @example
     * // Delete one Places
     * const Places = await prisma.places.delete({
     *   where: {
     *     // ... filter to delete one Places
     *   }
     * })
     * 
     */
    delete<T extends PlacesDeleteArgs>(args: SelectSubset<T, PlacesDeleteArgs<ExtArgs>>): Prisma__PlacesClient<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Places.
     * @param {PlacesUpdateArgs} args - Arguments to update one Places.
     * @example
     * // Update one Places
     * const places = await prisma.places.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlacesUpdateArgs>(args: SelectSubset<T, PlacesUpdateArgs<ExtArgs>>): Prisma__PlacesClient<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Places.
     * @param {PlacesDeleteManyArgs} args - Arguments to filter Places to delete.
     * @example
     * // Delete a few Places
     * const { count } = await prisma.places.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlacesDeleteManyArgs>(args?: SelectSubset<T, PlacesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Places
     * const places = await prisma.places.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlacesUpdateManyArgs>(args: SelectSubset<T, PlacesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Places.
     * @param {PlacesUpsertArgs} args - Arguments to update or create a Places.
     * @example
     * // Update or create a Places
     * const places = await prisma.places.upsert({
     *   create: {
     *     // ... data to create a Places
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Places we want to update
     *   }
     * })
     */
    upsert<T extends PlacesUpsertArgs>(args: SelectSubset<T, PlacesUpsertArgs<ExtArgs>>): Prisma__PlacesClient<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacesCountArgs} args - Arguments to filter Places to count.
     * @example
     * // Count the number of Places
     * const count = await prisma.places.count({
     *   where: {
     *     // ... the filter for the Places we want to count
     *   }
     * })
    **/
    count<T extends PlacesCountArgs>(
      args?: Subset<T, PlacesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlacesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlacesAggregateArgs>(args: Subset<T, PlacesAggregateArgs>): Prisma.PrismaPromise<GetPlacesAggregateType<T>>

    /**
     * Group by Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlacesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlacesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlacesGroupByArgs['orderBy'] }
        : { orderBy?: PlacesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlacesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlacesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Places model
   */
  readonly fields: PlacesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Places.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlacesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    specialsByName<T extends Places$specialsByNameArgs<ExtArgs> = {}>(args?: Subset<T, Places$specialsByNameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialPayload<ExtArgs>, T, "findMany"> | Null>
    specialsById<T extends Places$specialsByIdArgs<ExtArgs> = {}>(args?: Subset<T, Places$specialsByIdArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Places model
   */ 
  interface PlacesFieldRefs {
    readonly id: FieldRef<"Places", 'Int'>
    readonly name: FieldRef<"Places", 'String'>
    readonly location: FieldRef<"Places", 'String'>
    readonly type: FieldRef<"Places", 'String'>
    readonly imagepath: FieldRef<"Places", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Places findUnique
   */
  export type PlacesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesInclude<ExtArgs> | null
    /**
     * Filter, which Places to fetch.
     */
    where: PlacesWhereUniqueInput
  }

  /**
   * Places findUniqueOrThrow
   */
  export type PlacesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesInclude<ExtArgs> | null
    /**
     * Filter, which Places to fetch.
     */
    where: PlacesWhereUniqueInput
  }

  /**
   * Places findFirst
   */
  export type PlacesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesInclude<ExtArgs> | null
    /**
     * Filter, which Places to fetch.
     */
    where?: PlacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlacesOrderByWithRelationInput | PlacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Places.
     */
    cursor?: PlacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Places.
     */
    distinct?: PlacesScalarFieldEnum | PlacesScalarFieldEnum[]
  }

  /**
   * Places findFirstOrThrow
   */
  export type PlacesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesInclude<ExtArgs> | null
    /**
     * Filter, which Places to fetch.
     */
    where?: PlacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlacesOrderByWithRelationInput | PlacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Places.
     */
    cursor?: PlacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Places.
     */
    distinct?: PlacesScalarFieldEnum | PlacesScalarFieldEnum[]
  }

  /**
   * Places findMany
   */
  export type PlacesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesInclude<ExtArgs> | null
    /**
     * Filter, which Places to fetch.
     */
    where?: PlacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlacesOrderByWithRelationInput | PlacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Places.
     */
    cursor?: PlacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    distinct?: PlacesScalarFieldEnum | PlacesScalarFieldEnum[]
  }

  /**
   * Places create
   */
  export type PlacesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesInclude<ExtArgs> | null
    /**
     * The data needed to create a Places.
     */
    data: XOR<PlacesCreateInput, PlacesUncheckedCreateInput>
  }

  /**
   * Places createMany
   */
  export type PlacesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Places.
     */
    data: PlacesCreateManyInput | PlacesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Places createManyAndReturn
   */
  export type PlacesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Places.
     */
    data: PlacesCreateManyInput | PlacesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Places update
   */
  export type PlacesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesInclude<ExtArgs> | null
    /**
     * The data needed to update a Places.
     */
    data: XOR<PlacesUpdateInput, PlacesUncheckedUpdateInput>
    /**
     * Choose, which Places to update.
     */
    where: PlacesWhereUniqueInput
  }

  /**
   * Places updateMany
   */
  export type PlacesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Places.
     */
    data: XOR<PlacesUpdateManyMutationInput, PlacesUncheckedUpdateManyInput>
    /**
     * Filter which Places to update
     */
    where?: PlacesWhereInput
  }

  /**
   * Places upsert
   */
  export type PlacesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesInclude<ExtArgs> | null
    /**
     * The filter to search for the Places to update in case it exists.
     */
    where: PlacesWhereUniqueInput
    /**
     * In case the Places found by the `where` argument doesn't exist, create a new Places with this data.
     */
    create: XOR<PlacesCreateInput, PlacesUncheckedCreateInput>
    /**
     * In case the Places was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlacesUpdateInput, PlacesUncheckedUpdateInput>
  }

  /**
   * Places delete
   */
  export type PlacesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesInclude<ExtArgs> | null
    /**
     * Filter which Places to delete.
     */
    where: PlacesWhereUniqueInput
  }

  /**
   * Places deleteMany
   */
  export type PlacesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Places to delete
     */
    where?: PlacesWhereInput
  }

  /**
   * Places.specialsByName
   */
  export type Places$specialsByNameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Special
     */
    select?: SpecialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialInclude<ExtArgs> | null
    where?: SpecialWhereInput
    orderBy?: SpecialOrderByWithRelationInput | SpecialOrderByWithRelationInput[]
    cursor?: SpecialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecialScalarFieldEnum | SpecialScalarFieldEnum[]
  }

  /**
   * Places.specialsById
   */
  export type Places$specialsByIdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Special
     */
    select?: SpecialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialInclude<ExtArgs> | null
    where?: SpecialWhereInput
    orderBy?: SpecialOrderByWithRelationInput | SpecialOrderByWithRelationInput[]
    cursor?: SpecialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecialScalarFieldEnum | SpecialScalarFieldEnum[]
  }

  /**
   * Places without action
   */
  export type PlacesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Places
     */
    select?: PlacesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlacesInclude<ExtArgs> | null
  }


  /**
   * Model Special
   */

  export type AggregateSpecial = {
    _count: SpecialCountAggregateOutputType | null
    _avg: SpecialAvgAggregateOutputType | null
    _sum: SpecialSumAggregateOutputType | null
    _min: SpecialMinAggregateOutputType | null
    _max: SpecialMaxAggregateOutputType | null
  }

  export type SpecialAvgAggregateOutputType = {
    id: number | null
    before: number | null
    after: number | null
    placesId: number | null
  }

  export type SpecialSumAggregateOutputType = {
    id: number | null
    before: number | null
    after: number | null
    placesId: number | null
  }

  export type SpecialMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    poster: string | null
    foodorgroc: $Enums.FoodOrGroc | null
    imagepath: string | null
    from: string | null
    till: string | null
    before: number | null
    after: number | null
    placesId: number | null
    PlaceName: string | null
  }

  export type SpecialMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    poster: string | null
    foodorgroc: $Enums.FoodOrGroc | null
    imagepath: string | null
    from: string | null
    till: string | null
    before: number | null
    after: number | null
    placesId: number | null
    PlaceName: string | null
  }

  export type SpecialCountAggregateOutputType = {
    id: number
    name: number
    type: number
    poster: number
    foodorgroc: number
    imagepath: number
    from: number
    till: number
    before: number
    after: number
    placesId: number
    PlaceName: number
    _all: number
  }


  export type SpecialAvgAggregateInputType = {
    id?: true
    before?: true
    after?: true
    placesId?: true
  }

  export type SpecialSumAggregateInputType = {
    id?: true
    before?: true
    after?: true
    placesId?: true
  }

  export type SpecialMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    poster?: true
    foodorgroc?: true
    imagepath?: true
    from?: true
    till?: true
    before?: true
    after?: true
    placesId?: true
    PlaceName?: true
  }

  export type SpecialMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    poster?: true
    foodorgroc?: true
    imagepath?: true
    from?: true
    till?: true
    before?: true
    after?: true
    placesId?: true
    PlaceName?: true
  }

  export type SpecialCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    poster?: true
    foodorgroc?: true
    imagepath?: true
    from?: true
    till?: true
    before?: true
    after?: true
    placesId?: true
    PlaceName?: true
    _all?: true
  }

  export type SpecialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Special to aggregate.
     */
    where?: SpecialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specials to fetch.
     */
    orderBy?: SpecialOrderByWithRelationInput | SpecialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Specials
    **/
    _count?: true | SpecialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialMaxAggregateInputType
  }

  export type GetSpecialAggregateType<T extends SpecialAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecial[P]>
      : GetScalarType<T[P], AggregateSpecial[P]>
  }




  export type SpecialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialWhereInput
    orderBy?: SpecialOrderByWithAggregationInput | SpecialOrderByWithAggregationInput[]
    by: SpecialScalarFieldEnum[] | SpecialScalarFieldEnum
    having?: SpecialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialCountAggregateInputType | true
    _avg?: SpecialAvgAggregateInputType
    _sum?: SpecialSumAggregateInputType
    _min?: SpecialMinAggregateInputType
    _max?: SpecialMaxAggregateInputType
  }

  export type SpecialGroupByOutputType = {
    id: number
    name: string
    type: string
    poster: string
    foodorgroc: $Enums.FoodOrGroc
    imagepath: string
    from: string
    till: string
    before: number
    after: number
    placesId: number
    PlaceName: string
    _count: SpecialCountAggregateOutputType | null
    _avg: SpecialAvgAggregateOutputType | null
    _sum: SpecialSumAggregateOutputType | null
    _min: SpecialMinAggregateOutputType | null
    _max: SpecialMaxAggregateOutputType | null
  }

  type GetSpecialGroupByPayload<T extends SpecialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialGroupByOutputType[P]>
        }
      >
    >


  export type SpecialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    poster?: boolean
    foodorgroc?: boolean
    imagepath?: boolean
    from?: boolean
    till?: boolean
    before?: boolean
    after?: boolean
    placesId?: boolean
    PlaceName?: boolean
    placeNa?: boolean | PlacesDefaultArgs<ExtArgs>
    places?: boolean | PlacesDefaultArgs<ExtArgs>
    favtype?: boolean | Special$favtypeArgs<ExtArgs>
    favfoodname?: boolean | Special$favfoodnameArgs<ExtArgs>
    favplacename?: boolean | Special$favplacenameArgs<ExtArgs>
    _count?: boolean | SpecialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["special"]>

  export type SpecialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    poster?: boolean
    foodorgroc?: boolean
    imagepath?: boolean
    from?: boolean
    till?: boolean
    before?: boolean
    after?: boolean
    placesId?: boolean
    PlaceName?: boolean
    placeNa?: boolean | PlacesDefaultArgs<ExtArgs>
    places?: boolean | PlacesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["special"]>

  export type SpecialSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    poster?: boolean
    foodorgroc?: boolean
    imagepath?: boolean
    from?: boolean
    till?: boolean
    before?: boolean
    after?: boolean
    placesId?: boolean
    PlaceName?: boolean
  }

  export type SpecialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    placeNa?: boolean | PlacesDefaultArgs<ExtArgs>
    places?: boolean | PlacesDefaultArgs<ExtArgs>
    favtype?: boolean | Special$favtypeArgs<ExtArgs>
    favfoodname?: boolean | Special$favfoodnameArgs<ExtArgs>
    favplacename?: boolean | Special$favplacenameArgs<ExtArgs>
    _count?: boolean | SpecialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SpecialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    placeNa?: boolean | PlacesDefaultArgs<ExtArgs>
    places?: boolean | PlacesDefaultArgs<ExtArgs>
  }

  export type $SpecialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Special"
    objects: {
      placeNa: Prisma.$PlacesPayload<ExtArgs>
      places: Prisma.$PlacesPayload<ExtArgs>
      favtype: Prisma.$FavFoodPayload<ExtArgs>[]
      favfoodname: Prisma.$FavFoodPayload<ExtArgs>[]
      favplacename: Prisma.$FavFoodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string
      poster: string
      foodorgroc: $Enums.FoodOrGroc
      imagepath: string
      from: string
      till: string
      before: number
      after: number
      placesId: number
      PlaceName: string
    }, ExtArgs["result"]["special"]>
    composites: {}
  }

  type SpecialGetPayload<S extends boolean | null | undefined | SpecialDefaultArgs> = $Result.GetResult<Prisma.$SpecialPayload, S>

  type SpecialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SpecialFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SpecialCountAggregateInputType | true
    }

  export interface SpecialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Special'], meta: { name: 'Special' } }
    /**
     * Find zero or one Special that matches the filter.
     * @param {SpecialFindUniqueArgs} args - Arguments to find a Special
     * @example
     * // Get one Special
     * const special = await prisma.special.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecialFindUniqueArgs>(args: SelectSubset<T, SpecialFindUniqueArgs<ExtArgs>>): Prisma__SpecialClient<$Result.GetResult<Prisma.$SpecialPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Special that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SpecialFindUniqueOrThrowArgs} args - Arguments to find a Special
     * @example
     * // Get one Special
     * const special = await prisma.special.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecialFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecialClient<$Result.GetResult<Prisma.$SpecialPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Special that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialFindFirstArgs} args - Arguments to find a Special
     * @example
     * // Get one Special
     * const special = await prisma.special.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecialFindFirstArgs>(args?: SelectSubset<T, SpecialFindFirstArgs<ExtArgs>>): Prisma__SpecialClient<$Result.GetResult<Prisma.$SpecialPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Special that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialFindFirstOrThrowArgs} args - Arguments to find a Special
     * @example
     * // Get one Special
     * const special = await prisma.special.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecialFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecialFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecialClient<$Result.GetResult<Prisma.$SpecialPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Specials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Specials
     * const specials = await prisma.special.findMany()
     * 
     * // Get first 10 Specials
     * const specials = await prisma.special.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialWithIdOnly = await prisma.special.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecialFindManyArgs>(args?: SelectSubset<T, SpecialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Special.
     * @param {SpecialCreateArgs} args - Arguments to create a Special.
     * @example
     * // Create one Special
     * const Special = await prisma.special.create({
     *   data: {
     *     // ... data to create a Special
     *   }
     * })
     * 
     */
    create<T extends SpecialCreateArgs>(args: SelectSubset<T, SpecialCreateArgs<ExtArgs>>): Prisma__SpecialClient<$Result.GetResult<Prisma.$SpecialPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Specials.
     * @param {SpecialCreateManyArgs} args - Arguments to create many Specials.
     * @example
     * // Create many Specials
     * const special = await prisma.special.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecialCreateManyArgs>(args?: SelectSubset<T, SpecialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Specials and returns the data saved in the database.
     * @param {SpecialCreateManyAndReturnArgs} args - Arguments to create many Specials.
     * @example
     * // Create many Specials
     * const special = await prisma.special.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Specials and only return the `id`
     * const specialWithIdOnly = await prisma.special.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpecialCreateManyAndReturnArgs>(args?: SelectSubset<T, SpecialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Special.
     * @param {SpecialDeleteArgs} args - Arguments to delete one Special.
     * @example
     * // Delete one Special
     * const Special = await prisma.special.delete({
     *   where: {
     *     // ... filter to delete one Special
     *   }
     * })
     * 
     */
    delete<T extends SpecialDeleteArgs>(args: SelectSubset<T, SpecialDeleteArgs<ExtArgs>>): Prisma__SpecialClient<$Result.GetResult<Prisma.$SpecialPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Special.
     * @param {SpecialUpdateArgs} args - Arguments to update one Special.
     * @example
     * // Update one Special
     * const special = await prisma.special.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecialUpdateArgs>(args: SelectSubset<T, SpecialUpdateArgs<ExtArgs>>): Prisma__SpecialClient<$Result.GetResult<Prisma.$SpecialPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Specials.
     * @param {SpecialDeleteManyArgs} args - Arguments to filter Specials to delete.
     * @example
     * // Delete a few Specials
     * const { count } = await prisma.special.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecialDeleteManyArgs>(args?: SelectSubset<T, SpecialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Specials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Specials
     * const special = await prisma.special.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecialUpdateManyArgs>(args: SelectSubset<T, SpecialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Special.
     * @param {SpecialUpsertArgs} args - Arguments to update or create a Special.
     * @example
     * // Update or create a Special
     * const special = await prisma.special.upsert({
     *   create: {
     *     // ... data to create a Special
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Special we want to update
     *   }
     * })
     */
    upsert<T extends SpecialUpsertArgs>(args: SelectSubset<T, SpecialUpsertArgs<ExtArgs>>): Prisma__SpecialClient<$Result.GetResult<Prisma.$SpecialPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Specials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialCountArgs} args - Arguments to filter Specials to count.
     * @example
     * // Count the number of Specials
     * const count = await prisma.special.count({
     *   where: {
     *     // ... the filter for the Specials we want to count
     *   }
     * })
    **/
    count<T extends SpecialCountArgs>(
      args?: Subset<T, SpecialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Special.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpecialAggregateArgs>(args: Subset<T, SpecialAggregateArgs>): Prisma.PrismaPromise<GetSpecialAggregateType<T>>

    /**
     * Group by Special.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpecialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialGroupByArgs['orderBy'] }
        : { orderBy?: SpecialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpecialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Special model
   */
  readonly fields: SpecialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Special.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    placeNa<T extends PlacesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlacesDefaultArgs<ExtArgs>>): Prisma__PlacesClient<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    places<T extends PlacesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlacesDefaultArgs<ExtArgs>>): Prisma__PlacesClient<$Result.GetResult<Prisma.$PlacesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    favtype<T extends Special$favtypeArgs<ExtArgs> = {}>(args?: Subset<T, Special$favtypeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavFoodPayload<ExtArgs>, T, "findMany"> | Null>
    favfoodname<T extends Special$favfoodnameArgs<ExtArgs> = {}>(args?: Subset<T, Special$favfoodnameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavFoodPayload<ExtArgs>, T, "findMany"> | Null>
    favplacename<T extends Special$favplacenameArgs<ExtArgs> = {}>(args?: Subset<T, Special$favplacenameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavFoodPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Special model
   */ 
  interface SpecialFieldRefs {
    readonly id: FieldRef<"Special", 'Int'>
    readonly name: FieldRef<"Special", 'String'>
    readonly type: FieldRef<"Special", 'String'>
    readonly poster: FieldRef<"Special", 'String'>
    readonly foodorgroc: FieldRef<"Special", 'FoodOrGroc'>
    readonly imagepath: FieldRef<"Special", 'String'>
    readonly from: FieldRef<"Special", 'String'>
    readonly till: FieldRef<"Special", 'String'>
    readonly before: FieldRef<"Special", 'Float'>
    readonly after: FieldRef<"Special", 'Float'>
    readonly placesId: FieldRef<"Special", 'Int'>
    readonly PlaceName: FieldRef<"Special", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Special findUnique
   */
  export type SpecialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Special
     */
    select?: SpecialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialInclude<ExtArgs> | null
    /**
     * Filter, which Special to fetch.
     */
    where: SpecialWhereUniqueInput
  }

  /**
   * Special findUniqueOrThrow
   */
  export type SpecialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Special
     */
    select?: SpecialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialInclude<ExtArgs> | null
    /**
     * Filter, which Special to fetch.
     */
    where: SpecialWhereUniqueInput
  }

  /**
   * Special findFirst
   */
  export type SpecialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Special
     */
    select?: SpecialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialInclude<ExtArgs> | null
    /**
     * Filter, which Special to fetch.
     */
    where?: SpecialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specials to fetch.
     */
    orderBy?: SpecialOrderByWithRelationInput | SpecialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specials.
     */
    cursor?: SpecialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specials.
     */
    distinct?: SpecialScalarFieldEnum | SpecialScalarFieldEnum[]
  }

  /**
   * Special findFirstOrThrow
   */
  export type SpecialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Special
     */
    select?: SpecialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialInclude<ExtArgs> | null
    /**
     * Filter, which Special to fetch.
     */
    where?: SpecialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specials to fetch.
     */
    orderBy?: SpecialOrderByWithRelationInput | SpecialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Specials.
     */
    cursor?: SpecialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Specials.
     */
    distinct?: SpecialScalarFieldEnum | SpecialScalarFieldEnum[]
  }

  /**
   * Special findMany
   */
  export type SpecialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Special
     */
    select?: SpecialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialInclude<ExtArgs> | null
    /**
     * Filter, which Specials to fetch.
     */
    where?: SpecialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Specials to fetch.
     */
    orderBy?: SpecialOrderByWithRelationInput | SpecialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Specials.
     */
    cursor?: SpecialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Specials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Specials.
     */
    skip?: number
    distinct?: SpecialScalarFieldEnum | SpecialScalarFieldEnum[]
  }

  /**
   * Special create
   */
  export type SpecialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Special
     */
    select?: SpecialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialInclude<ExtArgs> | null
    /**
     * The data needed to create a Special.
     */
    data: XOR<SpecialCreateInput, SpecialUncheckedCreateInput>
  }

  /**
   * Special createMany
   */
  export type SpecialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Specials.
     */
    data: SpecialCreateManyInput | SpecialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Special createManyAndReturn
   */
  export type SpecialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Special
     */
    select?: SpecialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Specials.
     */
    data: SpecialCreateManyInput | SpecialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Special update
   */
  export type SpecialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Special
     */
    select?: SpecialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialInclude<ExtArgs> | null
    /**
     * The data needed to update a Special.
     */
    data: XOR<SpecialUpdateInput, SpecialUncheckedUpdateInput>
    /**
     * Choose, which Special to update.
     */
    where: SpecialWhereUniqueInput
  }

  /**
   * Special updateMany
   */
  export type SpecialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Specials.
     */
    data: XOR<SpecialUpdateManyMutationInput, SpecialUncheckedUpdateManyInput>
    /**
     * Filter which Specials to update
     */
    where?: SpecialWhereInput
  }

  /**
   * Special upsert
   */
  export type SpecialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Special
     */
    select?: SpecialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialInclude<ExtArgs> | null
    /**
     * The filter to search for the Special to update in case it exists.
     */
    where: SpecialWhereUniqueInput
    /**
     * In case the Special found by the `where` argument doesn't exist, create a new Special with this data.
     */
    create: XOR<SpecialCreateInput, SpecialUncheckedCreateInput>
    /**
     * In case the Special was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialUpdateInput, SpecialUncheckedUpdateInput>
  }

  /**
   * Special delete
   */
  export type SpecialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Special
     */
    select?: SpecialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialInclude<ExtArgs> | null
    /**
     * Filter which Special to delete.
     */
    where: SpecialWhereUniqueInput
  }

  /**
   * Special deleteMany
   */
  export type SpecialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Specials to delete
     */
    where?: SpecialWhereInput
  }

  /**
   * Special.favtype
   */
  export type Special$favtypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavFood
     */
    select?: FavFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavFoodInclude<ExtArgs> | null
    where?: FavFoodWhereInput
    orderBy?: FavFoodOrderByWithRelationInput | FavFoodOrderByWithRelationInput[]
    cursor?: FavFoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavFoodScalarFieldEnum | FavFoodScalarFieldEnum[]
  }

  /**
   * Special.favfoodname
   */
  export type Special$favfoodnameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavFood
     */
    select?: FavFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavFoodInclude<ExtArgs> | null
    where?: FavFoodWhereInput
    orderBy?: FavFoodOrderByWithRelationInput | FavFoodOrderByWithRelationInput[]
    cursor?: FavFoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavFoodScalarFieldEnum | FavFoodScalarFieldEnum[]
  }

  /**
   * Special.favplacename
   */
  export type Special$favplacenameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavFood
     */
    select?: FavFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavFoodInclude<ExtArgs> | null
    where?: FavFoodWhereInput
    orderBy?: FavFoodOrderByWithRelationInput | FavFoodOrderByWithRelationInput[]
    cursor?: FavFoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavFoodScalarFieldEnum | FavFoodScalarFieldEnum[]
  }

  /**
   * Special without action
   */
  export type SpecialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Special
     */
    select?: SpecialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    role: 'role',
    password: 'password',
    refreshToken: 'refreshToken',
    subscription: 'subscription'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FavFoodScalarFieldEnum: {
    id: 'id',
    type: 'type',
    userId: 'userId',
    place: 'place',
    ffoodname: 'ffoodname',
    fplacename: 'fplacename',
    ffoodtype: 'ffoodtype',
    notified: 'notified'
  };

  export type FavFoodScalarFieldEnum = (typeof FavFoodScalarFieldEnum)[keyof typeof FavFoodScalarFieldEnum]


  export const PlacesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    type: 'type',
    imagepath: 'imagepath'
  };

  export type PlacesScalarFieldEnum = (typeof PlacesScalarFieldEnum)[keyof typeof PlacesScalarFieldEnum]


  export const SpecialScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    poster: 'poster',
    foodorgroc: 'foodorgroc',
    imagepath: 'imagepath',
    from: 'from',
    till: 'till',
    before: 'before',
    after: 'after',
    placesId: 'placesId',
    PlaceName: 'PlaceName'
  };

  export type SpecialScalarFieldEnum = (typeof SpecialScalarFieldEnum)[keyof typeof SpecialScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Userroles'
   */
  export type EnumUserrolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Userroles'>
    


  /**
   * Reference to a field of type 'Userroles[]'
   */
  export type ListEnumUserrolesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Userroles[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'FoodOrGroc'
   */
  export type EnumFoodOrGrocFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FoodOrGroc'>
    


  /**
   * Reference to a field of type 'FoodOrGroc[]'
   */
  export type ListEnumFoodOrGrocFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FoodOrGroc[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    role?: EnumUserrolesFilter<"User"> | $Enums.Userroles
    password?: StringFilter<"User"> | string
    refreshToken?: StringNullableFilter<"User"> | string | null
    subscription?: JsonNullableFilter<"User">
    favfoods?: FavFoodListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    subscription?: SortOrderInput | SortOrder
    favfoods?: FavFoodOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumUserrolesFilter<"User"> | $Enums.Userroles
    password?: StringFilter<"User"> | string
    refreshToken?: StringNullableFilter<"User"> | string | null
    subscription?: JsonNullableFilter<"User">
    favfoods?: FavFoodListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    subscription?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserrolesWithAggregatesFilter<"User"> | $Enums.Userroles
    password?: StringWithAggregatesFilter<"User"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    subscription?: JsonNullableWithAggregatesFilter<"User">
  }

  export type FavFoodWhereInput = {
    AND?: FavFoodWhereInput | FavFoodWhereInput[]
    OR?: FavFoodWhereInput[]
    NOT?: FavFoodWhereInput | FavFoodWhereInput[]
    id?: IntFilter<"FavFood"> | number
    type?: StringNullableFilter<"FavFood"> | string | null
    userId?: IntFilter<"FavFood"> | number
    place?: StringNullableFilter<"FavFood"> | string | null
    ffoodname?: StringNullableFilter<"FavFood"> | string | null
    fplacename?: StringNullableFilter<"FavFood"> | string | null
    ffoodtype?: StringNullableFilter<"FavFood"> | string | null
    notified?: StringNullableFilter<"FavFood"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    favtype?: SpecialListRelationFilter
    favfoodname?: SpecialListRelationFilter
    favplacename?: SpecialListRelationFilter
  }

  export type FavFoodOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    userId?: SortOrder
    place?: SortOrderInput | SortOrder
    ffoodname?: SortOrderInput | SortOrder
    fplacename?: SortOrderInput | SortOrder
    ffoodtype?: SortOrderInput | SortOrder
    notified?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    favtype?: SpecialOrderByRelationAggregateInput
    favfoodname?: SpecialOrderByRelationAggregateInput
    favplacename?: SpecialOrderByRelationAggregateInput
  }

  export type FavFoodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FavFoodWhereInput | FavFoodWhereInput[]
    OR?: FavFoodWhereInput[]
    NOT?: FavFoodWhereInput | FavFoodWhereInput[]
    type?: StringNullableFilter<"FavFood"> | string | null
    userId?: IntFilter<"FavFood"> | number
    place?: StringNullableFilter<"FavFood"> | string | null
    ffoodname?: StringNullableFilter<"FavFood"> | string | null
    fplacename?: StringNullableFilter<"FavFood"> | string | null
    ffoodtype?: StringNullableFilter<"FavFood"> | string | null
    notified?: StringNullableFilter<"FavFood"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    favtype?: SpecialListRelationFilter
    favfoodname?: SpecialListRelationFilter
    favplacename?: SpecialListRelationFilter
  }, "id">

  export type FavFoodOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrderInput | SortOrder
    userId?: SortOrder
    place?: SortOrderInput | SortOrder
    ffoodname?: SortOrderInput | SortOrder
    fplacename?: SortOrderInput | SortOrder
    ffoodtype?: SortOrderInput | SortOrder
    notified?: SortOrderInput | SortOrder
    _count?: FavFoodCountOrderByAggregateInput
    _avg?: FavFoodAvgOrderByAggregateInput
    _max?: FavFoodMaxOrderByAggregateInput
    _min?: FavFoodMinOrderByAggregateInput
    _sum?: FavFoodSumOrderByAggregateInput
  }

  export type FavFoodScalarWhereWithAggregatesInput = {
    AND?: FavFoodScalarWhereWithAggregatesInput | FavFoodScalarWhereWithAggregatesInput[]
    OR?: FavFoodScalarWhereWithAggregatesInput[]
    NOT?: FavFoodScalarWhereWithAggregatesInput | FavFoodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FavFood"> | number
    type?: StringNullableWithAggregatesFilter<"FavFood"> | string | null
    userId?: IntWithAggregatesFilter<"FavFood"> | number
    place?: StringNullableWithAggregatesFilter<"FavFood"> | string | null
    ffoodname?: StringNullableWithAggregatesFilter<"FavFood"> | string | null
    fplacename?: StringNullableWithAggregatesFilter<"FavFood"> | string | null
    ffoodtype?: StringNullableWithAggregatesFilter<"FavFood"> | string | null
    notified?: StringNullableWithAggregatesFilter<"FavFood"> | string | null
  }

  export type PlacesWhereInput = {
    AND?: PlacesWhereInput | PlacesWhereInput[]
    OR?: PlacesWhereInput[]
    NOT?: PlacesWhereInput | PlacesWhereInput[]
    id?: IntFilter<"Places"> | number
    name?: StringFilter<"Places"> | string
    location?: StringFilter<"Places"> | string
    type?: StringFilter<"Places"> | string
    imagepath?: StringFilter<"Places"> | string
    specialsByName?: SpecialListRelationFilter
    specialsById?: SpecialListRelationFilter
  }

  export type PlacesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    type?: SortOrder
    imagepath?: SortOrder
    specialsByName?: SpecialOrderByRelationAggregateInput
    specialsById?: SpecialOrderByRelationAggregateInput
  }

  export type PlacesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PlacesWhereInput | PlacesWhereInput[]
    OR?: PlacesWhereInput[]
    NOT?: PlacesWhereInput | PlacesWhereInput[]
    location?: StringFilter<"Places"> | string
    type?: StringFilter<"Places"> | string
    imagepath?: StringFilter<"Places"> | string
    specialsByName?: SpecialListRelationFilter
    specialsById?: SpecialListRelationFilter
  }, "id" | "name">

  export type PlacesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    type?: SortOrder
    imagepath?: SortOrder
    _count?: PlacesCountOrderByAggregateInput
    _avg?: PlacesAvgOrderByAggregateInput
    _max?: PlacesMaxOrderByAggregateInput
    _min?: PlacesMinOrderByAggregateInput
    _sum?: PlacesSumOrderByAggregateInput
  }

  export type PlacesScalarWhereWithAggregatesInput = {
    AND?: PlacesScalarWhereWithAggregatesInput | PlacesScalarWhereWithAggregatesInput[]
    OR?: PlacesScalarWhereWithAggregatesInput[]
    NOT?: PlacesScalarWhereWithAggregatesInput | PlacesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Places"> | number
    name?: StringWithAggregatesFilter<"Places"> | string
    location?: StringWithAggregatesFilter<"Places"> | string
    type?: StringWithAggregatesFilter<"Places"> | string
    imagepath?: StringWithAggregatesFilter<"Places"> | string
  }

  export type SpecialWhereInput = {
    AND?: SpecialWhereInput | SpecialWhereInput[]
    OR?: SpecialWhereInput[]
    NOT?: SpecialWhereInput | SpecialWhereInput[]
    id?: IntFilter<"Special"> | number
    name?: StringFilter<"Special"> | string
    type?: StringFilter<"Special"> | string
    poster?: StringFilter<"Special"> | string
    foodorgroc?: EnumFoodOrGrocFilter<"Special"> | $Enums.FoodOrGroc
    imagepath?: StringFilter<"Special"> | string
    from?: StringFilter<"Special"> | string
    till?: StringFilter<"Special"> | string
    before?: FloatFilter<"Special"> | number
    after?: FloatFilter<"Special"> | number
    placesId?: IntFilter<"Special"> | number
    PlaceName?: StringFilter<"Special"> | string
    placeNa?: XOR<PlacesRelationFilter, PlacesWhereInput>
    places?: XOR<PlacesRelationFilter, PlacesWhereInput>
    favtype?: FavFoodListRelationFilter
    favfoodname?: FavFoodListRelationFilter
    favplacename?: FavFoodListRelationFilter
  }

  export type SpecialOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    poster?: SortOrder
    foodorgroc?: SortOrder
    imagepath?: SortOrder
    from?: SortOrder
    till?: SortOrder
    before?: SortOrder
    after?: SortOrder
    placesId?: SortOrder
    PlaceName?: SortOrder
    placeNa?: PlacesOrderByWithRelationInput
    places?: PlacesOrderByWithRelationInput
    favtype?: FavFoodOrderByRelationAggregateInput
    favfoodname?: FavFoodOrderByRelationAggregateInput
    favplacename?: FavFoodOrderByRelationAggregateInput
  }

  export type SpecialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SpecialWhereInput | SpecialWhereInput[]
    OR?: SpecialWhereInput[]
    NOT?: SpecialWhereInput | SpecialWhereInput[]
    name?: StringFilter<"Special"> | string
    type?: StringFilter<"Special"> | string
    poster?: StringFilter<"Special"> | string
    foodorgroc?: EnumFoodOrGrocFilter<"Special"> | $Enums.FoodOrGroc
    imagepath?: StringFilter<"Special"> | string
    from?: StringFilter<"Special"> | string
    till?: StringFilter<"Special"> | string
    before?: FloatFilter<"Special"> | number
    after?: FloatFilter<"Special"> | number
    placesId?: IntFilter<"Special"> | number
    PlaceName?: StringFilter<"Special"> | string
    placeNa?: XOR<PlacesRelationFilter, PlacesWhereInput>
    places?: XOR<PlacesRelationFilter, PlacesWhereInput>
    favtype?: FavFoodListRelationFilter
    favfoodname?: FavFoodListRelationFilter
    favplacename?: FavFoodListRelationFilter
  }, "id">

  export type SpecialOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    poster?: SortOrder
    foodorgroc?: SortOrder
    imagepath?: SortOrder
    from?: SortOrder
    till?: SortOrder
    before?: SortOrder
    after?: SortOrder
    placesId?: SortOrder
    PlaceName?: SortOrder
    _count?: SpecialCountOrderByAggregateInput
    _avg?: SpecialAvgOrderByAggregateInput
    _max?: SpecialMaxOrderByAggregateInput
    _min?: SpecialMinOrderByAggregateInput
    _sum?: SpecialSumOrderByAggregateInput
  }

  export type SpecialScalarWhereWithAggregatesInput = {
    AND?: SpecialScalarWhereWithAggregatesInput | SpecialScalarWhereWithAggregatesInput[]
    OR?: SpecialScalarWhereWithAggregatesInput[]
    NOT?: SpecialScalarWhereWithAggregatesInput | SpecialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Special"> | number
    name?: StringWithAggregatesFilter<"Special"> | string
    type?: StringWithAggregatesFilter<"Special"> | string
    poster?: StringWithAggregatesFilter<"Special"> | string
    foodorgroc?: EnumFoodOrGrocWithAggregatesFilter<"Special"> | $Enums.FoodOrGroc
    imagepath?: StringWithAggregatesFilter<"Special"> | string
    from?: StringWithAggregatesFilter<"Special"> | string
    till?: StringWithAggregatesFilter<"Special"> | string
    before?: FloatWithAggregatesFilter<"Special"> | number
    after?: FloatWithAggregatesFilter<"Special"> | number
    placesId?: IntWithAggregatesFilter<"Special"> | number
    PlaceName?: StringWithAggregatesFilter<"Special"> | string
  }

  export type UserCreateInput = {
    name?: string
    email: string
    role?: $Enums.Userroles
    password: string
    refreshToken?: string | null
    subscription?: NullableJsonNullValueInput | InputJsonValue
    favfoods?: FavFoodCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string
    email: string
    role?: $Enums.Userroles
    password: string
    refreshToken?: string | null
    subscription?: NullableJsonNullValueInput | InputJsonValue
    favfoods?: FavFoodUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserrolesFieldUpdateOperationsInput | $Enums.Userroles
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    subscription?: NullableJsonNullValueInput | InputJsonValue
    favfoods?: FavFoodUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserrolesFieldUpdateOperationsInput | $Enums.Userroles
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    subscription?: NullableJsonNullValueInput | InputJsonValue
    favfoods?: FavFoodUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string
    email: string
    role?: $Enums.Userroles
    password: string
    refreshToken?: string | null
    subscription?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserrolesFieldUpdateOperationsInput | $Enums.Userroles
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    subscription?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserrolesFieldUpdateOperationsInput | $Enums.Userroles
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    subscription?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FavFoodCreateInput = {
    type?: string | null
    place?: string | null
    ffoodname?: string | null
    fplacename?: string | null
    ffoodtype?: string | null
    notified?: string | null
    user: UserCreateNestedOneWithoutFavfoodsInput
    favtype?: SpecialCreateNestedManyWithoutFavtypeInput
    favfoodname?: SpecialCreateNestedManyWithoutFavfoodnameInput
    favplacename?: SpecialCreateNestedManyWithoutFavplacenameInput
  }

  export type FavFoodUncheckedCreateInput = {
    id?: number
    type?: string | null
    userId: number
    place?: string | null
    ffoodname?: string | null
    fplacename?: string | null
    ffoodtype?: string | null
    notified?: string | null
    favtype?: SpecialUncheckedCreateNestedManyWithoutFavtypeInput
    favfoodname?: SpecialUncheckedCreateNestedManyWithoutFavfoodnameInput
    favplacename?: SpecialUncheckedCreateNestedManyWithoutFavplacenameInput
  }

  export type FavFoodUpdateInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    place?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodname?: NullableStringFieldUpdateOperationsInput | string | null
    fplacename?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodtype?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutFavfoodsNestedInput
    favtype?: SpecialUpdateManyWithoutFavtypeNestedInput
    favfoodname?: SpecialUpdateManyWithoutFavfoodnameNestedInput
    favplacename?: SpecialUpdateManyWithoutFavplacenameNestedInput
  }

  export type FavFoodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    place?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodname?: NullableStringFieldUpdateOperationsInput | string | null
    fplacename?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodtype?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: NullableStringFieldUpdateOperationsInput | string | null
    favtype?: SpecialUncheckedUpdateManyWithoutFavtypeNestedInput
    favfoodname?: SpecialUncheckedUpdateManyWithoutFavfoodnameNestedInput
    favplacename?: SpecialUncheckedUpdateManyWithoutFavplacenameNestedInput
  }

  export type FavFoodCreateManyInput = {
    id?: number
    type?: string | null
    userId: number
    place?: string | null
    ffoodname?: string | null
    fplacename?: string | null
    ffoodtype?: string | null
    notified?: string | null
  }

  export type FavFoodUpdateManyMutationInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    place?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodname?: NullableStringFieldUpdateOperationsInput | string | null
    fplacename?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodtype?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavFoodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    place?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodname?: NullableStringFieldUpdateOperationsInput | string | null
    fplacename?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodtype?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlacesCreateInput = {
    name: string
    location: string
    type: string
    imagepath: string
    specialsByName?: SpecialCreateNestedManyWithoutPlaceNaInput
    specialsById?: SpecialCreateNestedManyWithoutPlacesInput
  }

  export type PlacesUncheckedCreateInput = {
    id?: number
    name: string
    location: string
    type: string
    imagepath: string
    specialsByName?: SpecialUncheckedCreateNestedManyWithoutPlaceNaInput
    specialsById?: SpecialUncheckedCreateNestedManyWithoutPlacesInput
  }

  export type PlacesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    imagepath?: StringFieldUpdateOperationsInput | string
    specialsByName?: SpecialUpdateManyWithoutPlaceNaNestedInput
    specialsById?: SpecialUpdateManyWithoutPlacesNestedInput
  }

  export type PlacesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    imagepath?: StringFieldUpdateOperationsInput | string
    specialsByName?: SpecialUncheckedUpdateManyWithoutPlaceNaNestedInput
    specialsById?: SpecialUncheckedUpdateManyWithoutPlacesNestedInput
  }

  export type PlacesCreateManyInput = {
    id?: number
    name: string
    location: string
    type: string
    imagepath: string
  }

  export type PlacesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    imagepath?: StringFieldUpdateOperationsInput | string
  }

  export type PlacesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    imagepath?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialCreateInput = {
    name: string
    type: string
    poster?: string
    foodorgroc: $Enums.FoodOrGroc
    imagepath: string
    from: string
    till: string
    before: number
    after: number
    placeNa: PlacesCreateNestedOneWithoutSpecialsByNameInput
    places: PlacesCreateNestedOneWithoutSpecialsByIdInput
    favtype?: FavFoodCreateNestedManyWithoutFavtypeInput
    favfoodname?: FavFoodCreateNestedManyWithoutFavfoodnameInput
    favplacename?: FavFoodCreateNestedManyWithoutFavplacenameInput
  }

  export type SpecialUncheckedCreateInput = {
    id?: number
    name: string
    type: string
    poster?: string
    foodorgroc: $Enums.FoodOrGroc
    imagepath: string
    from: string
    till: string
    before: number
    after: number
    placesId: number
    PlaceName: string
    favtype?: FavFoodUncheckedCreateNestedManyWithoutFavtypeInput
    favfoodname?: FavFoodUncheckedCreateNestedManyWithoutFavfoodnameInput
    favplacename?: FavFoodUncheckedCreateNestedManyWithoutFavplacenameInput
  }

  export type SpecialUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    foodorgroc?: EnumFoodOrGrocFieldUpdateOperationsInput | $Enums.FoodOrGroc
    imagepath?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    till?: StringFieldUpdateOperationsInput | string
    before?: FloatFieldUpdateOperationsInput | number
    after?: FloatFieldUpdateOperationsInput | number
    placeNa?: PlacesUpdateOneRequiredWithoutSpecialsByNameNestedInput
    places?: PlacesUpdateOneRequiredWithoutSpecialsByIdNestedInput
    favtype?: FavFoodUpdateManyWithoutFavtypeNestedInput
    favfoodname?: FavFoodUpdateManyWithoutFavfoodnameNestedInput
    favplacename?: FavFoodUpdateManyWithoutFavplacenameNestedInput
  }

  export type SpecialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    foodorgroc?: EnumFoodOrGrocFieldUpdateOperationsInput | $Enums.FoodOrGroc
    imagepath?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    till?: StringFieldUpdateOperationsInput | string
    before?: FloatFieldUpdateOperationsInput | number
    after?: FloatFieldUpdateOperationsInput | number
    placesId?: IntFieldUpdateOperationsInput | number
    PlaceName?: StringFieldUpdateOperationsInput | string
    favtype?: FavFoodUncheckedUpdateManyWithoutFavtypeNestedInput
    favfoodname?: FavFoodUncheckedUpdateManyWithoutFavfoodnameNestedInput
    favplacename?: FavFoodUncheckedUpdateManyWithoutFavplacenameNestedInput
  }

  export type SpecialCreateManyInput = {
    id?: number
    name: string
    type: string
    poster?: string
    foodorgroc: $Enums.FoodOrGroc
    imagepath: string
    from: string
    till: string
    before: number
    after: number
    placesId: number
    PlaceName: string
  }

  export type SpecialUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    foodorgroc?: EnumFoodOrGrocFieldUpdateOperationsInput | $Enums.FoodOrGroc
    imagepath?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    till?: StringFieldUpdateOperationsInput | string
    before?: FloatFieldUpdateOperationsInput | number
    after?: FloatFieldUpdateOperationsInput | number
  }

  export type SpecialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    foodorgroc?: EnumFoodOrGrocFieldUpdateOperationsInput | $Enums.FoodOrGroc
    imagepath?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    till?: StringFieldUpdateOperationsInput | string
    before?: FloatFieldUpdateOperationsInput | number
    after?: FloatFieldUpdateOperationsInput | number
    placesId?: IntFieldUpdateOperationsInput | number
    PlaceName?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserrolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Userroles | EnumUserrolesFieldRefInput<$PrismaModel>
    in?: $Enums.Userroles[] | ListEnumUserrolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Userroles[] | ListEnumUserrolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserrolesFilter<$PrismaModel> | $Enums.Userroles
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FavFoodListRelationFilter = {
    every?: FavFoodWhereInput
    some?: FavFoodWhereInput
    none?: FavFoodWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FavFoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    subscription?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserrolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Userroles | EnumUserrolesFieldRefInput<$PrismaModel>
    in?: $Enums.Userroles[] | ListEnumUserrolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Userroles[] | ListEnumUserrolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserrolesWithAggregatesFilter<$PrismaModel> | $Enums.Userroles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserrolesFilter<$PrismaModel>
    _max?: NestedEnumUserrolesFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SpecialListRelationFilter = {
    every?: SpecialWhereInput
    some?: SpecialWhereInput
    none?: SpecialWhereInput
  }

  export type SpecialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavFoodCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    place?: SortOrder
    ffoodname?: SortOrder
    fplacename?: SortOrder
    ffoodtype?: SortOrder
    notified?: SortOrder
  }

  export type FavFoodAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FavFoodMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    place?: SortOrder
    ffoodname?: SortOrder
    fplacename?: SortOrder
    ffoodtype?: SortOrder
    notified?: SortOrder
  }

  export type FavFoodMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    userId?: SortOrder
    place?: SortOrder
    ffoodname?: SortOrder
    fplacename?: SortOrder
    ffoodtype?: SortOrder
    notified?: SortOrder
  }

  export type FavFoodSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PlacesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    type?: SortOrder
    imagepath?: SortOrder
  }

  export type PlacesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlacesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    type?: SortOrder
    imagepath?: SortOrder
  }

  export type PlacesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    type?: SortOrder
    imagepath?: SortOrder
  }

  export type PlacesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumFoodOrGrocFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodOrGroc | EnumFoodOrGrocFieldRefInput<$PrismaModel>
    in?: $Enums.FoodOrGroc[] | ListEnumFoodOrGrocFieldRefInput<$PrismaModel>
    notIn?: $Enums.FoodOrGroc[] | ListEnumFoodOrGrocFieldRefInput<$PrismaModel>
    not?: NestedEnumFoodOrGrocFilter<$PrismaModel> | $Enums.FoodOrGroc
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PlacesRelationFilter = {
    is?: PlacesWhereInput
    isNot?: PlacesWhereInput
  }

  export type SpecialCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    poster?: SortOrder
    foodorgroc?: SortOrder
    imagepath?: SortOrder
    from?: SortOrder
    till?: SortOrder
    before?: SortOrder
    after?: SortOrder
    placesId?: SortOrder
    PlaceName?: SortOrder
  }

  export type SpecialAvgOrderByAggregateInput = {
    id?: SortOrder
    before?: SortOrder
    after?: SortOrder
    placesId?: SortOrder
  }

  export type SpecialMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    poster?: SortOrder
    foodorgroc?: SortOrder
    imagepath?: SortOrder
    from?: SortOrder
    till?: SortOrder
    before?: SortOrder
    after?: SortOrder
    placesId?: SortOrder
    PlaceName?: SortOrder
  }

  export type SpecialMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    poster?: SortOrder
    foodorgroc?: SortOrder
    imagepath?: SortOrder
    from?: SortOrder
    till?: SortOrder
    before?: SortOrder
    after?: SortOrder
    placesId?: SortOrder
    PlaceName?: SortOrder
  }

  export type SpecialSumOrderByAggregateInput = {
    id?: SortOrder
    before?: SortOrder
    after?: SortOrder
    placesId?: SortOrder
  }

  export type EnumFoodOrGrocWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodOrGroc | EnumFoodOrGrocFieldRefInput<$PrismaModel>
    in?: $Enums.FoodOrGroc[] | ListEnumFoodOrGrocFieldRefInput<$PrismaModel>
    notIn?: $Enums.FoodOrGroc[] | ListEnumFoodOrGrocFieldRefInput<$PrismaModel>
    not?: NestedEnumFoodOrGrocWithAggregatesFilter<$PrismaModel> | $Enums.FoodOrGroc
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFoodOrGrocFilter<$PrismaModel>
    _max?: NestedEnumFoodOrGrocFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FavFoodCreateNestedManyWithoutUserInput = {
    create?: XOR<FavFoodCreateWithoutUserInput, FavFoodUncheckedCreateWithoutUserInput> | FavFoodCreateWithoutUserInput[] | FavFoodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavFoodCreateOrConnectWithoutUserInput | FavFoodCreateOrConnectWithoutUserInput[]
    createMany?: FavFoodCreateManyUserInputEnvelope
    connect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
  }

  export type FavFoodUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavFoodCreateWithoutUserInput, FavFoodUncheckedCreateWithoutUserInput> | FavFoodCreateWithoutUserInput[] | FavFoodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavFoodCreateOrConnectWithoutUserInput | FavFoodCreateOrConnectWithoutUserInput[]
    createMany?: FavFoodCreateManyUserInputEnvelope
    connect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserrolesFieldUpdateOperationsInput = {
    set?: $Enums.Userroles
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FavFoodUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavFoodCreateWithoutUserInput, FavFoodUncheckedCreateWithoutUserInput> | FavFoodCreateWithoutUserInput[] | FavFoodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavFoodCreateOrConnectWithoutUserInput | FavFoodCreateOrConnectWithoutUserInput[]
    upsert?: FavFoodUpsertWithWhereUniqueWithoutUserInput | FavFoodUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavFoodCreateManyUserInputEnvelope
    set?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    disconnect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    delete?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    connect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    update?: FavFoodUpdateWithWhereUniqueWithoutUserInput | FavFoodUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavFoodUpdateManyWithWhereWithoutUserInput | FavFoodUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavFoodScalarWhereInput | FavFoodScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FavFoodUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavFoodCreateWithoutUserInput, FavFoodUncheckedCreateWithoutUserInput> | FavFoodCreateWithoutUserInput[] | FavFoodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavFoodCreateOrConnectWithoutUserInput | FavFoodCreateOrConnectWithoutUserInput[]
    upsert?: FavFoodUpsertWithWhereUniqueWithoutUserInput | FavFoodUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavFoodCreateManyUserInputEnvelope
    set?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    disconnect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    delete?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    connect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    update?: FavFoodUpdateWithWhereUniqueWithoutUserInput | FavFoodUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavFoodUpdateManyWithWhereWithoutUserInput | FavFoodUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavFoodScalarWhereInput | FavFoodScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFavfoodsInput = {
    create?: XOR<UserCreateWithoutFavfoodsInput, UserUncheckedCreateWithoutFavfoodsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavfoodsInput
    connect?: UserWhereUniqueInput
  }

  export type SpecialCreateNestedManyWithoutFavtypeInput = {
    create?: XOR<SpecialCreateWithoutFavtypeInput, SpecialUncheckedCreateWithoutFavtypeInput> | SpecialCreateWithoutFavtypeInput[] | SpecialUncheckedCreateWithoutFavtypeInput[]
    connectOrCreate?: SpecialCreateOrConnectWithoutFavtypeInput | SpecialCreateOrConnectWithoutFavtypeInput[]
    connect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
  }

  export type SpecialCreateNestedManyWithoutFavfoodnameInput = {
    create?: XOR<SpecialCreateWithoutFavfoodnameInput, SpecialUncheckedCreateWithoutFavfoodnameInput> | SpecialCreateWithoutFavfoodnameInput[] | SpecialUncheckedCreateWithoutFavfoodnameInput[]
    connectOrCreate?: SpecialCreateOrConnectWithoutFavfoodnameInput | SpecialCreateOrConnectWithoutFavfoodnameInput[]
    connect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
  }

  export type SpecialCreateNestedManyWithoutFavplacenameInput = {
    create?: XOR<SpecialCreateWithoutFavplacenameInput, SpecialUncheckedCreateWithoutFavplacenameInput> | SpecialCreateWithoutFavplacenameInput[] | SpecialUncheckedCreateWithoutFavplacenameInput[]
    connectOrCreate?: SpecialCreateOrConnectWithoutFavplacenameInput | SpecialCreateOrConnectWithoutFavplacenameInput[]
    connect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
  }

  export type SpecialUncheckedCreateNestedManyWithoutFavtypeInput = {
    create?: XOR<SpecialCreateWithoutFavtypeInput, SpecialUncheckedCreateWithoutFavtypeInput> | SpecialCreateWithoutFavtypeInput[] | SpecialUncheckedCreateWithoutFavtypeInput[]
    connectOrCreate?: SpecialCreateOrConnectWithoutFavtypeInput | SpecialCreateOrConnectWithoutFavtypeInput[]
    connect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
  }

  export type SpecialUncheckedCreateNestedManyWithoutFavfoodnameInput = {
    create?: XOR<SpecialCreateWithoutFavfoodnameInput, SpecialUncheckedCreateWithoutFavfoodnameInput> | SpecialCreateWithoutFavfoodnameInput[] | SpecialUncheckedCreateWithoutFavfoodnameInput[]
    connectOrCreate?: SpecialCreateOrConnectWithoutFavfoodnameInput | SpecialCreateOrConnectWithoutFavfoodnameInput[]
    connect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
  }

  export type SpecialUncheckedCreateNestedManyWithoutFavplacenameInput = {
    create?: XOR<SpecialCreateWithoutFavplacenameInput, SpecialUncheckedCreateWithoutFavplacenameInput> | SpecialCreateWithoutFavplacenameInput[] | SpecialUncheckedCreateWithoutFavplacenameInput[]
    connectOrCreate?: SpecialCreateOrConnectWithoutFavplacenameInput | SpecialCreateOrConnectWithoutFavplacenameInput[]
    connect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutFavfoodsNestedInput = {
    create?: XOR<UserCreateWithoutFavfoodsInput, UserUncheckedCreateWithoutFavfoodsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavfoodsInput
    upsert?: UserUpsertWithoutFavfoodsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavfoodsInput, UserUpdateWithoutFavfoodsInput>, UserUncheckedUpdateWithoutFavfoodsInput>
  }

  export type SpecialUpdateManyWithoutFavtypeNestedInput = {
    create?: XOR<SpecialCreateWithoutFavtypeInput, SpecialUncheckedCreateWithoutFavtypeInput> | SpecialCreateWithoutFavtypeInput[] | SpecialUncheckedCreateWithoutFavtypeInput[]
    connectOrCreate?: SpecialCreateOrConnectWithoutFavtypeInput | SpecialCreateOrConnectWithoutFavtypeInput[]
    upsert?: SpecialUpsertWithWhereUniqueWithoutFavtypeInput | SpecialUpsertWithWhereUniqueWithoutFavtypeInput[]
    set?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    disconnect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    delete?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    connect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    update?: SpecialUpdateWithWhereUniqueWithoutFavtypeInput | SpecialUpdateWithWhereUniqueWithoutFavtypeInput[]
    updateMany?: SpecialUpdateManyWithWhereWithoutFavtypeInput | SpecialUpdateManyWithWhereWithoutFavtypeInput[]
    deleteMany?: SpecialScalarWhereInput | SpecialScalarWhereInput[]
  }

  export type SpecialUpdateManyWithoutFavfoodnameNestedInput = {
    create?: XOR<SpecialCreateWithoutFavfoodnameInput, SpecialUncheckedCreateWithoutFavfoodnameInput> | SpecialCreateWithoutFavfoodnameInput[] | SpecialUncheckedCreateWithoutFavfoodnameInput[]
    connectOrCreate?: SpecialCreateOrConnectWithoutFavfoodnameInput | SpecialCreateOrConnectWithoutFavfoodnameInput[]
    upsert?: SpecialUpsertWithWhereUniqueWithoutFavfoodnameInput | SpecialUpsertWithWhereUniqueWithoutFavfoodnameInput[]
    set?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    disconnect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    delete?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    connect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    update?: SpecialUpdateWithWhereUniqueWithoutFavfoodnameInput | SpecialUpdateWithWhereUniqueWithoutFavfoodnameInput[]
    updateMany?: SpecialUpdateManyWithWhereWithoutFavfoodnameInput | SpecialUpdateManyWithWhereWithoutFavfoodnameInput[]
    deleteMany?: SpecialScalarWhereInput | SpecialScalarWhereInput[]
  }

  export type SpecialUpdateManyWithoutFavplacenameNestedInput = {
    create?: XOR<SpecialCreateWithoutFavplacenameInput, SpecialUncheckedCreateWithoutFavplacenameInput> | SpecialCreateWithoutFavplacenameInput[] | SpecialUncheckedCreateWithoutFavplacenameInput[]
    connectOrCreate?: SpecialCreateOrConnectWithoutFavplacenameInput | SpecialCreateOrConnectWithoutFavplacenameInput[]
    upsert?: SpecialUpsertWithWhereUniqueWithoutFavplacenameInput | SpecialUpsertWithWhereUniqueWithoutFavplacenameInput[]
    set?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    disconnect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    delete?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    connect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    update?: SpecialUpdateWithWhereUniqueWithoutFavplacenameInput | SpecialUpdateWithWhereUniqueWithoutFavplacenameInput[]
    updateMany?: SpecialUpdateManyWithWhereWithoutFavplacenameInput | SpecialUpdateManyWithWhereWithoutFavplacenameInput[]
    deleteMany?: SpecialScalarWhereInput | SpecialScalarWhereInput[]
  }

  export type SpecialUncheckedUpdateManyWithoutFavtypeNestedInput = {
    create?: XOR<SpecialCreateWithoutFavtypeInput, SpecialUncheckedCreateWithoutFavtypeInput> | SpecialCreateWithoutFavtypeInput[] | SpecialUncheckedCreateWithoutFavtypeInput[]
    connectOrCreate?: SpecialCreateOrConnectWithoutFavtypeInput | SpecialCreateOrConnectWithoutFavtypeInput[]
    upsert?: SpecialUpsertWithWhereUniqueWithoutFavtypeInput | SpecialUpsertWithWhereUniqueWithoutFavtypeInput[]
    set?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    disconnect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    delete?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    connect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    update?: SpecialUpdateWithWhereUniqueWithoutFavtypeInput | SpecialUpdateWithWhereUniqueWithoutFavtypeInput[]
    updateMany?: SpecialUpdateManyWithWhereWithoutFavtypeInput | SpecialUpdateManyWithWhereWithoutFavtypeInput[]
    deleteMany?: SpecialScalarWhereInput | SpecialScalarWhereInput[]
  }

  export type SpecialUncheckedUpdateManyWithoutFavfoodnameNestedInput = {
    create?: XOR<SpecialCreateWithoutFavfoodnameInput, SpecialUncheckedCreateWithoutFavfoodnameInput> | SpecialCreateWithoutFavfoodnameInput[] | SpecialUncheckedCreateWithoutFavfoodnameInput[]
    connectOrCreate?: SpecialCreateOrConnectWithoutFavfoodnameInput | SpecialCreateOrConnectWithoutFavfoodnameInput[]
    upsert?: SpecialUpsertWithWhereUniqueWithoutFavfoodnameInput | SpecialUpsertWithWhereUniqueWithoutFavfoodnameInput[]
    set?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    disconnect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    delete?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    connect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    update?: SpecialUpdateWithWhereUniqueWithoutFavfoodnameInput | SpecialUpdateWithWhereUniqueWithoutFavfoodnameInput[]
    updateMany?: SpecialUpdateManyWithWhereWithoutFavfoodnameInput | SpecialUpdateManyWithWhereWithoutFavfoodnameInput[]
    deleteMany?: SpecialScalarWhereInput | SpecialScalarWhereInput[]
  }

  export type SpecialUncheckedUpdateManyWithoutFavplacenameNestedInput = {
    create?: XOR<SpecialCreateWithoutFavplacenameInput, SpecialUncheckedCreateWithoutFavplacenameInput> | SpecialCreateWithoutFavplacenameInput[] | SpecialUncheckedCreateWithoutFavplacenameInput[]
    connectOrCreate?: SpecialCreateOrConnectWithoutFavplacenameInput | SpecialCreateOrConnectWithoutFavplacenameInput[]
    upsert?: SpecialUpsertWithWhereUniqueWithoutFavplacenameInput | SpecialUpsertWithWhereUniqueWithoutFavplacenameInput[]
    set?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    disconnect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    delete?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    connect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    update?: SpecialUpdateWithWhereUniqueWithoutFavplacenameInput | SpecialUpdateWithWhereUniqueWithoutFavplacenameInput[]
    updateMany?: SpecialUpdateManyWithWhereWithoutFavplacenameInput | SpecialUpdateManyWithWhereWithoutFavplacenameInput[]
    deleteMany?: SpecialScalarWhereInput | SpecialScalarWhereInput[]
  }

  export type SpecialCreateNestedManyWithoutPlaceNaInput = {
    create?: XOR<SpecialCreateWithoutPlaceNaInput, SpecialUncheckedCreateWithoutPlaceNaInput> | SpecialCreateWithoutPlaceNaInput[] | SpecialUncheckedCreateWithoutPlaceNaInput[]
    connectOrCreate?: SpecialCreateOrConnectWithoutPlaceNaInput | SpecialCreateOrConnectWithoutPlaceNaInput[]
    createMany?: SpecialCreateManyPlaceNaInputEnvelope
    connect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
  }

  export type SpecialCreateNestedManyWithoutPlacesInput = {
    create?: XOR<SpecialCreateWithoutPlacesInput, SpecialUncheckedCreateWithoutPlacesInput> | SpecialCreateWithoutPlacesInput[] | SpecialUncheckedCreateWithoutPlacesInput[]
    connectOrCreate?: SpecialCreateOrConnectWithoutPlacesInput | SpecialCreateOrConnectWithoutPlacesInput[]
    createMany?: SpecialCreateManyPlacesInputEnvelope
    connect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
  }

  export type SpecialUncheckedCreateNestedManyWithoutPlaceNaInput = {
    create?: XOR<SpecialCreateWithoutPlaceNaInput, SpecialUncheckedCreateWithoutPlaceNaInput> | SpecialCreateWithoutPlaceNaInput[] | SpecialUncheckedCreateWithoutPlaceNaInput[]
    connectOrCreate?: SpecialCreateOrConnectWithoutPlaceNaInput | SpecialCreateOrConnectWithoutPlaceNaInput[]
    createMany?: SpecialCreateManyPlaceNaInputEnvelope
    connect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
  }

  export type SpecialUncheckedCreateNestedManyWithoutPlacesInput = {
    create?: XOR<SpecialCreateWithoutPlacesInput, SpecialUncheckedCreateWithoutPlacesInput> | SpecialCreateWithoutPlacesInput[] | SpecialUncheckedCreateWithoutPlacesInput[]
    connectOrCreate?: SpecialCreateOrConnectWithoutPlacesInput | SpecialCreateOrConnectWithoutPlacesInput[]
    createMany?: SpecialCreateManyPlacesInputEnvelope
    connect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
  }

  export type SpecialUpdateManyWithoutPlaceNaNestedInput = {
    create?: XOR<SpecialCreateWithoutPlaceNaInput, SpecialUncheckedCreateWithoutPlaceNaInput> | SpecialCreateWithoutPlaceNaInput[] | SpecialUncheckedCreateWithoutPlaceNaInput[]
    connectOrCreate?: SpecialCreateOrConnectWithoutPlaceNaInput | SpecialCreateOrConnectWithoutPlaceNaInput[]
    upsert?: SpecialUpsertWithWhereUniqueWithoutPlaceNaInput | SpecialUpsertWithWhereUniqueWithoutPlaceNaInput[]
    createMany?: SpecialCreateManyPlaceNaInputEnvelope
    set?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    disconnect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    delete?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    connect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    update?: SpecialUpdateWithWhereUniqueWithoutPlaceNaInput | SpecialUpdateWithWhereUniqueWithoutPlaceNaInput[]
    updateMany?: SpecialUpdateManyWithWhereWithoutPlaceNaInput | SpecialUpdateManyWithWhereWithoutPlaceNaInput[]
    deleteMany?: SpecialScalarWhereInput | SpecialScalarWhereInput[]
  }

  export type SpecialUpdateManyWithoutPlacesNestedInput = {
    create?: XOR<SpecialCreateWithoutPlacesInput, SpecialUncheckedCreateWithoutPlacesInput> | SpecialCreateWithoutPlacesInput[] | SpecialUncheckedCreateWithoutPlacesInput[]
    connectOrCreate?: SpecialCreateOrConnectWithoutPlacesInput | SpecialCreateOrConnectWithoutPlacesInput[]
    upsert?: SpecialUpsertWithWhereUniqueWithoutPlacesInput | SpecialUpsertWithWhereUniqueWithoutPlacesInput[]
    createMany?: SpecialCreateManyPlacesInputEnvelope
    set?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    disconnect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    delete?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    connect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    update?: SpecialUpdateWithWhereUniqueWithoutPlacesInput | SpecialUpdateWithWhereUniqueWithoutPlacesInput[]
    updateMany?: SpecialUpdateManyWithWhereWithoutPlacesInput | SpecialUpdateManyWithWhereWithoutPlacesInput[]
    deleteMany?: SpecialScalarWhereInput | SpecialScalarWhereInput[]
  }

  export type SpecialUncheckedUpdateManyWithoutPlaceNaNestedInput = {
    create?: XOR<SpecialCreateWithoutPlaceNaInput, SpecialUncheckedCreateWithoutPlaceNaInput> | SpecialCreateWithoutPlaceNaInput[] | SpecialUncheckedCreateWithoutPlaceNaInput[]
    connectOrCreate?: SpecialCreateOrConnectWithoutPlaceNaInput | SpecialCreateOrConnectWithoutPlaceNaInput[]
    upsert?: SpecialUpsertWithWhereUniqueWithoutPlaceNaInput | SpecialUpsertWithWhereUniqueWithoutPlaceNaInput[]
    createMany?: SpecialCreateManyPlaceNaInputEnvelope
    set?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    disconnect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    delete?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    connect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    update?: SpecialUpdateWithWhereUniqueWithoutPlaceNaInput | SpecialUpdateWithWhereUniqueWithoutPlaceNaInput[]
    updateMany?: SpecialUpdateManyWithWhereWithoutPlaceNaInput | SpecialUpdateManyWithWhereWithoutPlaceNaInput[]
    deleteMany?: SpecialScalarWhereInput | SpecialScalarWhereInput[]
  }

  export type SpecialUncheckedUpdateManyWithoutPlacesNestedInput = {
    create?: XOR<SpecialCreateWithoutPlacesInput, SpecialUncheckedCreateWithoutPlacesInput> | SpecialCreateWithoutPlacesInput[] | SpecialUncheckedCreateWithoutPlacesInput[]
    connectOrCreate?: SpecialCreateOrConnectWithoutPlacesInput | SpecialCreateOrConnectWithoutPlacesInput[]
    upsert?: SpecialUpsertWithWhereUniqueWithoutPlacesInput | SpecialUpsertWithWhereUniqueWithoutPlacesInput[]
    createMany?: SpecialCreateManyPlacesInputEnvelope
    set?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    disconnect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    delete?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    connect?: SpecialWhereUniqueInput | SpecialWhereUniqueInput[]
    update?: SpecialUpdateWithWhereUniqueWithoutPlacesInput | SpecialUpdateWithWhereUniqueWithoutPlacesInput[]
    updateMany?: SpecialUpdateManyWithWhereWithoutPlacesInput | SpecialUpdateManyWithWhereWithoutPlacesInput[]
    deleteMany?: SpecialScalarWhereInput | SpecialScalarWhereInput[]
  }

  export type PlacesCreateNestedOneWithoutSpecialsByNameInput = {
    create?: XOR<PlacesCreateWithoutSpecialsByNameInput, PlacesUncheckedCreateWithoutSpecialsByNameInput>
    connectOrCreate?: PlacesCreateOrConnectWithoutSpecialsByNameInput
    connect?: PlacesWhereUniqueInput
  }

  export type PlacesCreateNestedOneWithoutSpecialsByIdInput = {
    create?: XOR<PlacesCreateWithoutSpecialsByIdInput, PlacesUncheckedCreateWithoutSpecialsByIdInput>
    connectOrCreate?: PlacesCreateOrConnectWithoutSpecialsByIdInput
    connect?: PlacesWhereUniqueInput
  }

  export type FavFoodCreateNestedManyWithoutFavtypeInput = {
    create?: XOR<FavFoodCreateWithoutFavtypeInput, FavFoodUncheckedCreateWithoutFavtypeInput> | FavFoodCreateWithoutFavtypeInput[] | FavFoodUncheckedCreateWithoutFavtypeInput[]
    connectOrCreate?: FavFoodCreateOrConnectWithoutFavtypeInput | FavFoodCreateOrConnectWithoutFavtypeInput[]
    connect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
  }

  export type FavFoodCreateNestedManyWithoutFavfoodnameInput = {
    create?: XOR<FavFoodCreateWithoutFavfoodnameInput, FavFoodUncheckedCreateWithoutFavfoodnameInput> | FavFoodCreateWithoutFavfoodnameInput[] | FavFoodUncheckedCreateWithoutFavfoodnameInput[]
    connectOrCreate?: FavFoodCreateOrConnectWithoutFavfoodnameInput | FavFoodCreateOrConnectWithoutFavfoodnameInput[]
    connect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
  }

  export type FavFoodCreateNestedManyWithoutFavplacenameInput = {
    create?: XOR<FavFoodCreateWithoutFavplacenameInput, FavFoodUncheckedCreateWithoutFavplacenameInput> | FavFoodCreateWithoutFavplacenameInput[] | FavFoodUncheckedCreateWithoutFavplacenameInput[]
    connectOrCreate?: FavFoodCreateOrConnectWithoutFavplacenameInput | FavFoodCreateOrConnectWithoutFavplacenameInput[]
    connect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
  }

  export type FavFoodUncheckedCreateNestedManyWithoutFavtypeInput = {
    create?: XOR<FavFoodCreateWithoutFavtypeInput, FavFoodUncheckedCreateWithoutFavtypeInput> | FavFoodCreateWithoutFavtypeInput[] | FavFoodUncheckedCreateWithoutFavtypeInput[]
    connectOrCreate?: FavFoodCreateOrConnectWithoutFavtypeInput | FavFoodCreateOrConnectWithoutFavtypeInput[]
    connect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
  }

  export type FavFoodUncheckedCreateNestedManyWithoutFavfoodnameInput = {
    create?: XOR<FavFoodCreateWithoutFavfoodnameInput, FavFoodUncheckedCreateWithoutFavfoodnameInput> | FavFoodCreateWithoutFavfoodnameInput[] | FavFoodUncheckedCreateWithoutFavfoodnameInput[]
    connectOrCreate?: FavFoodCreateOrConnectWithoutFavfoodnameInput | FavFoodCreateOrConnectWithoutFavfoodnameInput[]
    connect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
  }

  export type FavFoodUncheckedCreateNestedManyWithoutFavplacenameInput = {
    create?: XOR<FavFoodCreateWithoutFavplacenameInput, FavFoodUncheckedCreateWithoutFavplacenameInput> | FavFoodCreateWithoutFavplacenameInput[] | FavFoodUncheckedCreateWithoutFavplacenameInput[]
    connectOrCreate?: FavFoodCreateOrConnectWithoutFavplacenameInput | FavFoodCreateOrConnectWithoutFavplacenameInput[]
    connect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
  }

  export type EnumFoodOrGrocFieldUpdateOperationsInput = {
    set?: $Enums.FoodOrGroc
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlacesUpdateOneRequiredWithoutSpecialsByNameNestedInput = {
    create?: XOR<PlacesCreateWithoutSpecialsByNameInput, PlacesUncheckedCreateWithoutSpecialsByNameInput>
    connectOrCreate?: PlacesCreateOrConnectWithoutSpecialsByNameInput
    upsert?: PlacesUpsertWithoutSpecialsByNameInput
    connect?: PlacesWhereUniqueInput
    update?: XOR<XOR<PlacesUpdateToOneWithWhereWithoutSpecialsByNameInput, PlacesUpdateWithoutSpecialsByNameInput>, PlacesUncheckedUpdateWithoutSpecialsByNameInput>
  }

  export type PlacesUpdateOneRequiredWithoutSpecialsByIdNestedInput = {
    create?: XOR<PlacesCreateWithoutSpecialsByIdInput, PlacesUncheckedCreateWithoutSpecialsByIdInput>
    connectOrCreate?: PlacesCreateOrConnectWithoutSpecialsByIdInput
    upsert?: PlacesUpsertWithoutSpecialsByIdInput
    connect?: PlacesWhereUniqueInput
    update?: XOR<XOR<PlacesUpdateToOneWithWhereWithoutSpecialsByIdInput, PlacesUpdateWithoutSpecialsByIdInput>, PlacesUncheckedUpdateWithoutSpecialsByIdInput>
  }

  export type FavFoodUpdateManyWithoutFavtypeNestedInput = {
    create?: XOR<FavFoodCreateWithoutFavtypeInput, FavFoodUncheckedCreateWithoutFavtypeInput> | FavFoodCreateWithoutFavtypeInput[] | FavFoodUncheckedCreateWithoutFavtypeInput[]
    connectOrCreate?: FavFoodCreateOrConnectWithoutFavtypeInput | FavFoodCreateOrConnectWithoutFavtypeInput[]
    upsert?: FavFoodUpsertWithWhereUniqueWithoutFavtypeInput | FavFoodUpsertWithWhereUniqueWithoutFavtypeInput[]
    set?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    disconnect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    delete?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    connect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    update?: FavFoodUpdateWithWhereUniqueWithoutFavtypeInput | FavFoodUpdateWithWhereUniqueWithoutFavtypeInput[]
    updateMany?: FavFoodUpdateManyWithWhereWithoutFavtypeInput | FavFoodUpdateManyWithWhereWithoutFavtypeInput[]
    deleteMany?: FavFoodScalarWhereInput | FavFoodScalarWhereInput[]
  }

  export type FavFoodUpdateManyWithoutFavfoodnameNestedInput = {
    create?: XOR<FavFoodCreateWithoutFavfoodnameInput, FavFoodUncheckedCreateWithoutFavfoodnameInput> | FavFoodCreateWithoutFavfoodnameInput[] | FavFoodUncheckedCreateWithoutFavfoodnameInput[]
    connectOrCreate?: FavFoodCreateOrConnectWithoutFavfoodnameInput | FavFoodCreateOrConnectWithoutFavfoodnameInput[]
    upsert?: FavFoodUpsertWithWhereUniqueWithoutFavfoodnameInput | FavFoodUpsertWithWhereUniqueWithoutFavfoodnameInput[]
    set?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    disconnect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    delete?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    connect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    update?: FavFoodUpdateWithWhereUniqueWithoutFavfoodnameInput | FavFoodUpdateWithWhereUniqueWithoutFavfoodnameInput[]
    updateMany?: FavFoodUpdateManyWithWhereWithoutFavfoodnameInput | FavFoodUpdateManyWithWhereWithoutFavfoodnameInput[]
    deleteMany?: FavFoodScalarWhereInput | FavFoodScalarWhereInput[]
  }

  export type FavFoodUpdateManyWithoutFavplacenameNestedInput = {
    create?: XOR<FavFoodCreateWithoutFavplacenameInput, FavFoodUncheckedCreateWithoutFavplacenameInput> | FavFoodCreateWithoutFavplacenameInput[] | FavFoodUncheckedCreateWithoutFavplacenameInput[]
    connectOrCreate?: FavFoodCreateOrConnectWithoutFavplacenameInput | FavFoodCreateOrConnectWithoutFavplacenameInput[]
    upsert?: FavFoodUpsertWithWhereUniqueWithoutFavplacenameInput | FavFoodUpsertWithWhereUniqueWithoutFavplacenameInput[]
    set?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    disconnect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    delete?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    connect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    update?: FavFoodUpdateWithWhereUniqueWithoutFavplacenameInput | FavFoodUpdateWithWhereUniqueWithoutFavplacenameInput[]
    updateMany?: FavFoodUpdateManyWithWhereWithoutFavplacenameInput | FavFoodUpdateManyWithWhereWithoutFavplacenameInput[]
    deleteMany?: FavFoodScalarWhereInput | FavFoodScalarWhereInput[]
  }

  export type FavFoodUncheckedUpdateManyWithoutFavtypeNestedInput = {
    create?: XOR<FavFoodCreateWithoutFavtypeInput, FavFoodUncheckedCreateWithoutFavtypeInput> | FavFoodCreateWithoutFavtypeInput[] | FavFoodUncheckedCreateWithoutFavtypeInput[]
    connectOrCreate?: FavFoodCreateOrConnectWithoutFavtypeInput | FavFoodCreateOrConnectWithoutFavtypeInput[]
    upsert?: FavFoodUpsertWithWhereUniqueWithoutFavtypeInput | FavFoodUpsertWithWhereUniqueWithoutFavtypeInput[]
    set?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    disconnect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    delete?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    connect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    update?: FavFoodUpdateWithWhereUniqueWithoutFavtypeInput | FavFoodUpdateWithWhereUniqueWithoutFavtypeInput[]
    updateMany?: FavFoodUpdateManyWithWhereWithoutFavtypeInput | FavFoodUpdateManyWithWhereWithoutFavtypeInput[]
    deleteMany?: FavFoodScalarWhereInput | FavFoodScalarWhereInput[]
  }

  export type FavFoodUncheckedUpdateManyWithoutFavfoodnameNestedInput = {
    create?: XOR<FavFoodCreateWithoutFavfoodnameInput, FavFoodUncheckedCreateWithoutFavfoodnameInput> | FavFoodCreateWithoutFavfoodnameInput[] | FavFoodUncheckedCreateWithoutFavfoodnameInput[]
    connectOrCreate?: FavFoodCreateOrConnectWithoutFavfoodnameInput | FavFoodCreateOrConnectWithoutFavfoodnameInput[]
    upsert?: FavFoodUpsertWithWhereUniqueWithoutFavfoodnameInput | FavFoodUpsertWithWhereUniqueWithoutFavfoodnameInput[]
    set?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    disconnect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    delete?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    connect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    update?: FavFoodUpdateWithWhereUniqueWithoutFavfoodnameInput | FavFoodUpdateWithWhereUniqueWithoutFavfoodnameInput[]
    updateMany?: FavFoodUpdateManyWithWhereWithoutFavfoodnameInput | FavFoodUpdateManyWithWhereWithoutFavfoodnameInput[]
    deleteMany?: FavFoodScalarWhereInput | FavFoodScalarWhereInput[]
  }

  export type FavFoodUncheckedUpdateManyWithoutFavplacenameNestedInput = {
    create?: XOR<FavFoodCreateWithoutFavplacenameInput, FavFoodUncheckedCreateWithoutFavplacenameInput> | FavFoodCreateWithoutFavplacenameInput[] | FavFoodUncheckedCreateWithoutFavplacenameInput[]
    connectOrCreate?: FavFoodCreateOrConnectWithoutFavplacenameInput | FavFoodCreateOrConnectWithoutFavplacenameInput[]
    upsert?: FavFoodUpsertWithWhereUniqueWithoutFavplacenameInput | FavFoodUpsertWithWhereUniqueWithoutFavplacenameInput[]
    set?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    disconnect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    delete?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    connect?: FavFoodWhereUniqueInput | FavFoodWhereUniqueInput[]
    update?: FavFoodUpdateWithWhereUniqueWithoutFavplacenameInput | FavFoodUpdateWithWhereUniqueWithoutFavplacenameInput[]
    updateMany?: FavFoodUpdateManyWithWhereWithoutFavplacenameInput | FavFoodUpdateManyWithWhereWithoutFavplacenameInput[]
    deleteMany?: FavFoodScalarWhereInput | FavFoodScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserrolesFilter<$PrismaModel = never> = {
    equals?: $Enums.Userroles | EnumUserrolesFieldRefInput<$PrismaModel>
    in?: $Enums.Userroles[] | ListEnumUserrolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Userroles[] | ListEnumUserrolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserrolesFilter<$PrismaModel> | $Enums.Userroles
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserrolesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Userroles | EnumUserrolesFieldRefInput<$PrismaModel>
    in?: $Enums.Userroles[] | ListEnumUserrolesFieldRefInput<$PrismaModel>
    notIn?: $Enums.Userroles[] | ListEnumUserrolesFieldRefInput<$PrismaModel>
    not?: NestedEnumUserrolesWithAggregatesFilter<$PrismaModel> | $Enums.Userroles
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserrolesFilter<$PrismaModel>
    _max?: NestedEnumUserrolesFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumFoodOrGrocFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodOrGroc | EnumFoodOrGrocFieldRefInput<$PrismaModel>
    in?: $Enums.FoodOrGroc[] | ListEnumFoodOrGrocFieldRefInput<$PrismaModel>
    notIn?: $Enums.FoodOrGroc[] | ListEnumFoodOrGrocFieldRefInput<$PrismaModel>
    not?: NestedEnumFoodOrGrocFilter<$PrismaModel> | $Enums.FoodOrGroc
  }

  export type NestedEnumFoodOrGrocWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodOrGroc | EnumFoodOrGrocFieldRefInput<$PrismaModel>
    in?: $Enums.FoodOrGroc[] | ListEnumFoodOrGrocFieldRefInput<$PrismaModel>
    notIn?: $Enums.FoodOrGroc[] | ListEnumFoodOrGrocFieldRefInput<$PrismaModel>
    not?: NestedEnumFoodOrGrocWithAggregatesFilter<$PrismaModel> | $Enums.FoodOrGroc
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFoodOrGrocFilter<$PrismaModel>
    _max?: NestedEnumFoodOrGrocFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FavFoodCreateWithoutUserInput = {
    type?: string | null
    place?: string | null
    ffoodname?: string | null
    fplacename?: string | null
    ffoodtype?: string | null
    notified?: string | null
    favtype?: SpecialCreateNestedManyWithoutFavtypeInput
    favfoodname?: SpecialCreateNestedManyWithoutFavfoodnameInput
    favplacename?: SpecialCreateNestedManyWithoutFavplacenameInput
  }

  export type FavFoodUncheckedCreateWithoutUserInput = {
    id?: number
    type?: string | null
    place?: string | null
    ffoodname?: string | null
    fplacename?: string | null
    ffoodtype?: string | null
    notified?: string | null
    favtype?: SpecialUncheckedCreateNestedManyWithoutFavtypeInput
    favfoodname?: SpecialUncheckedCreateNestedManyWithoutFavfoodnameInput
    favplacename?: SpecialUncheckedCreateNestedManyWithoutFavplacenameInput
  }

  export type FavFoodCreateOrConnectWithoutUserInput = {
    where: FavFoodWhereUniqueInput
    create: XOR<FavFoodCreateWithoutUserInput, FavFoodUncheckedCreateWithoutUserInput>
  }

  export type FavFoodCreateManyUserInputEnvelope = {
    data: FavFoodCreateManyUserInput | FavFoodCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavFoodUpsertWithWhereUniqueWithoutUserInput = {
    where: FavFoodWhereUniqueInput
    update: XOR<FavFoodUpdateWithoutUserInput, FavFoodUncheckedUpdateWithoutUserInput>
    create: XOR<FavFoodCreateWithoutUserInput, FavFoodUncheckedCreateWithoutUserInput>
  }

  export type FavFoodUpdateWithWhereUniqueWithoutUserInput = {
    where: FavFoodWhereUniqueInput
    data: XOR<FavFoodUpdateWithoutUserInput, FavFoodUncheckedUpdateWithoutUserInput>
  }

  export type FavFoodUpdateManyWithWhereWithoutUserInput = {
    where: FavFoodScalarWhereInput
    data: XOR<FavFoodUpdateManyMutationInput, FavFoodUncheckedUpdateManyWithoutUserInput>
  }

  export type FavFoodScalarWhereInput = {
    AND?: FavFoodScalarWhereInput | FavFoodScalarWhereInput[]
    OR?: FavFoodScalarWhereInput[]
    NOT?: FavFoodScalarWhereInput | FavFoodScalarWhereInput[]
    id?: IntFilter<"FavFood"> | number
    type?: StringNullableFilter<"FavFood"> | string | null
    userId?: IntFilter<"FavFood"> | number
    place?: StringNullableFilter<"FavFood"> | string | null
    ffoodname?: StringNullableFilter<"FavFood"> | string | null
    fplacename?: StringNullableFilter<"FavFood"> | string | null
    ffoodtype?: StringNullableFilter<"FavFood"> | string | null
    notified?: StringNullableFilter<"FavFood"> | string | null
  }

  export type UserCreateWithoutFavfoodsInput = {
    name?: string
    email: string
    role?: $Enums.Userroles
    password: string
    refreshToken?: string | null
    subscription?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUncheckedCreateWithoutFavfoodsInput = {
    id?: number
    name?: string
    email: string
    role?: $Enums.Userroles
    password: string
    refreshToken?: string | null
    subscription?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserCreateOrConnectWithoutFavfoodsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavfoodsInput, UserUncheckedCreateWithoutFavfoodsInput>
  }

  export type SpecialCreateWithoutFavtypeInput = {
    name: string
    type: string
    poster?: string
    foodorgroc: $Enums.FoodOrGroc
    imagepath: string
    from: string
    till: string
    before: number
    after: number
    placeNa: PlacesCreateNestedOneWithoutSpecialsByNameInput
    places: PlacesCreateNestedOneWithoutSpecialsByIdInput
    favfoodname?: FavFoodCreateNestedManyWithoutFavfoodnameInput
    favplacename?: FavFoodCreateNestedManyWithoutFavplacenameInput
  }

  export type SpecialUncheckedCreateWithoutFavtypeInput = {
    id?: number
    name: string
    type: string
    poster?: string
    foodorgroc: $Enums.FoodOrGroc
    imagepath: string
    from: string
    till: string
    before: number
    after: number
    placesId: number
    PlaceName: string
    favfoodname?: FavFoodUncheckedCreateNestedManyWithoutFavfoodnameInput
    favplacename?: FavFoodUncheckedCreateNestedManyWithoutFavplacenameInput
  }

  export type SpecialCreateOrConnectWithoutFavtypeInput = {
    where: SpecialWhereUniqueInput
    create: XOR<SpecialCreateWithoutFavtypeInput, SpecialUncheckedCreateWithoutFavtypeInput>
  }

  export type SpecialCreateWithoutFavfoodnameInput = {
    name: string
    type: string
    poster?: string
    foodorgroc: $Enums.FoodOrGroc
    imagepath: string
    from: string
    till: string
    before: number
    after: number
    placeNa: PlacesCreateNestedOneWithoutSpecialsByNameInput
    places: PlacesCreateNestedOneWithoutSpecialsByIdInput
    favtype?: FavFoodCreateNestedManyWithoutFavtypeInput
    favplacename?: FavFoodCreateNestedManyWithoutFavplacenameInput
  }

  export type SpecialUncheckedCreateWithoutFavfoodnameInput = {
    id?: number
    name: string
    type: string
    poster?: string
    foodorgroc: $Enums.FoodOrGroc
    imagepath: string
    from: string
    till: string
    before: number
    after: number
    placesId: number
    PlaceName: string
    favtype?: FavFoodUncheckedCreateNestedManyWithoutFavtypeInput
    favplacename?: FavFoodUncheckedCreateNestedManyWithoutFavplacenameInput
  }

  export type SpecialCreateOrConnectWithoutFavfoodnameInput = {
    where: SpecialWhereUniqueInput
    create: XOR<SpecialCreateWithoutFavfoodnameInput, SpecialUncheckedCreateWithoutFavfoodnameInput>
  }

  export type SpecialCreateWithoutFavplacenameInput = {
    name: string
    type: string
    poster?: string
    foodorgroc: $Enums.FoodOrGroc
    imagepath: string
    from: string
    till: string
    before: number
    after: number
    placeNa: PlacesCreateNestedOneWithoutSpecialsByNameInput
    places: PlacesCreateNestedOneWithoutSpecialsByIdInput
    favtype?: FavFoodCreateNestedManyWithoutFavtypeInput
    favfoodname?: FavFoodCreateNestedManyWithoutFavfoodnameInput
  }

  export type SpecialUncheckedCreateWithoutFavplacenameInput = {
    id?: number
    name: string
    type: string
    poster?: string
    foodorgroc: $Enums.FoodOrGroc
    imagepath: string
    from: string
    till: string
    before: number
    after: number
    placesId: number
    PlaceName: string
    favtype?: FavFoodUncheckedCreateNestedManyWithoutFavtypeInput
    favfoodname?: FavFoodUncheckedCreateNestedManyWithoutFavfoodnameInput
  }

  export type SpecialCreateOrConnectWithoutFavplacenameInput = {
    where: SpecialWhereUniqueInput
    create: XOR<SpecialCreateWithoutFavplacenameInput, SpecialUncheckedCreateWithoutFavplacenameInput>
  }

  export type UserUpsertWithoutFavfoodsInput = {
    update: XOR<UserUpdateWithoutFavfoodsInput, UserUncheckedUpdateWithoutFavfoodsInput>
    create: XOR<UserCreateWithoutFavfoodsInput, UserUncheckedCreateWithoutFavfoodsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavfoodsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavfoodsInput, UserUncheckedUpdateWithoutFavfoodsInput>
  }

  export type UserUpdateWithoutFavfoodsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserrolesFieldUpdateOperationsInput | $Enums.Userroles
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    subscription?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUncheckedUpdateWithoutFavfoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumUserrolesFieldUpdateOperationsInput | $Enums.Userroles
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    subscription?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SpecialUpsertWithWhereUniqueWithoutFavtypeInput = {
    where: SpecialWhereUniqueInput
    update: XOR<SpecialUpdateWithoutFavtypeInput, SpecialUncheckedUpdateWithoutFavtypeInput>
    create: XOR<SpecialCreateWithoutFavtypeInput, SpecialUncheckedCreateWithoutFavtypeInput>
  }

  export type SpecialUpdateWithWhereUniqueWithoutFavtypeInput = {
    where: SpecialWhereUniqueInput
    data: XOR<SpecialUpdateWithoutFavtypeInput, SpecialUncheckedUpdateWithoutFavtypeInput>
  }

  export type SpecialUpdateManyWithWhereWithoutFavtypeInput = {
    where: SpecialScalarWhereInput
    data: XOR<SpecialUpdateManyMutationInput, SpecialUncheckedUpdateManyWithoutFavtypeInput>
  }

  export type SpecialScalarWhereInput = {
    AND?: SpecialScalarWhereInput | SpecialScalarWhereInput[]
    OR?: SpecialScalarWhereInput[]
    NOT?: SpecialScalarWhereInput | SpecialScalarWhereInput[]
    id?: IntFilter<"Special"> | number
    name?: StringFilter<"Special"> | string
    type?: StringFilter<"Special"> | string
    poster?: StringFilter<"Special"> | string
    foodorgroc?: EnumFoodOrGrocFilter<"Special"> | $Enums.FoodOrGroc
    imagepath?: StringFilter<"Special"> | string
    from?: StringFilter<"Special"> | string
    till?: StringFilter<"Special"> | string
    before?: FloatFilter<"Special"> | number
    after?: FloatFilter<"Special"> | number
    placesId?: IntFilter<"Special"> | number
    PlaceName?: StringFilter<"Special"> | string
  }

  export type SpecialUpsertWithWhereUniqueWithoutFavfoodnameInput = {
    where: SpecialWhereUniqueInput
    update: XOR<SpecialUpdateWithoutFavfoodnameInput, SpecialUncheckedUpdateWithoutFavfoodnameInput>
    create: XOR<SpecialCreateWithoutFavfoodnameInput, SpecialUncheckedCreateWithoutFavfoodnameInput>
  }

  export type SpecialUpdateWithWhereUniqueWithoutFavfoodnameInput = {
    where: SpecialWhereUniqueInput
    data: XOR<SpecialUpdateWithoutFavfoodnameInput, SpecialUncheckedUpdateWithoutFavfoodnameInput>
  }

  export type SpecialUpdateManyWithWhereWithoutFavfoodnameInput = {
    where: SpecialScalarWhereInput
    data: XOR<SpecialUpdateManyMutationInput, SpecialUncheckedUpdateManyWithoutFavfoodnameInput>
  }

  export type SpecialUpsertWithWhereUniqueWithoutFavplacenameInput = {
    where: SpecialWhereUniqueInput
    update: XOR<SpecialUpdateWithoutFavplacenameInput, SpecialUncheckedUpdateWithoutFavplacenameInput>
    create: XOR<SpecialCreateWithoutFavplacenameInput, SpecialUncheckedCreateWithoutFavplacenameInput>
  }

  export type SpecialUpdateWithWhereUniqueWithoutFavplacenameInput = {
    where: SpecialWhereUniqueInput
    data: XOR<SpecialUpdateWithoutFavplacenameInput, SpecialUncheckedUpdateWithoutFavplacenameInput>
  }

  export type SpecialUpdateManyWithWhereWithoutFavplacenameInput = {
    where: SpecialScalarWhereInput
    data: XOR<SpecialUpdateManyMutationInput, SpecialUncheckedUpdateManyWithoutFavplacenameInput>
  }

  export type SpecialCreateWithoutPlaceNaInput = {
    name: string
    type: string
    poster?: string
    foodorgroc: $Enums.FoodOrGroc
    imagepath: string
    from: string
    till: string
    before: number
    after: number
    places: PlacesCreateNestedOneWithoutSpecialsByIdInput
    favtype?: FavFoodCreateNestedManyWithoutFavtypeInput
    favfoodname?: FavFoodCreateNestedManyWithoutFavfoodnameInput
    favplacename?: FavFoodCreateNestedManyWithoutFavplacenameInput
  }

  export type SpecialUncheckedCreateWithoutPlaceNaInput = {
    id?: number
    name: string
    type: string
    poster?: string
    foodorgroc: $Enums.FoodOrGroc
    imagepath: string
    from: string
    till: string
    before: number
    after: number
    placesId: number
    favtype?: FavFoodUncheckedCreateNestedManyWithoutFavtypeInput
    favfoodname?: FavFoodUncheckedCreateNestedManyWithoutFavfoodnameInput
    favplacename?: FavFoodUncheckedCreateNestedManyWithoutFavplacenameInput
  }

  export type SpecialCreateOrConnectWithoutPlaceNaInput = {
    where: SpecialWhereUniqueInput
    create: XOR<SpecialCreateWithoutPlaceNaInput, SpecialUncheckedCreateWithoutPlaceNaInput>
  }

  export type SpecialCreateManyPlaceNaInputEnvelope = {
    data: SpecialCreateManyPlaceNaInput | SpecialCreateManyPlaceNaInput[]
    skipDuplicates?: boolean
  }

  export type SpecialCreateWithoutPlacesInput = {
    name: string
    type: string
    poster?: string
    foodorgroc: $Enums.FoodOrGroc
    imagepath: string
    from: string
    till: string
    before: number
    after: number
    placeNa: PlacesCreateNestedOneWithoutSpecialsByNameInput
    favtype?: FavFoodCreateNestedManyWithoutFavtypeInput
    favfoodname?: FavFoodCreateNestedManyWithoutFavfoodnameInput
    favplacename?: FavFoodCreateNestedManyWithoutFavplacenameInput
  }

  export type SpecialUncheckedCreateWithoutPlacesInput = {
    id?: number
    name: string
    type: string
    poster?: string
    foodorgroc: $Enums.FoodOrGroc
    imagepath: string
    from: string
    till: string
    before: number
    after: number
    PlaceName: string
    favtype?: FavFoodUncheckedCreateNestedManyWithoutFavtypeInput
    favfoodname?: FavFoodUncheckedCreateNestedManyWithoutFavfoodnameInput
    favplacename?: FavFoodUncheckedCreateNestedManyWithoutFavplacenameInput
  }

  export type SpecialCreateOrConnectWithoutPlacesInput = {
    where: SpecialWhereUniqueInput
    create: XOR<SpecialCreateWithoutPlacesInput, SpecialUncheckedCreateWithoutPlacesInput>
  }

  export type SpecialCreateManyPlacesInputEnvelope = {
    data: SpecialCreateManyPlacesInput | SpecialCreateManyPlacesInput[]
    skipDuplicates?: boolean
  }

  export type SpecialUpsertWithWhereUniqueWithoutPlaceNaInput = {
    where: SpecialWhereUniqueInput
    update: XOR<SpecialUpdateWithoutPlaceNaInput, SpecialUncheckedUpdateWithoutPlaceNaInput>
    create: XOR<SpecialCreateWithoutPlaceNaInput, SpecialUncheckedCreateWithoutPlaceNaInput>
  }

  export type SpecialUpdateWithWhereUniqueWithoutPlaceNaInput = {
    where: SpecialWhereUniqueInput
    data: XOR<SpecialUpdateWithoutPlaceNaInput, SpecialUncheckedUpdateWithoutPlaceNaInput>
  }

  export type SpecialUpdateManyWithWhereWithoutPlaceNaInput = {
    where: SpecialScalarWhereInput
    data: XOR<SpecialUpdateManyMutationInput, SpecialUncheckedUpdateManyWithoutPlaceNaInput>
  }

  export type SpecialUpsertWithWhereUniqueWithoutPlacesInput = {
    where: SpecialWhereUniqueInput
    update: XOR<SpecialUpdateWithoutPlacesInput, SpecialUncheckedUpdateWithoutPlacesInput>
    create: XOR<SpecialCreateWithoutPlacesInput, SpecialUncheckedCreateWithoutPlacesInput>
  }

  export type SpecialUpdateWithWhereUniqueWithoutPlacesInput = {
    where: SpecialWhereUniqueInput
    data: XOR<SpecialUpdateWithoutPlacesInput, SpecialUncheckedUpdateWithoutPlacesInput>
  }

  export type SpecialUpdateManyWithWhereWithoutPlacesInput = {
    where: SpecialScalarWhereInput
    data: XOR<SpecialUpdateManyMutationInput, SpecialUncheckedUpdateManyWithoutPlacesInput>
  }

  export type PlacesCreateWithoutSpecialsByNameInput = {
    name: string
    location: string
    type: string
    imagepath: string
    specialsById?: SpecialCreateNestedManyWithoutPlacesInput
  }

  export type PlacesUncheckedCreateWithoutSpecialsByNameInput = {
    id?: number
    name: string
    location: string
    type: string
    imagepath: string
    specialsById?: SpecialUncheckedCreateNestedManyWithoutPlacesInput
  }

  export type PlacesCreateOrConnectWithoutSpecialsByNameInput = {
    where: PlacesWhereUniqueInput
    create: XOR<PlacesCreateWithoutSpecialsByNameInput, PlacesUncheckedCreateWithoutSpecialsByNameInput>
  }

  export type PlacesCreateWithoutSpecialsByIdInput = {
    name: string
    location: string
    type: string
    imagepath: string
    specialsByName?: SpecialCreateNestedManyWithoutPlaceNaInput
  }

  export type PlacesUncheckedCreateWithoutSpecialsByIdInput = {
    id?: number
    name: string
    location: string
    type: string
    imagepath: string
    specialsByName?: SpecialUncheckedCreateNestedManyWithoutPlaceNaInput
  }

  export type PlacesCreateOrConnectWithoutSpecialsByIdInput = {
    where: PlacesWhereUniqueInput
    create: XOR<PlacesCreateWithoutSpecialsByIdInput, PlacesUncheckedCreateWithoutSpecialsByIdInput>
  }

  export type FavFoodCreateWithoutFavtypeInput = {
    type?: string | null
    place?: string | null
    ffoodname?: string | null
    fplacename?: string | null
    ffoodtype?: string | null
    notified?: string | null
    user: UserCreateNestedOneWithoutFavfoodsInput
    favfoodname?: SpecialCreateNestedManyWithoutFavfoodnameInput
    favplacename?: SpecialCreateNestedManyWithoutFavplacenameInput
  }

  export type FavFoodUncheckedCreateWithoutFavtypeInput = {
    id?: number
    type?: string | null
    userId: number
    place?: string | null
    ffoodname?: string | null
    fplacename?: string | null
    ffoodtype?: string | null
    notified?: string | null
    favfoodname?: SpecialUncheckedCreateNestedManyWithoutFavfoodnameInput
    favplacename?: SpecialUncheckedCreateNestedManyWithoutFavplacenameInput
  }

  export type FavFoodCreateOrConnectWithoutFavtypeInput = {
    where: FavFoodWhereUniqueInput
    create: XOR<FavFoodCreateWithoutFavtypeInput, FavFoodUncheckedCreateWithoutFavtypeInput>
  }

  export type FavFoodCreateWithoutFavfoodnameInput = {
    type?: string | null
    place?: string | null
    ffoodname?: string | null
    fplacename?: string | null
    ffoodtype?: string | null
    notified?: string | null
    user: UserCreateNestedOneWithoutFavfoodsInput
    favtype?: SpecialCreateNestedManyWithoutFavtypeInput
    favplacename?: SpecialCreateNestedManyWithoutFavplacenameInput
  }

  export type FavFoodUncheckedCreateWithoutFavfoodnameInput = {
    id?: number
    type?: string | null
    userId: number
    place?: string | null
    ffoodname?: string | null
    fplacename?: string | null
    ffoodtype?: string | null
    notified?: string | null
    favtype?: SpecialUncheckedCreateNestedManyWithoutFavtypeInput
    favplacename?: SpecialUncheckedCreateNestedManyWithoutFavplacenameInput
  }

  export type FavFoodCreateOrConnectWithoutFavfoodnameInput = {
    where: FavFoodWhereUniqueInput
    create: XOR<FavFoodCreateWithoutFavfoodnameInput, FavFoodUncheckedCreateWithoutFavfoodnameInput>
  }

  export type FavFoodCreateWithoutFavplacenameInput = {
    type?: string | null
    place?: string | null
    ffoodname?: string | null
    fplacename?: string | null
    ffoodtype?: string | null
    notified?: string | null
    user: UserCreateNestedOneWithoutFavfoodsInput
    favtype?: SpecialCreateNestedManyWithoutFavtypeInput
    favfoodname?: SpecialCreateNestedManyWithoutFavfoodnameInput
  }

  export type FavFoodUncheckedCreateWithoutFavplacenameInput = {
    id?: number
    type?: string | null
    userId: number
    place?: string | null
    ffoodname?: string | null
    fplacename?: string | null
    ffoodtype?: string | null
    notified?: string | null
    favtype?: SpecialUncheckedCreateNestedManyWithoutFavtypeInput
    favfoodname?: SpecialUncheckedCreateNestedManyWithoutFavfoodnameInput
  }

  export type FavFoodCreateOrConnectWithoutFavplacenameInput = {
    where: FavFoodWhereUniqueInput
    create: XOR<FavFoodCreateWithoutFavplacenameInput, FavFoodUncheckedCreateWithoutFavplacenameInput>
  }

  export type PlacesUpsertWithoutSpecialsByNameInput = {
    update: XOR<PlacesUpdateWithoutSpecialsByNameInput, PlacesUncheckedUpdateWithoutSpecialsByNameInput>
    create: XOR<PlacesCreateWithoutSpecialsByNameInput, PlacesUncheckedCreateWithoutSpecialsByNameInput>
    where?: PlacesWhereInput
  }

  export type PlacesUpdateToOneWithWhereWithoutSpecialsByNameInput = {
    where?: PlacesWhereInput
    data: XOR<PlacesUpdateWithoutSpecialsByNameInput, PlacesUncheckedUpdateWithoutSpecialsByNameInput>
  }

  export type PlacesUpdateWithoutSpecialsByNameInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    imagepath?: StringFieldUpdateOperationsInput | string
    specialsById?: SpecialUpdateManyWithoutPlacesNestedInput
  }

  export type PlacesUncheckedUpdateWithoutSpecialsByNameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    imagepath?: StringFieldUpdateOperationsInput | string
    specialsById?: SpecialUncheckedUpdateManyWithoutPlacesNestedInput
  }

  export type PlacesUpsertWithoutSpecialsByIdInput = {
    update: XOR<PlacesUpdateWithoutSpecialsByIdInput, PlacesUncheckedUpdateWithoutSpecialsByIdInput>
    create: XOR<PlacesCreateWithoutSpecialsByIdInput, PlacesUncheckedCreateWithoutSpecialsByIdInput>
    where?: PlacesWhereInput
  }

  export type PlacesUpdateToOneWithWhereWithoutSpecialsByIdInput = {
    where?: PlacesWhereInput
    data: XOR<PlacesUpdateWithoutSpecialsByIdInput, PlacesUncheckedUpdateWithoutSpecialsByIdInput>
  }

  export type PlacesUpdateWithoutSpecialsByIdInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    imagepath?: StringFieldUpdateOperationsInput | string
    specialsByName?: SpecialUpdateManyWithoutPlaceNaNestedInput
  }

  export type PlacesUncheckedUpdateWithoutSpecialsByIdInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    imagepath?: StringFieldUpdateOperationsInput | string
    specialsByName?: SpecialUncheckedUpdateManyWithoutPlaceNaNestedInput
  }

  export type FavFoodUpsertWithWhereUniqueWithoutFavtypeInput = {
    where: FavFoodWhereUniqueInput
    update: XOR<FavFoodUpdateWithoutFavtypeInput, FavFoodUncheckedUpdateWithoutFavtypeInput>
    create: XOR<FavFoodCreateWithoutFavtypeInput, FavFoodUncheckedCreateWithoutFavtypeInput>
  }

  export type FavFoodUpdateWithWhereUniqueWithoutFavtypeInput = {
    where: FavFoodWhereUniqueInput
    data: XOR<FavFoodUpdateWithoutFavtypeInput, FavFoodUncheckedUpdateWithoutFavtypeInput>
  }

  export type FavFoodUpdateManyWithWhereWithoutFavtypeInput = {
    where: FavFoodScalarWhereInput
    data: XOR<FavFoodUpdateManyMutationInput, FavFoodUncheckedUpdateManyWithoutFavtypeInput>
  }

  export type FavFoodUpsertWithWhereUniqueWithoutFavfoodnameInput = {
    where: FavFoodWhereUniqueInput
    update: XOR<FavFoodUpdateWithoutFavfoodnameInput, FavFoodUncheckedUpdateWithoutFavfoodnameInput>
    create: XOR<FavFoodCreateWithoutFavfoodnameInput, FavFoodUncheckedCreateWithoutFavfoodnameInput>
  }

  export type FavFoodUpdateWithWhereUniqueWithoutFavfoodnameInput = {
    where: FavFoodWhereUniqueInput
    data: XOR<FavFoodUpdateWithoutFavfoodnameInput, FavFoodUncheckedUpdateWithoutFavfoodnameInput>
  }

  export type FavFoodUpdateManyWithWhereWithoutFavfoodnameInput = {
    where: FavFoodScalarWhereInput
    data: XOR<FavFoodUpdateManyMutationInput, FavFoodUncheckedUpdateManyWithoutFavfoodnameInput>
  }

  export type FavFoodUpsertWithWhereUniqueWithoutFavplacenameInput = {
    where: FavFoodWhereUniqueInput
    update: XOR<FavFoodUpdateWithoutFavplacenameInput, FavFoodUncheckedUpdateWithoutFavplacenameInput>
    create: XOR<FavFoodCreateWithoutFavplacenameInput, FavFoodUncheckedCreateWithoutFavplacenameInput>
  }

  export type FavFoodUpdateWithWhereUniqueWithoutFavplacenameInput = {
    where: FavFoodWhereUniqueInput
    data: XOR<FavFoodUpdateWithoutFavplacenameInput, FavFoodUncheckedUpdateWithoutFavplacenameInput>
  }

  export type FavFoodUpdateManyWithWhereWithoutFavplacenameInput = {
    where: FavFoodScalarWhereInput
    data: XOR<FavFoodUpdateManyMutationInput, FavFoodUncheckedUpdateManyWithoutFavplacenameInput>
  }

  export type FavFoodCreateManyUserInput = {
    id?: number
    type?: string | null
    place?: string | null
    ffoodname?: string | null
    fplacename?: string | null
    ffoodtype?: string | null
    notified?: string | null
  }

  export type FavFoodUpdateWithoutUserInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    place?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodname?: NullableStringFieldUpdateOperationsInput | string | null
    fplacename?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodtype?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: NullableStringFieldUpdateOperationsInput | string | null
    favtype?: SpecialUpdateManyWithoutFavtypeNestedInput
    favfoodname?: SpecialUpdateManyWithoutFavfoodnameNestedInput
    favplacename?: SpecialUpdateManyWithoutFavplacenameNestedInput
  }

  export type FavFoodUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    place?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodname?: NullableStringFieldUpdateOperationsInput | string | null
    fplacename?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodtype?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: NullableStringFieldUpdateOperationsInput | string | null
    favtype?: SpecialUncheckedUpdateManyWithoutFavtypeNestedInput
    favfoodname?: SpecialUncheckedUpdateManyWithoutFavfoodnameNestedInput
    favplacename?: SpecialUncheckedUpdateManyWithoutFavplacenameNestedInput
  }

  export type FavFoodUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    place?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodname?: NullableStringFieldUpdateOperationsInput | string | null
    fplacename?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodtype?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SpecialUpdateWithoutFavtypeInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    foodorgroc?: EnumFoodOrGrocFieldUpdateOperationsInput | $Enums.FoodOrGroc
    imagepath?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    till?: StringFieldUpdateOperationsInput | string
    before?: FloatFieldUpdateOperationsInput | number
    after?: FloatFieldUpdateOperationsInput | number
    placeNa?: PlacesUpdateOneRequiredWithoutSpecialsByNameNestedInput
    places?: PlacesUpdateOneRequiredWithoutSpecialsByIdNestedInput
    favfoodname?: FavFoodUpdateManyWithoutFavfoodnameNestedInput
    favplacename?: FavFoodUpdateManyWithoutFavplacenameNestedInput
  }

  export type SpecialUncheckedUpdateWithoutFavtypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    foodorgroc?: EnumFoodOrGrocFieldUpdateOperationsInput | $Enums.FoodOrGroc
    imagepath?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    till?: StringFieldUpdateOperationsInput | string
    before?: FloatFieldUpdateOperationsInput | number
    after?: FloatFieldUpdateOperationsInput | number
    placesId?: IntFieldUpdateOperationsInput | number
    PlaceName?: StringFieldUpdateOperationsInput | string
    favfoodname?: FavFoodUncheckedUpdateManyWithoutFavfoodnameNestedInput
    favplacename?: FavFoodUncheckedUpdateManyWithoutFavplacenameNestedInput
  }

  export type SpecialUncheckedUpdateManyWithoutFavtypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    foodorgroc?: EnumFoodOrGrocFieldUpdateOperationsInput | $Enums.FoodOrGroc
    imagepath?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    till?: StringFieldUpdateOperationsInput | string
    before?: FloatFieldUpdateOperationsInput | number
    after?: FloatFieldUpdateOperationsInput | number
    placesId?: IntFieldUpdateOperationsInput | number
    PlaceName?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialUpdateWithoutFavfoodnameInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    foodorgroc?: EnumFoodOrGrocFieldUpdateOperationsInput | $Enums.FoodOrGroc
    imagepath?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    till?: StringFieldUpdateOperationsInput | string
    before?: FloatFieldUpdateOperationsInput | number
    after?: FloatFieldUpdateOperationsInput | number
    placeNa?: PlacesUpdateOneRequiredWithoutSpecialsByNameNestedInput
    places?: PlacesUpdateOneRequiredWithoutSpecialsByIdNestedInput
    favtype?: FavFoodUpdateManyWithoutFavtypeNestedInput
    favplacename?: FavFoodUpdateManyWithoutFavplacenameNestedInput
  }

  export type SpecialUncheckedUpdateWithoutFavfoodnameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    foodorgroc?: EnumFoodOrGrocFieldUpdateOperationsInput | $Enums.FoodOrGroc
    imagepath?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    till?: StringFieldUpdateOperationsInput | string
    before?: FloatFieldUpdateOperationsInput | number
    after?: FloatFieldUpdateOperationsInput | number
    placesId?: IntFieldUpdateOperationsInput | number
    PlaceName?: StringFieldUpdateOperationsInput | string
    favtype?: FavFoodUncheckedUpdateManyWithoutFavtypeNestedInput
    favplacename?: FavFoodUncheckedUpdateManyWithoutFavplacenameNestedInput
  }

  export type SpecialUncheckedUpdateManyWithoutFavfoodnameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    foodorgroc?: EnumFoodOrGrocFieldUpdateOperationsInput | $Enums.FoodOrGroc
    imagepath?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    till?: StringFieldUpdateOperationsInput | string
    before?: FloatFieldUpdateOperationsInput | number
    after?: FloatFieldUpdateOperationsInput | number
    placesId?: IntFieldUpdateOperationsInput | number
    PlaceName?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialUpdateWithoutFavplacenameInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    foodorgroc?: EnumFoodOrGrocFieldUpdateOperationsInput | $Enums.FoodOrGroc
    imagepath?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    till?: StringFieldUpdateOperationsInput | string
    before?: FloatFieldUpdateOperationsInput | number
    after?: FloatFieldUpdateOperationsInput | number
    placeNa?: PlacesUpdateOneRequiredWithoutSpecialsByNameNestedInput
    places?: PlacesUpdateOneRequiredWithoutSpecialsByIdNestedInput
    favtype?: FavFoodUpdateManyWithoutFavtypeNestedInput
    favfoodname?: FavFoodUpdateManyWithoutFavfoodnameNestedInput
  }

  export type SpecialUncheckedUpdateWithoutFavplacenameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    foodorgroc?: EnumFoodOrGrocFieldUpdateOperationsInput | $Enums.FoodOrGroc
    imagepath?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    till?: StringFieldUpdateOperationsInput | string
    before?: FloatFieldUpdateOperationsInput | number
    after?: FloatFieldUpdateOperationsInput | number
    placesId?: IntFieldUpdateOperationsInput | number
    PlaceName?: StringFieldUpdateOperationsInput | string
    favtype?: FavFoodUncheckedUpdateManyWithoutFavtypeNestedInput
    favfoodname?: FavFoodUncheckedUpdateManyWithoutFavfoodnameNestedInput
  }

  export type SpecialUncheckedUpdateManyWithoutFavplacenameInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    foodorgroc?: EnumFoodOrGrocFieldUpdateOperationsInput | $Enums.FoodOrGroc
    imagepath?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    till?: StringFieldUpdateOperationsInput | string
    before?: FloatFieldUpdateOperationsInput | number
    after?: FloatFieldUpdateOperationsInput | number
    placesId?: IntFieldUpdateOperationsInput | number
    PlaceName?: StringFieldUpdateOperationsInput | string
  }

  export type SpecialCreateManyPlaceNaInput = {
    id?: number
    name: string
    type: string
    poster?: string
    foodorgroc: $Enums.FoodOrGroc
    imagepath: string
    from: string
    till: string
    before: number
    after: number
    placesId: number
  }

  export type SpecialCreateManyPlacesInput = {
    id?: number
    name: string
    type: string
    poster?: string
    foodorgroc: $Enums.FoodOrGroc
    imagepath: string
    from: string
    till: string
    before: number
    after: number
    PlaceName: string
  }

  export type SpecialUpdateWithoutPlaceNaInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    foodorgroc?: EnumFoodOrGrocFieldUpdateOperationsInput | $Enums.FoodOrGroc
    imagepath?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    till?: StringFieldUpdateOperationsInput | string
    before?: FloatFieldUpdateOperationsInput | number
    after?: FloatFieldUpdateOperationsInput | number
    places?: PlacesUpdateOneRequiredWithoutSpecialsByIdNestedInput
    favtype?: FavFoodUpdateManyWithoutFavtypeNestedInput
    favfoodname?: FavFoodUpdateManyWithoutFavfoodnameNestedInput
    favplacename?: FavFoodUpdateManyWithoutFavplacenameNestedInput
  }

  export type SpecialUncheckedUpdateWithoutPlaceNaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    foodorgroc?: EnumFoodOrGrocFieldUpdateOperationsInput | $Enums.FoodOrGroc
    imagepath?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    till?: StringFieldUpdateOperationsInput | string
    before?: FloatFieldUpdateOperationsInput | number
    after?: FloatFieldUpdateOperationsInput | number
    placesId?: IntFieldUpdateOperationsInput | number
    favtype?: FavFoodUncheckedUpdateManyWithoutFavtypeNestedInput
    favfoodname?: FavFoodUncheckedUpdateManyWithoutFavfoodnameNestedInput
    favplacename?: FavFoodUncheckedUpdateManyWithoutFavplacenameNestedInput
  }

  export type SpecialUncheckedUpdateManyWithoutPlaceNaInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    foodorgroc?: EnumFoodOrGrocFieldUpdateOperationsInput | $Enums.FoodOrGroc
    imagepath?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    till?: StringFieldUpdateOperationsInput | string
    before?: FloatFieldUpdateOperationsInput | number
    after?: FloatFieldUpdateOperationsInput | number
    placesId?: IntFieldUpdateOperationsInput | number
  }

  export type SpecialUpdateWithoutPlacesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    foodorgroc?: EnumFoodOrGrocFieldUpdateOperationsInput | $Enums.FoodOrGroc
    imagepath?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    till?: StringFieldUpdateOperationsInput | string
    before?: FloatFieldUpdateOperationsInput | number
    after?: FloatFieldUpdateOperationsInput | number
    placeNa?: PlacesUpdateOneRequiredWithoutSpecialsByNameNestedInput
    favtype?: FavFoodUpdateManyWithoutFavtypeNestedInput
    favfoodname?: FavFoodUpdateManyWithoutFavfoodnameNestedInput
    favplacename?: FavFoodUpdateManyWithoutFavplacenameNestedInput
  }

  export type SpecialUncheckedUpdateWithoutPlacesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    foodorgroc?: EnumFoodOrGrocFieldUpdateOperationsInput | $Enums.FoodOrGroc
    imagepath?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    till?: StringFieldUpdateOperationsInput | string
    before?: FloatFieldUpdateOperationsInput | number
    after?: FloatFieldUpdateOperationsInput | number
    PlaceName?: StringFieldUpdateOperationsInput | string
    favtype?: FavFoodUncheckedUpdateManyWithoutFavtypeNestedInput
    favfoodname?: FavFoodUncheckedUpdateManyWithoutFavfoodnameNestedInput
    favplacename?: FavFoodUncheckedUpdateManyWithoutFavplacenameNestedInput
  }

  export type SpecialUncheckedUpdateManyWithoutPlacesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    foodorgroc?: EnumFoodOrGrocFieldUpdateOperationsInput | $Enums.FoodOrGroc
    imagepath?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    till?: StringFieldUpdateOperationsInput | string
    before?: FloatFieldUpdateOperationsInput | number
    after?: FloatFieldUpdateOperationsInput | number
    PlaceName?: StringFieldUpdateOperationsInput | string
  }

  export type FavFoodUpdateWithoutFavtypeInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    place?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodname?: NullableStringFieldUpdateOperationsInput | string | null
    fplacename?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodtype?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutFavfoodsNestedInput
    favfoodname?: SpecialUpdateManyWithoutFavfoodnameNestedInput
    favplacename?: SpecialUpdateManyWithoutFavplacenameNestedInput
  }

  export type FavFoodUncheckedUpdateWithoutFavtypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    place?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodname?: NullableStringFieldUpdateOperationsInput | string | null
    fplacename?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodtype?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: NullableStringFieldUpdateOperationsInput | string | null
    favfoodname?: SpecialUncheckedUpdateManyWithoutFavfoodnameNestedInput
    favplacename?: SpecialUncheckedUpdateManyWithoutFavplacenameNestedInput
  }

  export type FavFoodUncheckedUpdateManyWithoutFavtypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    place?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodname?: NullableStringFieldUpdateOperationsInput | string | null
    fplacename?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodtype?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavFoodUpdateWithoutFavfoodnameInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    place?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodname?: NullableStringFieldUpdateOperationsInput | string | null
    fplacename?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodtype?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutFavfoodsNestedInput
    favtype?: SpecialUpdateManyWithoutFavtypeNestedInput
    favplacename?: SpecialUpdateManyWithoutFavplacenameNestedInput
  }

  export type FavFoodUncheckedUpdateWithoutFavfoodnameInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    place?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodname?: NullableStringFieldUpdateOperationsInput | string | null
    fplacename?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodtype?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: NullableStringFieldUpdateOperationsInput | string | null
    favtype?: SpecialUncheckedUpdateManyWithoutFavtypeNestedInput
    favplacename?: SpecialUncheckedUpdateManyWithoutFavplacenameNestedInput
  }

  export type FavFoodUncheckedUpdateManyWithoutFavfoodnameInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    place?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodname?: NullableStringFieldUpdateOperationsInput | string | null
    fplacename?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodtype?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FavFoodUpdateWithoutFavplacenameInput = {
    type?: NullableStringFieldUpdateOperationsInput | string | null
    place?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodname?: NullableStringFieldUpdateOperationsInput | string | null
    fplacename?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodtype?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutFavfoodsNestedInput
    favtype?: SpecialUpdateManyWithoutFavtypeNestedInput
    favfoodname?: SpecialUpdateManyWithoutFavfoodnameNestedInput
  }

  export type FavFoodUncheckedUpdateWithoutFavplacenameInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    place?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodname?: NullableStringFieldUpdateOperationsInput | string | null
    fplacename?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodtype?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: NullableStringFieldUpdateOperationsInput | string | null
    favtype?: SpecialUncheckedUpdateManyWithoutFavtypeNestedInput
    favfoodname?: SpecialUncheckedUpdateManyWithoutFavfoodnameNestedInput
  }

  export type FavFoodUncheckedUpdateManyWithoutFavplacenameInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    place?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodname?: NullableStringFieldUpdateOperationsInput | string | null
    fplacename?: NullableStringFieldUpdateOperationsInput | string | null
    ffoodtype?: NullableStringFieldUpdateOperationsInput | string | null
    notified?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FavFoodCountOutputTypeDefaultArgs instead
     */
    export type FavFoodCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FavFoodCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlacesCountOutputTypeDefaultArgs instead
     */
    export type PlacesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlacesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpecialCountOutputTypeDefaultArgs instead
     */
    export type SpecialCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpecialCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FavFoodDefaultArgs instead
     */
    export type FavFoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FavFoodDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlacesDefaultArgs instead
     */
    export type PlacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlacesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SpecialDefaultArgs instead
     */
    export type SpecialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SpecialDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}