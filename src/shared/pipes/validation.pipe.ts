import {
  UnprocessableEntityException,
  ValidationError,
  ValidationPipeOptions,
  ValidationPipe as _ValidationPipe
} from '@nestjs/common'
import { first } from 'lodash'

export const ValidationPipe = (options?: ValidationPipeOptions) =>
  new _ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    forbidUnknownValues: true,
    errorHttpStatusCode: 422,
    ...options,
    exceptionFactory(validationErrors: ValidationError[]) {
      const errors = []
      for (const e of validationErrors) {
        if (!e.constraints) continue

        const error = {
          property: e.property,
          rule: undefined,
          constraints: []
        }
        const rule = first(Object.keys(e.constraints))
        try {
          error.constraints = JSON.parse(e.constraints[rule])
        } catch (_) {
          error.constraints = [e.constraints[rule]]
        }
        error.rule = rule
        errors.push(error)
      }
      return new UnprocessableEntityException({ message: errors })
    }
  })
