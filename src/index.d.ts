import { CacheStoreSetOptions } from '@nestjs/cache-manager'

declare module '@nestjs/cache-manager' {
  export interface CacheStore {
    /**
     * Create a key/value pair in the cache.
     *
     * @param key cache key
     * @param value cache value
     * @param options
     */
    set<T>(key: string, value: T, options?: CacheStoreSetOptions<T> | number): Promise<void> | void

    /**
     * Retrieve a key/value pair from the cache.
     *
     * @param key cache key
     */
    get<T>(key: string): Promise<T | undefined> | T | undefined

    /**
     * Destroy a key/value pair from the cache.
     *
     * @param key cache key
     */
    del(key: string): void | Promise<void>

    /**
     * Destroy a key/value pair from the cache.
     *
     */
    reset(): void | Promise<void>
  }
}
