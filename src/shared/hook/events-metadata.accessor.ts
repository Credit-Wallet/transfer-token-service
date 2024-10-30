import { Injectable, Type } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { HOOK_ACTION_METADATA, HOOK_FILTER_METADATA } from './hook-action.decorator'

@Injectable()
export class EventsMetadataAccessor {
  constructor(private readonly reflector: Reflector) {}

  getEventHandlerMetadataAction(target: Type<unknown>): string[] | undefined {
    if (!target || (typeof target !== 'function' && typeof target !== 'object')) {
      return undefined
    }

    const metadata = this.reflector.get(HOOK_ACTION_METADATA, target)
    if (!metadata) {
      return undefined
    }
    return Array.isArray(metadata) ? metadata : [metadata]
  }
  getEventHandlerMetadataFilter(target: Type<unknown>): string[] | undefined {
    if (!target || (typeof target !== 'function' && typeof target !== 'object')) {
      return undefined
    }

    const metadata = this.reflector.get(HOOK_FILTER_METADATA, target)
    if (!metadata) {
      return undefined
    }
    return Array.isArray(metadata) ? metadata : [metadata]
  }
}
