import { Type } from '@nestjs/common'
import { OmitType, PickType } from '@nestjs/swagger'
import { Exclude, Expose } from 'class-transformer'

export function RealPickType<T, K extends keyof T>(
  classRef: Type<T>,
  keys: readonly K[]
): Type<Pick<T, (typeof keys)[number]>> {
  const PickTypeClass = PickType(classRef, keys)
  Exclude()(PickTypeClass.prototype)

  keys.forEach((propertyKey) => {
    Expose()(PickTypeClass.prototype, propertyKey as string)
  })
  return PickTypeClass
}

export function RealOmitType<T, K extends keyof T>(
  classRef: Type<T>,
  keys: readonly K[]
): Type<Omit<T, (typeof keys)[number]>> {
  const OmitTypeClass = OmitType(classRef, keys)
  keys.forEach((propertyKey) => {
    Exclude()(OmitTypeClass.prototype, propertyKey as string)
  })
  return OmitTypeClass
}
