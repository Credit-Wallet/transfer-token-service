import { uniq } from 'lodash'
import { _Hooks } from './createHooks'

function createRunHook(hooks: _Hooks, storeKey: string, returnFirstArg = false) {
  return async function runHooks(hookName: string, ...args: any) {
    const hooksStore = hooks[storeKey]

    if (!hooksStore[hookName]) {
      hooksStore[hookName] = {
        handlers: [],
        runs: 0
      }
    }

    hooksStore[hookName].runs++

    let handlers = hooksStore[hookName].handlers

    // The following code is stripped from production builds.
    if ('production' !== process.env.NODE_ENV) {
      // Handle any 'all' hooks registered.
      if ('hookAdded' !== hookName && hooksStore.all) {
        handlers.push(...hooksStore.all.handlers)
      }
    }

    // console.log(handlers)

    if (!handlers || !handlers.length) {
      return returnFirstArg ? args[0] : undefined
    }

    handlers = uniq(handlers)
    handlers.sort((a: any, b: any) => a.priority - b.priority)

    const hookInfo = {
      name: hookName,
      currentIndex: 0
    }

    hooksStore.__current.push(hookInfo)

    while (hookInfo.currentIndex < handlers.length) {
      const handler = handlers[hookInfo.currentIndex]

      const result = await handler.callback.apply(null, args)
      if (returnFirstArg) {
        args[0] = result
      }

      hookInfo.currentIndex++
    }

    hooksStore.__current.pop()

    if (returnFirstArg) {
      return args[0]
    }

    return undefined
  }
}

export default createRunHook
