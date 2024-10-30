import { Logger } from '@nestjs/common'
import { createHooks } from './packages'
import { _Hooks } from './packages/createHooks'

export class HookService {
  private static _hooks: _Hooks
  private static _instance: HookService
  private logger = new Logger(HookService.name)

  constructor() {
    if (!HookService._hooks) {
      HookService._hooks = createHooks()
    }
  }

  static get instance() {
    if (!HookService._instance) HookService._instance = new HookService()
    return HookService._instance
  }

  get hooks() {
    return HookService._hooks
  }

  async doAction(actionName: string, ...args: any[]) {
    await this.hooks.doAction(actionName, ...args)
  }

  addAction(actionName: string, namespace: string, callback: (...args: any[]) => void, priority = 10) {
    this.hooks.addAction(actionName, namespace, callback, priority)
  }

  removeAction(actionName: string, namespace: string) {
    this.hooks.removeAction(actionName, namespace)
  }

  hasAction(actionName: string, namespace: string) {
    return this.hooks.hasAction(actionName, namespace)
  }

  removeAllActions(actionName: string) {
    this.hooks.removeAllActions(actionName)
  }

  async applyFilters<T>(filterName: string, value: T, ...args: any[]): Promise<T> {
    return await this.hooks.applyFilters(filterName, ...[value, ...args])
  }

  addFilter(filterName: string, namespace: string, callback: (...args: any[]) => void, priority = 10) {
    this.hooks.addFilter(filterName, namespace, callback, priority)
  }

  removeFilter(filterName: string, namespace: string) {
    this.hooks.removeFilter(filterName, namespace)
  }

  hasFilter(filterName: string, namespace: string) {
    return this.hooks.hasFilter(filterName, namespace)
  }

  removeAllFilters(filterName: string) {
    this.hooks.removeAllFilters(filterName)
  }
}
