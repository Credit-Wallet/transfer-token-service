/**
 * Internal dependencies
 */
import { _Hooks } from './createHooks'
import validateHookName from './validateHookName'

function createDidHook(hooks: _Hooks, storeKey: string) {
  return function didHook(hookName: string) {
    const hooksStore = hooks[storeKey]

    if (!validateHookName(hookName)) {
      return
    }

    return hooksStore[hookName] && hooksStore[hookName].runs ? hooksStore[hookName].runs : 0
  }
}

export default createDidHook
