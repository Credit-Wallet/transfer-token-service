import { boolean } from 'boolean'
import { Transform, TransformFnParams } from 'class-transformer'

export function ToNumber(): (target: any, key: string) => void {
  return Transform((params: TransformFnParams) => {
    if (params.value == null) return params.value
    return Number(params.value)
  })
}

export function ToString(): (target: any, key: string) => void {
  return Transform((params: TransformFnParams) => {
    if (params.value == null) return params.value
    return params.value.toString()
  })
}

export function ToBoolean(): (target: any, key: string) => void {
  return Transform((params: TransformFnParams) => {
    if (params.value == null) return params.value
    return boolean(params.value)
  })
}
