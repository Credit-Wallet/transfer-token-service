import { Injectable } from '@nestjs/common'
import * as momentTimezone from 'moment-timezone'

@Injectable()
export class MomentService {
  moment(): momentTimezone.Moment {
    return momentTimezone.tz('UTC')
  }

  parse(inp?: momentTimezone.MomentInput, format?: momentTimezone.MomentFormatSpecification, language?: string) {
    return momentTimezone(inp, format, language).tz('UTC')
  }

  date(): Date {
    return this.moment().toDate()
  }

  unix(param: number) {
    return momentTimezone.unix(param).tz('UTC')
  }
}
