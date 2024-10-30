import { CacheStore, CacheStoreSetOptions } from '@nestjs/cache-manager'
import { rethrow } from '@nestjs/core/helpers/rethrow'
import * as zlib from 'zlib'
import { existsSync, readFileSync, rmSync, writeFileSync } from 'fs'
import { Utils } from '../helpers/utils'
import { meta } from 'eslint-plugin-prettier'
import { popNumber } from 'rxjs/internal/util/args'
import { globSync } from 'glob'

const gzip = zlib.createGzip()

export type DefaultCacheOptions = {
  path?: string
  ttl?: number
  zip?: boolean
  maxsize?: number
}

function MetaData() {
  this.key = null
  this.value = null
  this.filename = null
  this.expires = null
  this.size = null
}

export class FsCacheStore implements CacheStore {
  protected options: DefaultCacheOptions

  constructor(options?: DefaultCacheOptions) {
    if (!options) {
      options = {} as DefaultCacheOptions
    }
    if (!options.hasOwnProperty('zip')) {
      options.zip = true
    }
    if (!options.hasOwnProperty('ttl')) {
      options.ttl = 60
    }
    if (!options.hasOwnProperty('path')) {
      options.path = './cache'
    }
    if (!options.hasOwnProperty('maxsize')) {
      options.maxsize = 0
    }
    this.options = options
  }

  async set<T>(key: string, value: T, options?: number | CacheStoreSetOptions<T>): Promise<void> {
    // get ttl
    let ttl: number = this.options.ttl
    if (typeof options == 'number') {
      ttl = Number(options)
    } else if (options) {
      ttl = Number(options.ttl || options.ttl === 0 ? options.ttl : this.options.ttl)
    }

    const metaData = {
      ...new MetaData(),
      ...{
        key: key,
        value: value,
        expires: Date.now() + (ttl || 60) * 1000,
        filename: this.options.path + '/cache_' + Utils.md5(key) + '.dat'
      }
    }

    const stream = JSON.stringify(metaData)

    metaData.size = stream.length

    if (this.options.maxsize && metaData.size > this.options.maxsize) {
      throw 'Item size too big.'
    }
    try {
      await this.del(key)
    } catch (_) {
      rethrow(_)
    }
    if (this.options.zip) {
      const bufferData = zlib.deflateSync(stream)
      writeFileSync(metaData.filename, bufferData)
    } else {
      writeFileSync(metaData.filename, stream)
    }
    metaData.value = null
    delete metaData.value
  }

  async get<T>(key: string): Promise<T> {
    const metaData = {
      ...new MetaData(),
      ...{
        key: key,
        filename: this.options.path + '/cache_' + Utils.md5(key) + '.dat'
      }
    }
    if (!existsSync(metaData.filename)) return null

    const data = readFileSync(metaData.filename)
    let jsonData: any
    if (this.options.zip) {
      jsonData = JSON.parse(zlib.unzipSync(data).toString())
    } else {
      jsonData = JSON.parse(data.toString())
    }
    if (!jsonData) return null
    if (jsonData.expires < new Date()) {
      await this.del(jsonData.key)
    }
    return jsonData.value
  }

  async del(key: string): Promise<void> {
    const metaData = {
      ...new MetaData(),
      ...{
        key: key,
        filename: this.options.path + '/cache_' + Utils.md5(key) + '.dat'
      }
    }
    if (!existsSync(metaData.filename)) return
    rmSync(metaData.filename)
  }

  async reset(): Promise<void> {
    const files = globSync(this.options.path + '/*.dat')
    for (const file of files) {
      rmSync(file)
    }
  }
}
