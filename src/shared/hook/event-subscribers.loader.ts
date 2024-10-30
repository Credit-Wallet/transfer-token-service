import { Injectable, OnApplicationBootstrap, OnApplicationShutdown } from '@nestjs/common'
import { DiscoveryService, MetadataScanner } from '@nestjs/core'
import { InstanceWrapper } from '@nestjs/core/injector/instance-wrapper'
import { EventsMetadataAccessor } from './events-metadata.accessor'
import { HookService } from './hook.service'

@Injectable()
export class EventSubscribersLoader implements OnApplicationBootstrap, OnApplicationShutdown {
  constructor(
    private readonly discoveryService: DiscoveryService,
    private readonly metadataAccessor: EventsMetadataAccessor,
    private readonly metadataScanner: MetadataScanner
  ) {}

  onApplicationBootstrap() {
    this.loadEventListeners()
  }

  onApplicationShutdown() {
    // this.hookService.removeAllActions()
  }

  loadEventListeners() {
    const providers = this.discoveryService.getProviders()
    const controllers = this.discoveryService.getControllers()
    const lists = [...providers, ...controllers]
    lists
      .filter((wrapper) => wrapper.instance && !wrapper.isAlias)
      .forEach((wrapper: InstanceWrapper) => {
        const { instance, host } = wrapper
        const prototype = Object.getPrototypeOf(instance) || {}
        this.metadataScanner.getAllMethodNames(prototype).forEach((methodKey: string) => {
          this.subscribeToEventActionIfListener(instance, methodKey)
          this.subscribeToEventFilterIfListener(instance, methodKey)
        })
      })
  }

  private subscribeToEventActionIfListener(instance: InstanceWrapper, methodKey: string) {
    const eventListenerMetadatas = this.metadataAccessor.getEventHandlerMetadataAction(instance[methodKey])
    if (!eventListenerMetadatas) {
      return
    }
    HookService.instance.addAction.apply(HookService.instance, [
      eventListenerMetadatas[0],
      eventListenerMetadatas[1],
      // eslint-disable-next-line prefer-spread
      (...args: unknown[]) => instance[methodKey].apply(instance, args),
      eventListenerMetadatas[2]
    ])
  }

  private subscribeToEventFilterIfListener(instance: InstanceWrapper, methodKey: string) {
    const eventListenerMetadatas = this.metadataAccessor.getEventHandlerMetadataFilter(instance[methodKey])
    if (!eventListenerMetadatas) {
      return
    }
    HookService.instance.addFilter.apply(HookService.instance, [
      eventListenerMetadatas[0],
      eventListenerMetadatas[1],
      // eslint-disable-next-line prefer-spread
      (...args: unknown[]) => instance[methodKey].apply(instance, args),
      eventListenerMetadatas[2]
    ])
  }
}
