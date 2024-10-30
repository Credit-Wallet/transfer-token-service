import { DynamicModule, Module } from '@nestjs/common'
import { DiscoveryModule } from '@nestjs/core'
import { HookService } from './hook.service'
import { EventsMetadataAccessor } from './events-metadata.accessor'
import { EventSubscribersLoader } from './event-subscribers.loader'

@Module({})
export class HookModule {
  static forRoot(): DynamicModule {
    return {
      global: true,
      module: HookModule,
      imports: [DiscoveryModule],
      providers: [
        EventSubscribersLoader,
        EventsMetadataAccessor,
        {
          provide: HookService,
          useValue: HookService.instance
        }
      ],
      exports: [HookService]
    }
  }
}
