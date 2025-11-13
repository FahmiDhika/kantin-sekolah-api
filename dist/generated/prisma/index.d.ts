
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model siswa
 * 
 */
export type siswa = $Result.DefaultSelection<Prisma.$siswaPayload>
/**
 * Model stan
 * 
 */
export type stan = $Result.DefaultSelection<Prisma.$stanPayload>
/**
 * Model menu
 * 
 */
export type menu = $Result.DefaultSelection<Prisma.$menuPayload>
/**
 * Model diskon
 * 
 */
export type diskon = $Result.DefaultSelection<Prisma.$diskonPayload>
/**
 * Model menu_diskon
 * 
 */
export type menu_diskon = $Result.DefaultSelection<Prisma.$menu_diskonPayload>
/**
 * Model transaksi
 * 
 */
export type transaksi = $Result.DefaultSelection<Prisma.$transaksiPayload>
/**
 * Model detail_transaksi
 * 
 */
export type detail_transaksi = $Result.DefaultSelection<Prisma.$detail_transaksiPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const role: {
  ADMIN_STAN: 'ADMIN_STAN',
  SISWA: 'SISWA'
};

export type role = (typeof role)[keyof typeof role]


export const jenis: {
  MAKANAN: 'MAKANAN',
  MINUMAN: 'MINUMAN'
};

export type jenis = (typeof jenis)[keyof typeof jenis]


export const status: {
  BELUM: 'BELUM',
  DIMASAK: 'DIMASAK',
  SELESAI: 'SELESAI'
};

export type status = (typeof status)[keyof typeof status]

}

export type role = $Enums.role

export const role: typeof $Enums.role

export type jenis = $Enums.jenis

export const jenis: typeof $Enums.jenis

export type status = $Enums.status

export const status: typeof $Enums.status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.siswa`: Exposes CRUD operations for the **siswa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Siswas
    * const siswas = await prisma.siswa.findMany()
    * ```
    */
  get siswa(): Prisma.siswaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stan`: Exposes CRUD operations for the **stan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stans
    * const stans = await prisma.stan.findMany()
    * ```
    */
  get stan(): Prisma.stanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.menuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diskon`: Exposes CRUD operations for the **diskon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diskons
    * const diskons = await prisma.diskon.findMany()
    * ```
    */
  get diskon(): Prisma.diskonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menu_diskon`: Exposes CRUD operations for the **menu_diskon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menu_diskons
    * const menu_diskons = await prisma.menu_diskon.findMany()
    * ```
    */
  get menu_diskon(): Prisma.menu_diskonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaksi`: Exposes CRUD operations for the **transaksi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaksis
    * const transaksis = await prisma.transaksi.findMany()
    * ```
    */
  get transaksi(): Prisma.transaksiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detail_transaksi`: Exposes CRUD operations for the **detail_transaksi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detail_transaksis
    * const detail_transaksis = await prisma.detail_transaksi.findMany()
    * ```
    */
  get detail_transaksi(): Prisma.detail_transaksiDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    users: 'users',
    siswa: 'siswa',
    stan: 'stan',
    menu: 'menu',
    diskon: 'diskon',
    menu_diskon: 'menu_diskon',
    transaksi: 'transaksi',
    detail_transaksi: 'detail_transaksi'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "siswa" | "stan" | "menu" | "diskon" | "menu_diskon" | "transaksi" | "detail_transaksi"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      siswa: {
        payload: Prisma.$siswaPayload<ExtArgs>
        fields: Prisma.siswaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.siswaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siswaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.siswaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siswaPayload>
          }
          findFirst: {
            args: Prisma.siswaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siswaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.siswaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siswaPayload>
          }
          findMany: {
            args: Prisma.siswaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siswaPayload>[]
          }
          create: {
            args: Prisma.siswaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siswaPayload>
          }
          createMany: {
            args: Prisma.siswaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.siswaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siswaPayload>[]
          }
          delete: {
            args: Prisma.siswaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siswaPayload>
          }
          update: {
            args: Prisma.siswaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siswaPayload>
          }
          deleteMany: {
            args: Prisma.siswaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.siswaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.siswaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siswaPayload>[]
          }
          upsert: {
            args: Prisma.siswaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$siswaPayload>
          }
          aggregate: {
            args: Prisma.SiswaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiswa>
          }
          groupBy: {
            args: Prisma.siswaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiswaGroupByOutputType>[]
          }
          count: {
            args: Prisma.siswaCountArgs<ExtArgs>
            result: $Utils.Optional<SiswaCountAggregateOutputType> | number
          }
        }
      }
      stan: {
        payload: Prisma.$stanPayload<ExtArgs>
        fields: Prisma.stanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stanPayload>
          }
          findFirst: {
            args: Prisma.stanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stanPayload>
          }
          findMany: {
            args: Prisma.stanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stanPayload>[]
          }
          create: {
            args: Prisma.stanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stanPayload>
          }
          createMany: {
            args: Prisma.stanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stanPayload>[]
          }
          delete: {
            args: Prisma.stanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stanPayload>
          }
          update: {
            args: Prisma.stanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stanPayload>
          }
          deleteMany: {
            args: Prisma.stanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stanPayload>[]
          }
          upsert: {
            args: Prisma.stanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stanPayload>
          }
          aggregate: {
            args: Prisma.StanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStan>
          }
          groupBy: {
            args: Prisma.stanGroupByArgs<ExtArgs>
            result: $Utils.Optional<StanGroupByOutputType>[]
          }
          count: {
            args: Prisma.stanCountArgs<ExtArgs>
            result: $Utils.Optional<StanCountAggregateOutputType> | number
          }
        }
      }
      menu: {
        payload: Prisma.$menuPayload<ExtArgs>
        fields: Prisma.menuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.menuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.menuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          findFirst: {
            args: Prisma.menuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.menuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          findMany: {
            args: Prisma.menuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>[]
          }
          create: {
            args: Prisma.menuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          createMany: {
            args: Prisma.menuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.menuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>[]
          }
          delete: {
            args: Prisma.menuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          update: {
            args: Prisma.menuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          deleteMany: {
            args: Prisma.menuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.menuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.menuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>[]
          }
          upsert: {
            args: Prisma.menuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menuPayload>
          }
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu>
          }
          groupBy: {
            args: Prisma.menuGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.menuCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCountAggregateOutputType> | number
          }
        }
      }
      diskon: {
        payload: Prisma.$diskonPayload<ExtArgs>
        fields: Prisma.diskonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.diskonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diskonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.diskonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diskonPayload>
          }
          findFirst: {
            args: Prisma.diskonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diskonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.diskonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diskonPayload>
          }
          findMany: {
            args: Prisma.diskonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diskonPayload>[]
          }
          create: {
            args: Prisma.diskonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diskonPayload>
          }
          createMany: {
            args: Prisma.diskonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.diskonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diskonPayload>[]
          }
          delete: {
            args: Prisma.diskonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diskonPayload>
          }
          update: {
            args: Prisma.diskonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diskonPayload>
          }
          deleteMany: {
            args: Prisma.diskonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.diskonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.diskonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diskonPayload>[]
          }
          upsert: {
            args: Prisma.diskonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diskonPayload>
          }
          aggregate: {
            args: Prisma.DiskonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiskon>
          }
          groupBy: {
            args: Prisma.diskonGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiskonGroupByOutputType>[]
          }
          count: {
            args: Prisma.diskonCountArgs<ExtArgs>
            result: $Utils.Optional<DiskonCountAggregateOutputType> | number
          }
        }
      }
      menu_diskon: {
        payload: Prisma.$menu_diskonPayload<ExtArgs>
        fields: Prisma.menu_diskonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.menu_diskonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_diskonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.menu_diskonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_diskonPayload>
          }
          findFirst: {
            args: Prisma.menu_diskonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_diskonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.menu_diskonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_diskonPayload>
          }
          findMany: {
            args: Prisma.menu_diskonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_diskonPayload>[]
          }
          create: {
            args: Prisma.menu_diskonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_diskonPayload>
          }
          createMany: {
            args: Prisma.menu_diskonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.menu_diskonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_diskonPayload>[]
          }
          delete: {
            args: Prisma.menu_diskonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_diskonPayload>
          }
          update: {
            args: Prisma.menu_diskonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_diskonPayload>
          }
          deleteMany: {
            args: Prisma.menu_diskonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.menu_diskonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.menu_diskonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_diskonPayload>[]
          }
          upsert: {
            args: Prisma.menu_diskonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$menu_diskonPayload>
          }
          aggregate: {
            args: Prisma.Menu_diskonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu_diskon>
          }
          groupBy: {
            args: Prisma.menu_diskonGroupByArgs<ExtArgs>
            result: $Utils.Optional<Menu_diskonGroupByOutputType>[]
          }
          count: {
            args: Prisma.menu_diskonCountArgs<ExtArgs>
            result: $Utils.Optional<Menu_diskonCountAggregateOutputType> | number
          }
        }
      }
      transaksi: {
        payload: Prisma.$transaksiPayload<ExtArgs>
        fields: Prisma.transaksiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transaksiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transaksiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          findFirst: {
            args: Prisma.transaksiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transaksiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          findMany: {
            args: Prisma.transaksiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>[]
          }
          create: {
            args: Prisma.transaksiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          createMany: {
            args: Prisma.transaksiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transaksiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>[]
          }
          delete: {
            args: Prisma.transaksiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          update: {
            args: Prisma.transaksiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          deleteMany: {
            args: Prisma.transaksiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transaksiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transaksiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>[]
          }
          upsert: {
            args: Prisma.transaksiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transaksiPayload>
          }
          aggregate: {
            args: Prisma.TransaksiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaksi>
          }
          groupBy: {
            args: Prisma.transaksiGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransaksiGroupByOutputType>[]
          }
          count: {
            args: Prisma.transaksiCountArgs<ExtArgs>
            result: $Utils.Optional<TransaksiCountAggregateOutputType> | number
          }
        }
      }
      detail_transaksi: {
        payload: Prisma.$detail_transaksiPayload<ExtArgs>
        fields: Prisma.detail_transaksiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.detail_transaksiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_transaksiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.detail_transaksiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_transaksiPayload>
          }
          findFirst: {
            args: Prisma.detail_transaksiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_transaksiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.detail_transaksiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_transaksiPayload>
          }
          findMany: {
            args: Prisma.detail_transaksiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_transaksiPayload>[]
          }
          create: {
            args: Prisma.detail_transaksiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_transaksiPayload>
          }
          createMany: {
            args: Prisma.detail_transaksiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.detail_transaksiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_transaksiPayload>[]
          }
          delete: {
            args: Prisma.detail_transaksiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_transaksiPayload>
          }
          update: {
            args: Prisma.detail_transaksiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_transaksiPayload>
          }
          deleteMany: {
            args: Prisma.detail_transaksiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.detail_transaksiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.detail_transaksiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_transaksiPayload>[]
          }
          upsert: {
            args: Prisma.detail_transaksiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$detail_transaksiPayload>
          }
          aggregate: {
            args: Prisma.Detail_transaksiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetail_transaksi>
          }
          groupBy: {
            args: Prisma.detail_transaksiGroupByArgs<ExtArgs>
            result: $Utils.Optional<Detail_transaksiGroupByOutputType>[]
          }
          count: {
            args: Prisma.detail_transaksiCountArgs<ExtArgs>
            result: $Utils.Optional<Detail_transaksiCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    siswa?: siswaOmit
    stan?: stanOmit
    menu?: menuOmit
    diskon?: diskonOmit
    menu_diskon?: menu_diskonOmit
    transaksi?: transaksiOmit
    detail_transaksi?: detail_transaksiOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    siswa: number
    stan: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    siswa?: boolean | UsersCountOutputTypeCountSiswaArgs
    stan?: boolean | UsersCountOutputTypeCountStanArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSiswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: siswaWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountStanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stanWhereInput
  }


  /**
   * Count Type SiswaCountOutputType
   */

  export type SiswaCountOutputType = {
    transaksi: number
  }

  export type SiswaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | SiswaCountOutputTypeCountTransaksiArgs
  }

  // Custom InputTypes
  /**
   * SiswaCountOutputType without action
   */
  export type SiswaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiswaCountOutputType
     */
    select?: SiswaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SiswaCountOutputType without action
   */
  export type SiswaCountOutputTypeCountTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaksiWhereInput
  }


  /**
   * Count Type StanCountOutputType
   */

  export type StanCountOutputType = {
    diskon: number
    menu: number
    transaksi: number
  }

  export type StanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diskon?: boolean | StanCountOutputTypeCountDiskonArgs
    menu?: boolean | StanCountOutputTypeCountMenuArgs
    transaksi?: boolean | StanCountOutputTypeCountTransaksiArgs
  }

  // Custom InputTypes
  /**
   * StanCountOutputType without action
   */
  export type StanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StanCountOutputType
     */
    select?: StanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StanCountOutputType without action
   */
  export type StanCountOutputTypeCountDiskonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: diskonWhereInput
  }

  /**
   * StanCountOutputType without action
   */
  export type StanCountOutputTypeCountMenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menuWhereInput
  }

  /**
   * StanCountOutputType without action
   */
  export type StanCountOutputTypeCountTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaksiWhereInput
  }


  /**
   * Count Type MenuCountOutputType
   */

  export type MenuCountOutputType = {
    detail_transaksi: number
    menu_diskon: number
  }

  export type MenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail_transaksi?: boolean | MenuCountOutputTypeCountDetail_transaksiArgs
    menu_diskon?: boolean | MenuCountOutputTypeCountMenu_diskonArgs
  }

  // Custom InputTypes
  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: MenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountDetail_transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detail_transaksiWhereInput
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountMenu_diskonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menu_diskonWhereInput
  }


  /**
   * Count Type DiskonCountOutputType
   */

  export type DiskonCountOutputType = {
    menu_diskon: number
  }

  export type DiskonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu_diskon?: boolean | DiskonCountOutputTypeCountMenu_diskonArgs
  }

  // Custom InputTypes
  /**
   * DiskonCountOutputType without action
   */
  export type DiskonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiskonCountOutputType
     */
    select?: DiskonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiskonCountOutputType without action
   */
  export type DiskonCountOutputTypeCountMenu_diskonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menu_diskonWhereInput
  }


  /**
   * Count Type TransaksiCountOutputType
   */

  export type TransaksiCountOutputType = {
    detail_transaksi: number
  }

  export type TransaksiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail_transaksi?: boolean | TransaksiCountOutputTypeCountDetail_transaksiArgs
  }

  // Custom InputTypes
  /**
   * TransaksiCountOutputType without action
   */
  export type TransaksiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiCountOutputType
     */
    select?: TransaksiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransaksiCountOutputType without action
   */
  export type TransaksiCountOutputTypeCountDetail_transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detail_transaksiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: $Enums.role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    role: $Enums.role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    password: string
    role: $Enums.role
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    siswa?: boolean | users$siswaArgs<ExtArgs>
    stan?: boolean | users$stanArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    siswa?: boolean | users$siswaArgs<ExtArgs>
    stan?: boolean | users$stanArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      siswa: Prisma.$siswaPayload<ExtArgs>[]
      stan: Prisma.$stanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      role: $Enums.role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    siswa<T extends users$siswaArgs<ExtArgs> = {}>(args?: Subset<T, users$siswaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stan<T extends users$stanArgs<ExtArgs> = {}>(args?: Subset<T, users$stanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'role'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.siswa
   */
  export type users$siswaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the siswa
     */
    omit?: siswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: siswaInclude<ExtArgs> | null
    where?: siswaWhereInput
    orderBy?: siswaOrderByWithRelationInput | siswaOrderByWithRelationInput[]
    cursor?: siswaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SiswaScalarFieldEnum | SiswaScalarFieldEnum[]
  }

  /**
   * users.stan
   */
  export type users$stanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stan
     */
    select?: stanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stan
     */
    omit?: stanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stanInclude<ExtArgs> | null
    where?: stanWhereInput
    orderBy?: stanOrderByWithRelationInput | stanOrderByWithRelationInput[]
    cursor?: stanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StanScalarFieldEnum | StanScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model siswa
   */

  export type AggregateSiswa = {
    _count: SiswaCountAggregateOutputType | null
    _avg: SiswaAvgAggregateOutputType | null
    _sum: SiswaSumAggregateOutputType | null
    _min: SiswaMinAggregateOutputType | null
    _max: SiswaMaxAggregateOutputType | null
  }

  export type SiswaAvgAggregateOutputType = {
    id: number | null
    id_user: number | null
  }

  export type SiswaSumAggregateOutputType = {
    id: number | null
    id_user: number | null
  }

  export type SiswaMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    nama: string | null
    alamat: string | null
    telepon: string | null
    foto: string | null
    id_user: number | null
  }

  export type SiswaMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    nama: string | null
    alamat: string | null
    telepon: string | null
    foto: string | null
    id_user: number | null
  }

  export type SiswaCountAggregateOutputType = {
    id: number
    uuid: number
    nama: number
    alamat: number
    telepon: number
    foto: number
    id_user: number
    _all: number
  }


  export type SiswaAvgAggregateInputType = {
    id?: true
    id_user?: true
  }

  export type SiswaSumAggregateInputType = {
    id?: true
    id_user?: true
  }

  export type SiswaMinAggregateInputType = {
    id?: true
    uuid?: true
    nama?: true
    alamat?: true
    telepon?: true
    foto?: true
    id_user?: true
  }

  export type SiswaMaxAggregateInputType = {
    id?: true
    uuid?: true
    nama?: true
    alamat?: true
    telepon?: true
    foto?: true
    id_user?: true
  }

  export type SiswaCountAggregateInputType = {
    id?: true
    uuid?: true
    nama?: true
    alamat?: true
    telepon?: true
    foto?: true
    id_user?: true
    _all?: true
  }

  export type SiswaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which siswa to aggregate.
     */
    where?: siswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of siswas to fetch.
     */
    orderBy?: siswaOrderByWithRelationInput | siswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: siswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` siswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` siswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned siswas
    **/
    _count?: true | SiswaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiswaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiswaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiswaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiswaMaxAggregateInputType
  }

  export type GetSiswaAggregateType<T extends SiswaAggregateArgs> = {
        [P in keyof T & keyof AggregateSiswa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiswa[P]>
      : GetScalarType<T[P], AggregateSiswa[P]>
  }




  export type siswaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: siswaWhereInput
    orderBy?: siswaOrderByWithAggregationInput | siswaOrderByWithAggregationInput[]
    by: SiswaScalarFieldEnum[] | SiswaScalarFieldEnum
    having?: siswaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiswaCountAggregateInputType | true
    _avg?: SiswaAvgAggregateInputType
    _sum?: SiswaSumAggregateInputType
    _min?: SiswaMinAggregateInputType
    _max?: SiswaMaxAggregateInputType
  }

  export type SiswaGroupByOutputType = {
    id: number
    uuid: string
    nama: string
    alamat: string
    telepon: string
    foto: string
    id_user: number
    _count: SiswaCountAggregateOutputType | null
    _avg: SiswaAvgAggregateOutputType | null
    _sum: SiswaSumAggregateOutputType | null
    _min: SiswaMinAggregateOutputType | null
    _max: SiswaMaxAggregateOutputType | null
  }

  type GetSiswaGroupByPayload<T extends siswaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiswaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiswaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiswaGroupByOutputType[P]>
            : GetScalarType<T[P], SiswaGroupByOutputType[P]>
        }
      >
    >


  export type siswaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    nama?: boolean
    alamat?: boolean
    telepon?: boolean
    foto?: boolean
    id_user?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    transaksi?: boolean | siswa$transaksiArgs<ExtArgs>
    _count?: boolean | SiswaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siswa"]>

  export type siswaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    nama?: boolean
    alamat?: boolean
    telepon?: boolean
    foto?: boolean
    id_user?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siswa"]>

  export type siswaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    nama?: boolean
    alamat?: boolean
    telepon?: boolean
    foto?: boolean
    id_user?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siswa"]>

  export type siswaSelectScalar = {
    id?: boolean
    uuid?: boolean
    nama?: boolean
    alamat?: boolean
    telepon?: boolean
    foto?: boolean
    id_user?: boolean
  }

  export type siswaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "nama" | "alamat" | "telepon" | "foto" | "id_user", ExtArgs["result"]["siswa"]>
  export type siswaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    transaksi?: boolean | siswa$transaksiArgs<ExtArgs>
    _count?: boolean | SiswaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type siswaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type siswaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $siswaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "siswa"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      transaksi: Prisma.$transaksiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      nama: string
      alamat: string
      telepon: string
      foto: string
      id_user: number
    }, ExtArgs["result"]["siswa"]>
    composites: {}
  }

  type siswaGetPayload<S extends boolean | null | undefined | siswaDefaultArgs> = $Result.GetResult<Prisma.$siswaPayload, S>

  type siswaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<siswaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiswaCountAggregateInputType | true
    }

  export interface siswaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['siswa'], meta: { name: 'siswa' } }
    /**
     * Find zero or one Siswa that matches the filter.
     * @param {siswaFindUniqueArgs} args - Arguments to find a Siswa
     * @example
     * // Get one Siswa
     * const siswa = await prisma.siswa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends siswaFindUniqueArgs>(args: SelectSubset<T, siswaFindUniqueArgs<ExtArgs>>): Prisma__siswaClient<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Siswa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {siswaFindUniqueOrThrowArgs} args - Arguments to find a Siswa
     * @example
     * // Get one Siswa
     * const siswa = await prisma.siswa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends siswaFindUniqueOrThrowArgs>(args: SelectSubset<T, siswaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__siswaClient<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Siswa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {siswaFindFirstArgs} args - Arguments to find a Siswa
     * @example
     * // Get one Siswa
     * const siswa = await prisma.siswa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends siswaFindFirstArgs>(args?: SelectSubset<T, siswaFindFirstArgs<ExtArgs>>): Prisma__siswaClient<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Siswa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {siswaFindFirstOrThrowArgs} args - Arguments to find a Siswa
     * @example
     * // Get one Siswa
     * const siswa = await prisma.siswa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends siswaFindFirstOrThrowArgs>(args?: SelectSubset<T, siswaFindFirstOrThrowArgs<ExtArgs>>): Prisma__siswaClient<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Siswas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {siswaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Siswas
     * const siswas = await prisma.siswa.findMany()
     * 
     * // Get first 10 Siswas
     * const siswas = await prisma.siswa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siswaWithIdOnly = await prisma.siswa.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends siswaFindManyArgs>(args?: SelectSubset<T, siswaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Siswa.
     * @param {siswaCreateArgs} args - Arguments to create a Siswa.
     * @example
     * // Create one Siswa
     * const Siswa = await prisma.siswa.create({
     *   data: {
     *     // ... data to create a Siswa
     *   }
     * })
     * 
     */
    create<T extends siswaCreateArgs>(args: SelectSubset<T, siswaCreateArgs<ExtArgs>>): Prisma__siswaClient<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Siswas.
     * @param {siswaCreateManyArgs} args - Arguments to create many Siswas.
     * @example
     * // Create many Siswas
     * const siswa = await prisma.siswa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends siswaCreateManyArgs>(args?: SelectSubset<T, siswaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Siswas and returns the data saved in the database.
     * @param {siswaCreateManyAndReturnArgs} args - Arguments to create many Siswas.
     * @example
     * // Create many Siswas
     * const siswa = await prisma.siswa.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Siswas and only return the `id`
     * const siswaWithIdOnly = await prisma.siswa.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends siswaCreateManyAndReturnArgs>(args?: SelectSubset<T, siswaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Siswa.
     * @param {siswaDeleteArgs} args - Arguments to delete one Siswa.
     * @example
     * // Delete one Siswa
     * const Siswa = await prisma.siswa.delete({
     *   where: {
     *     // ... filter to delete one Siswa
     *   }
     * })
     * 
     */
    delete<T extends siswaDeleteArgs>(args: SelectSubset<T, siswaDeleteArgs<ExtArgs>>): Prisma__siswaClient<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Siswa.
     * @param {siswaUpdateArgs} args - Arguments to update one Siswa.
     * @example
     * // Update one Siswa
     * const siswa = await prisma.siswa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends siswaUpdateArgs>(args: SelectSubset<T, siswaUpdateArgs<ExtArgs>>): Prisma__siswaClient<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Siswas.
     * @param {siswaDeleteManyArgs} args - Arguments to filter Siswas to delete.
     * @example
     * // Delete a few Siswas
     * const { count } = await prisma.siswa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends siswaDeleteManyArgs>(args?: SelectSubset<T, siswaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Siswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {siswaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Siswas
     * const siswa = await prisma.siswa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends siswaUpdateManyArgs>(args: SelectSubset<T, siswaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Siswas and returns the data updated in the database.
     * @param {siswaUpdateManyAndReturnArgs} args - Arguments to update many Siswas.
     * @example
     * // Update many Siswas
     * const siswa = await prisma.siswa.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Siswas and only return the `id`
     * const siswaWithIdOnly = await prisma.siswa.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends siswaUpdateManyAndReturnArgs>(args: SelectSubset<T, siswaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Siswa.
     * @param {siswaUpsertArgs} args - Arguments to update or create a Siswa.
     * @example
     * // Update or create a Siswa
     * const siswa = await prisma.siswa.upsert({
     *   create: {
     *     // ... data to create a Siswa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Siswa we want to update
     *   }
     * })
     */
    upsert<T extends siswaUpsertArgs>(args: SelectSubset<T, siswaUpsertArgs<ExtArgs>>): Prisma__siswaClient<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Siswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {siswaCountArgs} args - Arguments to filter Siswas to count.
     * @example
     * // Count the number of Siswas
     * const count = await prisma.siswa.count({
     *   where: {
     *     // ... the filter for the Siswas we want to count
     *   }
     * })
    **/
    count<T extends siswaCountArgs>(
      args?: Subset<T, siswaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiswaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Siswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiswaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiswaAggregateArgs>(args: Subset<T, SiswaAggregateArgs>): Prisma.PrismaPromise<GetSiswaAggregateType<T>>

    /**
     * Group by Siswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {siswaGroupByArgs} args - Group by arguments.
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
      T extends siswaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: siswaGroupByArgs['orderBy'] }
        : { orderBy?: siswaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, siswaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiswaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the siswa model
   */
  readonly fields: siswaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for siswa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__siswaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaksi<T extends siswa$transaksiArgs<ExtArgs> = {}>(args?: Subset<T, siswa$transaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the siswa model
   */
  interface siswaFieldRefs {
    readonly id: FieldRef<"siswa", 'Int'>
    readonly uuid: FieldRef<"siswa", 'String'>
    readonly nama: FieldRef<"siswa", 'String'>
    readonly alamat: FieldRef<"siswa", 'String'>
    readonly telepon: FieldRef<"siswa", 'String'>
    readonly foto: FieldRef<"siswa", 'String'>
    readonly id_user: FieldRef<"siswa", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * siswa findUnique
   */
  export type siswaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the siswa
     */
    omit?: siswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: siswaInclude<ExtArgs> | null
    /**
     * Filter, which siswa to fetch.
     */
    where: siswaWhereUniqueInput
  }

  /**
   * siswa findUniqueOrThrow
   */
  export type siswaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the siswa
     */
    omit?: siswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: siswaInclude<ExtArgs> | null
    /**
     * Filter, which siswa to fetch.
     */
    where: siswaWhereUniqueInput
  }

  /**
   * siswa findFirst
   */
  export type siswaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the siswa
     */
    omit?: siswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: siswaInclude<ExtArgs> | null
    /**
     * Filter, which siswa to fetch.
     */
    where?: siswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of siswas to fetch.
     */
    orderBy?: siswaOrderByWithRelationInput | siswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for siswas.
     */
    cursor?: siswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` siswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` siswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of siswas.
     */
    distinct?: SiswaScalarFieldEnum | SiswaScalarFieldEnum[]
  }

  /**
   * siswa findFirstOrThrow
   */
  export type siswaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the siswa
     */
    omit?: siswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: siswaInclude<ExtArgs> | null
    /**
     * Filter, which siswa to fetch.
     */
    where?: siswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of siswas to fetch.
     */
    orderBy?: siswaOrderByWithRelationInput | siswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for siswas.
     */
    cursor?: siswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` siswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` siswas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of siswas.
     */
    distinct?: SiswaScalarFieldEnum | SiswaScalarFieldEnum[]
  }

  /**
   * siswa findMany
   */
  export type siswaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the siswa
     */
    omit?: siswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: siswaInclude<ExtArgs> | null
    /**
     * Filter, which siswas to fetch.
     */
    where?: siswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of siswas to fetch.
     */
    orderBy?: siswaOrderByWithRelationInput | siswaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing siswas.
     */
    cursor?: siswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` siswas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` siswas.
     */
    skip?: number
    distinct?: SiswaScalarFieldEnum | SiswaScalarFieldEnum[]
  }

  /**
   * siswa create
   */
  export type siswaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the siswa
     */
    omit?: siswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: siswaInclude<ExtArgs> | null
    /**
     * The data needed to create a siswa.
     */
    data: XOR<siswaCreateInput, siswaUncheckedCreateInput>
  }

  /**
   * siswa createMany
   */
  export type siswaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many siswas.
     */
    data: siswaCreateManyInput | siswaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * siswa createManyAndReturn
   */
  export type siswaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the siswa
     */
    omit?: siswaOmit<ExtArgs> | null
    /**
     * The data used to create many siswas.
     */
    data: siswaCreateManyInput | siswaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: siswaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * siswa update
   */
  export type siswaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the siswa
     */
    omit?: siswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: siswaInclude<ExtArgs> | null
    /**
     * The data needed to update a siswa.
     */
    data: XOR<siswaUpdateInput, siswaUncheckedUpdateInput>
    /**
     * Choose, which siswa to update.
     */
    where: siswaWhereUniqueInput
  }

  /**
   * siswa updateMany
   */
  export type siswaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update siswas.
     */
    data: XOR<siswaUpdateManyMutationInput, siswaUncheckedUpdateManyInput>
    /**
     * Filter which siswas to update
     */
    where?: siswaWhereInput
    /**
     * Limit how many siswas to update.
     */
    limit?: number
  }

  /**
   * siswa updateManyAndReturn
   */
  export type siswaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the siswa
     */
    omit?: siswaOmit<ExtArgs> | null
    /**
     * The data used to update siswas.
     */
    data: XOR<siswaUpdateManyMutationInput, siswaUncheckedUpdateManyInput>
    /**
     * Filter which siswas to update
     */
    where?: siswaWhereInput
    /**
     * Limit how many siswas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: siswaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * siswa upsert
   */
  export type siswaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the siswa
     */
    omit?: siswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: siswaInclude<ExtArgs> | null
    /**
     * The filter to search for the siswa to update in case it exists.
     */
    where: siswaWhereUniqueInput
    /**
     * In case the siswa found by the `where` argument doesn't exist, create a new siswa with this data.
     */
    create: XOR<siswaCreateInput, siswaUncheckedCreateInput>
    /**
     * In case the siswa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<siswaUpdateInput, siswaUncheckedUpdateInput>
  }

  /**
   * siswa delete
   */
  export type siswaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the siswa
     */
    omit?: siswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: siswaInclude<ExtArgs> | null
    /**
     * Filter which siswa to delete.
     */
    where: siswaWhereUniqueInput
  }

  /**
   * siswa deleteMany
   */
  export type siswaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which siswas to delete
     */
    where?: siswaWhereInput
    /**
     * Limit how many siswas to delete.
     */
    limit?: number
  }

  /**
   * siswa.transaksi
   */
  export type siswa$transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    where?: transaksiWhereInput
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    cursor?: transaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * siswa without action
   */
  export type siswaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the siswa
     */
    select?: siswaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the siswa
     */
    omit?: siswaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: siswaInclude<ExtArgs> | null
  }


  /**
   * Model stan
   */

  export type AggregateStan = {
    _count: StanCountAggregateOutputType | null
    _avg: StanAvgAggregateOutputType | null
    _sum: StanSumAggregateOutputType | null
    _min: StanMinAggregateOutputType | null
    _max: StanMaxAggregateOutputType | null
  }

  export type StanAvgAggregateOutputType = {
    id: number | null
    id_user: number | null
  }

  export type StanSumAggregateOutputType = {
    id: number | null
    id_user: number | null
  }

  export type StanMinAggregateOutputType = {
    id: number | null
    nama_stan: string | null
    nama_pemilik: string | null
    telepon: string | null
    id_user: number | null
  }

  export type StanMaxAggregateOutputType = {
    id: number | null
    nama_stan: string | null
    nama_pemilik: string | null
    telepon: string | null
    id_user: number | null
  }

  export type StanCountAggregateOutputType = {
    id: number
    nama_stan: number
    nama_pemilik: number
    telepon: number
    id_user: number
    _all: number
  }


  export type StanAvgAggregateInputType = {
    id?: true
    id_user?: true
  }

  export type StanSumAggregateInputType = {
    id?: true
    id_user?: true
  }

  export type StanMinAggregateInputType = {
    id?: true
    nama_stan?: true
    nama_pemilik?: true
    telepon?: true
    id_user?: true
  }

  export type StanMaxAggregateInputType = {
    id?: true
    nama_stan?: true
    nama_pemilik?: true
    telepon?: true
    id_user?: true
  }

  export type StanCountAggregateInputType = {
    id?: true
    nama_stan?: true
    nama_pemilik?: true
    telepon?: true
    id_user?: true
    _all?: true
  }

  export type StanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stan to aggregate.
     */
    where?: stanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stans to fetch.
     */
    orderBy?: stanOrderByWithRelationInput | stanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stans
    **/
    _count?: true | StanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StanMaxAggregateInputType
  }

  export type GetStanAggregateType<T extends StanAggregateArgs> = {
        [P in keyof T & keyof AggregateStan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStan[P]>
      : GetScalarType<T[P], AggregateStan[P]>
  }




  export type stanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stanWhereInput
    orderBy?: stanOrderByWithAggregationInput | stanOrderByWithAggregationInput[]
    by: StanScalarFieldEnum[] | StanScalarFieldEnum
    having?: stanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StanCountAggregateInputType | true
    _avg?: StanAvgAggregateInputType
    _sum?: StanSumAggregateInputType
    _min?: StanMinAggregateInputType
    _max?: StanMaxAggregateInputType
  }

  export type StanGroupByOutputType = {
    id: number
    nama_stan: string
    nama_pemilik: string
    telepon: string
    id_user: number
    _count: StanCountAggregateOutputType | null
    _avg: StanAvgAggregateOutputType | null
    _sum: StanSumAggregateOutputType | null
    _min: StanMinAggregateOutputType | null
    _max: StanMaxAggregateOutputType | null
  }

  type GetStanGroupByPayload<T extends stanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StanGroupByOutputType[P]>
            : GetScalarType<T[P], StanGroupByOutputType[P]>
        }
      >
    >


  export type stanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_stan?: boolean
    nama_pemilik?: boolean
    telepon?: boolean
    id_user?: boolean
    diskon?: boolean | stan$diskonArgs<ExtArgs>
    menu?: boolean | stan$menuArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    transaksi?: boolean | stan$transaksiArgs<ExtArgs>
    _count?: boolean | StanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stan"]>

  export type stanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_stan?: boolean
    nama_pemilik?: boolean
    telepon?: boolean
    id_user?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stan"]>

  export type stanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_stan?: boolean
    nama_pemilik?: boolean
    telepon?: boolean
    id_user?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stan"]>

  export type stanSelectScalar = {
    id?: boolean
    nama_stan?: boolean
    nama_pemilik?: boolean
    telepon?: boolean
    id_user?: boolean
  }

  export type stanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama_stan" | "nama_pemilik" | "telepon" | "id_user", ExtArgs["result"]["stan"]>
  export type stanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diskon?: boolean | stan$diskonArgs<ExtArgs>
    menu?: boolean | stan$menuArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
    transaksi?: boolean | stan$transaksiArgs<ExtArgs>
    _count?: boolean | StanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type stanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type stanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $stanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stan"
    objects: {
      diskon: Prisma.$diskonPayload<ExtArgs>[]
      menu: Prisma.$menuPayload<ExtArgs>[]
      user: Prisma.$usersPayload<ExtArgs>
      transaksi: Prisma.$transaksiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama_stan: string
      nama_pemilik: string
      telepon: string
      id_user: number
    }, ExtArgs["result"]["stan"]>
    composites: {}
  }

  type stanGetPayload<S extends boolean | null | undefined | stanDefaultArgs> = $Result.GetResult<Prisma.$stanPayload, S>

  type stanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StanCountAggregateInputType | true
    }

  export interface stanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stan'], meta: { name: 'stan' } }
    /**
     * Find zero or one Stan that matches the filter.
     * @param {stanFindUniqueArgs} args - Arguments to find a Stan
     * @example
     * // Get one Stan
     * const stan = await prisma.stan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stanFindUniqueArgs>(args: SelectSubset<T, stanFindUniqueArgs<ExtArgs>>): Prisma__stanClient<$Result.GetResult<Prisma.$stanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stanFindUniqueOrThrowArgs} args - Arguments to find a Stan
     * @example
     * // Get one Stan
     * const stan = await prisma.stan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stanFindUniqueOrThrowArgs>(args: SelectSubset<T, stanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stanClient<$Result.GetResult<Prisma.$stanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stanFindFirstArgs} args - Arguments to find a Stan
     * @example
     * // Get one Stan
     * const stan = await prisma.stan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stanFindFirstArgs>(args?: SelectSubset<T, stanFindFirstArgs<ExtArgs>>): Prisma__stanClient<$Result.GetResult<Prisma.$stanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stanFindFirstOrThrowArgs} args - Arguments to find a Stan
     * @example
     * // Get one Stan
     * const stan = await prisma.stan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stanFindFirstOrThrowArgs>(args?: SelectSubset<T, stanFindFirstOrThrowArgs<ExtArgs>>): Prisma__stanClient<$Result.GetResult<Prisma.$stanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stans
     * const stans = await prisma.stan.findMany()
     * 
     * // Get first 10 Stans
     * const stans = await prisma.stan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stanWithIdOnly = await prisma.stan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stanFindManyArgs>(args?: SelectSubset<T, stanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stan.
     * @param {stanCreateArgs} args - Arguments to create a Stan.
     * @example
     * // Create one Stan
     * const Stan = await prisma.stan.create({
     *   data: {
     *     // ... data to create a Stan
     *   }
     * })
     * 
     */
    create<T extends stanCreateArgs>(args: SelectSubset<T, stanCreateArgs<ExtArgs>>): Prisma__stanClient<$Result.GetResult<Prisma.$stanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stans.
     * @param {stanCreateManyArgs} args - Arguments to create many Stans.
     * @example
     * // Create many Stans
     * const stan = await prisma.stan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stanCreateManyArgs>(args?: SelectSubset<T, stanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stans and returns the data saved in the database.
     * @param {stanCreateManyAndReturnArgs} args - Arguments to create many Stans.
     * @example
     * // Create many Stans
     * const stan = await prisma.stan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stans and only return the `id`
     * const stanWithIdOnly = await prisma.stan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stanCreateManyAndReturnArgs>(args?: SelectSubset<T, stanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stan.
     * @param {stanDeleteArgs} args - Arguments to delete one Stan.
     * @example
     * // Delete one Stan
     * const Stan = await prisma.stan.delete({
     *   where: {
     *     // ... filter to delete one Stan
     *   }
     * })
     * 
     */
    delete<T extends stanDeleteArgs>(args: SelectSubset<T, stanDeleteArgs<ExtArgs>>): Prisma__stanClient<$Result.GetResult<Prisma.$stanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stan.
     * @param {stanUpdateArgs} args - Arguments to update one Stan.
     * @example
     * // Update one Stan
     * const stan = await prisma.stan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stanUpdateArgs>(args: SelectSubset<T, stanUpdateArgs<ExtArgs>>): Prisma__stanClient<$Result.GetResult<Prisma.$stanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stans.
     * @param {stanDeleteManyArgs} args - Arguments to filter Stans to delete.
     * @example
     * // Delete a few Stans
     * const { count } = await prisma.stan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stanDeleteManyArgs>(args?: SelectSubset<T, stanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stans
     * const stan = await prisma.stan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stanUpdateManyArgs>(args: SelectSubset<T, stanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stans and returns the data updated in the database.
     * @param {stanUpdateManyAndReturnArgs} args - Arguments to update many Stans.
     * @example
     * // Update many Stans
     * const stan = await prisma.stan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stans and only return the `id`
     * const stanWithIdOnly = await prisma.stan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends stanUpdateManyAndReturnArgs>(args: SelectSubset<T, stanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stan.
     * @param {stanUpsertArgs} args - Arguments to update or create a Stan.
     * @example
     * // Update or create a Stan
     * const stan = await prisma.stan.upsert({
     *   create: {
     *     // ... data to create a Stan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stan we want to update
     *   }
     * })
     */
    upsert<T extends stanUpsertArgs>(args: SelectSubset<T, stanUpsertArgs<ExtArgs>>): Prisma__stanClient<$Result.GetResult<Prisma.$stanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stanCountArgs} args - Arguments to filter Stans to count.
     * @example
     * // Count the number of Stans
     * const count = await prisma.stan.count({
     *   where: {
     *     // ... the filter for the Stans we want to count
     *   }
     * })
    **/
    count<T extends stanCountArgs>(
      args?: Subset<T, stanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StanAggregateArgs>(args: Subset<T, StanAggregateArgs>): Prisma.PrismaPromise<GetStanAggregateType<T>>

    /**
     * Group by Stan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stanGroupByArgs} args - Group by arguments.
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
      T extends stanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stanGroupByArgs['orderBy'] }
        : { orderBy?: stanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, stanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stan model
   */
  readonly fields: stanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diskon<T extends stan$diskonArgs<ExtArgs> = {}>(args?: Subset<T, stan$diskonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diskonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    menu<T extends stan$menuArgs<ExtArgs> = {}>(args?: Subset<T, stan$menuArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaksi<T extends stan$transaksiArgs<ExtArgs> = {}>(args?: Subset<T, stan$transaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the stan model
   */
  interface stanFieldRefs {
    readonly id: FieldRef<"stan", 'Int'>
    readonly nama_stan: FieldRef<"stan", 'String'>
    readonly nama_pemilik: FieldRef<"stan", 'String'>
    readonly telepon: FieldRef<"stan", 'String'>
    readonly id_user: FieldRef<"stan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * stan findUnique
   */
  export type stanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stan
     */
    select?: stanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stan
     */
    omit?: stanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stanInclude<ExtArgs> | null
    /**
     * Filter, which stan to fetch.
     */
    where: stanWhereUniqueInput
  }

  /**
   * stan findUniqueOrThrow
   */
  export type stanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stan
     */
    select?: stanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stan
     */
    omit?: stanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stanInclude<ExtArgs> | null
    /**
     * Filter, which stan to fetch.
     */
    where: stanWhereUniqueInput
  }

  /**
   * stan findFirst
   */
  export type stanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stan
     */
    select?: stanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stan
     */
    omit?: stanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stanInclude<ExtArgs> | null
    /**
     * Filter, which stan to fetch.
     */
    where?: stanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stans to fetch.
     */
    orderBy?: stanOrderByWithRelationInput | stanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stans.
     */
    cursor?: stanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stans.
     */
    distinct?: StanScalarFieldEnum | StanScalarFieldEnum[]
  }

  /**
   * stan findFirstOrThrow
   */
  export type stanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stan
     */
    select?: stanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stan
     */
    omit?: stanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stanInclude<ExtArgs> | null
    /**
     * Filter, which stan to fetch.
     */
    where?: stanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stans to fetch.
     */
    orderBy?: stanOrderByWithRelationInput | stanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stans.
     */
    cursor?: stanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stans.
     */
    distinct?: StanScalarFieldEnum | StanScalarFieldEnum[]
  }

  /**
   * stan findMany
   */
  export type stanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stan
     */
    select?: stanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stan
     */
    omit?: stanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stanInclude<ExtArgs> | null
    /**
     * Filter, which stans to fetch.
     */
    where?: stanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stans to fetch.
     */
    orderBy?: stanOrderByWithRelationInput | stanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stans.
     */
    cursor?: stanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stans.
     */
    skip?: number
    distinct?: StanScalarFieldEnum | StanScalarFieldEnum[]
  }

  /**
   * stan create
   */
  export type stanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stan
     */
    select?: stanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stan
     */
    omit?: stanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stanInclude<ExtArgs> | null
    /**
     * The data needed to create a stan.
     */
    data: XOR<stanCreateInput, stanUncheckedCreateInput>
  }

  /**
   * stan createMany
   */
  export type stanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stans.
     */
    data: stanCreateManyInput | stanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stan createManyAndReturn
   */
  export type stanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stan
     */
    select?: stanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stan
     */
    omit?: stanOmit<ExtArgs> | null
    /**
     * The data used to create many stans.
     */
    data: stanCreateManyInput | stanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * stan update
   */
  export type stanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stan
     */
    select?: stanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stan
     */
    omit?: stanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stanInclude<ExtArgs> | null
    /**
     * The data needed to update a stan.
     */
    data: XOR<stanUpdateInput, stanUncheckedUpdateInput>
    /**
     * Choose, which stan to update.
     */
    where: stanWhereUniqueInput
  }

  /**
   * stan updateMany
   */
  export type stanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stans.
     */
    data: XOR<stanUpdateManyMutationInput, stanUncheckedUpdateManyInput>
    /**
     * Filter which stans to update
     */
    where?: stanWhereInput
    /**
     * Limit how many stans to update.
     */
    limit?: number
  }

  /**
   * stan updateManyAndReturn
   */
  export type stanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stan
     */
    select?: stanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stan
     */
    omit?: stanOmit<ExtArgs> | null
    /**
     * The data used to update stans.
     */
    data: XOR<stanUpdateManyMutationInput, stanUncheckedUpdateManyInput>
    /**
     * Filter which stans to update
     */
    where?: stanWhereInput
    /**
     * Limit how many stans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * stan upsert
   */
  export type stanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stan
     */
    select?: stanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stan
     */
    omit?: stanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stanInclude<ExtArgs> | null
    /**
     * The filter to search for the stan to update in case it exists.
     */
    where: stanWhereUniqueInput
    /**
     * In case the stan found by the `where` argument doesn't exist, create a new stan with this data.
     */
    create: XOR<stanCreateInput, stanUncheckedCreateInput>
    /**
     * In case the stan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stanUpdateInput, stanUncheckedUpdateInput>
  }

  /**
   * stan delete
   */
  export type stanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stan
     */
    select?: stanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stan
     */
    omit?: stanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stanInclude<ExtArgs> | null
    /**
     * Filter which stan to delete.
     */
    where: stanWhereUniqueInput
  }

  /**
   * stan deleteMany
   */
  export type stanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stans to delete
     */
    where?: stanWhereInput
    /**
     * Limit how many stans to delete.
     */
    limit?: number
  }

  /**
   * stan.diskon
   */
  export type stan$diskonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diskon
     */
    select?: diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diskon
     */
    omit?: diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diskonInclude<ExtArgs> | null
    where?: diskonWhereInput
    orderBy?: diskonOrderByWithRelationInput | diskonOrderByWithRelationInput[]
    cursor?: diskonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiskonScalarFieldEnum | DiskonScalarFieldEnum[]
  }

  /**
   * stan.menu
   */
  export type stan$menuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    where?: menuWhereInput
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    cursor?: menuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * stan.transaksi
   */
  export type stan$transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    where?: transaksiWhereInput
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    cursor?: transaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * stan without action
   */
  export type stanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stan
     */
    select?: stanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stan
     */
    omit?: stanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stanInclude<ExtArgs> | null
  }


  /**
   * Model menu
   */

  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    id: number | null
    harga: Decimal | null
    id_stan: number | null
  }

  export type MenuSumAggregateOutputType = {
    id: number | null
    harga: Decimal | null
    id_stan: number | null
  }

  export type MenuMinAggregateOutputType = {
    id: number | null
    nama_menu: string | null
    harga: Decimal | null
    jenis: $Enums.jenis | null
    foto: string | null
    deskripsi: string | null
    id_stan: number | null
  }

  export type MenuMaxAggregateOutputType = {
    id: number | null
    nama_menu: string | null
    harga: Decimal | null
    jenis: $Enums.jenis | null
    foto: string | null
    deskripsi: string | null
    id_stan: number | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    nama_menu: number
    harga: number
    jenis: number
    foto: number
    deskripsi: number
    id_stan: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    id?: true
    harga?: true
    id_stan?: true
  }

  export type MenuSumAggregateInputType = {
    id?: true
    harga?: true
    id_stan?: true
  }

  export type MenuMinAggregateInputType = {
    id?: true
    nama_menu?: true
    harga?: true
    jenis?: true
    foto?: true
    deskripsi?: true
    id_stan?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    nama_menu?: true
    harga?: true
    jenis?: true
    foto?: true
    deskripsi?: true
    id_stan?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    nama_menu?: true
    harga?: true
    jenis?: true
    foto?: true
    deskripsi?: true
    id_stan?: true
    _all?: true
  }

  export type MenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu to aggregate.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type menuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menuWhereInput
    orderBy?: menuOrderByWithAggregationInput | menuOrderByWithAggregationInput[]
    by: MenuScalarFieldEnum[] | MenuScalarFieldEnum
    having?: menuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }

  export type MenuGroupByOutputType = {
    id: number
    nama_menu: string
    harga: Decimal
    jenis: $Enums.jenis
    foto: string
    deskripsi: string
    id_stan: number
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends menuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type menuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_menu?: boolean
    harga?: boolean
    jenis?: boolean
    foto?: boolean
    deskripsi?: boolean
    id_stan?: boolean
    detail_transaksi?: boolean | menu$detail_transaksiArgs<ExtArgs>
    stan?: boolean | stanDefaultArgs<ExtArgs>
    menu_diskon?: boolean | menu$menu_diskonArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type menuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_menu?: boolean
    harga?: boolean
    jenis?: boolean
    foto?: boolean
    deskripsi?: boolean
    id_stan?: boolean
    stan?: boolean | stanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type menuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_menu?: boolean
    harga?: boolean
    jenis?: boolean
    foto?: boolean
    deskripsi?: boolean
    id_stan?: boolean
    stan?: boolean | stanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>

  export type menuSelectScalar = {
    id?: boolean
    nama_menu?: boolean
    harga?: boolean
    jenis?: boolean
    foto?: boolean
    deskripsi?: boolean
    id_stan?: boolean
  }

  export type menuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama_menu" | "harga" | "jenis" | "foto" | "deskripsi" | "id_stan", ExtArgs["result"]["menu"]>
  export type menuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail_transaksi?: boolean | menu$detail_transaksiArgs<ExtArgs>
    stan?: boolean | stanDefaultArgs<ExtArgs>
    menu_diskon?: boolean | menu$menu_diskonArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type menuIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stan?: boolean | stanDefaultArgs<ExtArgs>
  }
  export type menuIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stan?: boolean | stanDefaultArgs<ExtArgs>
  }

  export type $menuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "menu"
    objects: {
      detail_transaksi: Prisma.$detail_transaksiPayload<ExtArgs>[]
      stan: Prisma.$stanPayload<ExtArgs>
      menu_diskon: Prisma.$menu_diskonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama_menu: string
      harga: Prisma.Decimal
      jenis: $Enums.jenis
      foto: string
      deskripsi: string
      id_stan: number
    }, ExtArgs["result"]["menu"]>
    composites: {}
  }

  type menuGetPayload<S extends boolean | null | undefined | menuDefaultArgs> = $Result.GetResult<Prisma.$menuPayload, S>

  type menuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<menuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface menuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['menu'], meta: { name: 'menu' } }
    /**
     * Find zero or one Menu that matches the filter.
     * @param {menuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends menuFindUniqueArgs>(args: SelectSubset<T, menuFindUniqueArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {menuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends menuFindUniqueOrThrowArgs>(args: SelectSubset<T, menuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends menuFindFirstArgs>(args?: SelectSubset<T, menuFindFirstArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends menuFindFirstOrThrowArgs>(args?: SelectSubset<T, menuFindFirstOrThrowArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends menuFindManyArgs>(args?: SelectSubset<T, menuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menu.
     * @param {menuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
     */
    create<T extends menuCreateArgs>(args: SelectSubset<T, menuCreateArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menus.
     * @param {menuCreateManyArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends menuCreateManyArgs>(args?: SelectSubset<T, menuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Menus and returns the data saved in the database.
     * @param {menuCreateManyAndReturnArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Menus and only return the `id`
     * const menuWithIdOnly = await prisma.menu.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends menuCreateManyAndReturnArgs>(args?: SelectSubset<T, menuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Menu.
     * @param {menuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
     */
    delete<T extends menuDeleteArgs>(args: SelectSubset<T, menuDeleteArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menu.
     * @param {menuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends menuUpdateArgs>(args: SelectSubset<T, menuUpdateArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menus.
     * @param {menuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends menuDeleteManyArgs>(args?: SelectSubset<T, menuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends menuUpdateManyArgs>(args: SelectSubset<T, menuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus and returns the data updated in the database.
     * @param {menuUpdateManyAndReturnArgs} args - Arguments to update many Menus.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Menus and only return the `id`
     * const menuWithIdOnly = await prisma.menu.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends menuUpdateManyAndReturnArgs>(args: SelectSubset<T, menuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Menu.
     * @param {menuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
     */
    upsert<T extends menuUpsertArgs>(args: SelectSubset<T, menuUpsertArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends menuCountArgs>(
      args?: Subset<T, menuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menuGroupByArgs} args - Group by arguments.
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
      T extends menuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: menuGroupByArgs['orderBy'] }
        : { orderBy?: menuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, menuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the menu model
   */
  readonly fields: menuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__menuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detail_transaksi<T extends menu$detail_transaksiArgs<ExtArgs> = {}>(args?: Subset<T, menu$detail_transaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stan<T extends stanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stanDefaultArgs<ExtArgs>>): Prisma__stanClient<$Result.GetResult<Prisma.$stanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menu_diskon<T extends menu$menu_diskonArgs<ExtArgs> = {}>(args?: Subset<T, menu$menu_diskonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_diskonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the menu model
   */
  interface menuFieldRefs {
    readonly id: FieldRef<"menu", 'Int'>
    readonly nama_menu: FieldRef<"menu", 'String'>
    readonly harga: FieldRef<"menu", 'Decimal'>
    readonly jenis: FieldRef<"menu", 'jenis'>
    readonly foto: FieldRef<"menu", 'String'>
    readonly deskripsi: FieldRef<"menu", 'String'>
    readonly id_stan: FieldRef<"menu", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * menu findUnique
   */
  export type menuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu findUniqueOrThrow
   */
  export type menuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu findFirst
   */
  export type menuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * menu findFirstOrThrow
   */
  export type menuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menu to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * menu findMany
   */
  export type menuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter, which menus to fetch.
     */
    where?: menuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menus to fetch.
     */
    orderBy?: menuOrderByWithRelationInput | menuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menus.
     */
    cursor?: menuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menus.
     */
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * menu create
   */
  export type menuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * The data needed to create a menu.
     */
    data: XOR<menuCreateInput, menuUncheckedCreateInput>
  }

  /**
   * menu createMany
   */
  export type menuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many menus.
     */
    data: menuCreateManyInput | menuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * menu createManyAndReturn
   */
  export type menuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * The data used to create many menus.
     */
    data: menuCreateManyInput | menuCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * menu update
   */
  export type menuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * The data needed to update a menu.
     */
    data: XOR<menuUpdateInput, menuUncheckedUpdateInput>
    /**
     * Choose, which menu to update.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu updateMany
   */
  export type menuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update menus.
     */
    data: XOR<menuUpdateManyMutationInput, menuUncheckedUpdateManyInput>
    /**
     * Filter which menus to update
     */
    where?: menuWhereInput
    /**
     * Limit how many menus to update.
     */
    limit?: number
  }

  /**
   * menu updateManyAndReturn
   */
  export type menuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * The data used to update menus.
     */
    data: XOR<menuUpdateManyMutationInput, menuUncheckedUpdateManyInput>
    /**
     * Filter which menus to update
     */
    where?: menuWhereInput
    /**
     * Limit how many menus to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * menu upsert
   */
  export type menuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * The filter to search for the menu to update in case it exists.
     */
    where: menuWhereUniqueInput
    /**
     * In case the menu found by the `where` argument doesn't exist, create a new menu with this data.
     */
    create: XOR<menuCreateInput, menuUncheckedCreateInput>
    /**
     * In case the menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menuUpdateInput, menuUncheckedUpdateInput>
  }

  /**
   * menu delete
   */
  export type menuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
    /**
     * Filter which menu to delete.
     */
    where: menuWhereUniqueInput
  }

  /**
   * menu deleteMany
   */
  export type menuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menus to delete
     */
    where?: menuWhereInput
    /**
     * Limit how many menus to delete.
     */
    limit?: number
  }

  /**
   * menu.detail_transaksi
   */
  export type menu$detail_transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
    where?: detail_transaksiWhereInput
    orderBy?: detail_transaksiOrderByWithRelationInput | detail_transaksiOrderByWithRelationInput[]
    cursor?: detail_transaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detail_transaksiScalarFieldEnum | Detail_transaksiScalarFieldEnum[]
  }

  /**
   * menu.menu_diskon
   */
  export type menu$menu_diskonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_diskon
     */
    select?: menu_diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_diskon
     */
    omit?: menu_diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_diskonInclude<ExtArgs> | null
    where?: menu_diskonWhereInput
    orderBy?: menu_diskonOrderByWithRelationInput | menu_diskonOrderByWithRelationInput[]
    cursor?: menu_diskonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Menu_diskonScalarFieldEnum | Menu_diskonScalarFieldEnum[]
  }

  /**
   * menu without action
   */
  export type menuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu
     */
    select?: menuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu
     */
    omit?: menuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menuInclude<ExtArgs> | null
  }


  /**
   * Model diskon
   */

  export type AggregateDiskon = {
    _count: DiskonCountAggregateOutputType | null
    _avg: DiskonAvgAggregateOutputType | null
    _sum: DiskonSumAggregateOutputType | null
    _min: DiskonMinAggregateOutputType | null
    _max: DiskonMaxAggregateOutputType | null
  }

  export type DiskonAvgAggregateOutputType = {
    id: number | null
    persentase: number | null
    id_stan: number | null
  }

  export type DiskonSumAggregateOutputType = {
    id: number | null
    persentase: number | null
    id_stan: number | null
  }

  export type DiskonMinAggregateOutputType = {
    id: number | null
    nama_diskon: string | null
    persentase: number | null
    tanggal_awal: Date | null
    tanggal_akhir: Date | null
    id_stan: number | null
  }

  export type DiskonMaxAggregateOutputType = {
    id: number | null
    nama_diskon: string | null
    persentase: number | null
    tanggal_awal: Date | null
    tanggal_akhir: Date | null
    id_stan: number | null
  }

  export type DiskonCountAggregateOutputType = {
    id: number
    nama_diskon: number
    persentase: number
    tanggal_awal: number
    tanggal_akhir: number
    id_stan: number
    _all: number
  }


  export type DiskonAvgAggregateInputType = {
    id?: true
    persentase?: true
    id_stan?: true
  }

  export type DiskonSumAggregateInputType = {
    id?: true
    persentase?: true
    id_stan?: true
  }

  export type DiskonMinAggregateInputType = {
    id?: true
    nama_diskon?: true
    persentase?: true
    tanggal_awal?: true
    tanggal_akhir?: true
    id_stan?: true
  }

  export type DiskonMaxAggregateInputType = {
    id?: true
    nama_diskon?: true
    persentase?: true
    tanggal_awal?: true
    tanggal_akhir?: true
    id_stan?: true
  }

  export type DiskonCountAggregateInputType = {
    id?: true
    nama_diskon?: true
    persentase?: true
    tanggal_awal?: true
    tanggal_akhir?: true
    id_stan?: true
    _all?: true
  }

  export type DiskonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which diskon to aggregate.
     */
    where?: diskonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diskons to fetch.
     */
    orderBy?: diskonOrderByWithRelationInput | diskonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: diskonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diskons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diskons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned diskons
    **/
    _count?: true | DiskonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiskonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiskonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiskonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiskonMaxAggregateInputType
  }

  export type GetDiskonAggregateType<T extends DiskonAggregateArgs> = {
        [P in keyof T & keyof AggregateDiskon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiskon[P]>
      : GetScalarType<T[P], AggregateDiskon[P]>
  }




  export type diskonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: diskonWhereInput
    orderBy?: diskonOrderByWithAggregationInput | diskonOrderByWithAggregationInput[]
    by: DiskonScalarFieldEnum[] | DiskonScalarFieldEnum
    having?: diskonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiskonCountAggregateInputType | true
    _avg?: DiskonAvgAggregateInputType
    _sum?: DiskonSumAggregateInputType
    _min?: DiskonMinAggregateInputType
    _max?: DiskonMaxAggregateInputType
  }

  export type DiskonGroupByOutputType = {
    id: number
    nama_diskon: string
    persentase: number
    tanggal_awal: Date
    tanggal_akhir: Date
    id_stan: number
    _count: DiskonCountAggregateOutputType | null
    _avg: DiskonAvgAggregateOutputType | null
    _sum: DiskonSumAggregateOutputType | null
    _min: DiskonMinAggregateOutputType | null
    _max: DiskonMaxAggregateOutputType | null
  }

  type GetDiskonGroupByPayload<T extends diskonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiskonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiskonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiskonGroupByOutputType[P]>
            : GetScalarType<T[P], DiskonGroupByOutputType[P]>
        }
      >
    >


  export type diskonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_diskon?: boolean
    persentase?: boolean
    tanggal_awal?: boolean
    tanggal_akhir?: boolean
    id_stan?: boolean
    stan?: boolean | stanDefaultArgs<ExtArgs>
    menu_diskon?: boolean | diskon$menu_diskonArgs<ExtArgs>
    _count?: boolean | DiskonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diskon"]>

  export type diskonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_diskon?: boolean
    persentase?: boolean
    tanggal_awal?: boolean
    tanggal_akhir?: boolean
    id_stan?: boolean
    stan?: boolean | stanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diskon"]>

  export type diskonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama_diskon?: boolean
    persentase?: boolean
    tanggal_awal?: boolean
    tanggal_akhir?: boolean
    id_stan?: boolean
    stan?: boolean | stanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diskon"]>

  export type diskonSelectScalar = {
    id?: boolean
    nama_diskon?: boolean
    persentase?: boolean
    tanggal_awal?: boolean
    tanggal_akhir?: boolean
    id_stan?: boolean
  }

  export type diskonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama_diskon" | "persentase" | "tanggal_awal" | "tanggal_akhir" | "id_stan", ExtArgs["result"]["diskon"]>
  export type diskonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stan?: boolean | stanDefaultArgs<ExtArgs>
    menu_diskon?: boolean | diskon$menu_diskonArgs<ExtArgs>
    _count?: boolean | DiskonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type diskonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stan?: boolean | stanDefaultArgs<ExtArgs>
  }
  export type diskonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stan?: boolean | stanDefaultArgs<ExtArgs>
  }

  export type $diskonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "diskon"
    objects: {
      stan: Prisma.$stanPayload<ExtArgs>
      menu_diskon: Prisma.$menu_diskonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama_diskon: string
      persentase: number
      tanggal_awal: Date
      tanggal_akhir: Date
      id_stan: number
    }, ExtArgs["result"]["diskon"]>
    composites: {}
  }

  type diskonGetPayload<S extends boolean | null | undefined | diskonDefaultArgs> = $Result.GetResult<Prisma.$diskonPayload, S>

  type diskonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<diskonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiskonCountAggregateInputType | true
    }

  export interface diskonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['diskon'], meta: { name: 'diskon' } }
    /**
     * Find zero or one Diskon that matches the filter.
     * @param {diskonFindUniqueArgs} args - Arguments to find a Diskon
     * @example
     * // Get one Diskon
     * const diskon = await prisma.diskon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends diskonFindUniqueArgs>(args: SelectSubset<T, diskonFindUniqueArgs<ExtArgs>>): Prisma__diskonClient<$Result.GetResult<Prisma.$diskonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diskon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {diskonFindUniqueOrThrowArgs} args - Arguments to find a Diskon
     * @example
     * // Get one Diskon
     * const diskon = await prisma.diskon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends diskonFindUniqueOrThrowArgs>(args: SelectSubset<T, diskonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__diskonClient<$Result.GetResult<Prisma.$diskonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diskon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diskonFindFirstArgs} args - Arguments to find a Diskon
     * @example
     * // Get one Diskon
     * const diskon = await prisma.diskon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends diskonFindFirstArgs>(args?: SelectSubset<T, diskonFindFirstArgs<ExtArgs>>): Prisma__diskonClient<$Result.GetResult<Prisma.$diskonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diskon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diskonFindFirstOrThrowArgs} args - Arguments to find a Diskon
     * @example
     * // Get one Diskon
     * const diskon = await prisma.diskon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends diskonFindFirstOrThrowArgs>(args?: SelectSubset<T, diskonFindFirstOrThrowArgs<ExtArgs>>): Prisma__diskonClient<$Result.GetResult<Prisma.$diskonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diskons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diskonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diskons
     * const diskons = await prisma.diskon.findMany()
     * 
     * // Get first 10 Diskons
     * const diskons = await prisma.diskon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diskonWithIdOnly = await prisma.diskon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends diskonFindManyArgs>(args?: SelectSubset<T, diskonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diskonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diskon.
     * @param {diskonCreateArgs} args - Arguments to create a Diskon.
     * @example
     * // Create one Diskon
     * const Diskon = await prisma.diskon.create({
     *   data: {
     *     // ... data to create a Diskon
     *   }
     * })
     * 
     */
    create<T extends diskonCreateArgs>(args: SelectSubset<T, diskonCreateArgs<ExtArgs>>): Prisma__diskonClient<$Result.GetResult<Prisma.$diskonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diskons.
     * @param {diskonCreateManyArgs} args - Arguments to create many Diskons.
     * @example
     * // Create many Diskons
     * const diskon = await prisma.diskon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends diskonCreateManyArgs>(args?: SelectSubset<T, diskonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diskons and returns the data saved in the database.
     * @param {diskonCreateManyAndReturnArgs} args - Arguments to create many Diskons.
     * @example
     * // Create many Diskons
     * const diskon = await prisma.diskon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diskons and only return the `id`
     * const diskonWithIdOnly = await prisma.diskon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends diskonCreateManyAndReturnArgs>(args?: SelectSubset<T, diskonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diskonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Diskon.
     * @param {diskonDeleteArgs} args - Arguments to delete one Diskon.
     * @example
     * // Delete one Diskon
     * const Diskon = await prisma.diskon.delete({
     *   where: {
     *     // ... filter to delete one Diskon
     *   }
     * })
     * 
     */
    delete<T extends diskonDeleteArgs>(args: SelectSubset<T, diskonDeleteArgs<ExtArgs>>): Prisma__diskonClient<$Result.GetResult<Prisma.$diskonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diskon.
     * @param {diskonUpdateArgs} args - Arguments to update one Diskon.
     * @example
     * // Update one Diskon
     * const diskon = await prisma.diskon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends diskonUpdateArgs>(args: SelectSubset<T, diskonUpdateArgs<ExtArgs>>): Prisma__diskonClient<$Result.GetResult<Prisma.$diskonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diskons.
     * @param {diskonDeleteManyArgs} args - Arguments to filter Diskons to delete.
     * @example
     * // Delete a few Diskons
     * const { count } = await prisma.diskon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends diskonDeleteManyArgs>(args?: SelectSubset<T, diskonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diskons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diskonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diskons
     * const diskon = await prisma.diskon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends diskonUpdateManyArgs>(args: SelectSubset<T, diskonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diskons and returns the data updated in the database.
     * @param {diskonUpdateManyAndReturnArgs} args - Arguments to update many Diskons.
     * @example
     * // Update many Diskons
     * const diskon = await prisma.diskon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diskons and only return the `id`
     * const diskonWithIdOnly = await prisma.diskon.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends diskonUpdateManyAndReturnArgs>(args: SelectSubset<T, diskonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diskonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Diskon.
     * @param {diskonUpsertArgs} args - Arguments to update or create a Diskon.
     * @example
     * // Update or create a Diskon
     * const diskon = await prisma.diskon.upsert({
     *   create: {
     *     // ... data to create a Diskon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diskon we want to update
     *   }
     * })
     */
    upsert<T extends diskonUpsertArgs>(args: SelectSubset<T, diskonUpsertArgs<ExtArgs>>): Prisma__diskonClient<$Result.GetResult<Prisma.$diskonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diskons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diskonCountArgs} args - Arguments to filter Diskons to count.
     * @example
     * // Count the number of Diskons
     * const count = await prisma.diskon.count({
     *   where: {
     *     // ... the filter for the Diskons we want to count
     *   }
     * })
    **/
    count<T extends diskonCountArgs>(
      args?: Subset<T, diskonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiskonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diskon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiskonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiskonAggregateArgs>(args: Subset<T, DiskonAggregateArgs>): Prisma.PrismaPromise<GetDiskonAggregateType<T>>

    /**
     * Group by Diskon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diskonGroupByArgs} args - Group by arguments.
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
      T extends diskonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: diskonGroupByArgs['orderBy'] }
        : { orderBy?: diskonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, diskonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiskonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the diskon model
   */
  readonly fields: diskonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for diskon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__diskonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stan<T extends stanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stanDefaultArgs<ExtArgs>>): Prisma__stanClient<$Result.GetResult<Prisma.$stanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menu_diskon<T extends diskon$menu_diskonArgs<ExtArgs> = {}>(args?: Subset<T, diskon$menu_diskonArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_diskonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the diskon model
   */
  interface diskonFieldRefs {
    readonly id: FieldRef<"diskon", 'Int'>
    readonly nama_diskon: FieldRef<"diskon", 'String'>
    readonly persentase: FieldRef<"diskon", 'Float'>
    readonly tanggal_awal: FieldRef<"diskon", 'DateTime'>
    readonly tanggal_akhir: FieldRef<"diskon", 'DateTime'>
    readonly id_stan: FieldRef<"diskon", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * diskon findUnique
   */
  export type diskonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diskon
     */
    select?: diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diskon
     */
    omit?: diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diskonInclude<ExtArgs> | null
    /**
     * Filter, which diskon to fetch.
     */
    where: diskonWhereUniqueInput
  }

  /**
   * diskon findUniqueOrThrow
   */
  export type diskonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diskon
     */
    select?: diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diskon
     */
    omit?: diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diskonInclude<ExtArgs> | null
    /**
     * Filter, which diskon to fetch.
     */
    where: diskonWhereUniqueInput
  }

  /**
   * diskon findFirst
   */
  export type diskonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diskon
     */
    select?: diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diskon
     */
    omit?: diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diskonInclude<ExtArgs> | null
    /**
     * Filter, which diskon to fetch.
     */
    where?: diskonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diskons to fetch.
     */
    orderBy?: diskonOrderByWithRelationInput | diskonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for diskons.
     */
    cursor?: diskonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diskons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diskons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diskons.
     */
    distinct?: DiskonScalarFieldEnum | DiskonScalarFieldEnum[]
  }

  /**
   * diskon findFirstOrThrow
   */
  export type diskonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diskon
     */
    select?: diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diskon
     */
    omit?: diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diskonInclude<ExtArgs> | null
    /**
     * Filter, which diskon to fetch.
     */
    where?: diskonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diskons to fetch.
     */
    orderBy?: diskonOrderByWithRelationInput | diskonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for diskons.
     */
    cursor?: diskonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diskons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diskons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diskons.
     */
    distinct?: DiskonScalarFieldEnum | DiskonScalarFieldEnum[]
  }

  /**
   * diskon findMany
   */
  export type diskonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diskon
     */
    select?: diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diskon
     */
    omit?: diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diskonInclude<ExtArgs> | null
    /**
     * Filter, which diskons to fetch.
     */
    where?: diskonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diskons to fetch.
     */
    orderBy?: diskonOrderByWithRelationInput | diskonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing diskons.
     */
    cursor?: diskonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diskons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diskons.
     */
    skip?: number
    distinct?: DiskonScalarFieldEnum | DiskonScalarFieldEnum[]
  }

  /**
   * diskon create
   */
  export type diskonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diskon
     */
    select?: diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diskon
     */
    omit?: diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diskonInclude<ExtArgs> | null
    /**
     * The data needed to create a diskon.
     */
    data: XOR<diskonCreateInput, diskonUncheckedCreateInput>
  }

  /**
   * diskon createMany
   */
  export type diskonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many diskons.
     */
    data: diskonCreateManyInput | diskonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * diskon createManyAndReturn
   */
  export type diskonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diskon
     */
    select?: diskonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the diskon
     */
    omit?: diskonOmit<ExtArgs> | null
    /**
     * The data used to create many diskons.
     */
    data: diskonCreateManyInput | diskonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diskonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * diskon update
   */
  export type diskonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diskon
     */
    select?: diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diskon
     */
    omit?: diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diskonInclude<ExtArgs> | null
    /**
     * The data needed to update a diskon.
     */
    data: XOR<diskonUpdateInput, diskonUncheckedUpdateInput>
    /**
     * Choose, which diskon to update.
     */
    where: diskonWhereUniqueInput
  }

  /**
   * diskon updateMany
   */
  export type diskonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update diskons.
     */
    data: XOR<diskonUpdateManyMutationInput, diskonUncheckedUpdateManyInput>
    /**
     * Filter which diskons to update
     */
    where?: diskonWhereInput
    /**
     * Limit how many diskons to update.
     */
    limit?: number
  }

  /**
   * diskon updateManyAndReturn
   */
  export type diskonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diskon
     */
    select?: diskonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the diskon
     */
    omit?: diskonOmit<ExtArgs> | null
    /**
     * The data used to update diskons.
     */
    data: XOR<diskonUpdateManyMutationInput, diskonUncheckedUpdateManyInput>
    /**
     * Filter which diskons to update
     */
    where?: diskonWhereInput
    /**
     * Limit how many diskons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diskonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * diskon upsert
   */
  export type diskonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diskon
     */
    select?: diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diskon
     */
    omit?: diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diskonInclude<ExtArgs> | null
    /**
     * The filter to search for the diskon to update in case it exists.
     */
    where: diskonWhereUniqueInput
    /**
     * In case the diskon found by the `where` argument doesn't exist, create a new diskon with this data.
     */
    create: XOR<diskonCreateInput, diskonUncheckedCreateInput>
    /**
     * In case the diskon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<diskonUpdateInput, diskonUncheckedUpdateInput>
  }

  /**
   * diskon delete
   */
  export type diskonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diskon
     */
    select?: diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diskon
     */
    omit?: diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diskonInclude<ExtArgs> | null
    /**
     * Filter which diskon to delete.
     */
    where: diskonWhereUniqueInput
  }

  /**
   * diskon deleteMany
   */
  export type diskonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which diskons to delete
     */
    where?: diskonWhereInput
    /**
     * Limit how many diskons to delete.
     */
    limit?: number
  }

  /**
   * diskon.menu_diskon
   */
  export type diskon$menu_diskonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_diskon
     */
    select?: menu_diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_diskon
     */
    omit?: menu_diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_diskonInclude<ExtArgs> | null
    where?: menu_diskonWhereInput
    orderBy?: menu_diskonOrderByWithRelationInput | menu_diskonOrderByWithRelationInput[]
    cursor?: menu_diskonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Menu_diskonScalarFieldEnum | Menu_diskonScalarFieldEnum[]
  }

  /**
   * diskon without action
   */
  export type diskonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diskon
     */
    select?: diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diskon
     */
    omit?: diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diskonInclude<ExtArgs> | null
  }


  /**
   * Model menu_diskon
   */

  export type AggregateMenu_diskon = {
    _count: Menu_diskonCountAggregateOutputType | null
    _avg: Menu_diskonAvgAggregateOutputType | null
    _sum: Menu_diskonSumAggregateOutputType | null
    _min: Menu_diskonMinAggregateOutputType | null
    _max: Menu_diskonMaxAggregateOutputType | null
  }

  export type Menu_diskonAvgAggregateOutputType = {
    id: number | null
    id_menu: number | null
    id_diskon: number | null
  }

  export type Menu_diskonSumAggregateOutputType = {
    id: number | null
    id_menu: number | null
    id_diskon: number | null
  }

  export type Menu_diskonMinAggregateOutputType = {
    id: number | null
    id_menu: number | null
    id_diskon: number | null
  }

  export type Menu_diskonMaxAggregateOutputType = {
    id: number | null
    id_menu: number | null
    id_diskon: number | null
  }

  export type Menu_diskonCountAggregateOutputType = {
    id: number
    id_menu: number
    id_diskon: number
    _all: number
  }


  export type Menu_diskonAvgAggregateInputType = {
    id?: true
    id_menu?: true
    id_diskon?: true
  }

  export type Menu_diskonSumAggregateInputType = {
    id?: true
    id_menu?: true
    id_diskon?: true
  }

  export type Menu_diskonMinAggregateInputType = {
    id?: true
    id_menu?: true
    id_diskon?: true
  }

  export type Menu_diskonMaxAggregateInputType = {
    id?: true
    id_menu?: true
    id_diskon?: true
  }

  export type Menu_diskonCountAggregateInputType = {
    id?: true
    id_menu?: true
    id_diskon?: true
    _all?: true
  }

  export type Menu_diskonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu_diskon to aggregate.
     */
    where?: menu_diskonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_diskons to fetch.
     */
    orderBy?: menu_diskonOrderByWithRelationInput | menu_diskonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: menu_diskonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_diskons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_diskons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned menu_diskons
    **/
    _count?: true | Menu_diskonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Menu_diskonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Menu_diskonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Menu_diskonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Menu_diskonMaxAggregateInputType
  }

  export type GetMenu_diskonAggregateType<T extends Menu_diskonAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu_diskon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu_diskon[P]>
      : GetScalarType<T[P], AggregateMenu_diskon[P]>
  }




  export type menu_diskonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: menu_diskonWhereInput
    orderBy?: menu_diskonOrderByWithAggregationInput | menu_diskonOrderByWithAggregationInput[]
    by: Menu_diskonScalarFieldEnum[] | Menu_diskonScalarFieldEnum
    having?: menu_diskonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Menu_diskonCountAggregateInputType | true
    _avg?: Menu_diskonAvgAggregateInputType
    _sum?: Menu_diskonSumAggregateInputType
    _min?: Menu_diskonMinAggregateInputType
    _max?: Menu_diskonMaxAggregateInputType
  }

  export type Menu_diskonGroupByOutputType = {
    id: number
    id_menu: number
    id_diskon: number
    _count: Menu_diskonCountAggregateOutputType | null
    _avg: Menu_diskonAvgAggregateOutputType | null
    _sum: Menu_diskonSumAggregateOutputType | null
    _min: Menu_diskonMinAggregateOutputType | null
    _max: Menu_diskonMaxAggregateOutputType | null
  }

  type GetMenu_diskonGroupByPayload<T extends menu_diskonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Menu_diskonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Menu_diskonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Menu_diskonGroupByOutputType[P]>
            : GetScalarType<T[P], Menu_diskonGroupByOutputType[P]>
        }
      >
    >


  export type menu_diskonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_menu?: boolean
    id_diskon?: boolean
    diskon?: boolean | diskonDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu_diskon"]>

  export type menu_diskonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_menu?: boolean
    id_diskon?: boolean
    diskon?: boolean | diskonDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu_diskon"]>

  export type menu_diskonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_menu?: boolean
    id_diskon?: boolean
    diskon?: boolean | diskonDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu_diskon"]>

  export type menu_diskonSelectScalar = {
    id?: boolean
    id_menu?: boolean
    id_diskon?: boolean
  }

  export type menu_diskonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_menu" | "id_diskon", ExtArgs["result"]["menu_diskon"]>
  export type menu_diskonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diskon?: boolean | diskonDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }
  export type menu_diskonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diskon?: boolean | diskonDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }
  export type menu_diskonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diskon?: boolean | diskonDefaultArgs<ExtArgs>
    menu?: boolean | menuDefaultArgs<ExtArgs>
  }

  export type $menu_diskonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "menu_diskon"
    objects: {
      diskon: Prisma.$diskonPayload<ExtArgs>
      menu: Prisma.$menuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_menu: number
      id_diskon: number
    }, ExtArgs["result"]["menu_diskon"]>
    composites: {}
  }

  type menu_diskonGetPayload<S extends boolean | null | undefined | menu_diskonDefaultArgs> = $Result.GetResult<Prisma.$menu_diskonPayload, S>

  type menu_diskonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<menu_diskonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Menu_diskonCountAggregateInputType | true
    }

  export interface menu_diskonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['menu_diskon'], meta: { name: 'menu_diskon' } }
    /**
     * Find zero or one Menu_diskon that matches the filter.
     * @param {menu_diskonFindUniqueArgs} args - Arguments to find a Menu_diskon
     * @example
     * // Get one Menu_diskon
     * const menu_diskon = await prisma.menu_diskon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends menu_diskonFindUniqueArgs>(args: SelectSubset<T, menu_diskonFindUniqueArgs<ExtArgs>>): Prisma__menu_diskonClient<$Result.GetResult<Prisma.$menu_diskonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menu_diskon that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {menu_diskonFindUniqueOrThrowArgs} args - Arguments to find a Menu_diskon
     * @example
     * // Get one Menu_diskon
     * const menu_diskon = await prisma.menu_diskon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends menu_diskonFindUniqueOrThrowArgs>(args: SelectSubset<T, menu_diskonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__menu_diskonClient<$Result.GetResult<Prisma.$menu_diskonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu_diskon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_diskonFindFirstArgs} args - Arguments to find a Menu_diskon
     * @example
     * // Get one Menu_diskon
     * const menu_diskon = await prisma.menu_diskon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends menu_diskonFindFirstArgs>(args?: SelectSubset<T, menu_diskonFindFirstArgs<ExtArgs>>): Prisma__menu_diskonClient<$Result.GetResult<Prisma.$menu_diskonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu_diskon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_diskonFindFirstOrThrowArgs} args - Arguments to find a Menu_diskon
     * @example
     * // Get one Menu_diskon
     * const menu_diskon = await prisma.menu_diskon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends menu_diskonFindFirstOrThrowArgs>(args?: SelectSubset<T, menu_diskonFindFirstOrThrowArgs<ExtArgs>>): Prisma__menu_diskonClient<$Result.GetResult<Prisma.$menu_diskonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menu_diskons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_diskonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menu_diskons
     * const menu_diskons = await prisma.menu_diskon.findMany()
     * 
     * // Get first 10 Menu_diskons
     * const menu_diskons = await prisma.menu_diskon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menu_diskonWithIdOnly = await prisma.menu_diskon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends menu_diskonFindManyArgs>(args?: SelectSubset<T, menu_diskonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_diskonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menu_diskon.
     * @param {menu_diskonCreateArgs} args - Arguments to create a Menu_diskon.
     * @example
     * // Create one Menu_diskon
     * const Menu_diskon = await prisma.menu_diskon.create({
     *   data: {
     *     // ... data to create a Menu_diskon
     *   }
     * })
     * 
     */
    create<T extends menu_diskonCreateArgs>(args: SelectSubset<T, menu_diskonCreateArgs<ExtArgs>>): Prisma__menu_diskonClient<$Result.GetResult<Prisma.$menu_diskonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menu_diskons.
     * @param {menu_diskonCreateManyArgs} args - Arguments to create many Menu_diskons.
     * @example
     * // Create many Menu_diskons
     * const menu_diskon = await prisma.menu_diskon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends menu_diskonCreateManyArgs>(args?: SelectSubset<T, menu_diskonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Menu_diskons and returns the data saved in the database.
     * @param {menu_diskonCreateManyAndReturnArgs} args - Arguments to create many Menu_diskons.
     * @example
     * // Create many Menu_diskons
     * const menu_diskon = await prisma.menu_diskon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Menu_diskons and only return the `id`
     * const menu_diskonWithIdOnly = await prisma.menu_diskon.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends menu_diskonCreateManyAndReturnArgs>(args?: SelectSubset<T, menu_diskonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_diskonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Menu_diskon.
     * @param {menu_diskonDeleteArgs} args - Arguments to delete one Menu_diskon.
     * @example
     * // Delete one Menu_diskon
     * const Menu_diskon = await prisma.menu_diskon.delete({
     *   where: {
     *     // ... filter to delete one Menu_diskon
     *   }
     * })
     * 
     */
    delete<T extends menu_diskonDeleteArgs>(args: SelectSubset<T, menu_diskonDeleteArgs<ExtArgs>>): Prisma__menu_diskonClient<$Result.GetResult<Prisma.$menu_diskonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menu_diskon.
     * @param {menu_diskonUpdateArgs} args - Arguments to update one Menu_diskon.
     * @example
     * // Update one Menu_diskon
     * const menu_diskon = await prisma.menu_diskon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends menu_diskonUpdateArgs>(args: SelectSubset<T, menu_diskonUpdateArgs<ExtArgs>>): Prisma__menu_diskonClient<$Result.GetResult<Prisma.$menu_diskonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menu_diskons.
     * @param {menu_diskonDeleteManyArgs} args - Arguments to filter Menu_diskons to delete.
     * @example
     * // Delete a few Menu_diskons
     * const { count } = await prisma.menu_diskon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends menu_diskonDeleteManyArgs>(args?: SelectSubset<T, menu_diskonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menu_diskons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_diskonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menu_diskons
     * const menu_diskon = await prisma.menu_diskon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends menu_diskonUpdateManyArgs>(args: SelectSubset<T, menu_diskonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menu_diskons and returns the data updated in the database.
     * @param {menu_diskonUpdateManyAndReturnArgs} args - Arguments to update many Menu_diskons.
     * @example
     * // Update many Menu_diskons
     * const menu_diskon = await prisma.menu_diskon.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Menu_diskons and only return the `id`
     * const menu_diskonWithIdOnly = await prisma.menu_diskon.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends menu_diskonUpdateManyAndReturnArgs>(args: SelectSubset<T, menu_diskonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$menu_diskonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Menu_diskon.
     * @param {menu_diskonUpsertArgs} args - Arguments to update or create a Menu_diskon.
     * @example
     * // Update or create a Menu_diskon
     * const menu_diskon = await prisma.menu_diskon.upsert({
     *   create: {
     *     // ... data to create a Menu_diskon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu_diskon we want to update
     *   }
     * })
     */
    upsert<T extends menu_diskonUpsertArgs>(args: SelectSubset<T, menu_diskonUpsertArgs<ExtArgs>>): Prisma__menu_diskonClient<$Result.GetResult<Prisma.$menu_diskonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menu_diskons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_diskonCountArgs} args - Arguments to filter Menu_diskons to count.
     * @example
     * // Count the number of Menu_diskons
     * const count = await prisma.menu_diskon.count({
     *   where: {
     *     // ... the filter for the Menu_diskons we want to count
     *   }
     * })
    **/
    count<T extends menu_diskonCountArgs>(
      args?: Subset<T, menu_diskonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Menu_diskonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu_diskon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Menu_diskonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Menu_diskonAggregateArgs>(args: Subset<T, Menu_diskonAggregateArgs>): Prisma.PrismaPromise<GetMenu_diskonAggregateType<T>>

    /**
     * Group by Menu_diskon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {menu_diskonGroupByArgs} args - Group by arguments.
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
      T extends menu_diskonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: menu_diskonGroupByArgs['orderBy'] }
        : { orderBy?: menu_diskonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, menu_diskonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenu_diskonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the menu_diskon model
   */
  readonly fields: menu_diskonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for menu_diskon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__menu_diskonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diskon<T extends diskonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, diskonDefaultArgs<ExtArgs>>): Prisma__diskonClient<$Result.GetResult<Prisma.$diskonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    menu<T extends menuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, menuDefaultArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the menu_diskon model
   */
  interface menu_diskonFieldRefs {
    readonly id: FieldRef<"menu_diskon", 'Int'>
    readonly id_menu: FieldRef<"menu_diskon", 'Int'>
    readonly id_diskon: FieldRef<"menu_diskon", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * menu_diskon findUnique
   */
  export type menu_diskonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_diskon
     */
    select?: menu_diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_diskon
     */
    omit?: menu_diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_diskonInclude<ExtArgs> | null
    /**
     * Filter, which menu_diskon to fetch.
     */
    where: menu_diskonWhereUniqueInput
  }

  /**
   * menu_diskon findUniqueOrThrow
   */
  export type menu_diskonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_diskon
     */
    select?: menu_diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_diskon
     */
    omit?: menu_diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_diskonInclude<ExtArgs> | null
    /**
     * Filter, which menu_diskon to fetch.
     */
    where: menu_diskonWhereUniqueInput
  }

  /**
   * menu_diskon findFirst
   */
  export type menu_diskonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_diskon
     */
    select?: menu_diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_diskon
     */
    omit?: menu_diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_diskonInclude<ExtArgs> | null
    /**
     * Filter, which menu_diskon to fetch.
     */
    where?: menu_diskonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_diskons to fetch.
     */
    orderBy?: menu_diskonOrderByWithRelationInput | menu_diskonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menu_diskons.
     */
    cursor?: menu_diskonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_diskons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_diskons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_diskons.
     */
    distinct?: Menu_diskonScalarFieldEnum | Menu_diskonScalarFieldEnum[]
  }

  /**
   * menu_diskon findFirstOrThrow
   */
  export type menu_diskonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_diskon
     */
    select?: menu_diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_diskon
     */
    omit?: menu_diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_diskonInclude<ExtArgs> | null
    /**
     * Filter, which menu_diskon to fetch.
     */
    where?: menu_diskonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_diskons to fetch.
     */
    orderBy?: menu_diskonOrderByWithRelationInput | menu_diskonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for menu_diskons.
     */
    cursor?: menu_diskonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_diskons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_diskons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of menu_diskons.
     */
    distinct?: Menu_diskonScalarFieldEnum | Menu_diskonScalarFieldEnum[]
  }

  /**
   * menu_diskon findMany
   */
  export type menu_diskonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_diskon
     */
    select?: menu_diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_diskon
     */
    omit?: menu_diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_diskonInclude<ExtArgs> | null
    /**
     * Filter, which menu_diskons to fetch.
     */
    where?: menu_diskonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of menu_diskons to fetch.
     */
    orderBy?: menu_diskonOrderByWithRelationInput | menu_diskonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing menu_diskons.
     */
    cursor?: menu_diskonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` menu_diskons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` menu_diskons.
     */
    skip?: number
    distinct?: Menu_diskonScalarFieldEnum | Menu_diskonScalarFieldEnum[]
  }

  /**
   * menu_diskon create
   */
  export type menu_diskonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_diskon
     */
    select?: menu_diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_diskon
     */
    omit?: menu_diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_diskonInclude<ExtArgs> | null
    /**
     * The data needed to create a menu_diskon.
     */
    data: XOR<menu_diskonCreateInput, menu_diskonUncheckedCreateInput>
  }

  /**
   * menu_diskon createMany
   */
  export type menu_diskonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many menu_diskons.
     */
    data: menu_diskonCreateManyInput | menu_diskonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * menu_diskon createManyAndReturn
   */
  export type menu_diskonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_diskon
     */
    select?: menu_diskonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the menu_diskon
     */
    omit?: menu_diskonOmit<ExtArgs> | null
    /**
     * The data used to create many menu_diskons.
     */
    data: menu_diskonCreateManyInput | menu_diskonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_diskonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * menu_diskon update
   */
  export type menu_diskonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_diskon
     */
    select?: menu_diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_diskon
     */
    omit?: menu_diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_diskonInclude<ExtArgs> | null
    /**
     * The data needed to update a menu_diskon.
     */
    data: XOR<menu_diskonUpdateInput, menu_diskonUncheckedUpdateInput>
    /**
     * Choose, which menu_diskon to update.
     */
    where: menu_diskonWhereUniqueInput
  }

  /**
   * menu_diskon updateMany
   */
  export type menu_diskonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update menu_diskons.
     */
    data: XOR<menu_diskonUpdateManyMutationInput, menu_diskonUncheckedUpdateManyInput>
    /**
     * Filter which menu_diskons to update
     */
    where?: menu_diskonWhereInput
    /**
     * Limit how many menu_diskons to update.
     */
    limit?: number
  }

  /**
   * menu_diskon updateManyAndReturn
   */
  export type menu_diskonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_diskon
     */
    select?: menu_diskonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the menu_diskon
     */
    omit?: menu_diskonOmit<ExtArgs> | null
    /**
     * The data used to update menu_diskons.
     */
    data: XOR<menu_diskonUpdateManyMutationInput, menu_diskonUncheckedUpdateManyInput>
    /**
     * Filter which menu_diskons to update
     */
    where?: menu_diskonWhereInput
    /**
     * Limit how many menu_diskons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_diskonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * menu_diskon upsert
   */
  export type menu_diskonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_diskon
     */
    select?: menu_diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_diskon
     */
    omit?: menu_diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_diskonInclude<ExtArgs> | null
    /**
     * The filter to search for the menu_diskon to update in case it exists.
     */
    where: menu_diskonWhereUniqueInput
    /**
     * In case the menu_diskon found by the `where` argument doesn't exist, create a new menu_diskon with this data.
     */
    create: XOR<menu_diskonCreateInput, menu_diskonUncheckedCreateInput>
    /**
     * In case the menu_diskon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<menu_diskonUpdateInput, menu_diskonUncheckedUpdateInput>
  }

  /**
   * menu_diskon delete
   */
  export type menu_diskonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_diskon
     */
    select?: menu_diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_diskon
     */
    omit?: menu_diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_diskonInclude<ExtArgs> | null
    /**
     * Filter which menu_diskon to delete.
     */
    where: menu_diskonWhereUniqueInput
  }

  /**
   * menu_diskon deleteMany
   */
  export type menu_diskonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which menu_diskons to delete
     */
    where?: menu_diskonWhereInput
    /**
     * Limit how many menu_diskons to delete.
     */
    limit?: number
  }

  /**
   * menu_diskon without action
   */
  export type menu_diskonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the menu_diskon
     */
    select?: menu_diskonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the menu_diskon
     */
    omit?: menu_diskonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: menu_diskonInclude<ExtArgs> | null
  }


  /**
   * Model transaksi
   */

  export type AggregateTransaksi = {
    _count: TransaksiCountAggregateOutputType | null
    _avg: TransaksiAvgAggregateOutputType | null
    _sum: TransaksiSumAggregateOutputType | null
    _min: TransaksiMinAggregateOutputType | null
    _max: TransaksiMaxAggregateOutputType | null
  }

  export type TransaksiAvgAggregateOutputType = {
    id: number | null
    id_stan: number | null
    id_siswa: number | null
  }

  export type TransaksiSumAggregateOutputType = {
    id: number | null
    id_stan: number | null
    id_siswa: number | null
  }

  export type TransaksiMinAggregateOutputType = {
    id: number | null
    tanggal: Date | null
    id_stan: number | null
    id_siswa: number | null
    uuid: string | null
    status: $Enums.status | null
  }

  export type TransaksiMaxAggregateOutputType = {
    id: number | null
    tanggal: Date | null
    id_stan: number | null
    id_siswa: number | null
    uuid: string | null
    status: $Enums.status | null
  }

  export type TransaksiCountAggregateOutputType = {
    id: number
    tanggal: number
    id_stan: number
    id_siswa: number
    uuid: number
    status: number
    _all: number
  }


  export type TransaksiAvgAggregateInputType = {
    id?: true
    id_stan?: true
    id_siswa?: true
  }

  export type TransaksiSumAggregateInputType = {
    id?: true
    id_stan?: true
    id_siswa?: true
  }

  export type TransaksiMinAggregateInputType = {
    id?: true
    tanggal?: true
    id_stan?: true
    id_siswa?: true
    uuid?: true
    status?: true
  }

  export type TransaksiMaxAggregateInputType = {
    id?: true
    tanggal?: true
    id_stan?: true
    id_siswa?: true
    uuid?: true
    status?: true
  }

  export type TransaksiCountAggregateInputType = {
    id?: true
    tanggal?: true
    id_stan?: true
    id_siswa?: true
    uuid?: true
    status?: true
    _all?: true
  }

  export type TransaksiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaksi to aggregate.
     */
    where?: transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksis to fetch.
     */
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transaksis
    **/
    _count?: true | TransaksiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransaksiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransaksiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransaksiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransaksiMaxAggregateInputType
  }

  export type GetTransaksiAggregateType<T extends TransaksiAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaksi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaksi[P]>
      : GetScalarType<T[P], AggregateTransaksi[P]>
  }




  export type transaksiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transaksiWhereInput
    orderBy?: transaksiOrderByWithAggregationInput | transaksiOrderByWithAggregationInput[]
    by: TransaksiScalarFieldEnum[] | TransaksiScalarFieldEnum
    having?: transaksiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransaksiCountAggregateInputType | true
    _avg?: TransaksiAvgAggregateInputType
    _sum?: TransaksiSumAggregateInputType
    _min?: TransaksiMinAggregateInputType
    _max?: TransaksiMaxAggregateInputType
  }

  export type TransaksiGroupByOutputType = {
    id: number
    tanggal: Date
    id_stan: number
    id_siswa: number
    uuid: string
    status: $Enums.status
    _count: TransaksiCountAggregateOutputType | null
    _avg: TransaksiAvgAggregateOutputType | null
    _sum: TransaksiSumAggregateOutputType | null
    _min: TransaksiMinAggregateOutputType | null
    _max: TransaksiMaxAggregateOutputType | null
  }

  type GetTransaksiGroupByPayload<T extends transaksiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransaksiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransaksiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransaksiGroupByOutputType[P]>
            : GetScalarType<T[P], TransaksiGroupByOutputType[P]>
        }
      >
    >


  export type transaksiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    id_stan?: boolean
    id_siswa?: boolean
    uuid?: boolean
    status?: boolean
    detail_transaksi?: boolean | transaksi$detail_transaksiArgs<ExtArgs>
    siswa?: boolean | siswaDefaultArgs<ExtArgs>
    stan?: boolean | stanDefaultArgs<ExtArgs>
    _count?: boolean | TransaksiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksi"]>

  export type transaksiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    id_stan?: boolean
    id_siswa?: boolean
    uuid?: boolean
    status?: boolean
    siswa?: boolean | siswaDefaultArgs<ExtArgs>
    stan?: boolean | stanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksi"]>

  export type transaksiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanggal?: boolean
    id_stan?: boolean
    id_siswa?: boolean
    uuid?: boolean
    status?: boolean
    siswa?: boolean | siswaDefaultArgs<ExtArgs>
    stan?: boolean | stanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksi"]>

  export type transaksiSelectScalar = {
    id?: boolean
    tanggal?: boolean
    id_stan?: boolean
    id_siswa?: boolean
    uuid?: boolean
    status?: boolean
  }

  export type transaksiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanggal" | "id_stan" | "id_siswa" | "uuid" | "status", ExtArgs["result"]["transaksi"]>
  export type transaksiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail_transaksi?: boolean | transaksi$detail_transaksiArgs<ExtArgs>
    siswa?: boolean | siswaDefaultArgs<ExtArgs>
    stan?: boolean | stanDefaultArgs<ExtArgs>
    _count?: boolean | TransaksiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type transaksiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    siswa?: boolean | siswaDefaultArgs<ExtArgs>
    stan?: boolean | stanDefaultArgs<ExtArgs>
  }
  export type transaksiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    siswa?: boolean | siswaDefaultArgs<ExtArgs>
    stan?: boolean | stanDefaultArgs<ExtArgs>
  }

  export type $transaksiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaksi"
    objects: {
      detail_transaksi: Prisma.$detail_transaksiPayload<ExtArgs>[]
      siswa: Prisma.$siswaPayload<ExtArgs>
      stan: Prisma.$stanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tanggal: Date
      id_stan: number
      id_siswa: number
      uuid: string
      status: $Enums.status
    }, ExtArgs["result"]["transaksi"]>
    composites: {}
  }

  type transaksiGetPayload<S extends boolean | null | undefined | transaksiDefaultArgs> = $Result.GetResult<Prisma.$transaksiPayload, S>

  type transaksiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transaksiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransaksiCountAggregateInputType | true
    }

  export interface transaksiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaksi'], meta: { name: 'transaksi' } }
    /**
     * Find zero or one Transaksi that matches the filter.
     * @param {transaksiFindUniqueArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transaksiFindUniqueArgs>(args: SelectSubset<T, transaksiFindUniqueArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaksi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transaksiFindUniqueOrThrowArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transaksiFindUniqueOrThrowArgs>(args: SelectSubset<T, transaksiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaksi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiFindFirstArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transaksiFindFirstArgs>(args?: SelectSubset<T, transaksiFindFirstArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaksi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiFindFirstOrThrowArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transaksiFindFirstOrThrowArgs>(args?: SelectSubset<T, transaksiFindFirstOrThrowArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transaksis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaksis
     * const transaksis = await prisma.transaksi.findMany()
     * 
     * // Get first 10 Transaksis
     * const transaksis = await prisma.transaksi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaksiWithIdOnly = await prisma.transaksi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transaksiFindManyArgs>(args?: SelectSubset<T, transaksiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaksi.
     * @param {transaksiCreateArgs} args - Arguments to create a Transaksi.
     * @example
     * // Create one Transaksi
     * const Transaksi = await prisma.transaksi.create({
     *   data: {
     *     // ... data to create a Transaksi
     *   }
     * })
     * 
     */
    create<T extends transaksiCreateArgs>(args: SelectSubset<T, transaksiCreateArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transaksis.
     * @param {transaksiCreateManyArgs} args - Arguments to create many Transaksis.
     * @example
     * // Create many Transaksis
     * const transaksi = await prisma.transaksi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transaksiCreateManyArgs>(args?: SelectSubset<T, transaksiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transaksis and returns the data saved in the database.
     * @param {transaksiCreateManyAndReturnArgs} args - Arguments to create many Transaksis.
     * @example
     * // Create many Transaksis
     * const transaksi = await prisma.transaksi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transaksis and only return the `id`
     * const transaksiWithIdOnly = await prisma.transaksi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transaksiCreateManyAndReturnArgs>(args?: SelectSubset<T, transaksiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaksi.
     * @param {transaksiDeleteArgs} args - Arguments to delete one Transaksi.
     * @example
     * // Delete one Transaksi
     * const Transaksi = await prisma.transaksi.delete({
     *   where: {
     *     // ... filter to delete one Transaksi
     *   }
     * })
     * 
     */
    delete<T extends transaksiDeleteArgs>(args: SelectSubset<T, transaksiDeleteArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaksi.
     * @param {transaksiUpdateArgs} args - Arguments to update one Transaksi.
     * @example
     * // Update one Transaksi
     * const transaksi = await prisma.transaksi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transaksiUpdateArgs>(args: SelectSubset<T, transaksiUpdateArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transaksis.
     * @param {transaksiDeleteManyArgs} args - Arguments to filter Transaksis to delete.
     * @example
     * // Delete a few Transaksis
     * const { count } = await prisma.transaksi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transaksiDeleteManyArgs>(args?: SelectSubset<T, transaksiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaksis
     * const transaksi = await prisma.transaksi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transaksiUpdateManyArgs>(args: SelectSubset<T, transaksiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaksis and returns the data updated in the database.
     * @param {transaksiUpdateManyAndReturnArgs} args - Arguments to update many Transaksis.
     * @example
     * // Update many Transaksis
     * const transaksi = await prisma.transaksi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transaksis and only return the `id`
     * const transaksiWithIdOnly = await prisma.transaksi.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends transaksiUpdateManyAndReturnArgs>(args: SelectSubset<T, transaksiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaksi.
     * @param {transaksiUpsertArgs} args - Arguments to update or create a Transaksi.
     * @example
     * // Update or create a Transaksi
     * const transaksi = await prisma.transaksi.upsert({
     *   create: {
     *     // ... data to create a Transaksi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaksi we want to update
     *   }
     * })
     */
    upsert<T extends transaksiUpsertArgs>(args: SelectSubset<T, transaksiUpsertArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiCountArgs} args - Arguments to filter Transaksis to count.
     * @example
     * // Count the number of Transaksis
     * const count = await prisma.transaksi.count({
     *   where: {
     *     // ... the filter for the Transaksis we want to count
     *   }
     * })
    **/
    count<T extends transaksiCountArgs>(
      args?: Subset<T, transaksiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransaksiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransaksiAggregateArgs>(args: Subset<T, TransaksiAggregateArgs>): Prisma.PrismaPromise<GetTransaksiAggregateType<T>>

    /**
     * Group by Transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transaksiGroupByArgs} args - Group by arguments.
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
      T extends transaksiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transaksiGroupByArgs['orderBy'] }
        : { orderBy?: transaksiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transaksiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaksiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaksi model
   */
  readonly fields: transaksiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaksi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transaksiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detail_transaksi<T extends transaksi$detail_transaksiArgs<ExtArgs> = {}>(args?: Subset<T, transaksi$detail_transaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    siswa<T extends siswaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, siswaDefaultArgs<ExtArgs>>): Prisma__siswaClient<$Result.GetResult<Prisma.$siswaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stan<T extends stanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stanDefaultArgs<ExtArgs>>): Prisma__stanClient<$Result.GetResult<Prisma.$stanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the transaksi model
   */
  interface transaksiFieldRefs {
    readonly id: FieldRef<"transaksi", 'Int'>
    readonly tanggal: FieldRef<"transaksi", 'DateTime'>
    readonly id_stan: FieldRef<"transaksi", 'Int'>
    readonly id_siswa: FieldRef<"transaksi", 'Int'>
    readonly uuid: FieldRef<"transaksi", 'String'>
    readonly status: FieldRef<"transaksi", 'status'>
  }
    

  // Custom InputTypes
  /**
   * transaksi findUnique
   */
  export type transaksiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter, which transaksi to fetch.
     */
    where: transaksiWhereUniqueInput
  }

  /**
   * transaksi findUniqueOrThrow
   */
  export type transaksiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter, which transaksi to fetch.
     */
    where: transaksiWhereUniqueInput
  }

  /**
   * transaksi findFirst
   */
  export type transaksiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter, which transaksi to fetch.
     */
    where?: transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksis to fetch.
     */
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaksis.
     */
    cursor?: transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * transaksi findFirstOrThrow
   */
  export type transaksiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter, which transaksi to fetch.
     */
    where?: transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksis to fetch.
     */
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transaksis.
     */
    cursor?: transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * transaksi findMany
   */
  export type transaksiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter, which transaksis to fetch.
     */
    where?: transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transaksis to fetch.
     */
    orderBy?: transaksiOrderByWithRelationInput | transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transaksis.
     */
    cursor?: transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transaksis.
     */
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * transaksi create
   */
  export type transaksiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * The data needed to create a transaksi.
     */
    data: XOR<transaksiCreateInput, transaksiUncheckedCreateInput>
  }

  /**
   * transaksi createMany
   */
  export type transaksiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transaksis.
     */
    data: transaksiCreateManyInput | transaksiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaksi createManyAndReturn
   */
  export type transaksiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * The data used to create many transaksis.
     */
    data: transaksiCreateManyInput | transaksiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaksi update
   */
  export type transaksiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * The data needed to update a transaksi.
     */
    data: XOR<transaksiUpdateInput, transaksiUncheckedUpdateInput>
    /**
     * Choose, which transaksi to update.
     */
    where: transaksiWhereUniqueInput
  }

  /**
   * transaksi updateMany
   */
  export type transaksiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transaksis.
     */
    data: XOR<transaksiUpdateManyMutationInput, transaksiUncheckedUpdateManyInput>
    /**
     * Filter which transaksis to update
     */
    where?: transaksiWhereInput
    /**
     * Limit how many transaksis to update.
     */
    limit?: number
  }

  /**
   * transaksi updateManyAndReturn
   */
  export type transaksiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * The data used to update transaksis.
     */
    data: XOR<transaksiUpdateManyMutationInput, transaksiUncheckedUpdateManyInput>
    /**
     * Filter which transaksis to update
     */
    where?: transaksiWhereInput
    /**
     * Limit how many transaksis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaksi upsert
   */
  export type transaksiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * The filter to search for the transaksi to update in case it exists.
     */
    where: transaksiWhereUniqueInput
    /**
     * In case the transaksi found by the `where` argument doesn't exist, create a new transaksi with this data.
     */
    create: XOR<transaksiCreateInput, transaksiUncheckedCreateInput>
    /**
     * In case the transaksi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transaksiUpdateInput, transaksiUncheckedUpdateInput>
  }

  /**
   * transaksi delete
   */
  export type transaksiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
    /**
     * Filter which transaksi to delete.
     */
    where: transaksiWhereUniqueInput
  }

  /**
   * transaksi deleteMany
   */
  export type transaksiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaksis to delete
     */
    where?: transaksiWhereInput
    /**
     * Limit how many transaksis to delete.
     */
    limit?: number
  }

  /**
   * transaksi.detail_transaksi
   */
  export type transaksi$detail_transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
    where?: detail_transaksiWhereInput
    orderBy?: detail_transaksiOrderByWithRelationInput | detail_transaksiOrderByWithRelationInput[]
    cursor?: detail_transaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Detail_transaksiScalarFieldEnum | Detail_transaksiScalarFieldEnum[]
  }

  /**
   * transaksi without action
   */
  export type transaksiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaksi
     */
    select?: transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaksi
     */
    omit?: transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transaksiInclude<ExtArgs> | null
  }


  /**
   * Model detail_transaksi
   */

  export type AggregateDetail_transaksi = {
    _count: Detail_transaksiCountAggregateOutputType | null
    _avg: Detail_transaksiAvgAggregateOutputType | null
    _sum: Detail_transaksiSumAggregateOutputType | null
    _min: Detail_transaksiMinAggregateOutputType | null
    _max: Detail_transaksiMaxAggregateOutputType | null
  }

  export type Detail_transaksiAvgAggregateOutputType = {
    id: number | null
    jumlah: number | null
    harga_total: Decimal | null
    id_transaksi: number | null
    id_menu: number | null
  }

  export type Detail_transaksiSumAggregateOutputType = {
    id: number | null
    jumlah: number | null
    harga_total: Decimal | null
    id_transaksi: number | null
    id_menu: number | null
  }

  export type Detail_transaksiMinAggregateOutputType = {
    id: number | null
    jumlah: number | null
    harga_total: Decimal | null
    id_transaksi: number | null
    id_menu: number | null
    catatan: string | null
  }

  export type Detail_transaksiMaxAggregateOutputType = {
    id: number | null
    jumlah: number | null
    harga_total: Decimal | null
    id_transaksi: number | null
    id_menu: number | null
    catatan: string | null
  }

  export type Detail_transaksiCountAggregateOutputType = {
    id: number
    jumlah: number
    harga_total: number
    id_transaksi: number
    id_menu: number
    catatan: number
    _all: number
  }


  export type Detail_transaksiAvgAggregateInputType = {
    id?: true
    jumlah?: true
    harga_total?: true
    id_transaksi?: true
    id_menu?: true
  }

  export type Detail_transaksiSumAggregateInputType = {
    id?: true
    jumlah?: true
    harga_total?: true
    id_transaksi?: true
    id_menu?: true
  }

  export type Detail_transaksiMinAggregateInputType = {
    id?: true
    jumlah?: true
    harga_total?: true
    id_transaksi?: true
    id_menu?: true
    catatan?: true
  }

  export type Detail_transaksiMaxAggregateInputType = {
    id?: true
    jumlah?: true
    harga_total?: true
    id_transaksi?: true
    id_menu?: true
    catatan?: true
  }

  export type Detail_transaksiCountAggregateInputType = {
    id?: true
    jumlah?: true
    harga_total?: true
    id_transaksi?: true
    id_menu?: true
    catatan?: true
    _all?: true
  }

  export type Detail_transaksiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detail_transaksi to aggregate.
     */
    where?: detail_transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_transaksis to fetch.
     */
    orderBy?: detail_transaksiOrderByWithRelationInput | detail_transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: detail_transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned detail_transaksis
    **/
    _count?: true | Detail_transaksiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Detail_transaksiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Detail_transaksiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Detail_transaksiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Detail_transaksiMaxAggregateInputType
  }

  export type GetDetail_transaksiAggregateType<T extends Detail_transaksiAggregateArgs> = {
        [P in keyof T & keyof AggregateDetail_transaksi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetail_transaksi[P]>
      : GetScalarType<T[P], AggregateDetail_transaksi[P]>
  }




  export type detail_transaksiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: detail_transaksiWhereInput
    orderBy?: detail_transaksiOrderByWithAggregationInput | detail_transaksiOrderByWithAggregationInput[]
    by: Detail_transaksiScalarFieldEnum[] | Detail_transaksiScalarFieldEnum
    having?: detail_transaksiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Detail_transaksiCountAggregateInputType | true
    _avg?: Detail_transaksiAvgAggregateInputType
    _sum?: Detail_transaksiSumAggregateInputType
    _min?: Detail_transaksiMinAggregateInputType
    _max?: Detail_transaksiMaxAggregateInputType
  }

  export type Detail_transaksiGroupByOutputType = {
    id: number
    jumlah: number
    harga_total: Decimal
    id_transaksi: number
    id_menu: number
    catatan: string | null
    _count: Detail_transaksiCountAggregateOutputType | null
    _avg: Detail_transaksiAvgAggregateOutputType | null
    _sum: Detail_transaksiSumAggregateOutputType | null
    _min: Detail_transaksiMinAggregateOutputType | null
    _max: Detail_transaksiMaxAggregateOutputType | null
  }

  type GetDetail_transaksiGroupByPayload<T extends detail_transaksiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Detail_transaksiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Detail_transaksiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Detail_transaksiGroupByOutputType[P]>
            : GetScalarType<T[P], Detail_transaksiGroupByOutputType[P]>
        }
      >
    >


  export type detail_transaksiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jumlah?: boolean
    harga_total?: boolean
    id_transaksi?: boolean
    id_menu?: boolean
    catatan?: boolean
    menu?: boolean | menuDefaultArgs<ExtArgs>
    transaksi?: boolean | transaksiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detail_transaksi"]>

  export type detail_transaksiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jumlah?: boolean
    harga_total?: boolean
    id_transaksi?: boolean
    id_menu?: boolean
    catatan?: boolean
    menu?: boolean | menuDefaultArgs<ExtArgs>
    transaksi?: boolean | transaksiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detail_transaksi"]>

  export type detail_transaksiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jumlah?: boolean
    harga_total?: boolean
    id_transaksi?: boolean
    id_menu?: boolean
    catatan?: boolean
    menu?: boolean | menuDefaultArgs<ExtArgs>
    transaksi?: boolean | transaksiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detail_transaksi"]>

  export type detail_transaksiSelectScalar = {
    id?: boolean
    jumlah?: boolean
    harga_total?: boolean
    id_transaksi?: boolean
    id_menu?: boolean
    catatan?: boolean
  }

  export type detail_transaksiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jumlah" | "harga_total" | "id_transaksi" | "id_menu" | "catatan", ExtArgs["result"]["detail_transaksi"]>
  export type detail_transaksiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | menuDefaultArgs<ExtArgs>
    transaksi?: boolean | transaksiDefaultArgs<ExtArgs>
  }
  export type detail_transaksiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | menuDefaultArgs<ExtArgs>
    transaksi?: boolean | transaksiDefaultArgs<ExtArgs>
  }
  export type detail_transaksiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | menuDefaultArgs<ExtArgs>
    transaksi?: boolean | transaksiDefaultArgs<ExtArgs>
  }

  export type $detail_transaksiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "detail_transaksi"
    objects: {
      menu: Prisma.$menuPayload<ExtArgs>
      transaksi: Prisma.$transaksiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      jumlah: number
      harga_total: Prisma.Decimal
      id_transaksi: number
      id_menu: number
      catatan: string | null
    }, ExtArgs["result"]["detail_transaksi"]>
    composites: {}
  }

  type detail_transaksiGetPayload<S extends boolean | null | undefined | detail_transaksiDefaultArgs> = $Result.GetResult<Prisma.$detail_transaksiPayload, S>

  type detail_transaksiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<detail_transaksiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Detail_transaksiCountAggregateInputType | true
    }

  export interface detail_transaksiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['detail_transaksi'], meta: { name: 'detail_transaksi' } }
    /**
     * Find zero or one Detail_transaksi that matches the filter.
     * @param {detail_transaksiFindUniqueArgs} args - Arguments to find a Detail_transaksi
     * @example
     * // Get one Detail_transaksi
     * const detail_transaksi = await prisma.detail_transaksi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends detail_transaksiFindUniqueArgs>(args: SelectSubset<T, detail_transaksiFindUniqueArgs<ExtArgs>>): Prisma__detail_transaksiClient<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detail_transaksi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {detail_transaksiFindUniqueOrThrowArgs} args - Arguments to find a Detail_transaksi
     * @example
     * // Get one Detail_transaksi
     * const detail_transaksi = await prisma.detail_transaksi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends detail_transaksiFindUniqueOrThrowArgs>(args: SelectSubset<T, detail_transaksiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__detail_transaksiClient<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detail_transaksi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_transaksiFindFirstArgs} args - Arguments to find a Detail_transaksi
     * @example
     * // Get one Detail_transaksi
     * const detail_transaksi = await prisma.detail_transaksi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends detail_transaksiFindFirstArgs>(args?: SelectSubset<T, detail_transaksiFindFirstArgs<ExtArgs>>): Prisma__detail_transaksiClient<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detail_transaksi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_transaksiFindFirstOrThrowArgs} args - Arguments to find a Detail_transaksi
     * @example
     * // Get one Detail_transaksi
     * const detail_transaksi = await prisma.detail_transaksi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends detail_transaksiFindFirstOrThrowArgs>(args?: SelectSubset<T, detail_transaksiFindFirstOrThrowArgs<ExtArgs>>): Prisma__detail_transaksiClient<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detail_transaksis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_transaksiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detail_transaksis
     * const detail_transaksis = await prisma.detail_transaksi.findMany()
     * 
     * // Get first 10 Detail_transaksis
     * const detail_transaksis = await prisma.detail_transaksi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detail_transaksiWithIdOnly = await prisma.detail_transaksi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends detail_transaksiFindManyArgs>(args?: SelectSubset<T, detail_transaksiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detail_transaksi.
     * @param {detail_transaksiCreateArgs} args - Arguments to create a Detail_transaksi.
     * @example
     * // Create one Detail_transaksi
     * const Detail_transaksi = await prisma.detail_transaksi.create({
     *   data: {
     *     // ... data to create a Detail_transaksi
     *   }
     * })
     * 
     */
    create<T extends detail_transaksiCreateArgs>(args: SelectSubset<T, detail_transaksiCreateArgs<ExtArgs>>): Prisma__detail_transaksiClient<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detail_transaksis.
     * @param {detail_transaksiCreateManyArgs} args - Arguments to create many Detail_transaksis.
     * @example
     * // Create many Detail_transaksis
     * const detail_transaksi = await prisma.detail_transaksi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends detail_transaksiCreateManyArgs>(args?: SelectSubset<T, detail_transaksiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Detail_transaksis and returns the data saved in the database.
     * @param {detail_transaksiCreateManyAndReturnArgs} args - Arguments to create many Detail_transaksis.
     * @example
     * // Create many Detail_transaksis
     * const detail_transaksi = await prisma.detail_transaksi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Detail_transaksis and only return the `id`
     * const detail_transaksiWithIdOnly = await prisma.detail_transaksi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends detail_transaksiCreateManyAndReturnArgs>(args?: SelectSubset<T, detail_transaksiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Detail_transaksi.
     * @param {detail_transaksiDeleteArgs} args - Arguments to delete one Detail_transaksi.
     * @example
     * // Delete one Detail_transaksi
     * const Detail_transaksi = await prisma.detail_transaksi.delete({
     *   where: {
     *     // ... filter to delete one Detail_transaksi
     *   }
     * })
     * 
     */
    delete<T extends detail_transaksiDeleteArgs>(args: SelectSubset<T, detail_transaksiDeleteArgs<ExtArgs>>): Prisma__detail_transaksiClient<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detail_transaksi.
     * @param {detail_transaksiUpdateArgs} args - Arguments to update one Detail_transaksi.
     * @example
     * // Update one Detail_transaksi
     * const detail_transaksi = await prisma.detail_transaksi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends detail_transaksiUpdateArgs>(args: SelectSubset<T, detail_transaksiUpdateArgs<ExtArgs>>): Prisma__detail_transaksiClient<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detail_transaksis.
     * @param {detail_transaksiDeleteManyArgs} args - Arguments to filter Detail_transaksis to delete.
     * @example
     * // Delete a few Detail_transaksis
     * const { count } = await prisma.detail_transaksi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends detail_transaksiDeleteManyArgs>(args?: SelectSubset<T, detail_transaksiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detail_transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_transaksiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detail_transaksis
     * const detail_transaksi = await prisma.detail_transaksi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends detail_transaksiUpdateManyArgs>(args: SelectSubset<T, detail_transaksiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detail_transaksis and returns the data updated in the database.
     * @param {detail_transaksiUpdateManyAndReturnArgs} args - Arguments to update many Detail_transaksis.
     * @example
     * // Update many Detail_transaksis
     * const detail_transaksi = await prisma.detail_transaksi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Detail_transaksis and only return the `id`
     * const detail_transaksiWithIdOnly = await prisma.detail_transaksi.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends detail_transaksiUpdateManyAndReturnArgs>(args: SelectSubset<T, detail_transaksiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Detail_transaksi.
     * @param {detail_transaksiUpsertArgs} args - Arguments to update or create a Detail_transaksi.
     * @example
     * // Update or create a Detail_transaksi
     * const detail_transaksi = await prisma.detail_transaksi.upsert({
     *   create: {
     *     // ... data to create a Detail_transaksi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detail_transaksi we want to update
     *   }
     * })
     */
    upsert<T extends detail_transaksiUpsertArgs>(args: SelectSubset<T, detail_transaksiUpsertArgs<ExtArgs>>): Prisma__detail_transaksiClient<$Result.GetResult<Prisma.$detail_transaksiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detail_transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_transaksiCountArgs} args - Arguments to filter Detail_transaksis to count.
     * @example
     * // Count the number of Detail_transaksis
     * const count = await prisma.detail_transaksi.count({
     *   where: {
     *     // ... the filter for the Detail_transaksis we want to count
     *   }
     * })
    **/
    count<T extends detail_transaksiCountArgs>(
      args?: Subset<T, detail_transaksiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Detail_transaksiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detail_transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Detail_transaksiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Detail_transaksiAggregateArgs>(args: Subset<T, Detail_transaksiAggregateArgs>): Prisma.PrismaPromise<GetDetail_transaksiAggregateType<T>>

    /**
     * Group by Detail_transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {detail_transaksiGroupByArgs} args - Group by arguments.
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
      T extends detail_transaksiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: detail_transaksiGroupByArgs['orderBy'] }
        : { orderBy?: detail_transaksiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, detail_transaksiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetail_transaksiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the detail_transaksi model
   */
  readonly fields: detail_transaksiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for detail_transaksi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__detail_transaksiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu<T extends menuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, menuDefaultArgs<ExtArgs>>): Prisma__menuClient<$Result.GetResult<Prisma.$menuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaksi<T extends transaksiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, transaksiDefaultArgs<ExtArgs>>): Prisma__transaksiClient<$Result.GetResult<Prisma.$transaksiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the detail_transaksi model
   */
  interface detail_transaksiFieldRefs {
    readonly id: FieldRef<"detail_transaksi", 'Int'>
    readonly jumlah: FieldRef<"detail_transaksi", 'Int'>
    readonly harga_total: FieldRef<"detail_transaksi", 'Decimal'>
    readonly id_transaksi: FieldRef<"detail_transaksi", 'Int'>
    readonly id_menu: FieldRef<"detail_transaksi", 'Int'>
    readonly catatan: FieldRef<"detail_transaksi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * detail_transaksi findUnique
   */
  export type detail_transaksiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
    /**
     * Filter, which detail_transaksi to fetch.
     */
    where: detail_transaksiWhereUniqueInput
  }

  /**
   * detail_transaksi findUniqueOrThrow
   */
  export type detail_transaksiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
    /**
     * Filter, which detail_transaksi to fetch.
     */
    where: detail_transaksiWhereUniqueInput
  }

  /**
   * detail_transaksi findFirst
   */
  export type detail_transaksiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
    /**
     * Filter, which detail_transaksi to fetch.
     */
    where?: detail_transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_transaksis to fetch.
     */
    orderBy?: detail_transaksiOrderByWithRelationInput | detail_transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detail_transaksis.
     */
    cursor?: detail_transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detail_transaksis.
     */
    distinct?: Detail_transaksiScalarFieldEnum | Detail_transaksiScalarFieldEnum[]
  }

  /**
   * detail_transaksi findFirstOrThrow
   */
  export type detail_transaksiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
    /**
     * Filter, which detail_transaksi to fetch.
     */
    where?: detail_transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_transaksis to fetch.
     */
    orderBy?: detail_transaksiOrderByWithRelationInput | detail_transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for detail_transaksis.
     */
    cursor?: detail_transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of detail_transaksis.
     */
    distinct?: Detail_transaksiScalarFieldEnum | Detail_transaksiScalarFieldEnum[]
  }

  /**
   * detail_transaksi findMany
   */
  export type detail_transaksiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
    /**
     * Filter, which detail_transaksis to fetch.
     */
    where?: detail_transaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of detail_transaksis to fetch.
     */
    orderBy?: detail_transaksiOrderByWithRelationInput | detail_transaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing detail_transaksis.
     */
    cursor?: detail_transaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` detail_transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` detail_transaksis.
     */
    skip?: number
    distinct?: Detail_transaksiScalarFieldEnum | Detail_transaksiScalarFieldEnum[]
  }

  /**
   * detail_transaksi create
   */
  export type detail_transaksiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
    /**
     * The data needed to create a detail_transaksi.
     */
    data: XOR<detail_transaksiCreateInput, detail_transaksiUncheckedCreateInput>
  }

  /**
   * detail_transaksi createMany
   */
  export type detail_transaksiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many detail_transaksis.
     */
    data: detail_transaksiCreateManyInput | detail_transaksiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * detail_transaksi createManyAndReturn
   */
  export type detail_transaksiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * The data used to create many detail_transaksis.
     */
    data: detail_transaksiCreateManyInput | detail_transaksiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * detail_transaksi update
   */
  export type detail_transaksiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
    /**
     * The data needed to update a detail_transaksi.
     */
    data: XOR<detail_transaksiUpdateInput, detail_transaksiUncheckedUpdateInput>
    /**
     * Choose, which detail_transaksi to update.
     */
    where: detail_transaksiWhereUniqueInput
  }

  /**
   * detail_transaksi updateMany
   */
  export type detail_transaksiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update detail_transaksis.
     */
    data: XOR<detail_transaksiUpdateManyMutationInput, detail_transaksiUncheckedUpdateManyInput>
    /**
     * Filter which detail_transaksis to update
     */
    where?: detail_transaksiWhereInput
    /**
     * Limit how many detail_transaksis to update.
     */
    limit?: number
  }

  /**
   * detail_transaksi updateManyAndReturn
   */
  export type detail_transaksiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * The data used to update detail_transaksis.
     */
    data: XOR<detail_transaksiUpdateManyMutationInput, detail_transaksiUncheckedUpdateManyInput>
    /**
     * Filter which detail_transaksis to update
     */
    where?: detail_transaksiWhereInput
    /**
     * Limit how many detail_transaksis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * detail_transaksi upsert
   */
  export type detail_transaksiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
    /**
     * The filter to search for the detail_transaksi to update in case it exists.
     */
    where: detail_transaksiWhereUniqueInput
    /**
     * In case the detail_transaksi found by the `where` argument doesn't exist, create a new detail_transaksi with this data.
     */
    create: XOR<detail_transaksiCreateInput, detail_transaksiUncheckedCreateInput>
    /**
     * In case the detail_transaksi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<detail_transaksiUpdateInput, detail_transaksiUncheckedUpdateInput>
  }

  /**
   * detail_transaksi delete
   */
  export type detail_transaksiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
    /**
     * Filter which detail_transaksi to delete.
     */
    where: detail_transaksiWhereUniqueInput
  }

  /**
   * detail_transaksi deleteMany
   */
  export type detail_transaksiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which detail_transaksis to delete
     */
    where?: detail_transaksiWhereInput
    /**
     * Limit how many detail_transaksis to delete.
     */
    limit?: number
  }

  /**
   * detail_transaksi without action
   */
  export type detail_transaksiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the detail_transaksi
     */
    select?: detail_transaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the detail_transaksi
     */
    omit?: detail_transaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: detail_transaksiInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SiswaScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    nama: 'nama',
    alamat: 'alamat',
    telepon: 'telepon',
    foto: 'foto',
    id_user: 'id_user'
  };

  export type SiswaScalarFieldEnum = (typeof SiswaScalarFieldEnum)[keyof typeof SiswaScalarFieldEnum]


  export const StanScalarFieldEnum: {
    id: 'id',
    nama_stan: 'nama_stan',
    nama_pemilik: 'nama_pemilik',
    telepon: 'telepon',
    id_user: 'id_user'
  };

  export type StanScalarFieldEnum = (typeof StanScalarFieldEnum)[keyof typeof StanScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    id: 'id',
    nama_menu: 'nama_menu',
    harga: 'harga',
    jenis: 'jenis',
    foto: 'foto',
    deskripsi: 'deskripsi',
    id_stan: 'id_stan'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const DiskonScalarFieldEnum: {
    id: 'id',
    nama_diskon: 'nama_diskon',
    persentase: 'persentase',
    tanggal_awal: 'tanggal_awal',
    tanggal_akhir: 'tanggal_akhir',
    id_stan: 'id_stan'
  };

  export type DiskonScalarFieldEnum = (typeof DiskonScalarFieldEnum)[keyof typeof DiskonScalarFieldEnum]


  export const Menu_diskonScalarFieldEnum: {
    id: 'id',
    id_menu: 'id_menu',
    id_diskon: 'id_diskon'
  };

  export type Menu_diskonScalarFieldEnum = (typeof Menu_diskonScalarFieldEnum)[keyof typeof Menu_diskonScalarFieldEnum]


  export const TransaksiScalarFieldEnum: {
    id: 'id',
    tanggal: 'tanggal',
    id_stan: 'id_stan',
    id_siswa: 'id_siswa',
    uuid: 'uuid',
    status: 'status'
  };

  export type TransaksiScalarFieldEnum = (typeof TransaksiScalarFieldEnum)[keyof typeof TransaksiScalarFieldEnum]


  export const Detail_transaksiScalarFieldEnum: {
    id: 'id',
    jumlah: 'jumlah',
    harga_total: 'harga_total',
    id_transaksi: 'id_transaksi',
    id_menu: 'id_menu',
    catatan: 'catatan'
  };

  export type Detail_transaksiScalarFieldEnum = (typeof Detail_transaksiScalarFieldEnum)[keyof typeof Detail_transaksiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'role'
   */
  export type EnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role'>
    


  /**
   * Reference to a field of type 'role[]'
   */
  export type ListEnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'jenis'
   */
  export type EnumjenisFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'jenis'>
    


  /**
   * Reference to a field of type 'jenis[]'
   */
  export type ListEnumjenisFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'jenis[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'status'
   */
  export type EnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status'>
    


  /**
   * Reference to a field of type 'status[]'
   */
  export type ListEnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    role?: EnumroleFilter<"users"> | $Enums.role
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    siswa?: SiswaListRelationFilter
    stan?: StanListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    siswa?: siswaOrderByRelationAggregateInput
    stan?: stanOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    role?: EnumroleFilter<"users"> | $Enums.role
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    siswa?: SiswaListRelationFilter
    stan?: StanListRelationFilter
  }, "id" | "username">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    role?: EnumroleWithAggregatesFilter<"users"> | $Enums.role
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type siswaWhereInput = {
    AND?: siswaWhereInput | siswaWhereInput[]
    OR?: siswaWhereInput[]
    NOT?: siswaWhereInput | siswaWhereInput[]
    id?: IntFilter<"siswa"> | number
    uuid?: StringFilter<"siswa"> | string
    nama?: StringFilter<"siswa"> | string
    alamat?: StringFilter<"siswa"> | string
    telepon?: StringFilter<"siswa"> | string
    foto?: StringFilter<"siswa"> | string
    id_user?: IntFilter<"siswa"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    transaksi?: TransaksiListRelationFilter
  }

  export type siswaOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    foto?: SortOrder
    id_user?: SortOrder
    user?: usersOrderByWithRelationInput
    transaksi?: transaksiOrderByRelationAggregateInput
  }

  export type siswaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: siswaWhereInput | siswaWhereInput[]
    OR?: siswaWhereInput[]
    NOT?: siswaWhereInput | siswaWhereInput[]
    nama?: StringFilter<"siswa"> | string
    alamat?: StringFilter<"siswa"> | string
    telepon?: StringFilter<"siswa"> | string
    foto?: StringFilter<"siswa"> | string
    id_user?: IntFilter<"siswa"> | number
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    transaksi?: TransaksiListRelationFilter
  }, "id" | "uuid">

  export type siswaOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    foto?: SortOrder
    id_user?: SortOrder
    _count?: siswaCountOrderByAggregateInput
    _avg?: siswaAvgOrderByAggregateInput
    _max?: siswaMaxOrderByAggregateInput
    _min?: siswaMinOrderByAggregateInput
    _sum?: siswaSumOrderByAggregateInput
  }

  export type siswaScalarWhereWithAggregatesInput = {
    AND?: siswaScalarWhereWithAggregatesInput | siswaScalarWhereWithAggregatesInput[]
    OR?: siswaScalarWhereWithAggregatesInput[]
    NOT?: siswaScalarWhereWithAggregatesInput | siswaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"siswa"> | number
    uuid?: StringWithAggregatesFilter<"siswa"> | string
    nama?: StringWithAggregatesFilter<"siswa"> | string
    alamat?: StringWithAggregatesFilter<"siswa"> | string
    telepon?: StringWithAggregatesFilter<"siswa"> | string
    foto?: StringWithAggregatesFilter<"siswa"> | string
    id_user?: IntWithAggregatesFilter<"siswa"> | number
  }

  export type stanWhereInput = {
    AND?: stanWhereInput | stanWhereInput[]
    OR?: stanWhereInput[]
    NOT?: stanWhereInput | stanWhereInput[]
    id?: IntFilter<"stan"> | number
    nama_stan?: StringFilter<"stan"> | string
    nama_pemilik?: StringFilter<"stan"> | string
    telepon?: StringFilter<"stan"> | string
    id_user?: IntFilter<"stan"> | number
    diskon?: DiskonListRelationFilter
    menu?: MenuListRelationFilter
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    transaksi?: TransaksiListRelationFilter
  }

  export type stanOrderByWithRelationInput = {
    id?: SortOrder
    nama_stan?: SortOrder
    nama_pemilik?: SortOrder
    telepon?: SortOrder
    id_user?: SortOrder
    diskon?: diskonOrderByRelationAggregateInput
    menu?: menuOrderByRelationAggregateInput
    user?: usersOrderByWithRelationInput
    transaksi?: transaksiOrderByRelationAggregateInput
  }

  export type stanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: stanWhereInput | stanWhereInput[]
    OR?: stanWhereInput[]
    NOT?: stanWhereInput | stanWhereInput[]
    nama_stan?: StringFilter<"stan"> | string
    nama_pemilik?: StringFilter<"stan"> | string
    telepon?: StringFilter<"stan"> | string
    id_user?: IntFilter<"stan"> | number
    diskon?: DiskonListRelationFilter
    menu?: MenuListRelationFilter
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
    transaksi?: TransaksiListRelationFilter
  }, "id">

  export type stanOrderByWithAggregationInput = {
    id?: SortOrder
    nama_stan?: SortOrder
    nama_pemilik?: SortOrder
    telepon?: SortOrder
    id_user?: SortOrder
    _count?: stanCountOrderByAggregateInput
    _avg?: stanAvgOrderByAggregateInput
    _max?: stanMaxOrderByAggregateInput
    _min?: stanMinOrderByAggregateInput
    _sum?: stanSumOrderByAggregateInput
  }

  export type stanScalarWhereWithAggregatesInput = {
    AND?: stanScalarWhereWithAggregatesInput | stanScalarWhereWithAggregatesInput[]
    OR?: stanScalarWhereWithAggregatesInput[]
    NOT?: stanScalarWhereWithAggregatesInput | stanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"stan"> | number
    nama_stan?: StringWithAggregatesFilter<"stan"> | string
    nama_pemilik?: StringWithAggregatesFilter<"stan"> | string
    telepon?: StringWithAggregatesFilter<"stan"> | string
    id_user?: IntWithAggregatesFilter<"stan"> | number
  }

  export type menuWhereInput = {
    AND?: menuWhereInput | menuWhereInput[]
    OR?: menuWhereInput[]
    NOT?: menuWhereInput | menuWhereInput[]
    id?: IntFilter<"menu"> | number
    nama_menu?: StringFilter<"menu"> | string
    harga?: DecimalFilter<"menu"> | Decimal | DecimalJsLike | number | string
    jenis?: EnumjenisFilter<"menu"> | $Enums.jenis
    foto?: StringFilter<"menu"> | string
    deskripsi?: StringFilter<"menu"> | string
    id_stan?: IntFilter<"menu"> | number
    detail_transaksi?: Detail_transaksiListRelationFilter
    stan?: XOR<StanScalarRelationFilter, stanWhereInput>
    menu_diskon?: Menu_diskonListRelationFilter
  }

  export type menuOrderByWithRelationInput = {
    id?: SortOrder
    nama_menu?: SortOrder
    harga?: SortOrder
    jenis?: SortOrder
    foto?: SortOrder
    deskripsi?: SortOrder
    id_stan?: SortOrder
    detail_transaksi?: detail_transaksiOrderByRelationAggregateInput
    stan?: stanOrderByWithRelationInput
    menu_diskon?: menu_diskonOrderByRelationAggregateInput
  }

  export type menuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: menuWhereInput | menuWhereInput[]
    OR?: menuWhereInput[]
    NOT?: menuWhereInput | menuWhereInput[]
    nama_menu?: StringFilter<"menu"> | string
    harga?: DecimalFilter<"menu"> | Decimal | DecimalJsLike | number | string
    jenis?: EnumjenisFilter<"menu"> | $Enums.jenis
    foto?: StringFilter<"menu"> | string
    deskripsi?: StringFilter<"menu"> | string
    id_stan?: IntFilter<"menu"> | number
    detail_transaksi?: Detail_transaksiListRelationFilter
    stan?: XOR<StanScalarRelationFilter, stanWhereInput>
    menu_diskon?: Menu_diskonListRelationFilter
  }, "id">

  export type menuOrderByWithAggregationInput = {
    id?: SortOrder
    nama_menu?: SortOrder
    harga?: SortOrder
    jenis?: SortOrder
    foto?: SortOrder
    deskripsi?: SortOrder
    id_stan?: SortOrder
    _count?: menuCountOrderByAggregateInput
    _avg?: menuAvgOrderByAggregateInput
    _max?: menuMaxOrderByAggregateInput
    _min?: menuMinOrderByAggregateInput
    _sum?: menuSumOrderByAggregateInput
  }

  export type menuScalarWhereWithAggregatesInput = {
    AND?: menuScalarWhereWithAggregatesInput | menuScalarWhereWithAggregatesInput[]
    OR?: menuScalarWhereWithAggregatesInput[]
    NOT?: menuScalarWhereWithAggregatesInput | menuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"menu"> | number
    nama_menu?: StringWithAggregatesFilter<"menu"> | string
    harga?: DecimalWithAggregatesFilter<"menu"> | Decimal | DecimalJsLike | number | string
    jenis?: EnumjenisWithAggregatesFilter<"menu"> | $Enums.jenis
    foto?: StringWithAggregatesFilter<"menu"> | string
    deskripsi?: StringWithAggregatesFilter<"menu"> | string
    id_stan?: IntWithAggregatesFilter<"menu"> | number
  }

  export type diskonWhereInput = {
    AND?: diskonWhereInput | diskonWhereInput[]
    OR?: diskonWhereInput[]
    NOT?: diskonWhereInput | diskonWhereInput[]
    id?: IntFilter<"diskon"> | number
    nama_diskon?: StringFilter<"diskon"> | string
    persentase?: FloatFilter<"diskon"> | number
    tanggal_awal?: DateTimeFilter<"diskon"> | Date | string
    tanggal_akhir?: DateTimeFilter<"diskon"> | Date | string
    id_stan?: IntFilter<"diskon"> | number
    stan?: XOR<StanScalarRelationFilter, stanWhereInput>
    menu_diskon?: Menu_diskonListRelationFilter
  }

  export type diskonOrderByWithRelationInput = {
    id?: SortOrder
    nama_diskon?: SortOrder
    persentase?: SortOrder
    tanggal_awal?: SortOrder
    tanggal_akhir?: SortOrder
    id_stan?: SortOrder
    stan?: stanOrderByWithRelationInput
    menu_diskon?: menu_diskonOrderByRelationAggregateInput
  }

  export type diskonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: diskonWhereInput | diskonWhereInput[]
    OR?: diskonWhereInput[]
    NOT?: diskonWhereInput | diskonWhereInput[]
    nama_diskon?: StringFilter<"diskon"> | string
    persentase?: FloatFilter<"diskon"> | number
    tanggal_awal?: DateTimeFilter<"diskon"> | Date | string
    tanggal_akhir?: DateTimeFilter<"diskon"> | Date | string
    id_stan?: IntFilter<"diskon"> | number
    stan?: XOR<StanScalarRelationFilter, stanWhereInput>
    menu_diskon?: Menu_diskonListRelationFilter
  }, "id">

  export type diskonOrderByWithAggregationInput = {
    id?: SortOrder
    nama_diskon?: SortOrder
    persentase?: SortOrder
    tanggal_awal?: SortOrder
    tanggal_akhir?: SortOrder
    id_stan?: SortOrder
    _count?: diskonCountOrderByAggregateInput
    _avg?: diskonAvgOrderByAggregateInput
    _max?: diskonMaxOrderByAggregateInput
    _min?: diskonMinOrderByAggregateInput
    _sum?: diskonSumOrderByAggregateInput
  }

  export type diskonScalarWhereWithAggregatesInput = {
    AND?: diskonScalarWhereWithAggregatesInput | diskonScalarWhereWithAggregatesInput[]
    OR?: diskonScalarWhereWithAggregatesInput[]
    NOT?: diskonScalarWhereWithAggregatesInput | diskonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"diskon"> | number
    nama_diskon?: StringWithAggregatesFilter<"diskon"> | string
    persentase?: FloatWithAggregatesFilter<"diskon"> | number
    tanggal_awal?: DateTimeWithAggregatesFilter<"diskon"> | Date | string
    tanggal_akhir?: DateTimeWithAggregatesFilter<"diskon"> | Date | string
    id_stan?: IntWithAggregatesFilter<"diskon"> | number
  }

  export type menu_diskonWhereInput = {
    AND?: menu_diskonWhereInput | menu_diskonWhereInput[]
    OR?: menu_diskonWhereInput[]
    NOT?: menu_diskonWhereInput | menu_diskonWhereInput[]
    id?: IntFilter<"menu_diskon"> | number
    id_menu?: IntFilter<"menu_diskon"> | number
    id_diskon?: IntFilter<"menu_diskon"> | number
    diskon?: XOR<DiskonScalarRelationFilter, diskonWhereInput>
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }

  export type menu_diskonOrderByWithRelationInput = {
    id?: SortOrder
    id_menu?: SortOrder
    id_diskon?: SortOrder
    diskon?: diskonOrderByWithRelationInput
    menu?: menuOrderByWithRelationInput
  }

  export type menu_diskonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: menu_diskonWhereInput | menu_diskonWhereInput[]
    OR?: menu_diskonWhereInput[]
    NOT?: menu_diskonWhereInput | menu_diskonWhereInput[]
    id_menu?: IntFilter<"menu_diskon"> | number
    id_diskon?: IntFilter<"menu_diskon"> | number
    diskon?: XOR<DiskonScalarRelationFilter, diskonWhereInput>
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
  }, "id">

  export type menu_diskonOrderByWithAggregationInput = {
    id?: SortOrder
    id_menu?: SortOrder
    id_diskon?: SortOrder
    _count?: menu_diskonCountOrderByAggregateInput
    _avg?: menu_diskonAvgOrderByAggregateInput
    _max?: menu_diskonMaxOrderByAggregateInput
    _min?: menu_diskonMinOrderByAggregateInput
    _sum?: menu_diskonSumOrderByAggregateInput
  }

  export type menu_diskonScalarWhereWithAggregatesInput = {
    AND?: menu_diskonScalarWhereWithAggregatesInput | menu_diskonScalarWhereWithAggregatesInput[]
    OR?: menu_diskonScalarWhereWithAggregatesInput[]
    NOT?: menu_diskonScalarWhereWithAggregatesInput | menu_diskonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"menu_diskon"> | number
    id_menu?: IntWithAggregatesFilter<"menu_diskon"> | number
    id_diskon?: IntWithAggregatesFilter<"menu_diskon"> | number
  }

  export type transaksiWhereInput = {
    AND?: transaksiWhereInput | transaksiWhereInput[]
    OR?: transaksiWhereInput[]
    NOT?: transaksiWhereInput | transaksiWhereInput[]
    id?: IntFilter<"transaksi"> | number
    tanggal?: DateTimeFilter<"transaksi"> | Date | string
    id_stan?: IntFilter<"transaksi"> | number
    id_siswa?: IntFilter<"transaksi"> | number
    uuid?: StringFilter<"transaksi"> | string
    status?: EnumstatusFilter<"transaksi"> | $Enums.status
    detail_transaksi?: Detail_transaksiListRelationFilter
    siswa?: XOR<SiswaScalarRelationFilter, siswaWhereInput>
    stan?: XOR<StanScalarRelationFilter, stanWhereInput>
  }

  export type transaksiOrderByWithRelationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    id_stan?: SortOrder
    id_siswa?: SortOrder
    uuid?: SortOrder
    status?: SortOrder
    detail_transaksi?: detail_transaksiOrderByRelationAggregateInput
    siswa?: siswaOrderByWithRelationInput
    stan?: stanOrderByWithRelationInput
  }

  export type transaksiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: transaksiWhereInput | transaksiWhereInput[]
    OR?: transaksiWhereInput[]
    NOT?: transaksiWhereInput | transaksiWhereInput[]
    tanggal?: DateTimeFilter<"transaksi"> | Date | string
    id_stan?: IntFilter<"transaksi"> | number
    id_siswa?: IntFilter<"transaksi"> | number
    status?: EnumstatusFilter<"transaksi"> | $Enums.status
    detail_transaksi?: Detail_transaksiListRelationFilter
    siswa?: XOR<SiswaScalarRelationFilter, siswaWhereInput>
    stan?: XOR<StanScalarRelationFilter, stanWhereInput>
  }, "id" | "uuid">

  export type transaksiOrderByWithAggregationInput = {
    id?: SortOrder
    tanggal?: SortOrder
    id_stan?: SortOrder
    id_siswa?: SortOrder
    uuid?: SortOrder
    status?: SortOrder
    _count?: transaksiCountOrderByAggregateInput
    _avg?: transaksiAvgOrderByAggregateInput
    _max?: transaksiMaxOrderByAggregateInput
    _min?: transaksiMinOrderByAggregateInput
    _sum?: transaksiSumOrderByAggregateInput
  }

  export type transaksiScalarWhereWithAggregatesInput = {
    AND?: transaksiScalarWhereWithAggregatesInput | transaksiScalarWhereWithAggregatesInput[]
    OR?: transaksiScalarWhereWithAggregatesInput[]
    NOT?: transaksiScalarWhereWithAggregatesInput | transaksiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"transaksi"> | number
    tanggal?: DateTimeWithAggregatesFilter<"transaksi"> | Date | string
    id_stan?: IntWithAggregatesFilter<"transaksi"> | number
    id_siswa?: IntWithAggregatesFilter<"transaksi"> | number
    uuid?: StringWithAggregatesFilter<"transaksi"> | string
    status?: EnumstatusWithAggregatesFilter<"transaksi"> | $Enums.status
  }

  export type detail_transaksiWhereInput = {
    AND?: detail_transaksiWhereInput | detail_transaksiWhereInput[]
    OR?: detail_transaksiWhereInput[]
    NOT?: detail_transaksiWhereInput | detail_transaksiWhereInput[]
    id?: IntFilter<"detail_transaksi"> | number
    jumlah?: IntFilter<"detail_transaksi"> | number
    harga_total?: DecimalFilter<"detail_transaksi"> | Decimal | DecimalJsLike | number | string
    id_transaksi?: IntFilter<"detail_transaksi"> | number
    id_menu?: IntFilter<"detail_transaksi"> | number
    catatan?: StringNullableFilter<"detail_transaksi"> | string | null
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
    transaksi?: XOR<TransaksiScalarRelationFilter, transaksiWhereInput>
  }

  export type detail_transaksiOrderByWithRelationInput = {
    id?: SortOrder
    jumlah?: SortOrder
    harga_total?: SortOrder
    id_transaksi?: SortOrder
    id_menu?: SortOrder
    catatan?: SortOrderInput | SortOrder
    menu?: menuOrderByWithRelationInput
    transaksi?: transaksiOrderByWithRelationInput
  }

  export type detail_transaksiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: detail_transaksiWhereInput | detail_transaksiWhereInput[]
    OR?: detail_transaksiWhereInput[]
    NOT?: detail_transaksiWhereInput | detail_transaksiWhereInput[]
    jumlah?: IntFilter<"detail_transaksi"> | number
    harga_total?: DecimalFilter<"detail_transaksi"> | Decimal | DecimalJsLike | number | string
    id_transaksi?: IntFilter<"detail_transaksi"> | number
    id_menu?: IntFilter<"detail_transaksi"> | number
    catatan?: StringNullableFilter<"detail_transaksi"> | string | null
    menu?: XOR<MenuScalarRelationFilter, menuWhereInput>
    transaksi?: XOR<TransaksiScalarRelationFilter, transaksiWhereInput>
  }, "id">

  export type detail_transaksiOrderByWithAggregationInput = {
    id?: SortOrder
    jumlah?: SortOrder
    harga_total?: SortOrder
    id_transaksi?: SortOrder
    id_menu?: SortOrder
    catatan?: SortOrderInput | SortOrder
    _count?: detail_transaksiCountOrderByAggregateInput
    _avg?: detail_transaksiAvgOrderByAggregateInput
    _max?: detail_transaksiMaxOrderByAggregateInput
    _min?: detail_transaksiMinOrderByAggregateInput
    _sum?: detail_transaksiSumOrderByAggregateInput
  }

  export type detail_transaksiScalarWhereWithAggregatesInput = {
    AND?: detail_transaksiScalarWhereWithAggregatesInput | detail_transaksiScalarWhereWithAggregatesInput[]
    OR?: detail_transaksiScalarWhereWithAggregatesInput[]
    NOT?: detail_transaksiScalarWhereWithAggregatesInput | detail_transaksiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"detail_transaksi"> | number
    jumlah?: IntWithAggregatesFilter<"detail_transaksi"> | number
    harga_total?: DecimalWithAggregatesFilter<"detail_transaksi"> | Decimal | DecimalJsLike | number | string
    id_transaksi?: IntWithAggregatesFilter<"detail_transaksi"> | number
    id_menu?: IntWithAggregatesFilter<"detail_transaksi"> | number
    catatan?: StringNullableWithAggregatesFilter<"detail_transaksi"> | string | null
  }

  export type usersCreateInput = {
    username: string
    password: string
    role: $Enums.role
    createdAt?: Date | string
    updatedAt?: Date | string
    siswa?: siswaCreateNestedManyWithoutUserInput
    stan?: stanCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    role: $Enums.role
    createdAt?: Date | string
    updatedAt?: Date | string
    siswa?: siswaUncheckedCreateNestedManyWithoutUserInput
    stan?: stanUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siswa?: siswaUpdateManyWithoutUserNestedInput
    stan?: stanUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siswa?: siswaUncheckedUpdateManyWithoutUserNestedInput
    stan?: stanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    password: string
    role: $Enums.role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type siswaCreateInput = {
    uuid: string
    nama: string
    alamat: string
    telepon: string
    foto: string
    user: usersCreateNestedOneWithoutSiswaInput
    transaksi?: transaksiCreateNestedManyWithoutSiswaInput
  }

  export type siswaUncheckedCreateInput = {
    id?: number
    uuid: string
    nama: string
    alamat: string
    telepon: string
    foto: string
    id_user: number
    transaksi?: transaksiUncheckedCreateNestedManyWithoutSiswaInput
  }

  export type siswaUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    user?: usersUpdateOneRequiredWithoutSiswaNestedInput
    transaksi?: transaksiUpdateManyWithoutSiswaNestedInput
  }

  export type siswaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    id_user?: IntFieldUpdateOperationsInput | number
    transaksi?: transaksiUncheckedUpdateManyWithoutSiswaNestedInput
  }

  export type siswaCreateManyInput = {
    id?: number
    uuid: string
    nama: string
    alamat: string
    telepon: string
    foto: string
    id_user: number
  }

  export type siswaUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type siswaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type stanCreateInput = {
    nama_stan: string
    nama_pemilik: string
    telepon: string
    diskon?: diskonCreateNestedManyWithoutStanInput
    menu?: menuCreateNestedManyWithoutStanInput
    user: usersCreateNestedOneWithoutStanInput
    transaksi?: transaksiCreateNestedManyWithoutStanInput
  }

  export type stanUncheckedCreateInput = {
    id?: number
    nama_stan: string
    nama_pemilik: string
    telepon: string
    id_user: number
    diskon?: diskonUncheckedCreateNestedManyWithoutStanInput
    menu?: menuUncheckedCreateNestedManyWithoutStanInput
    transaksi?: transaksiUncheckedCreateNestedManyWithoutStanInput
  }

  export type stanUpdateInput = {
    nama_stan?: StringFieldUpdateOperationsInput | string
    nama_pemilik?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    diskon?: diskonUpdateManyWithoutStanNestedInput
    menu?: menuUpdateManyWithoutStanNestedInput
    user?: usersUpdateOneRequiredWithoutStanNestedInput
    transaksi?: transaksiUpdateManyWithoutStanNestedInput
  }

  export type stanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_stan?: StringFieldUpdateOperationsInput | string
    nama_pemilik?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    id_user?: IntFieldUpdateOperationsInput | number
    diskon?: diskonUncheckedUpdateManyWithoutStanNestedInput
    menu?: menuUncheckedUpdateManyWithoutStanNestedInput
    transaksi?: transaksiUncheckedUpdateManyWithoutStanNestedInput
  }

  export type stanCreateManyInput = {
    id?: number
    nama_stan: string
    nama_pemilik: string
    telepon: string
    id_user: number
  }

  export type stanUpdateManyMutationInput = {
    nama_stan?: StringFieldUpdateOperationsInput | string
    nama_pemilik?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
  }

  export type stanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_stan?: StringFieldUpdateOperationsInput | string
    nama_pemilik?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type menuCreateInput = {
    nama_menu: string
    harga: Decimal | DecimalJsLike | number | string
    jenis: $Enums.jenis
    foto: string
    deskripsi: string
    detail_transaksi?: detail_transaksiCreateNestedManyWithoutMenuInput
    stan: stanCreateNestedOneWithoutMenuInput
    menu_diskon?: menu_diskonCreateNestedManyWithoutMenuInput
  }

  export type menuUncheckedCreateInput = {
    id?: number
    nama_menu: string
    harga: Decimal | DecimalJsLike | number | string
    jenis: $Enums.jenis
    foto: string
    deskripsi: string
    id_stan: number
    detail_transaksi?: detail_transaksiUncheckedCreateNestedManyWithoutMenuInput
    menu_diskon?: menu_diskonUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menuUpdateInput = {
    nama_menu?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    jenis?: EnumjenisFieldUpdateOperationsInput | $Enums.jenis
    foto?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    detail_transaksi?: detail_transaksiUpdateManyWithoutMenuNestedInput
    stan?: stanUpdateOneRequiredWithoutMenuNestedInput
    menu_diskon?: menu_diskonUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_menu?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    jenis?: EnumjenisFieldUpdateOperationsInput | $Enums.jenis
    foto?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    id_stan?: IntFieldUpdateOperationsInput | number
    detail_transaksi?: detail_transaksiUncheckedUpdateManyWithoutMenuNestedInput
    menu_diskon?: menu_diskonUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type menuCreateManyInput = {
    id?: number
    nama_menu: string
    harga: Decimal | DecimalJsLike | number | string
    jenis: $Enums.jenis
    foto: string
    deskripsi: string
    id_stan: number
  }

  export type menuUpdateManyMutationInput = {
    nama_menu?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    jenis?: EnumjenisFieldUpdateOperationsInput | $Enums.jenis
    foto?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type menuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_menu?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    jenis?: EnumjenisFieldUpdateOperationsInput | $Enums.jenis
    foto?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    id_stan?: IntFieldUpdateOperationsInput | number
  }

  export type diskonCreateInput = {
    nama_diskon: string
    persentase: number
    tanggal_awal: Date | string
    tanggal_akhir: Date | string
    stan: stanCreateNestedOneWithoutDiskonInput
    menu_diskon?: menu_diskonCreateNestedManyWithoutDiskonInput
  }

  export type diskonUncheckedCreateInput = {
    id?: number
    nama_diskon: string
    persentase: number
    tanggal_awal: Date | string
    tanggal_akhir: Date | string
    id_stan: number
    menu_diskon?: menu_diskonUncheckedCreateNestedManyWithoutDiskonInput
  }

  export type diskonUpdateInput = {
    nama_diskon?: StringFieldUpdateOperationsInput | string
    persentase?: FloatFieldUpdateOperationsInput | number
    tanggal_awal?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: DateTimeFieldUpdateOperationsInput | Date | string
    stan?: stanUpdateOneRequiredWithoutDiskonNestedInput
    menu_diskon?: menu_diskonUpdateManyWithoutDiskonNestedInput
  }

  export type diskonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_diskon?: StringFieldUpdateOperationsInput | string
    persentase?: FloatFieldUpdateOperationsInput | number
    tanggal_awal?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: DateTimeFieldUpdateOperationsInput | Date | string
    id_stan?: IntFieldUpdateOperationsInput | number
    menu_diskon?: menu_diskonUncheckedUpdateManyWithoutDiskonNestedInput
  }

  export type diskonCreateManyInput = {
    id?: number
    nama_diskon: string
    persentase: number
    tanggal_awal: Date | string
    tanggal_akhir: Date | string
    id_stan: number
  }

  export type diskonUpdateManyMutationInput = {
    nama_diskon?: StringFieldUpdateOperationsInput | string
    persentase?: FloatFieldUpdateOperationsInput | number
    tanggal_awal?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type diskonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_diskon?: StringFieldUpdateOperationsInput | string
    persentase?: FloatFieldUpdateOperationsInput | number
    tanggal_awal?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: DateTimeFieldUpdateOperationsInput | Date | string
    id_stan?: IntFieldUpdateOperationsInput | number
  }

  export type menu_diskonCreateInput = {
    diskon: diskonCreateNestedOneWithoutMenu_diskonInput
    menu: menuCreateNestedOneWithoutMenu_diskonInput
  }

  export type menu_diskonUncheckedCreateInput = {
    id?: number
    id_menu: number
    id_diskon: number
  }

  export type menu_diskonUpdateInput = {
    diskon?: diskonUpdateOneRequiredWithoutMenu_diskonNestedInput
    menu?: menuUpdateOneRequiredWithoutMenu_diskonNestedInput
  }

  export type menu_diskonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_menu?: IntFieldUpdateOperationsInput | number
    id_diskon?: IntFieldUpdateOperationsInput | number
  }

  export type menu_diskonCreateManyInput = {
    id?: number
    id_menu: number
    id_diskon: number
  }

  export type menu_diskonUpdateManyMutationInput = {

  }

  export type menu_diskonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_menu?: IntFieldUpdateOperationsInput | number
    id_diskon?: IntFieldUpdateOperationsInput | number
  }

  export type transaksiCreateInput = {
    tanggal?: Date | string
    uuid: string
    status?: $Enums.status
    detail_transaksi?: detail_transaksiCreateNestedManyWithoutTransaksiInput
    siswa: siswaCreateNestedOneWithoutTransaksiInput
    stan: stanCreateNestedOneWithoutTransaksiInput
  }

  export type transaksiUncheckedCreateInput = {
    id?: number
    tanggal?: Date | string
    id_stan: number
    id_siswa: number
    uuid: string
    status?: $Enums.status
    detail_transaksi?: detail_transaksiUncheckedCreateNestedManyWithoutTransaksiInput
  }

  export type transaksiUpdateInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    detail_transaksi?: detail_transaksiUpdateManyWithoutTransaksiNestedInput
    siswa?: siswaUpdateOneRequiredWithoutTransaksiNestedInput
    stan?: stanUpdateOneRequiredWithoutTransaksiNestedInput
  }

  export type transaksiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    id_stan?: IntFieldUpdateOperationsInput | number
    id_siswa?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    detail_transaksi?: detail_transaksiUncheckedUpdateManyWithoutTransaksiNestedInput
  }

  export type transaksiCreateManyInput = {
    id?: number
    tanggal?: Date | string
    id_stan: number
    id_siswa: number
    uuid: string
    status?: $Enums.status
  }

  export type transaksiUpdateManyMutationInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
  }

  export type transaksiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    id_stan?: IntFieldUpdateOperationsInput | number
    id_siswa?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
  }

  export type detail_transaksiCreateInput = {
    jumlah: number
    harga_total: Decimal | DecimalJsLike | number | string
    catatan?: string | null
    menu: menuCreateNestedOneWithoutDetail_transaksiInput
    transaksi: transaksiCreateNestedOneWithoutDetail_transaksiInput
  }

  export type detail_transaksiUncheckedCreateInput = {
    id?: number
    jumlah: number
    harga_total: Decimal | DecimalJsLike | number | string
    id_transaksi: number
    id_menu: number
    catatan?: string | null
  }

  export type detail_transaksiUpdateInput = {
    jumlah?: IntFieldUpdateOperationsInput | number
    harga_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    menu?: menuUpdateOneRequiredWithoutDetail_transaksiNestedInput
    transaksi?: transaksiUpdateOneRequiredWithoutDetail_transaksiNestedInput
  }

  export type detail_transaksiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    harga_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_transaksi?: IntFieldUpdateOperationsInput | number
    id_menu?: IntFieldUpdateOperationsInput | number
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detail_transaksiCreateManyInput = {
    id?: number
    jumlah: number
    harga_total: Decimal | DecimalJsLike | number | string
    id_transaksi: number
    id_menu: number
    catatan?: string | null
  }

  export type detail_transaksiUpdateManyMutationInput = {
    jumlah?: IntFieldUpdateOperationsInput | number
    harga_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detail_transaksiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    harga_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_transaksi?: IntFieldUpdateOperationsInput | number
    id_menu?: IntFieldUpdateOperationsInput | number
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumroleFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleFilter<$PrismaModel> | $Enums.role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SiswaListRelationFilter = {
    every?: siswaWhereInput
    some?: siswaWhereInput
    none?: siswaWhereInput
  }

  export type StanListRelationFilter = {
    every?: stanWhereInput
    some?: stanWhereInput
    none?: stanWhereInput
  }

  export type siswaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type stanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
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

  export type EnumroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleWithAggregatesFilter<$PrismaModel> | $Enums.role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleFilter<$PrismaModel>
    _max?: NestedEnumroleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type TransaksiListRelationFilter = {
    every?: transaksiWhereInput
    some?: transaksiWhereInput
    none?: transaksiWhereInput
  }

  export type transaksiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type siswaCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    foto?: SortOrder
    id_user?: SortOrder
  }

  export type siswaAvgOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
  }

  export type siswaMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    foto?: SortOrder
    id_user?: SortOrder
  }

  export type siswaMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    nama?: SortOrder
    alamat?: SortOrder
    telepon?: SortOrder
    foto?: SortOrder
    id_user?: SortOrder
  }

  export type siswaSumOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
  }

  export type DiskonListRelationFilter = {
    every?: diskonWhereInput
    some?: diskonWhereInput
    none?: diskonWhereInput
  }

  export type MenuListRelationFilter = {
    every?: menuWhereInput
    some?: menuWhereInput
    none?: menuWhereInput
  }

  export type diskonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type menuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type stanCountOrderByAggregateInput = {
    id?: SortOrder
    nama_stan?: SortOrder
    nama_pemilik?: SortOrder
    telepon?: SortOrder
    id_user?: SortOrder
  }

  export type stanAvgOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
  }

  export type stanMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_stan?: SortOrder
    nama_pemilik?: SortOrder
    telepon?: SortOrder
    id_user?: SortOrder
  }

  export type stanMinOrderByAggregateInput = {
    id?: SortOrder
    nama_stan?: SortOrder
    nama_pemilik?: SortOrder
    telepon?: SortOrder
    id_user?: SortOrder
  }

  export type stanSumOrderByAggregateInput = {
    id?: SortOrder
    id_user?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumjenisFilter<$PrismaModel = never> = {
    equals?: $Enums.jenis | EnumjenisFieldRefInput<$PrismaModel>
    in?: $Enums.jenis[] | ListEnumjenisFieldRefInput<$PrismaModel>
    notIn?: $Enums.jenis[] | ListEnumjenisFieldRefInput<$PrismaModel>
    not?: NestedEnumjenisFilter<$PrismaModel> | $Enums.jenis
  }

  export type Detail_transaksiListRelationFilter = {
    every?: detail_transaksiWhereInput
    some?: detail_transaksiWhereInput
    none?: detail_transaksiWhereInput
  }

  export type StanScalarRelationFilter = {
    is?: stanWhereInput
    isNot?: stanWhereInput
  }

  export type Menu_diskonListRelationFilter = {
    every?: menu_diskonWhereInput
    some?: menu_diskonWhereInput
    none?: menu_diskonWhereInput
  }

  export type detail_transaksiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type menu_diskonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type menuCountOrderByAggregateInput = {
    id?: SortOrder
    nama_menu?: SortOrder
    harga?: SortOrder
    jenis?: SortOrder
    foto?: SortOrder
    deskripsi?: SortOrder
    id_stan?: SortOrder
  }

  export type menuAvgOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
    id_stan?: SortOrder
  }

  export type menuMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_menu?: SortOrder
    harga?: SortOrder
    jenis?: SortOrder
    foto?: SortOrder
    deskripsi?: SortOrder
    id_stan?: SortOrder
  }

  export type menuMinOrderByAggregateInput = {
    id?: SortOrder
    nama_menu?: SortOrder
    harga?: SortOrder
    jenis?: SortOrder
    foto?: SortOrder
    deskripsi?: SortOrder
    id_stan?: SortOrder
  }

  export type menuSumOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
    id_stan?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumjenisWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.jenis | EnumjenisFieldRefInput<$PrismaModel>
    in?: $Enums.jenis[] | ListEnumjenisFieldRefInput<$PrismaModel>
    notIn?: $Enums.jenis[] | ListEnumjenisFieldRefInput<$PrismaModel>
    not?: NestedEnumjenisWithAggregatesFilter<$PrismaModel> | $Enums.jenis
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumjenisFilter<$PrismaModel>
    _max?: NestedEnumjenisFilter<$PrismaModel>
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

  export type diskonCountOrderByAggregateInput = {
    id?: SortOrder
    nama_diskon?: SortOrder
    persentase?: SortOrder
    tanggal_awal?: SortOrder
    tanggal_akhir?: SortOrder
    id_stan?: SortOrder
  }

  export type diskonAvgOrderByAggregateInput = {
    id?: SortOrder
    persentase?: SortOrder
    id_stan?: SortOrder
  }

  export type diskonMaxOrderByAggregateInput = {
    id?: SortOrder
    nama_diskon?: SortOrder
    persentase?: SortOrder
    tanggal_awal?: SortOrder
    tanggal_akhir?: SortOrder
    id_stan?: SortOrder
  }

  export type diskonMinOrderByAggregateInput = {
    id?: SortOrder
    nama_diskon?: SortOrder
    persentase?: SortOrder
    tanggal_awal?: SortOrder
    tanggal_akhir?: SortOrder
    id_stan?: SortOrder
  }

  export type diskonSumOrderByAggregateInput = {
    id?: SortOrder
    persentase?: SortOrder
    id_stan?: SortOrder
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

  export type DiskonScalarRelationFilter = {
    is?: diskonWhereInput
    isNot?: diskonWhereInput
  }

  export type MenuScalarRelationFilter = {
    is?: menuWhereInput
    isNot?: menuWhereInput
  }

  export type menu_diskonCountOrderByAggregateInput = {
    id?: SortOrder
    id_menu?: SortOrder
    id_diskon?: SortOrder
  }

  export type menu_diskonAvgOrderByAggregateInput = {
    id?: SortOrder
    id_menu?: SortOrder
    id_diskon?: SortOrder
  }

  export type menu_diskonMaxOrderByAggregateInput = {
    id?: SortOrder
    id_menu?: SortOrder
    id_diskon?: SortOrder
  }

  export type menu_diskonMinOrderByAggregateInput = {
    id?: SortOrder
    id_menu?: SortOrder
    id_diskon?: SortOrder
  }

  export type menu_diskonSumOrderByAggregateInput = {
    id?: SortOrder
    id_menu?: SortOrder
    id_diskon?: SortOrder
  }

  export type EnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type SiswaScalarRelationFilter = {
    is?: siswaWhereInput
    isNot?: siswaWhereInput
  }

  export type transaksiCountOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    id_stan?: SortOrder
    id_siswa?: SortOrder
    uuid?: SortOrder
    status?: SortOrder
  }

  export type transaksiAvgOrderByAggregateInput = {
    id?: SortOrder
    id_stan?: SortOrder
    id_siswa?: SortOrder
  }

  export type transaksiMaxOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    id_stan?: SortOrder
    id_siswa?: SortOrder
    uuid?: SortOrder
    status?: SortOrder
  }

  export type transaksiMinOrderByAggregateInput = {
    id?: SortOrder
    tanggal?: SortOrder
    id_stan?: SortOrder
    id_siswa?: SortOrder
    uuid?: SortOrder
    status?: SortOrder
  }

  export type transaksiSumOrderByAggregateInput = {
    id?: SortOrder
    id_stan?: SortOrder
    id_siswa?: SortOrder
  }

  export type EnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
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

  export type TransaksiScalarRelationFilter = {
    is?: transaksiWhereInput
    isNot?: transaksiWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type detail_transaksiCountOrderByAggregateInput = {
    id?: SortOrder
    jumlah?: SortOrder
    harga_total?: SortOrder
    id_transaksi?: SortOrder
    id_menu?: SortOrder
    catatan?: SortOrder
  }

  export type detail_transaksiAvgOrderByAggregateInput = {
    id?: SortOrder
    jumlah?: SortOrder
    harga_total?: SortOrder
    id_transaksi?: SortOrder
    id_menu?: SortOrder
  }

  export type detail_transaksiMaxOrderByAggregateInput = {
    id?: SortOrder
    jumlah?: SortOrder
    harga_total?: SortOrder
    id_transaksi?: SortOrder
    id_menu?: SortOrder
    catatan?: SortOrder
  }

  export type detail_transaksiMinOrderByAggregateInput = {
    id?: SortOrder
    jumlah?: SortOrder
    harga_total?: SortOrder
    id_transaksi?: SortOrder
    id_menu?: SortOrder
    catatan?: SortOrder
  }

  export type detail_transaksiSumOrderByAggregateInput = {
    id?: SortOrder
    jumlah?: SortOrder
    harga_total?: SortOrder
    id_transaksi?: SortOrder
    id_menu?: SortOrder
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

  export type siswaCreateNestedManyWithoutUserInput = {
    create?: XOR<siswaCreateWithoutUserInput, siswaUncheckedCreateWithoutUserInput> | siswaCreateWithoutUserInput[] | siswaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: siswaCreateOrConnectWithoutUserInput | siswaCreateOrConnectWithoutUserInput[]
    createMany?: siswaCreateManyUserInputEnvelope
    connect?: siswaWhereUniqueInput | siswaWhereUniqueInput[]
  }

  export type stanCreateNestedManyWithoutUserInput = {
    create?: XOR<stanCreateWithoutUserInput, stanUncheckedCreateWithoutUserInput> | stanCreateWithoutUserInput[] | stanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: stanCreateOrConnectWithoutUserInput | stanCreateOrConnectWithoutUserInput[]
    createMany?: stanCreateManyUserInputEnvelope
    connect?: stanWhereUniqueInput | stanWhereUniqueInput[]
  }

  export type siswaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<siswaCreateWithoutUserInput, siswaUncheckedCreateWithoutUserInput> | siswaCreateWithoutUserInput[] | siswaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: siswaCreateOrConnectWithoutUserInput | siswaCreateOrConnectWithoutUserInput[]
    createMany?: siswaCreateManyUserInputEnvelope
    connect?: siswaWhereUniqueInput | siswaWhereUniqueInput[]
  }

  export type stanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<stanCreateWithoutUserInput, stanUncheckedCreateWithoutUserInput> | stanCreateWithoutUserInput[] | stanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: stanCreateOrConnectWithoutUserInput | stanCreateOrConnectWithoutUserInput[]
    createMany?: stanCreateManyUserInputEnvelope
    connect?: stanWhereUniqueInput | stanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumroleFieldUpdateOperationsInput = {
    set?: $Enums.role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type siswaUpdateManyWithoutUserNestedInput = {
    create?: XOR<siswaCreateWithoutUserInput, siswaUncheckedCreateWithoutUserInput> | siswaCreateWithoutUserInput[] | siswaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: siswaCreateOrConnectWithoutUserInput | siswaCreateOrConnectWithoutUserInput[]
    upsert?: siswaUpsertWithWhereUniqueWithoutUserInput | siswaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: siswaCreateManyUserInputEnvelope
    set?: siswaWhereUniqueInput | siswaWhereUniqueInput[]
    disconnect?: siswaWhereUniqueInput | siswaWhereUniqueInput[]
    delete?: siswaWhereUniqueInput | siswaWhereUniqueInput[]
    connect?: siswaWhereUniqueInput | siswaWhereUniqueInput[]
    update?: siswaUpdateWithWhereUniqueWithoutUserInput | siswaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: siswaUpdateManyWithWhereWithoutUserInput | siswaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: siswaScalarWhereInput | siswaScalarWhereInput[]
  }

  export type stanUpdateManyWithoutUserNestedInput = {
    create?: XOR<stanCreateWithoutUserInput, stanUncheckedCreateWithoutUserInput> | stanCreateWithoutUserInput[] | stanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: stanCreateOrConnectWithoutUserInput | stanCreateOrConnectWithoutUserInput[]
    upsert?: stanUpsertWithWhereUniqueWithoutUserInput | stanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: stanCreateManyUserInputEnvelope
    set?: stanWhereUniqueInput | stanWhereUniqueInput[]
    disconnect?: stanWhereUniqueInput | stanWhereUniqueInput[]
    delete?: stanWhereUniqueInput | stanWhereUniqueInput[]
    connect?: stanWhereUniqueInput | stanWhereUniqueInput[]
    update?: stanUpdateWithWhereUniqueWithoutUserInput | stanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: stanUpdateManyWithWhereWithoutUserInput | stanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: stanScalarWhereInput | stanScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type siswaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<siswaCreateWithoutUserInput, siswaUncheckedCreateWithoutUserInput> | siswaCreateWithoutUserInput[] | siswaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: siswaCreateOrConnectWithoutUserInput | siswaCreateOrConnectWithoutUserInput[]
    upsert?: siswaUpsertWithWhereUniqueWithoutUserInput | siswaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: siswaCreateManyUserInputEnvelope
    set?: siswaWhereUniqueInput | siswaWhereUniqueInput[]
    disconnect?: siswaWhereUniqueInput | siswaWhereUniqueInput[]
    delete?: siswaWhereUniqueInput | siswaWhereUniqueInput[]
    connect?: siswaWhereUniqueInput | siswaWhereUniqueInput[]
    update?: siswaUpdateWithWhereUniqueWithoutUserInput | siswaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: siswaUpdateManyWithWhereWithoutUserInput | siswaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: siswaScalarWhereInput | siswaScalarWhereInput[]
  }

  export type stanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<stanCreateWithoutUserInput, stanUncheckedCreateWithoutUserInput> | stanCreateWithoutUserInput[] | stanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: stanCreateOrConnectWithoutUserInput | stanCreateOrConnectWithoutUserInput[]
    upsert?: stanUpsertWithWhereUniqueWithoutUserInput | stanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: stanCreateManyUserInputEnvelope
    set?: stanWhereUniqueInput | stanWhereUniqueInput[]
    disconnect?: stanWhereUniqueInput | stanWhereUniqueInput[]
    delete?: stanWhereUniqueInput | stanWhereUniqueInput[]
    connect?: stanWhereUniqueInput | stanWhereUniqueInput[]
    update?: stanUpdateWithWhereUniqueWithoutUserInput | stanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: stanUpdateManyWithWhereWithoutUserInput | stanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: stanScalarWhereInput | stanScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutSiswaInput = {
    create?: XOR<usersCreateWithoutSiswaInput, usersUncheckedCreateWithoutSiswaInput>
    connectOrCreate?: usersCreateOrConnectWithoutSiswaInput
    connect?: usersWhereUniqueInput
  }

  export type transaksiCreateNestedManyWithoutSiswaInput = {
    create?: XOR<transaksiCreateWithoutSiswaInput, transaksiUncheckedCreateWithoutSiswaInput> | transaksiCreateWithoutSiswaInput[] | transaksiUncheckedCreateWithoutSiswaInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutSiswaInput | transaksiCreateOrConnectWithoutSiswaInput[]
    createMany?: transaksiCreateManySiswaInputEnvelope
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
  }

  export type transaksiUncheckedCreateNestedManyWithoutSiswaInput = {
    create?: XOR<transaksiCreateWithoutSiswaInput, transaksiUncheckedCreateWithoutSiswaInput> | transaksiCreateWithoutSiswaInput[] | transaksiUncheckedCreateWithoutSiswaInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutSiswaInput | transaksiCreateOrConnectWithoutSiswaInput[]
    createMany?: transaksiCreateManySiswaInputEnvelope
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutSiswaNestedInput = {
    create?: XOR<usersCreateWithoutSiswaInput, usersUncheckedCreateWithoutSiswaInput>
    connectOrCreate?: usersCreateOrConnectWithoutSiswaInput
    upsert?: usersUpsertWithoutSiswaInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSiswaInput, usersUpdateWithoutSiswaInput>, usersUncheckedUpdateWithoutSiswaInput>
  }

  export type transaksiUpdateManyWithoutSiswaNestedInput = {
    create?: XOR<transaksiCreateWithoutSiswaInput, transaksiUncheckedCreateWithoutSiswaInput> | transaksiCreateWithoutSiswaInput[] | transaksiUncheckedCreateWithoutSiswaInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutSiswaInput | transaksiCreateOrConnectWithoutSiswaInput[]
    upsert?: transaksiUpsertWithWhereUniqueWithoutSiswaInput | transaksiUpsertWithWhereUniqueWithoutSiswaInput[]
    createMany?: transaksiCreateManySiswaInputEnvelope
    set?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    disconnect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    delete?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    update?: transaksiUpdateWithWhereUniqueWithoutSiswaInput | transaksiUpdateWithWhereUniqueWithoutSiswaInput[]
    updateMany?: transaksiUpdateManyWithWhereWithoutSiswaInput | transaksiUpdateManyWithWhereWithoutSiswaInput[]
    deleteMany?: transaksiScalarWhereInput | transaksiScalarWhereInput[]
  }

  export type transaksiUncheckedUpdateManyWithoutSiswaNestedInput = {
    create?: XOR<transaksiCreateWithoutSiswaInput, transaksiUncheckedCreateWithoutSiswaInput> | transaksiCreateWithoutSiswaInput[] | transaksiUncheckedCreateWithoutSiswaInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutSiswaInput | transaksiCreateOrConnectWithoutSiswaInput[]
    upsert?: transaksiUpsertWithWhereUniqueWithoutSiswaInput | transaksiUpsertWithWhereUniqueWithoutSiswaInput[]
    createMany?: transaksiCreateManySiswaInputEnvelope
    set?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    disconnect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    delete?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    update?: transaksiUpdateWithWhereUniqueWithoutSiswaInput | transaksiUpdateWithWhereUniqueWithoutSiswaInput[]
    updateMany?: transaksiUpdateManyWithWhereWithoutSiswaInput | transaksiUpdateManyWithWhereWithoutSiswaInput[]
    deleteMany?: transaksiScalarWhereInput | transaksiScalarWhereInput[]
  }

  export type diskonCreateNestedManyWithoutStanInput = {
    create?: XOR<diskonCreateWithoutStanInput, diskonUncheckedCreateWithoutStanInput> | diskonCreateWithoutStanInput[] | diskonUncheckedCreateWithoutStanInput[]
    connectOrCreate?: diskonCreateOrConnectWithoutStanInput | diskonCreateOrConnectWithoutStanInput[]
    createMany?: diskonCreateManyStanInputEnvelope
    connect?: diskonWhereUniqueInput | diskonWhereUniqueInput[]
  }

  export type menuCreateNestedManyWithoutStanInput = {
    create?: XOR<menuCreateWithoutStanInput, menuUncheckedCreateWithoutStanInput> | menuCreateWithoutStanInput[] | menuUncheckedCreateWithoutStanInput[]
    connectOrCreate?: menuCreateOrConnectWithoutStanInput | menuCreateOrConnectWithoutStanInput[]
    createMany?: menuCreateManyStanInputEnvelope
    connect?: menuWhereUniqueInput | menuWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutStanInput = {
    create?: XOR<usersCreateWithoutStanInput, usersUncheckedCreateWithoutStanInput>
    connectOrCreate?: usersCreateOrConnectWithoutStanInput
    connect?: usersWhereUniqueInput
  }

  export type transaksiCreateNestedManyWithoutStanInput = {
    create?: XOR<transaksiCreateWithoutStanInput, transaksiUncheckedCreateWithoutStanInput> | transaksiCreateWithoutStanInput[] | transaksiUncheckedCreateWithoutStanInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutStanInput | transaksiCreateOrConnectWithoutStanInput[]
    createMany?: transaksiCreateManyStanInputEnvelope
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
  }

  export type diskonUncheckedCreateNestedManyWithoutStanInput = {
    create?: XOR<diskonCreateWithoutStanInput, diskonUncheckedCreateWithoutStanInput> | diskonCreateWithoutStanInput[] | diskonUncheckedCreateWithoutStanInput[]
    connectOrCreate?: diskonCreateOrConnectWithoutStanInput | diskonCreateOrConnectWithoutStanInput[]
    createMany?: diskonCreateManyStanInputEnvelope
    connect?: diskonWhereUniqueInput | diskonWhereUniqueInput[]
  }

  export type menuUncheckedCreateNestedManyWithoutStanInput = {
    create?: XOR<menuCreateWithoutStanInput, menuUncheckedCreateWithoutStanInput> | menuCreateWithoutStanInput[] | menuUncheckedCreateWithoutStanInput[]
    connectOrCreate?: menuCreateOrConnectWithoutStanInput | menuCreateOrConnectWithoutStanInput[]
    createMany?: menuCreateManyStanInputEnvelope
    connect?: menuWhereUniqueInput | menuWhereUniqueInput[]
  }

  export type transaksiUncheckedCreateNestedManyWithoutStanInput = {
    create?: XOR<transaksiCreateWithoutStanInput, transaksiUncheckedCreateWithoutStanInput> | transaksiCreateWithoutStanInput[] | transaksiUncheckedCreateWithoutStanInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutStanInput | transaksiCreateOrConnectWithoutStanInput[]
    createMany?: transaksiCreateManyStanInputEnvelope
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
  }

  export type diskonUpdateManyWithoutStanNestedInput = {
    create?: XOR<diskonCreateWithoutStanInput, diskonUncheckedCreateWithoutStanInput> | diskonCreateWithoutStanInput[] | diskonUncheckedCreateWithoutStanInput[]
    connectOrCreate?: diskonCreateOrConnectWithoutStanInput | diskonCreateOrConnectWithoutStanInput[]
    upsert?: diskonUpsertWithWhereUniqueWithoutStanInput | diskonUpsertWithWhereUniqueWithoutStanInput[]
    createMany?: diskonCreateManyStanInputEnvelope
    set?: diskonWhereUniqueInput | diskonWhereUniqueInput[]
    disconnect?: diskonWhereUniqueInput | diskonWhereUniqueInput[]
    delete?: diskonWhereUniqueInput | diskonWhereUniqueInput[]
    connect?: diskonWhereUniqueInput | diskonWhereUniqueInput[]
    update?: diskonUpdateWithWhereUniqueWithoutStanInput | diskonUpdateWithWhereUniqueWithoutStanInput[]
    updateMany?: diskonUpdateManyWithWhereWithoutStanInput | diskonUpdateManyWithWhereWithoutStanInput[]
    deleteMany?: diskonScalarWhereInput | diskonScalarWhereInput[]
  }

  export type menuUpdateManyWithoutStanNestedInput = {
    create?: XOR<menuCreateWithoutStanInput, menuUncheckedCreateWithoutStanInput> | menuCreateWithoutStanInput[] | menuUncheckedCreateWithoutStanInput[]
    connectOrCreate?: menuCreateOrConnectWithoutStanInput | menuCreateOrConnectWithoutStanInput[]
    upsert?: menuUpsertWithWhereUniqueWithoutStanInput | menuUpsertWithWhereUniqueWithoutStanInput[]
    createMany?: menuCreateManyStanInputEnvelope
    set?: menuWhereUniqueInput | menuWhereUniqueInput[]
    disconnect?: menuWhereUniqueInput | menuWhereUniqueInput[]
    delete?: menuWhereUniqueInput | menuWhereUniqueInput[]
    connect?: menuWhereUniqueInput | menuWhereUniqueInput[]
    update?: menuUpdateWithWhereUniqueWithoutStanInput | menuUpdateWithWhereUniqueWithoutStanInput[]
    updateMany?: menuUpdateManyWithWhereWithoutStanInput | menuUpdateManyWithWhereWithoutStanInput[]
    deleteMany?: menuScalarWhereInput | menuScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutStanNestedInput = {
    create?: XOR<usersCreateWithoutStanInput, usersUncheckedCreateWithoutStanInput>
    connectOrCreate?: usersCreateOrConnectWithoutStanInput
    upsert?: usersUpsertWithoutStanInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutStanInput, usersUpdateWithoutStanInput>, usersUncheckedUpdateWithoutStanInput>
  }

  export type transaksiUpdateManyWithoutStanNestedInput = {
    create?: XOR<transaksiCreateWithoutStanInput, transaksiUncheckedCreateWithoutStanInput> | transaksiCreateWithoutStanInput[] | transaksiUncheckedCreateWithoutStanInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutStanInput | transaksiCreateOrConnectWithoutStanInput[]
    upsert?: transaksiUpsertWithWhereUniqueWithoutStanInput | transaksiUpsertWithWhereUniqueWithoutStanInput[]
    createMany?: transaksiCreateManyStanInputEnvelope
    set?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    disconnect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    delete?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    update?: transaksiUpdateWithWhereUniqueWithoutStanInput | transaksiUpdateWithWhereUniqueWithoutStanInput[]
    updateMany?: transaksiUpdateManyWithWhereWithoutStanInput | transaksiUpdateManyWithWhereWithoutStanInput[]
    deleteMany?: transaksiScalarWhereInput | transaksiScalarWhereInput[]
  }

  export type diskonUncheckedUpdateManyWithoutStanNestedInput = {
    create?: XOR<diskonCreateWithoutStanInput, diskonUncheckedCreateWithoutStanInput> | diskonCreateWithoutStanInput[] | diskonUncheckedCreateWithoutStanInput[]
    connectOrCreate?: diskonCreateOrConnectWithoutStanInput | diskonCreateOrConnectWithoutStanInput[]
    upsert?: diskonUpsertWithWhereUniqueWithoutStanInput | diskonUpsertWithWhereUniqueWithoutStanInput[]
    createMany?: diskonCreateManyStanInputEnvelope
    set?: diskonWhereUniqueInput | diskonWhereUniqueInput[]
    disconnect?: diskonWhereUniqueInput | diskonWhereUniqueInput[]
    delete?: diskonWhereUniqueInput | diskonWhereUniqueInput[]
    connect?: diskonWhereUniqueInput | diskonWhereUniqueInput[]
    update?: diskonUpdateWithWhereUniqueWithoutStanInput | diskonUpdateWithWhereUniqueWithoutStanInput[]
    updateMany?: diskonUpdateManyWithWhereWithoutStanInput | diskonUpdateManyWithWhereWithoutStanInput[]
    deleteMany?: diskonScalarWhereInput | diskonScalarWhereInput[]
  }

  export type menuUncheckedUpdateManyWithoutStanNestedInput = {
    create?: XOR<menuCreateWithoutStanInput, menuUncheckedCreateWithoutStanInput> | menuCreateWithoutStanInput[] | menuUncheckedCreateWithoutStanInput[]
    connectOrCreate?: menuCreateOrConnectWithoutStanInput | menuCreateOrConnectWithoutStanInput[]
    upsert?: menuUpsertWithWhereUniqueWithoutStanInput | menuUpsertWithWhereUniqueWithoutStanInput[]
    createMany?: menuCreateManyStanInputEnvelope
    set?: menuWhereUniqueInput | menuWhereUniqueInput[]
    disconnect?: menuWhereUniqueInput | menuWhereUniqueInput[]
    delete?: menuWhereUniqueInput | menuWhereUniqueInput[]
    connect?: menuWhereUniqueInput | menuWhereUniqueInput[]
    update?: menuUpdateWithWhereUniqueWithoutStanInput | menuUpdateWithWhereUniqueWithoutStanInput[]
    updateMany?: menuUpdateManyWithWhereWithoutStanInput | menuUpdateManyWithWhereWithoutStanInput[]
    deleteMany?: menuScalarWhereInput | menuScalarWhereInput[]
  }

  export type transaksiUncheckedUpdateManyWithoutStanNestedInput = {
    create?: XOR<transaksiCreateWithoutStanInput, transaksiUncheckedCreateWithoutStanInput> | transaksiCreateWithoutStanInput[] | transaksiUncheckedCreateWithoutStanInput[]
    connectOrCreate?: transaksiCreateOrConnectWithoutStanInput | transaksiCreateOrConnectWithoutStanInput[]
    upsert?: transaksiUpsertWithWhereUniqueWithoutStanInput | transaksiUpsertWithWhereUniqueWithoutStanInput[]
    createMany?: transaksiCreateManyStanInputEnvelope
    set?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    disconnect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    delete?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    connect?: transaksiWhereUniqueInput | transaksiWhereUniqueInput[]
    update?: transaksiUpdateWithWhereUniqueWithoutStanInput | transaksiUpdateWithWhereUniqueWithoutStanInput[]
    updateMany?: transaksiUpdateManyWithWhereWithoutStanInput | transaksiUpdateManyWithWhereWithoutStanInput[]
    deleteMany?: transaksiScalarWhereInput | transaksiScalarWhereInput[]
  }

  export type detail_transaksiCreateNestedManyWithoutMenuInput = {
    create?: XOR<detail_transaksiCreateWithoutMenuInput, detail_transaksiUncheckedCreateWithoutMenuInput> | detail_transaksiCreateWithoutMenuInput[] | detail_transaksiUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: detail_transaksiCreateOrConnectWithoutMenuInput | detail_transaksiCreateOrConnectWithoutMenuInput[]
    createMany?: detail_transaksiCreateManyMenuInputEnvelope
    connect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
  }

  export type stanCreateNestedOneWithoutMenuInput = {
    create?: XOR<stanCreateWithoutMenuInput, stanUncheckedCreateWithoutMenuInput>
    connectOrCreate?: stanCreateOrConnectWithoutMenuInput
    connect?: stanWhereUniqueInput
  }

  export type menu_diskonCreateNestedManyWithoutMenuInput = {
    create?: XOR<menu_diskonCreateWithoutMenuInput, menu_diskonUncheckedCreateWithoutMenuInput> | menu_diskonCreateWithoutMenuInput[] | menu_diskonUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: menu_diskonCreateOrConnectWithoutMenuInput | menu_diskonCreateOrConnectWithoutMenuInput[]
    createMany?: menu_diskonCreateManyMenuInputEnvelope
    connect?: menu_diskonWhereUniqueInput | menu_diskonWhereUniqueInput[]
  }

  export type detail_transaksiUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<detail_transaksiCreateWithoutMenuInput, detail_transaksiUncheckedCreateWithoutMenuInput> | detail_transaksiCreateWithoutMenuInput[] | detail_transaksiUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: detail_transaksiCreateOrConnectWithoutMenuInput | detail_transaksiCreateOrConnectWithoutMenuInput[]
    createMany?: detail_transaksiCreateManyMenuInputEnvelope
    connect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
  }

  export type menu_diskonUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<menu_diskonCreateWithoutMenuInput, menu_diskonUncheckedCreateWithoutMenuInput> | menu_diskonCreateWithoutMenuInput[] | menu_diskonUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: menu_diskonCreateOrConnectWithoutMenuInput | menu_diskonCreateOrConnectWithoutMenuInput[]
    createMany?: menu_diskonCreateManyMenuInputEnvelope
    connect?: menu_diskonWhereUniqueInput | menu_diskonWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumjenisFieldUpdateOperationsInput = {
    set?: $Enums.jenis
  }

  export type detail_transaksiUpdateManyWithoutMenuNestedInput = {
    create?: XOR<detail_transaksiCreateWithoutMenuInput, detail_transaksiUncheckedCreateWithoutMenuInput> | detail_transaksiCreateWithoutMenuInput[] | detail_transaksiUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: detail_transaksiCreateOrConnectWithoutMenuInput | detail_transaksiCreateOrConnectWithoutMenuInput[]
    upsert?: detail_transaksiUpsertWithWhereUniqueWithoutMenuInput | detail_transaksiUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: detail_transaksiCreateManyMenuInputEnvelope
    set?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    disconnect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    delete?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    connect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    update?: detail_transaksiUpdateWithWhereUniqueWithoutMenuInput | detail_transaksiUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: detail_transaksiUpdateManyWithWhereWithoutMenuInput | detail_transaksiUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: detail_transaksiScalarWhereInput | detail_transaksiScalarWhereInput[]
  }

  export type stanUpdateOneRequiredWithoutMenuNestedInput = {
    create?: XOR<stanCreateWithoutMenuInput, stanUncheckedCreateWithoutMenuInput>
    connectOrCreate?: stanCreateOrConnectWithoutMenuInput
    upsert?: stanUpsertWithoutMenuInput
    connect?: stanWhereUniqueInput
    update?: XOR<XOR<stanUpdateToOneWithWhereWithoutMenuInput, stanUpdateWithoutMenuInput>, stanUncheckedUpdateWithoutMenuInput>
  }

  export type menu_diskonUpdateManyWithoutMenuNestedInput = {
    create?: XOR<menu_diskonCreateWithoutMenuInput, menu_diskonUncheckedCreateWithoutMenuInput> | menu_diskonCreateWithoutMenuInput[] | menu_diskonUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: menu_diskonCreateOrConnectWithoutMenuInput | menu_diskonCreateOrConnectWithoutMenuInput[]
    upsert?: menu_diskonUpsertWithWhereUniqueWithoutMenuInput | menu_diskonUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: menu_diskonCreateManyMenuInputEnvelope
    set?: menu_diskonWhereUniqueInput | menu_diskonWhereUniqueInput[]
    disconnect?: menu_diskonWhereUniqueInput | menu_diskonWhereUniqueInput[]
    delete?: menu_diskonWhereUniqueInput | menu_diskonWhereUniqueInput[]
    connect?: menu_diskonWhereUniqueInput | menu_diskonWhereUniqueInput[]
    update?: menu_diskonUpdateWithWhereUniqueWithoutMenuInput | menu_diskonUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: menu_diskonUpdateManyWithWhereWithoutMenuInput | menu_diskonUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: menu_diskonScalarWhereInput | menu_diskonScalarWhereInput[]
  }

  export type detail_transaksiUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<detail_transaksiCreateWithoutMenuInput, detail_transaksiUncheckedCreateWithoutMenuInput> | detail_transaksiCreateWithoutMenuInput[] | detail_transaksiUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: detail_transaksiCreateOrConnectWithoutMenuInput | detail_transaksiCreateOrConnectWithoutMenuInput[]
    upsert?: detail_transaksiUpsertWithWhereUniqueWithoutMenuInput | detail_transaksiUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: detail_transaksiCreateManyMenuInputEnvelope
    set?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    disconnect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    delete?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    connect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    update?: detail_transaksiUpdateWithWhereUniqueWithoutMenuInput | detail_transaksiUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: detail_transaksiUpdateManyWithWhereWithoutMenuInput | detail_transaksiUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: detail_transaksiScalarWhereInput | detail_transaksiScalarWhereInput[]
  }

  export type menu_diskonUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<menu_diskonCreateWithoutMenuInput, menu_diskonUncheckedCreateWithoutMenuInput> | menu_diskonCreateWithoutMenuInput[] | menu_diskonUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: menu_diskonCreateOrConnectWithoutMenuInput | menu_diskonCreateOrConnectWithoutMenuInput[]
    upsert?: menu_diskonUpsertWithWhereUniqueWithoutMenuInput | menu_diskonUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: menu_diskonCreateManyMenuInputEnvelope
    set?: menu_diskonWhereUniqueInput | menu_diskonWhereUniqueInput[]
    disconnect?: menu_diskonWhereUniqueInput | menu_diskonWhereUniqueInput[]
    delete?: menu_diskonWhereUniqueInput | menu_diskonWhereUniqueInput[]
    connect?: menu_diskonWhereUniqueInput | menu_diskonWhereUniqueInput[]
    update?: menu_diskonUpdateWithWhereUniqueWithoutMenuInput | menu_diskonUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: menu_diskonUpdateManyWithWhereWithoutMenuInput | menu_diskonUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: menu_diskonScalarWhereInput | menu_diskonScalarWhereInput[]
  }

  export type stanCreateNestedOneWithoutDiskonInput = {
    create?: XOR<stanCreateWithoutDiskonInput, stanUncheckedCreateWithoutDiskonInput>
    connectOrCreate?: stanCreateOrConnectWithoutDiskonInput
    connect?: stanWhereUniqueInput
  }

  export type menu_diskonCreateNestedManyWithoutDiskonInput = {
    create?: XOR<menu_diskonCreateWithoutDiskonInput, menu_diskonUncheckedCreateWithoutDiskonInput> | menu_diskonCreateWithoutDiskonInput[] | menu_diskonUncheckedCreateWithoutDiskonInput[]
    connectOrCreate?: menu_diskonCreateOrConnectWithoutDiskonInput | menu_diskonCreateOrConnectWithoutDiskonInput[]
    createMany?: menu_diskonCreateManyDiskonInputEnvelope
    connect?: menu_diskonWhereUniqueInput | menu_diskonWhereUniqueInput[]
  }

  export type menu_diskonUncheckedCreateNestedManyWithoutDiskonInput = {
    create?: XOR<menu_diskonCreateWithoutDiskonInput, menu_diskonUncheckedCreateWithoutDiskonInput> | menu_diskonCreateWithoutDiskonInput[] | menu_diskonUncheckedCreateWithoutDiskonInput[]
    connectOrCreate?: menu_diskonCreateOrConnectWithoutDiskonInput | menu_diskonCreateOrConnectWithoutDiskonInput[]
    createMany?: menu_diskonCreateManyDiskonInputEnvelope
    connect?: menu_diskonWhereUniqueInput | menu_diskonWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type stanUpdateOneRequiredWithoutDiskonNestedInput = {
    create?: XOR<stanCreateWithoutDiskonInput, stanUncheckedCreateWithoutDiskonInput>
    connectOrCreate?: stanCreateOrConnectWithoutDiskonInput
    upsert?: stanUpsertWithoutDiskonInput
    connect?: stanWhereUniqueInput
    update?: XOR<XOR<stanUpdateToOneWithWhereWithoutDiskonInput, stanUpdateWithoutDiskonInput>, stanUncheckedUpdateWithoutDiskonInput>
  }

  export type menu_diskonUpdateManyWithoutDiskonNestedInput = {
    create?: XOR<menu_diskonCreateWithoutDiskonInput, menu_diskonUncheckedCreateWithoutDiskonInput> | menu_diskonCreateWithoutDiskonInput[] | menu_diskonUncheckedCreateWithoutDiskonInput[]
    connectOrCreate?: menu_diskonCreateOrConnectWithoutDiskonInput | menu_diskonCreateOrConnectWithoutDiskonInput[]
    upsert?: menu_diskonUpsertWithWhereUniqueWithoutDiskonInput | menu_diskonUpsertWithWhereUniqueWithoutDiskonInput[]
    createMany?: menu_diskonCreateManyDiskonInputEnvelope
    set?: menu_diskonWhereUniqueInput | menu_diskonWhereUniqueInput[]
    disconnect?: menu_diskonWhereUniqueInput | menu_diskonWhereUniqueInput[]
    delete?: menu_diskonWhereUniqueInput | menu_diskonWhereUniqueInput[]
    connect?: menu_diskonWhereUniqueInput | menu_diskonWhereUniqueInput[]
    update?: menu_diskonUpdateWithWhereUniqueWithoutDiskonInput | menu_diskonUpdateWithWhereUniqueWithoutDiskonInput[]
    updateMany?: menu_diskonUpdateManyWithWhereWithoutDiskonInput | menu_diskonUpdateManyWithWhereWithoutDiskonInput[]
    deleteMany?: menu_diskonScalarWhereInput | menu_diskonScalarWhereInput[]
  }

  export type menu_diskonUncheckedUpdateManyWithoutDiskonNestedInput = {
    create?: XOR<menu_diskonCreateWithoutDiskonInput, menu_diskonUncheckedCreateWithoutDiskonInput> | menu_diskonCreateWithoutDiskonInput[] | menu_diskonUncheckedCreateWithoutDiskonInput[]
    connectOrCreate?: menu_diskonCreateOrConnectWithoutDiskonInput | menu_diskonCreateOrConnectWithoutDiskonInput[]
    upsert?: menu_diskonUpsertWithWhereUniqueWithoutDiskonInput | menu_diskonUpsertWithWhereUniqueWithoutDiskonInput[]
    createMany?: menu_diskonCreateManyDiskonInputEnvelope
    set?: menu_diskonWhereUniqueInput | menu_diskonWhereUniqueInput[]
    disconnect?: menu_diskonWhereUniqueInput | menu_diskonWhereUniqueInput[]
    delete?: menu_diskonWhereUniqueInput | menu_diskonWhereUniqueInput[]
    connect?: menu_diskonWhereUniqueInput | menu_diskonWhereUniqueInput[]
    update?: menu_diskonUpdateWithWhereUniqueWithoutDiskonInput | menu_diskonUpdateWithWhereUniqueWithoutDiskonInput[]
    updateMany?: menu_diskonUpdateManyWithWhereWithoutDiskonInput | menu_diskonUpdateManyWithWhereWithoutDiskonInput[]
    deleteMany?: menu_diskonScalarWhereInput | menu_diskonScalarWhereInput[]
  }

  export type diskonCreateNestedOneWithoutMenu_diskonInput = {
    create?: XOR<diskonCreateWithoutMenu_diskonInput, diskonUncheckedCreateWithoutMenu_diskonInput>
    connectOrCreate?: diskonCreateOrConnectWithoutMenu_diskonInput
    connect?: diskonWhereUniqueInput
  }

  export type menuCreateNestedOneWithoutMenu_diskonInput = {
    create?: XOR<menuCreateWithoutMenu_diskonInput, menuUncheckedCreateWithoutMenu_diskonInput>
    connectOrCreate?: menuCreateOrConnectWithoutMenu_diskonInput
    connect?: menuWhereUniqueInput
  }

  export type diskonUpdateOneRequiredWithoutMenu_diskonNestedInput = {
    create?: XOR<diskonCreateWithoutMenu_diskonInput, diskonUncheckedCreateWithoutMenu_diskonInput>
    connectOrCreate?: diskonCreateOrConnectWithoutMenu_diskonInput
    upsert?: diskonUpsertWithoutMenu_diskonInput
    connect?: diskonWhereUniqueInput
    update?: XOR<XOR<diskonUpdateToOneWithWhereWithoutMenu_diskonInput, diskonUpdateWithoutMenu_diskonInput>, diskonUncheckedUpdateWithoutMenu_diskonInput>
  }

  export type menuUpdateOneRequiredWithoutMenu_diskonNestedInput = {
    create?: XOR<menuCreateWithoutMenu_diskonInput, menuUncheckedCreateWithoutMenu_diskonInput>
    connectOrCreate?: menuCreateOrConnectWithoutMenu_diskonInput
    upsert?: menuUpsertWithoutMenu_diskonInput
    connect?: menuWhereUniqueInput
    update?: XOR<XOR<menuUpdateToOneWithWhereWithoutMenu_diskonInput, menuUpdateWithoutMenu_diskonInput>, menuUncheckedUpdateWithoutMenu_diskonInput>
  }

  export type detail_transaksiCreateNestedManyWithoutTransaksiInput = {
    create?: XOR<detail_transaksiCreateWithoutTransaksiInput, detail_transaksiUncheckedCreateWithoutTransaksiInput> | detail_transaksiCreateWithoutTransaksiInput[] | detail_transaksiUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: detail_transaksiCreateOrConnectWithoutTransaksiInput | detail_transaksiCreateOrConnectWithoutTransaksiInput[]
    createMany?: detail_transaksiCreateManyTransaksiInputEnvelope
    connect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
  }

  export type siswaCreateNestedOneWithoutTransaksiInput = {
    create?: XOR<siswaCreateWithoutTransaksiInput, siswaUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: siswaCreateOrConnectWithoutTransaksiInput
    connect?: siswaWhereUniqueInput
  }

  export type stanCreateNestedOneWithoutTransaksiInput = {
    create?: XOR<stanCreateWithoutTransaksiInput, stanUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: stanCreateOrConnectWithoutTransaksiInput
    connect?: stanWhereUniqueInput
  }

  export type detail_transaksiUncheckedCreateNestedManyWithoutTransaksiInput = {
    create?: XOR<detail_transaksiCreateWithoutTransaksiInput, detail_transaksiUncheckedCreateWithoutTransaksiInput> | detail_transaksiCreateWithoutTransaksiInput[] | detail_transaksiUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: detail_transaksiCreateOrConnectWithoutTransaksiInput | detail_transaksiCreateOrConnectWithoutTransaksiInput[]
    createMany?: detail_transaksiCreateManyTransaksiInputEnvelope
    connect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
  }

  export type EnumstatusFieldUpdateOperationsInput = {
    set?: $Enums.status
  }

  export type detail_transaksiUpdateManyWithoutTransaksiNestedInput = {
    create?: XOR<detail_transaksiCreateWithoutTransaksiInput, detail_transaksiUncheckedCreateWithoutTransaksiInput> | detail_transaksiCreateWithoutTransaksiInput[] | detail_transaksiUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: detail_transaksiCreateOrConnectWithoutTransaksiInput | detail_transaksiCreateOrConnectWithoutTransaksiInput[]
    upsert?: detail_transaksiUpsertWithWhereUniqueWithoutTransaksiInput | detail_transaksiUpsertWithWhereUniqueWithoutTransaksiInput[]
    createMany?: detail_transaksiCreateManyTransaksiInputEnvelope
    set?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    disconnect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    delete?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    connect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    update?: detail_transaksiUpdateWithWhereUniqueWithoutTransaksiInput | detail_transaksiUpdateWithWhereUniqueWithoutTransaksiInput[]
    updateMany?: detail_transaksiUpdateManyWithWhereWithoutTransaksiInput | detail_transaksiUpdateManyWithWhereWithoutTransaksiInput[]
    deleteMany?: detail_transaksiScalarWhereInput | detail_transaksiScalarWhereInput[]
  }

  export type siswaUpdateOneRequiredWithoutTransaksiNestedInput = {
    create?: XOR<siswaCreateWithoutTransaksiInput, siswaUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: siswaCreateOrConnectWithoutTransaksiInput
    upsert?: siswaUpsertWithoutTransaksiInput
    connect?: siswaWhereUniqueInput
    update?: XOR<XOR<siswaUpdateToOneWithWhereWithoutTransaksiInput, siswaUpdateWithoutTransaksiInput>, siswaUncheckedUpdateWithoutTransaksiInput>
  }

  export type stanUpdateOneRequiredWithoutTransaksiNestedInput = {
    create?: XOR<stanCreateWithoutTransaksiInput, stanUncheckedCreateWithoutTransaksiInput>
    connectOrCreate?: stanCreateOrConnectWithoutTransaksiInput
    upsert?: stanUpsertWithoutTransaksiInput
    connect?: stanWhereUniqueInput
    update?: XOR<XOR<stanUpdateToOneWithWhereWithoutTransaksiInput, stanUpdateWithoutTransaksiInput>, stanUncheckedUpdateWithoutTransaksiInput>
  }

  export type detail_transaksiUncheckedUpdateManyWithoutTransaksiNestedInput = {
    create?: XOR<detail_transaksiCreateWithoutTransaksiInput, detail_transaksiUncheckedCreateWithoutTransaksiInput> | detail_transaksiCreateWithoutTransaksiInput[] | detail_transaksiUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: detail_transaksiCreateOrConnectWithoutTransaksiInput | detail_transaksiCreateOrConnectWithoutTransaksiInput[]
    upsert?: detail_transaksiUpsertWithWhereUniqueWithoutTransaksiInput | detail_transaksiUpsertWithWhereUniqueWithoutTransaksiInput[]
    createMany?: detail_transaksiCreateManyTransaksiInputEnvelope
    set?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    disconnect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    delete?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    connect?: detail_transaksiWhereUniqueInput | detail_transaksiWhereUniqueInput[]
    update?: detail_transaksiUpdateWithWhereUniqueWithoutTransaksiInput | detail_transaksiUpdateWithWhereUniqueWithoutTransaksiInput[]
    updateMany?: detail_transaksiUpdateManyWithWhereWithoutTransaksiInput | detail_transaksiUpdateManyWithWhereWithoutTransaksiInput[]
    deleteMany?: detail_transaksiScalarWhereInput | detail_transaksiScalarWhereInput[]
  }

  export type menuCreateNestedOneWithoutDetail_transaksiInput = {
    create?: XOR<menuCreateWithoutDetail_transaksiInput, menuUncheckedCreateWithoutDetail_transaksiInput>
    connectOrCreate?: menuCreateOrConnectWithoutDetail_transaksiInput
    connect?: menuWhereUniqueInput
  }

  export type transaksiCreateNestedOneWithoutDetail_transaksiInput = {
    create?: XOR<transaksiCreateWithoutDetail_transaksiInput, transaksiUncheckedCreateWithoutDetail_transaksiInput>
    connectOrCreate?: transaksiCreateOrConnectWithoutDetail_transaksiInput
    connect?: transaksiWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type menuUpdateOneRequiredWithoutDetail_transaksiNestedInput = {
    create?: XOR<menuCreateWithoutDetail_transaksiInput, menuUncheckedCreateWithoutDetail_transaksiInput>
    connectOrCreate?: menuCreateOrConnectWithoutDetail_transaksiInput
    upsert?: menuUpsertWithoutDetail_transaksiInput
    connect?: menuWhereUniqueInput
    update?: XOR<XOR<menuUpdateToOneWithWhereWithoutDetail_transaksiInput, menuUpdateWithoutDetail_transaksiInput>, menuUncheckedUpdateWithoutDetail_transaksiInput>
  }

  export type transaksiUpdateOneRequiredWithoutDetail_transaksiNestedInput = {
    create?: XOR<transaksiCreateWithoutDetail_transaksiInput, transaksiUncheckedCreateWithoutDetail_transaksiInput>
    connectOrCreate?: transaksiCreateOrConnectWithoutDetail_transaksiInput
    upsert?: transaksiUpsertWithoutDetail_transaksiInput
    connect?: transaksiWhereUniqueInput
    update?: XOR<XOR<transaksiUpdateToOneWithWhereWithoutDetail_transaksiInput, transaksiUpdateWithoutDetail_transaksiInput>, transaksiUncheckedUpdateWithoutDetail_transaksiInput>
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

  export type NestedEnumroleFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleFilter<$PrismaModel> | $Enums.role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedEnumroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleWithAggregatesFilter<$PrismaModel> | $Enums.role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleFilter<$PrismaModel>
    _max?: NestedEnumroleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumjenisFilter<$PrismaModel = never> = {
    equals?: $Enums.jenis | EnumjenisFieldRefInput<$PrismaModel>
    in?: $Enums.jenis[] | ListEnumjenisFieldRefInput<$PrismaModel>
    notIn?: $Enums.jenis[] | ListEnumjenisFieldRefInput<$PrismaModel>
    not?: NestedEnumjenisFilter<$PrismaModel> | $Enums.jenis
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumjenisWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.jenis | EnumjenisFieldRefInput<$PrismaModel>
    in?: $Enums.jenis[] | ListEnumjenisFieldRefInput<$PrismaModel>
    notIn?: $Enums.jenis[] | ListEnumjenisFieldRefInput<$PrismaModel>
    not?: NestedEnumjenisWithAggregatesFilter<$PrismaModel> | $Enums.jenis
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumjenisFilter<$PrismaModel>
    _max?: NestedEnumjenisFilter<$PrismaModel>
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

  export type NestedEnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type NestedEnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
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

  export type siswaCreateWithoutUserInput = {
    uuid: string
    nama: string
    alamat: string
    telepon: string
    foto: string
    transaksi?: transaksiCreateNestedManyWithoutSiswaInput
  }

  export type siswaUncheckedCreateWithoutUserInput = {
    id?: number
    uuid: string
    nama: string
    alamat: string
    telepon: string
    foto: string
    transaksi?: transaksiUncheckedCreateNestedManyWithoutSiswaInput
  }

  export type siswaCreateOrConnectWithoutUserInput = {
    where: siswaWhereUniqueInput
    create: XOR<siswaCreateWithoutUserInput, siswaUncheckedCreateWithoutUserInput>
  }

  export type siswaCreateManyUserInputEnvelope = {
    data: siswaCreateManyUserInput | siswaCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type stanCreateWithoutUserInput = {
    nama_stan: string
    nama_pemilik: string
    telepon: string
    diskon?: diskonCreateNestedManyWithoutStanInput
    menu?: menuCreateNestedManyWithoutStanInput
    transaksi?: transaksiCreateNestedManyWithoutStanInput
  }

  export type stanUncheckedCreateWithoutUserInput = {
    id?: number
    nama_stan: string
    nama_pemilik: string
    telepon: string
    diskon?: diskonUncheckedCreateNestedManyWithoutStanInput
    menu?: menuUncheckedCreateNestedManyWithoutStanInput
    transaksi?: transaksiUncheckedCreateNestedManyWithoutStanInput
  }

  export type stanCreateOrConnectWithoutUserInput = {
    where: stanWhereUniqueInput
    create: XOR<stanCreateWithoutUserInput, stanUncheckedCreateWithoutUserInput>
  }

  export type stanCreateManyUserInputEnvelope = {
    data: stanCreateManyUserInput | stanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type siswaUpsertWithWhereUniqueWithoutUserInput = {
    where: siswaWhereUniqueInput
    update: XOR<siswaUpdateWithoutUserInput, siswaUncheckedUpdateWithoutUserInput>
    create: XOR<siswaCreateWithoutUserInput, siswaUncheckedCreateWithoutUserInput>
  }

  export type siswaUpdateWithWhereUniqueWithoutUserInput = {
    where: siswaWhereUniqueInput
    data: XOR<siswaUpdateWithoutUserInput, siswaUncheckedUpdateWithoutUserInput>
  }

  export type siswaUpdateManyWithWhereWithoutUserInput = {
    where: siswaScalarWhereInput
    data: XOR<siswaUpdateManyMutationInput, siswaUncheckedUpdateManyWithoutUserInput>
  }

  export type siswaScalarWhereInput = {
    AND?: siswaScalarWhereInput | siswaScalarWhereInput[]
    OR?: siswaScalarWhereInput[]
    NOT?: siswaScalarWhereInput | siswaScalarWhereInput[]
    id?: IntFilter<"siswa"> | number
    uuid?: StringFilter<"siswa"> | string
    nama?: StringFilter<"siswa"> | string
    alamat?: StringFilter<"siswa"> | string
    telepon?: StringFilter<"siswa"> | string
    foto?: StringFilter<"siswa"> | string
    id_user?: IntFilter<"siswa"> | number
  }

  export type stanUpsertWithWhereUniqueWithoutUserInput = {
    where: stanWhereUniqueInput
    update: XOR<stanUpdateWithoutUserInput, stanUncheckedUpdateWithoutUserInput>
    create: XOR<stanCreateWithoutUserInput, stanUncheckedCreateWithoutUserInput>
  }

  export type stanUpdateWithWhereUniqueWithoutUserInput = {
    where: stanWhereUniqueInput
    data: XOR<stanUpdateWithoutUserInput, stanUncheckedUpdateWithoutUserInput>
  }

  export type stanUpdateManyWithWhereWithoutUserInput = {
    where: stanScalarWhereInput
    data: XOR<stanUpdateManyMutationInput, stanUncheckedUpdateManyWithoutUserInput>
  }

  export type stanScalarWhereInput = {
    AND?: stanScalarWhereInput | stanScalarWhereInput[]
    OR?: stanScalarWhereInput[]
    NOT?: stanScalarWhereInput | stanScalarWhereInput[]
    id?: IntFilter<"stan"> | number
    nama_stan?: StringFilter<"stan"> | string
    nama_pemilik?: StringFilter<"stan"> | string
    telepon?: StringFilter<"stan"> | string
    id_user?: IntFilter<"stan"> | number
  }

  export type usersCreateWithoutSiswaInput = {
    username: string
    password: string
    role: $Enums.role
    createdAt?: Date | string
    updatedAt?: Date | string
    stan?: stanCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutSiswaInput = {
    id?: number
    username: string
    password: string
    role: $Enums.role
    createdAt?: Date | string
    updatedAt?: Date | string
    stan?: stanUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutSiswaInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSiswaInput, usersUncheckedCreateWithoutSiswaInput>
  }

  export type transaksiCreateWithoutSiswaInput = {
    tanggal?: Date | string
    uuid: string
    status?: $Enums.status
    detail_transaksi?: detail_transaksiCreateNestedManyWithoutTransaksiInput
    stan: stanCreateNestedOneWithoutTransaksiInput
  }

  export type transaksiUncheckedCreateWithoutSiswaInput = {
    id?: number
    tanggal?: Date | string
    id_stan: number
    uuid: string
    status?: $Enums.status
    detail_transaksi?: detail_transaksiUncheckedCreateNestedManyWithoutTransaksiInput
  }

  export type transaksiCreateOrConnectWithoutSiswaInput = {
    where: transaksiWhereUniqueInput
    create: XOR<transaksiCreateWithoutSiswaInput, transaksiUncheckedCreateWithoutSiswaInput>
  }

  export type transaksiCreateManySiswaInputEnvelope = {
    data: transaksiCreateManySiswaInput | transaksiCreateManySiswaInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutSiswaInput = {
    update: XOR<usersUpdateWithoutSiswaInput, usersUncheckedUpdateWithoutSiswaInput>
    create: XOR<usersCreateWithoutSiswaInput, usersUncheckedCreateWithoutSiswaInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSiswaInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSiswaInput, usersUncheckedUpdateWithoutSiswaInput>
  }

  export type usersUpdateWithoutSiswaInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stan?: stanUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutSiswaInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stan?: stanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type transaksiUpsertWithWhereUniqueWithoutSiswaInput = {
    where: transaksiWhereUniqueInput
    update: XOR<transaksiUpdateWithoutSiswaInput, transaksiUncheckedUpdateWithoutSiswaInput>
    create: XOR<transaksiCreateWithoutSiswaInput, transaksiUncheckedCreateWithoutSiswaInput>
  }

  export type transaksiUpdateWithWhereUniqueWithoutSiswaInput = {
    where: transaksiWhereUniqueInput
    data: XOR<transaksiUpdateWithoutSiswaInput, transaksiUncheckedUpdateWithoutSiswaInput>
  }

  export type transaksiUpdateManyWithWhereWithoutSiswaInput = {
    where: transaksiScalarWhereInput
    data: XOR<transaksiUpdateManyMutationInput, transaksiUncheckedUpdateManyWithoutSiswaInput>
  }

  export type transaksiScalarWhereInput = {
    AND?: transaksiScalarWhereInput | transaksiScalarWhereInput[]
    OR?: transaksiScalarWhereInput[]
    NOT?: transaksiScalarWhereInput | transaksiScalarWhereInput[]
    id?: IntFilter<"transaksi"> | number
    tanggal?: DateTimeFilter<"transaksi"> | Date | string
    id_stan?: IntFilter<"transaksi"> | number
    id_siswa?: IntFilter<"transaksi"> | number
    uuid?: StringFilter<"transaksi"> | string
    status?: EnumstatusFilter<"transaksi"> | $Enums.status
  }

  export type diskonCreateWithoutStanInput = {
    nama_diskon: string
    persentase: number
    tanggal_awal: Date | string
    tanggal_akhir: Date | string
    menu_diskon?: menu_diskonCreateNestedManyWithoutDiskonInput
  }

  export type diskonUncheckedCreateWithoutStanInput = {
    id?: number
    nama_diskon: string
    persentase: number
    tanggal_awal: Date | string
    tanggal_akhir: Date | string
    menu_diskon?: menu_diskonUncheckedCreateNestedManyWithoutDiskonInput
  }

  export type diskonCreateOrConnectWithoutStanInput = {
    where: diskonWhereUniqueInput
    create: XOR<diskonCreateWithoutStanInput, diskonUncheckedCreateWithoutStanInput>
  }

  export type diskonCreateManyStanInputEnvelope = {
    data: diskonCreateManyStanInput | diskonCreateManyStanInput[]
    skipDuplicates?: boolean
  }

  export type menuCreateWithoutStanInput = {
    nama_menu: string
    harga: Decimal | DecimalJsLike | number | string
    jenis: $Enums.jenis
    foto: string
    deskripsi: string
    detail_transaksi?: detail_transaksiCreateNestedManyWithoutMenuInput
    menu_diskon?: menu_diskonCreateNestedManyWithoutMenuInput
  }

  export type menuUncheckedCreateWithoutStanInput = {
    id?: number
    nama_menu: string
    harga: Decimal | DecimalJsLike | number | string
    jenis: $Enums.jenis
    foto: string
    deskripsi: string
    detail_transaksi?: detail_transaksiUncheckedCreateNestedManyWithoutMenuInput
    menu_diskon?: menu_diskonUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menuCreateOrConnectWithoutStanInput = {
    where: menuWhereUniqueInput
    create: XOR<menuCreateWithoutStanInput, menuUncheckedCreateWithoutStanInput>
  }

  export type menuCreateManyStanInputEnvelope = {
    data: menuCreateManyStanInput | menuCreateManyStanInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutStanInput = {
    username: string
    password: string
    role: $Enums.role
    createdAt?: Date | string
    updatedAt?: Date | string
    siswa?: siswaCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutStanInput = {
    id?: number
    username: string
    password: string
    role: $Enums.role
    createdAt?: Date | string
    updatedAt?: Date | string
    siswa?: siswaUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutStanInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutStanInput, usersUncheckedCreateWithoutStanInput>
  }

  export type transaksiCreateWithoutStanInput = {
    tanggal?: Date | string
    uuid: string
    status?: $Enums.status
    detail_transaksi?: detail_transaksiCreateNestedManyWithoutTransaksiInput
    siswa: siswaCreateNestedOneWithoutTransaksiInput
  }

  export type transaksiUncheckedCreateWithoutStanInput = {
    id?: number
    tanggal?: Date | string
    id_siswa: number
    uuid: string
    status?: $Enums.status
    detail_transaksi?: detail_transaksiUncheckedCreateNestedManyWithoutTransaksiInput
  }

  export type transaksiCreateOrConnectWithoutStanInput = {
    where: transaksiWhereUniqueInput
    create: XOR<transaksiCreateWithoutStanInput, transaksiUncheckedCreateWithoutStanInput>
  }

  export type transaksiCreateManyStanInputEnvelope = {
    data: transaksiCreateManyStanInput | transaksiCreateManyStanInput[]
    skipDuplicates?: boolean
  }

  export type diskonUpsertWithWhereUniqueWithoutStanInput = {
    where: diskonWhereUniqueInput
    update: XOR<diskonUpdateWithoutStanInput, diskonUncheckedUpdateWithoutStanInput>
    create: XOR<diskonCreateWithoutStanInput, diskonUncheckedCreateWithoutStanInput>
  }

  export type diskonUpdateWithWhereUniqueWithoutStanInput = {
    where: diskonWhereUniqueInput
    data: XOR<diskonUpdateWithoutStanInput, diskonUncheckedUpdateWithoutStanInput>
  }

  export type diskonUpdateManyWithWhereWithoutStanInput = {
    where: diskonScalarWhereInput
    data: XOR<diskonUpdateManyMutationInput, diskonUncheckedUpdateManyWithoutStanInput>
  }

  export type diskonScalarWhereInput = {
    AND?: diskonScalarWhereInput | diskonScalarWhereInput[]
    OR?: diskonScalarWhereInput[]
    NOT?: diskonScalarWhereInput | diskonScalarWhereInput[]
    id?: IntFilter<"diskon"> | number
    nama_diskon?: StringFilter<"diskon"> | string
    persentase?: FloatFilter<"diskon"> | number
    tanggal_awal?: DateTimeFilter<"diskon"> | Date | string
    tanggal_akhir?: DateTimeFilter<"diskon"> | Date | string
    id_stan?: IntFilter<"diskon"> | number
  }

  export type menuUpsertWithWhereUniqueWithoutStanInput = {
    where: menuWhereUniqueInput
    update: XOR<menuUpdateWithoutStanInput, menuUncheckedUpdateWithoutStanInput>
    create: XOR<menuCreateWithoutStanInput, menuUncheckedCreateWithoutStanInput>
  }

  export type menuUpdateWithWhereUniqueWithoutStanInput = {
    where: menuWhereUniqueInput
    data: XOR<menuUpdateWithoutStanInput, menuUncheckedUpdateWithoutStanInput>
  }

  export type menuUpdateManyWithWhereWithoutStanInput = {
    where: menuScalarWhereInput
    data: XOR<menuUpdateManyMutationInput, menuUncheckedUpdateManyWithoutStanInput>
  }

  export type menuScalarWhereInput = {
    AND?: menuScalarWhereInput | menuScalarWhereInput[]
    OR?: menuScalarWhereInput[]
    NOT?: menuScalarWhereInput | menuScalarWhereInput[]
    id?: IntFilter<"menu"> | number
    nama_menu?: StringFilter<"menu"> | string
    harga?: DecimalFilter<"menu"> | Decimal | DecimalJsLike | number | string
    jenis?: EnumjenisFilter<"menu"> | $Enums.jenis
    foto?: StringFilter<"menu"> | string
    deskripsi?: StringFilter<"menu"> | string
    id_stan?: IntFilter<"menu"> | number
  }

  export type usersUpsertWithoutStanInput = {
    update: XOR<usersUpdateWithoutStanInput, usersUncheckedUpdateWithoutStanInput>
    create: XOR<usersCreateWithoutStanInput, usersUncheckedCreateWithoutStanInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutStanInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutStanInput, usersUncheckedUpdateWithoutStanInput>
  }

  export type usersUpdateWithoutStanInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siswa?: siswaUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutStanInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siswa?: siswaUncheckedUpdateManyWithoutUserNestedInput
  }

  export type transaksiUpsertWithWhereUniqueWithoutStanInput = {
    where: transaksiWhereUniqueInput
    update: XOR<transaksiUpdateWithoutStanInput, transaksiUncheckedUpdateWithoutStanInput>
    create: XOR<transaksiCreateWithoutStanInput, transaksiUncheckedCreateWithoutStanInput>
  }

  export type transaksiUpdateWithWhereUniqueWithoutStanInput = {
    where: transaksiWhereUniqueInput
    data: XOR<transaksiUpdateWithoutStanInput, transaksiUncheckedUpdateWithoutStanInput>
  }

  export type transaksiUpdateManyWithWhereWithoutStanInput = {
    where: transaksiScalarWhereInput
    data: XOR<transaksiUpdateManyMutationInput, transaksiUncheckedUpdateManyWithoutStanInput>
  }

  export type detail_transaksiCreateWithoutMenuInput = {
    jumlah: number
    harga_total: Decimal | DecimalJsLike | number | string
    catatan?: string | null
    transaksi: transaksiCreateNestedOneWithoutDetail_transaksiInput
  }

  export type detail_transaksiUncheckedCreateWithoutMenuInput = {
    id?: number
    jumlah: number
    harga_total: Decimal | DecimalJsLike | number | string
    id_transaksi: number
    catatan?: string | null
  }

  export type detail_transaksiCreateOrConnectWithoutMenuInput = {
    where: detail_transaksiWhereUniqueInput
    create: XOR<detail_transaksiCreateWithoutMenuInput, detail_transaksiUncheckedCreateWithoutMenuInput>
  }

  export type detail_transaksiCreateManyMenuInputEnvelope = {
    data: detail_transaksiCreateManyMenuInput | detail_transaksiCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type stanCreateWithoutMenuInput = {
    nama_stan: string
    nama_pemilik: string
    telepon: string
    diskon?: diskonCreateNestedManyWithoutStanInput
    user: usersCreateNestedOneWithoutStanInput
    transaksi?: transaksiCreateNestedManyWithoutStanInput
  }

  export type stanUncheckedCreateWithoutMenuInput = {
    id?: number
    nama_stan: string
    nama_pemilik: string
    telepon: string
    id_user: number
    diskon?: diskonUncheckedCreateNestedManyWithoutStanInput
    transaksi?: transaksiUncheckedCreateNestedManyWithoutStanInput
  }

  export type stanCreateOrConnectWithoutMenuInput = {
    where: stanWhereUniqueInput
    create: XOR<stanCreateWithoutMenuInput, stanUncheckedCreateWithoutMenuInput>
  }

  export type menu_diskonCreateWithoutMenuInput = {
    diskon: diskonCreateNestedOneWithoutMenu_diskonInput
  }

  export type menu_diskonUncheckedCreateWithoutMenuInput = {
    id?: number
    id_diskon: number
  }

  export type menu_diskonCreateOrConnectWithoutMenuInput = {
    where: menu_diskonWhereUniqueInput
    create: XOR<menu_diskonCreateWithoutMenuInput, menu_diskonUncheckedCreateWithoutMenuInput>
  }

  export type menu_diskonCreateManyMenuInputEnvelope = {
    data: menu_diskonCreateManyMenuInput | menu_diskonCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type detail_transaksiUpsertWithWhereUniqueWithoutMenuInput = {
    where: detail_transaksiWhereUniqueInput
    update: XOR<detail_transaksiUpdateWithoutMenuInput, detail_transaksiUncheckedUpdateWithoutMenuInput>
    create: XOR<detail_transaksiCreateWithoutMenuInput, detail_transaksiUncheckedCreateWithoutMenuInput>
  }

  export type detail_transaksiUpdateWithWhereUniqueWithoutMenuInput = {
    where: detail_transaksiWhereUniqueInput
    data: XOR<detail_transaksiUpdateWithoutMenuInput, detail_transaksiUncheckedUpdateWithoutMenuInput>
  }

  export type detail_transaksiUpdateManyWithWhereWithoutMenuInput = {
    where: detail_transaksiScalarWhereInput
    data: XOR<detail_transaksiUpdateManyMutationInput, detail_transaksiUncheckedUpdateManyWithoutMenuInput>
  }

  export type detail_transaksiScalarWhereInput = {
    AND?: detail_transaksiScalarWhereInput | detail_transaksiScalarWhereInput[]
    OR?: detail_transaksiScalarWhereInput[]
    NOT?: detail_transaksiScalarWhereInput | detail_transaksiScalarWhereInput[]
    id?: IntFilter<"detail_transaksi"> | number
    jumlah?: IntFilter<"detail_transaksi"> | number
    harga_total?: DecimalFilter<"detail_transaksi"> | Decimal | DecimalJsLike | number | string
    id_transaksi?: IntFilter<"detail_transaksi"> | number
    id_menu?: IntFilter<"detail_transaksi"> | number
    catatan?: StringNullableFilter<"detail_transaksi"> | string | null
  }

  export type stanUpsertWithoutMenuInput = {
    update: XOR<stanUpdateWithoutMenuInput, stanUncheckedUpdateWithoutMenuInput>
    create: XOR<stanCreateWithoutMenuInput, stanUncheckedCreateWithoutMenuInput>
    where?: stanWhereInput
  }

  export type stanUpdateToOneWithWhereWithoutMenuInput = {
    where?: stanWhereInput
    data: XOR<stanUpdateWithoutMenuInput, stanUncheckedUpdateWithoutMenuInput>
  }

  export type stanUpdateWithoutMenuInput = {
    nama_stan?: StringFieldUpdateOperationsInput | string
    nama_pemilik?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    diskon?: diskonUpdateManyWithoutStanNestedInput
    user?: usersUpdateOneRequiredWithoutStanNestedInput
    transaksi?: transaksiUpdateManyWithoutStanNestedInput
  }

  export type stanUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_stan?: StringFieldUpdateOperationsInput | string
    nama_pemilik?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    id_user?: IntFieldUpdateOperationsInput | number
    diskon?: diskonUncheckedUpdateManyWithoutStanNestedInput
    transaksi?: transaksiUncheckedUpdateManyWithoutStanNestedInput
  }

  export type menu_diskonUpsertWithWhereUniqueWithoutMenuInput = {
    where: menu_diskonWhereUniqueInput
    update: XOR<menu_diskonUpdateWithoutMenuInput, menu_diskonUncheckedUpdateWithoutMenuInput>
    create: XOR<menu_diskonCreateWithoutMenuInput, menu_diskonUncheckedCreateWithoutMenuInput>
  }

  export type menu_diskonUpdateWithWhereUniqueWithoutMenuInput = {
    where: menu_diskonWhereUniqueInput
    data: XOR<menu_diskonUpdateWithoutMenuInput, menu_diskonUncheckedUpdateWithoutMenuInput>
  }

  export type menu_diskonUpdateManyWithWhereWithoutMenuInput = {
    where: menu_diskonScalarWhereInput
    data: XOR<menu_diskonUpdateManyMutationInput, menu_diskonUncheckedUpdateManyWithoutMenuInput>
  }

  export type menu_diskonScalarWhereInput = {
    AND?: menu_diskonScalarWhereInput | menu_diskonScalarWhereInput[]
    OR?: menu_diskonScalarWhereInput[]
    NOT?: menu_diskonScalarWhereInput | menu_diskonScalarWhereInput[]
    id?: IntFilter<"menu_diskon"> | number
    id_menu?: IntFilter<"menu_diskon"> | number
    id_diskon?: IntFilter<"menu_diskon"> | number
  }

  export type stanCreateWithoutDiskonInput = {
    nama_stan: string
    nama_pemilik: string
    telepon: string
    menu?: menuCreateNestedManyWithoutStanInput
    user: usersCreateNestedOneWithoutStanInput
    transaksi?: transaksiCreateNestedManyWithoutStanInput
  }

  export type stanUncheckedCreateWithoutDiskonInput = {
    id?: number
    nama_stan: string
    nama_pemilik: string
    telepon: string
    id_user: number
    menu?: menuUncheckedCreateNestedManyWithoutStanInput
    transaksi?: transaksiUncheckedCreateNestedManyWithoutStanInput
  }

  export type stanCreateOrConnectWithoutDiskonInput = {
    where: stanWhereUniqueInput
    create: XOR<stanCreateWithoutDiskonInput, stanUncheckedCreateWithoutDiskonInput>
  }

  export type menu_diskonCreateWithoutDiskonInput = {
    menu: menuCreateNestedOneWithoutMenu_diskonInput
  }

  export type menu_diskonUncheckedCreateWithoutDiskonInput = {
    id?: number
    id_menu: number
  }

  export type menu_diskonCreateOrConnectWithoutDiskonInput = {
    where: menu_diskonWhereUniqueInput
    create: XOR<menu_diskonCreateWithoutDiskonInput, menu_diskonUncheckedCreateWithoutDiskonInput>
  }

  export type menu_diskonCreateManyDiskonInputEnvelope = {
    data: menu_diskonCreateManyDiskonInput | menu_diskonCreateManyDiskonInput[]
    skipDuplicates?: boolean
  }

  export type stanUpsertWithoutDiskonInput = {
    update: XOR<stanUpdateWithoutDiskonInput, stanUncheckedUpdateWithoutDiskonInput>
    create: XOR<stanCreateWithoutDiskonInput, stanUncheckedCreateWithoutDiskonInput>
    where?: stanWhereInput
  }

  export type stanUpdateToOneWithWhereWithoutDiskonInput = {
    where?: stanWhereInput
    data: XOR<stanUpdateWithoutDiskonInput, stanUncheckedUpdateWithoutDiskonInput>
  }

  export type stanUpdateWithoutDiskonInput = {
    nama_stan?: StringFieldUpdateOperationsInput | string
    nama_pemilik?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    menu?: menuUpdateManyWithoutStanNestedInput
    user?: usersUpdateOneRequiredWithoutStanNestedInput
    transaksi?: transaksiUpdateManyWithoutStanNestedInput
  }

  export type stanUncheckedUpdateWithoutDiskonInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_stan?: StringFieldUpdateOperationsInput | string
    nama_pemilik?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    id_user?: IntFieldUpdateOperationsInput | number
    menu?: menuUncheckedUpdateManyWithoutStanNestedInput
    transaksi?: transaksiUncheckedUpdateManyWithoutStanNestedInput
  }

  export type menu_diskonUpsertWithWhereUniqueWithoutDiskonInput = {
    where: menu_diskonWhereUniqueInput
    update: XOR<menu_diskonUpdateWithoutDiskonInput, menu_diskonUncheckedUpdateWithoutDiskonInput>
    create: XOR<menu_diskonCreateWithoutDiskonInput, menu_diskonUncheckedCreateWithoutDiskonInput>
  }

  export type menu_diskonUpdateWithWhereUniqueWithoutDiskonInput = {
    where: menu_diskonWhereUniqueInput
    data: XOR<menu_diskonUpdateWithoutDiskonInput, menu_diskonUncheckedUpdateWithoutDiskonInput>
  }

  export type menu_diskonUpdateManyWithWhereWithoutDiskonInput = {
    where: menu_diskonScalarWhereInput
    data: XOR<menu_diskonUpdateManyMutationInput, menu_diskonUncheckedUpdateManyWithoutDiskonInput>
  }

  export type diskonCreateWithoutMenu_diskonInput = {
    nama_diskon: string
    persentase: number
    tanggal_awal: Date | string
    tanggal_akhir: Date | string
    stan: stanCreateNestedOneWithoutDiskonInput
  }

  export type diskonUncheckedCreateWithoutMenu_diskonInput = {
    id?: number
    nama_diskon: string
    persentase: number
    tanggal_awal: Date | string
    tanggal_akhir: Date | string
    id_stan: number
  }

  export type diskonCreateOrConnectWithoutMenu_diskonInput = {
    where: diskonWhereUniqueInput
    create: XOR<diskonCreateWithoutMenu_diskonInput, diskonUncheckedCreateWithoutMenu_diskonInput>
  }

  export type menuCreateWithoutMenu_diskonInput = {
    nama_menu: string
    harga: Decimal | DecimalJsLike | number | string
    jenis: $Enums.jenis
    foto: string
    deskripsi: string
    detail_transaksi?: detail_transaksiCreateNestedManyWithoutMenuInput
    stan: stanCreateNestedOneWithoutMenuInput
  }

  export type menuUncheckedCreateWithoutMenu_diskonInput = {
    id?: number
    nama_menu: string
    harga: Decimal | DecimalJsLike | number | string
    jenis: $Enums.jenis
    foto: string
    deskripsi: string
    id_stan: number
    detail_transaksi?: detail_transaksiUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menuCreateOrConnectWithoutMenu_diskonInput = {
    where: menuWhereUniqueInput
    create: XOR<menuCreateWithoutMenu_diskonInput, menuUncheckedCreateWithoutMenu_diskonInput>
  }

  export type diskonUpsertWithoutMenu_diskonInput = {
    update: XOR<diskonUpdateWithoutMenu_diskonInput, diskonUncheckedUpdateWithoutMenu_diskonInput>
    create: XOR<diskonCreateWithoutMenu_diskonInput, diskonUncheckedCreateWithoutMenu_diskonInput>
    where?: diskonWhereInput
  }

  export type diskonUpdateToOneWithWhereWithoutMenu_diskonInput = {
    where?: diskonWhereInput
    data: XOR<diskonUpdateWithoutMenu_diskonInput, diskonUncheckedUpdateWithoutMenu_diskonInput>
  }

  export type diskonUpdateWithoutMenu_diskonInput = {
    nama_diskon?: StringFieldUpdateOperationsInput | string
    persentase?: FloatFieldUpdateOperationsInput | number
    tanggal_awal?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: DateTimeFieldUpdateOperationsInput | Date | string
    stan?: stanUpdateOneRequiredWithoutDiskonNestedInput
  }

  export type diskonUncheckedUpdateWithoutMenu_diskonInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_diskon?: StringFieldUpdateOperationsInput | string
    persentase?: FloatFieldUpdateOperationsInput | number
    tanggal_awal?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: DateTimeFieldUpdateOperationsInput | Date | string
    id_stan?: IntFieldUpdateOperationsInput | number
  }

  export type menuUpsertWithoutMenu_diskonInput = {
    update: XOR<menuUpdateWithoutMenu_diskonInput, menuUncheckedUpdateWithoutMenu_diskonInput>
    create: XOR<menuCreateWithoutMenu_diskonInput, menuUncheckedCreateWithoutMenu_diskonInput>
    where?: menuWhereInput
  }

  export type menuUpdateToOneWithWhereWithoutMenu_diskonInput = {
    where?: menuWhereInput
    data: XOR<menuUpdateWithoutMenu_diskonInput, menuUncheckedUpdateWithoutMenu_diskonInput>
  }

  export type menuUpdateWithoutMenu_diskonInput = {
    nama_menu?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    jenis?: EnumjenisFieldUpdateOperationsInput | $Enums.jenis
    foto?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    detail_transaksi?: detail_transaksiUpdateManyWithoutMenuNestedInput
    stan?: stanUpdateOneRequiredWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateWithoutMenu_diskonInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_menu?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    jenis?: EnumjenisFieldUpdateOperationsInput | $Enums.jenis
    foto?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    id_stan?: IntFieldUpdateOperationsInput | number
    detail_transaksi?: detail_transaksiUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type detail_transaksiCreateWithoutTransaksiInput = {
    jumlah: number
    harga_total: Decimal | DecimalJsLike | number | string
    catatan?: string | null
    menu: menuCreateNestedOneWithoutDetail_transaksiInput
  }

  export type detail_transaksiUncheckedCreateWithoutTransaksiInput = {
    id?: number
    jumlah: number
    harga_total: Decimal | DecimalJsLike | number | string
    id_menu: number
    catatan?: string | null
  }

  export type detail_transaksiCreateOrConnectWithoutTransaksiInput = {
    where: detail_transaksiWhereUniqueInput
    create: XOR<detail_transaksiCreateWithoutTransaksiInput, detail_transaksiUncheckedCreateWithoutTransaksiInput>
  }

  export type detail_transaksiCreateManyTransaksiInputEnvelope = {
    data: detail_transaksiCreateManyTransaksiInput | detail_transaksiCreateManyTransaksiInput[]
    skipDuplicates?: boolean
  }

  export type siswaCreateWithoutTransaksiInput = {
    uuid: string
    nama: string
    alamat: string
    telepon: string
    foto: string
    user: usersCreateNestedOneWithoutSiswaInput
  }

  export type siswaUncheckedCreateWithoutTransaksiInput = {
    id?: number
    uuid: string
    nama: string
    alamat: string
    telepon: string
    foto: string
    id_user: number
  }

  export type siswaCreateOrConnectWithoutTransaksiInput = {
    where: siswaWhereUniqueInput
    create: XOR<siswaCreateWithoutTransaksiInput, siswaUncheckedCreateWithoutTransaksiInput>
  }

  export type stanCreateWithoutTransaksiInput = {
    nama_stan: string
    nama_pemilik: string
    telepon: string
    diskon?: diskonCreateNestedManyWithoutStanInput
    menu?: menuCreateNestedManyWithoutStanInput
    user: usersCreateNestedOneWithoutStanInput
  }

  export type stanUncheckedCreateWithoutTransaksiInput = {
    id?: number
    nama_stan: string
    nama_pemilik: string
    telepon: string
    id_user: number
    diskon?: diskonUncheckedCreateNestedManyWithoutStanInput
    menu?: menuUncheckedCreateNestedManyWithoutStanInput
  }

  export type stanCreateOrConnectWithoutTransaksiInput = {
    where: stanWhereUniqueInput
    create: XOR<stanCreateWithoutTransaksiInput, stanUncheckedCreateWithoutTransaksiInput>
  }

  export type detail_transaksiUpsertWithWhereUniqueWithoutTransaksiInput = {
    where: detail_transaksiWhereUniqueInput
    update: XOR<detail_transaksiUpdateWithoutTransaksiInput, detail_transaksiUncheckedUpdateWithoutTransaksiInput>
    create: XOR<detail_transaksiCreateWithoutTransaksiInput, detail_transaksiUncheckedCreateWithoutTransaksiInput>
  }

  export type detail_transaksiUpdateWithWhereUniqueWithoutTransaksiInput = {
    where: detail_transaksiWhereUniqueInput
    data: XOR<detail_transaksiUpdateWithoutTransaksiInput, detail_transaksiUncheckedUpdateWithoutTransaksiInput>
  }

  export type detail_transaksiUpdateManyWithWhereWithoutTransaksiInput = {
    where: detail_transaksiScalarWhereInput
    data: XOR<detail_transaksiUpdateManyMutationInput, detail_transaksiUncheckedUpdateManyWithoutTransaksiInput>
  }

  export type siswaUpsertWithoutTransaksiInput = {
    update: XOR<siswaUpdateWithoutTransaksiInput, siswaUncheckedUpdateWithoutTransaksiInput>
    create: XOR<siswaCreateWithoutTransaksiInput, siswaUncheckedCreateWithoutTransaksiInput>
    where?: siswaWhereInput
  }

  export type siswaUpdateToOneWithWhereWithoutTransaksiInput = {
    where?: siswaWhereInput
    data: XOR<siswaUpdateWithoutTransaksiInput, siswaUncheckedUpdateWithoutTransaksiInput>
  }

  export type siswaUpdateWithoutTransaksiInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    user?: usersUpdateOneRequiredWithoutSiswaNestedInput
  }

  export type siswaUncheckedUpdateWithoutTransaksiInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    id_user?: IntFieldUpdateOperationsInput | number
  }

  export type stanUpsertWithoutTransaksiInput = {
    update: XOR<stanUpdateWithoutTransaksiInput, stanUncheckedUpdateWithoutTransaksiInput>
    create: XOR<stanCreateWithoutTransaksiInput, stanUncheckedCreateWithoutTransaksiInput>
    where?: stanWhereInput
  }

  export type stanUpdateToOneWithWhereWithoutTransaksiInput = {
    where?: stanWhereInput
    data: XOR<stanUpdateWithoutTransaksiInput, stanUncheckedUpdateWithoutTransaksiInput>
  }

  export type stanUpdateWithoutTransaksiInput = {
    nama_stan?: StringFieldUpdateOperationsInput | string
    nama_pemilik?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    diskon?: diskonUpdateManyWithoutStanNestedInput
    menu?: menuUpdateManyWithoutStanNestedInput
    user?: usersUpdateOneRequiredWithoutStanNestedInput
  }

  export type stanUncheckedUpdateWithoutTransaksiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_stan?: StringFieldUpdateOperationsInput | string
    nama_pemilik?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    id_user?: IntFieldUpdateOperationsInput | number
    diskon?: diskonUncheckedUpdateManyWithoutStanNestedInput
    menu?: menuUncheckedUpdateManyWithoutStanNestedInput
  }

  export type menuCreateWithoutDetail_transaksiInput = {
    nama_menu: string
    harga: Decimal | DecimalJsLike | number | string
    jenis: $Enums.jenis
    foto: string
    deskripsi: string
    stan: stanCreateNestedOneWithoutMenuInput
    menu_diskon?: menu_diskonCreateNestedManyWithoutMenuInput
  }

  export type menuUncheckedCreateWithoutDetail_transaksiInput = {
    id?: number
    nama_menu: string
    harga: Decimal | DecimalJsLike | number | string
    jenis: $Enums.jenis
    foto: string
    deskripsi: string
    id_stan: number
    menu_diskon?: menu_diskonUncheckedCreateNestedManyWithoutMenuInput
  }

  export type menuCreateOrConnectWithoutDetail_transaksiInput = {
    where: menuWhereUniqueInput
    create: XOR<menuCreateWithoutDetail_transaksiInput, menuUncheckedCreateWithoutDetail_transaksiInput>
  }

  export type transaksiCreateWithoutDetail_transaksiInput = {
    tanggal?: Date | string
    uuid: string
    status?: $Enums.status
    siswa: siswaCreateNestedOneWithoutTransaksiInput
    stan: stanCreateNestedOneWithoutTransaksiInput
  }

  export type transaksiUncheckedCreateWithoutDetail_transaksiInput = {
    id?: number
    tanggal?: Date | string
    id_stan: number
    id_siswa: number
    uuid: string
    status?: $Enums.status
  }

  export type transaksiCreateOrConnectWithoutDetail_transaksiInput = {
    where: transaksiWhereUniqueInput
    create: XOR<transaksiCreateWithoutDetail_transaksiInput, transaksiUncheckedCreateWithoutDetail_transaksiInput>
  }

  export type menuUpsertWithoutDetail_transaksiInput = {
    update: XOR<menuUpdateWithoutDetail_transaksiInput, menuUncheckedUpdateWithoutDetail_transaksiInput>
    create: XOR<menuCreateWithoutDetail_transaksiInput, menuUncheckedCreateWithoutDetail_transaksiInput>
    where?: menuWhereInput
  }

  export type menuUpdateToOneWithWhereWithoutDetail_transaksiInput = {
    where?: menuWhereInput
    data: XOR<menuUpdateWithoutDetail_transaksiInput, menuUncheckedUpdateWithoutDetail_transaksiInput>
  }

  export type menuUpdateWithoutDetail_transaksiInput = {
    nama_menu?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    jenis?: EnumjenisFieldUpdateOperationsInput | $Enums.jenis
    foto?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    stan?: stanUpdateOneRequiredWithoutMenuNestedInput
    menu_diskon?: menu_diskonUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateWithoutDetail_transaksiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_menu?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    jenis?: EnumjenisFieldUpdateOperationsInput | $Enums.jenis
    foto?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    id_stan?: IntFieldUpdateOperationsInput | number
    menu_diskon?: menu_diskonUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type transaksiUpsertWithoutDetail_transaksiInput = {
    update: XOR<transaksiUpdateWithoutDetail_transaksiInput, transaksiUncheckedUpdateWithoutDetail_transaksiInput>
    create: XOR<transaksiCreateWithoutDetail_transaksiInput, transaksiUncheckedCreateWithoutDetail_transaksiInput>
    where?: transaksiWhereInput
  }

  export type transaksiUpdateToOneWithWhereWithoutDetail_transaksiInput = {
    where?: transaksiWhereInput
    data: XOR<transaksiUpdateWithoutDetail_transaksiInput, transaksiUncheckedUpdateWithoutDetail_transaksiInput>
  }

  export type transaksiUpdateWithoutDetail_transaksiInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    siswa?: siswaUpdateOneRequiredWithoutTransaksiNestedInput
    stan?: stanUpdateOneRequiredWithoutTransaksiNestedInput
  }

  export type transaksiUncheckedUpdateWithoutDetail_transaksiInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    id_stan?: IntFieldUpdateOperationsInput | number
    id_siswa?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
  }

  export type siswaCreateManyUserInput = {
    id?: number
    uuid: string
    nama: string
    alamat: string
    telepon: string
    foto: string
  }

  export type stanCreateManyUserInput = {
    id?: number
    nama_stan: string
    nama_pemilik: string
    telepon: string
  }

  export type siswaUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    transaksi?: transaksiUpdateManyWithoutSiswaNestedInput
  }

  export type siswaUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    transaksi?: transaksiUncheckedUpdateManyWithoutSiswaNestedInput
  }

  export type siswaUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type stanUpdateWithoutUserInput = {
    nama_stan?: StringFieldUpdateOperationsInput | string
    nama_pemilik?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    diskon?: diskonUpdateManyWithoutStanNestedInput
    menu?: menuUpdateManyWithoutStanNestedInput
    transaksi?: transaksiUpdateManyWithoutStanNestedInput
  }

  export type stanUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_stan?: StringFieldUpdateOperationsInput | string
    nama_pemilik?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
    diskon?: diskonUncheckedUpdateManyWithoutStanNestedInput
    menu?: menuUncheckedUpdateManyWithoutStanNestedInput
    transaksi?: transaksiUncheckedUpdateManyWithoutStanNestedInput
  }

  export type stanUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_stan?: StringFieldUpdateOperationsInput | string
    nama_pemilik?: StringFieldUpdateOperationsInput | string
    telepon?: StringFieldUpdateOperationsInput | string
  }

  export type transaksiCreateManySiswaInput = {
    id?: number
    tanggal?: Date | string
    id_stan: number
    uuid: string
    status?: $Enums.status
  }

  export type transaksiUpdateWithoutSiswaInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    detail_transaksi?: detail_transaksiUpdateManyWithoutTransaksiNestedInput
    stan?: stanUpdateOneRequiredWithoutTransaksiNestedInput
  }

  export type transaksiUncheckedUpdateWithoutSiswaInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    id_stan?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    detail_transaksi?: detail_transaksiUncheckedUpdateManyWithoutTransaksiNestedInput
  }

  export type transaksiUncheckedUpdateManyWithoutSiswaInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    id_stan?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
  }

  export type diskonCreateManyStanInput = {
    id?: number
    nama_diskon: string
    persentase: number
    tanggal_awal: Date | string
    tanggal_akhir: Date | string
  }

  export type menuCreateManyStanInput = {
    id?: number
    nama_menu: string
    harga: Decimal | DecimalJsLike | number | string
    jenis: $Enums.jenis
    foto: string
    deskripsi: string
  }

  export type transaksiCreateManyStanInput = {
    id?: number
    tanggal?: Date | string
    id_siswa: number
    uuid: string
    status?: $Enums.status
  }

  export type diskonUpdateWithoutStanInput = {
    nama_diskon?: StringFieldUpdateOperationsInput | string
    persentase?: FloatFieldUpdateOperationsInput | number
    tanggal_awal?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: DateTimeFieldUpdateOperationsInput | Date | string
    menu_diskon?: menu_diskonUpdateManyWithoutDiskonNestedInput
  }

  export type diskonUncheckedUpdateWithoutStanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_diskon?: StringFieldUpdateOperationsInput | string
    persentase?: FloatFieldUpdateOperationsInput | number
    tanggal_awal?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: DateTimeFieldUpdateOperationsInput | Date | string
    menu_diskon?: menu_diskonUncheckedUpdateManyWithoutDiskonNestedInput
  }

  export type diskonUncheckedUpdateManyWithoutStanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_diskon?: StringFieldUpdateOperationsInput | string
    persentase?: FloatFieldUpdateOperationsInput | number
    tanggal_awal?: DateTimeFieldUpdateOperationsInput | Date | string
    tanggal_akhir?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type menuUpdateWithoutStanInput = {
    nama_menu?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    jenis?: EnumjenisFieldUpdateOperationsInput | $Enums.jenis
    foto?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    detail_transaksi?: detail_transaksiUpdateManyWithoutMenuNestedInput
    menu_diskon?: menu_diskonUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateWithoutStanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_menu?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    jenis?: EnumjenisFieldUpdateOperationsInput | $Enums.jenis
    foto?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
    detail_transaksi?: detail_transaksiUncheckedUpdateManyWithoutMenuNestedInput
    menu_diskon?: menu_diskonUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type menuUncheckedUpdateManyWithoutStanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama_menu?: StringFieldUpdateOperationsInput | string
    harga?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    jenis?: EnumjenisFieldUpdateOperationsInput | $Enums.jenis
    foto?: StringFieldUpdateOperationsInput | string
    deskripsi?: StringFieldUpdateOperationsInput | string
  }

  export type transaksiUpdateWithoutStanInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    uuid?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    detail_transaksi?: detail_transaksiUpdateManyWithoutTransaksiNestedInput
    siswa?: siswaUpdateOneRequiredWithoutTransaksiNestedInput
  }

  export type transaksiUncheckedUpdateWithoutStanInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    id_siswa?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    detail_transaksi?: detail_transaksiUncheckedUpdateManyWithoutTransaksiNestedInput
  }

  export type transaksiUncheckedUpdateManyWithoutStanInput = {
    id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    id_siswa?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
  }

  export type detail_transaksiCreateManyMenuInput = {
    id?: number
    jumlah: number
    harga_total: Decimal | DecimalJsLike | number | string
    id_transaksi: number
    catatan?: string | null
  }

  export type menu_diskonCreateManyMenuInput = {
    id?: number
    id_diskon: number
  }

  export type detail_transaksiUpdateWithoutMenuInput = {
    jumlah?: IntFieldUpdateOperationsInput | number
    harga_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    transaksi?: transaksiUpdateOneRequiredWithoutDetail_transaksiNestedInput
  }

  export type detail_transaksiUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    harga_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_transaksi?: IntFieldUpdateOperationsInput | number
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detail_transaksiUncheckedUpdateManyWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    harga_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_transaksi?: IntFieldUpdateOperationsInput | number
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type menu_diskonUpdateWithoutMenuInput = {
    diskon?: diskonUpdateOneRequiredWithoutMenu_diskonNestedInput
  }

  export type menu_diskonUncheckedUpdateWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_diskon?: IntFieldUpdateOperationsInput | number
  }

  export type menu_diskonUncheckedUpdateManyWithoutMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_diskon?: IntFieldUpdateOperationsInput | number
  }

  export type menu_diskonCreateManyDiskonInput = {
    id?: number
    id_menu: number
  }

  export type menu_diskonUpdateWithoutDiskonInput = {
    menu?: menuUpdateOneRequiredWithoutMenu_diskonNestedInput
  }

  export type menu_diskonUncheckedUpdateWithoutDiskonInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_menu?: IntFieldUpdateOperationsInput | number
  }

  export type menu_diskonUncheckedUpdateManyWithoutDiskonInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_menu?: IntFieldUpdateOperationsInput | number
  }

  export type detail_transaksiCreateManyTransaksiInput = {
    id?: number
    jumlah: number
    harga_total: Decimal | DecimalJsLike | number | string
    id_menu: number
    catatan?: string | null
  }

  export type detail_transaksiUpdateWithoutTransaksiInput = {
    jumlah?: IntFieldUpdateOperationsInput | number
    harga_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    menu?: menuUpdateOneRequiredWithoutDetail_transaksiNestedInput
  }

  export type detail_transaksiUncheckedUpdateWithoutTransaksiInput = {
    id?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    harga_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_menu?: IntFieldUpdateOperationsInput | number
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type detail_transaksiUncheckedUpdateManyWithoutTransaksiInput = {
    id?: IntFieldUpdateOperationsInput | number
    jumlah?: IntFieldUpdateOperationsInput | number
    harga_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_menu?: IntFieldUpdateOperationsInput | number
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
  }



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