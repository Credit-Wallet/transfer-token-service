import { extendArrayMetadata } from '@nestjs/common/utils/extend-metadata.util'

export const HOOK_ACTION_METADATA = '__hook_action__'
export const HOOK_FILTER_METADATA = '__hook_filter__'

export declare interface HookServiceAction<T = any, A = any, B = any, C = any, D = any, E = any, F = any> {
  handle(param?: T, params1?: A, params2?: B, params3?: C, params4?: D, params5?: E, params6?: F): Promise<void>
}

export declare interface HookServiceFilter<T = any, A = any, B = any, C = any, D = any, E = any, F = any> {
  handle(param: T, params1?: A, params2?: B, params3?: C, params4?: D, params5?: E, params6?: F): Promise<T>
}

export const AddAction = (event: string, namespace?: string, priority = 10): MethodDecorator => {
  namespace = namespace || 'default'
  const decoratorFactory = (target: object, key?: any, descriptor?: any) => {
    extendArrayMetadata(HOOK_ACTION_METADATA, [event, namespace, priority], descriptor.value)
    return descriptor
  }
  decoratorFactory.KEY = HOOK_ACTION_METADATA
  return decoratorFactory
}

export const AddFilter = (event: string, namespace?: string, priority = 10): MethodDecorator => {
  namespace = namespace || 'default'
  const decoratorFactory = (target: object, key?: any, descriptor?: any) => {
    extendArrayMetadata(HOOK_FILTER_METADATA, [event, namespace, priority], descriptor.value)
    return descriptor
  }
  decoratorFactory.KEY = HOOK_FILTER_METADATA
  return decoratorFactory
}
