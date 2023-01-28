import type { TPlatformOS } from './types'
import { merge } from './utils'

/**
 * ========== INJECT STYLES ==========
 */

export const injectStyles = <P>(
  injectors: Function[],
  props: P,
  theme?: any,
  os?: TPlatformOS
) => {
  let style = {}
  for (let i = 0; i < injectors.length; i++) {
    const injector = injectors[i]
    style = merge(injector!(props, theme, os), style)
  }
  return style
}

export * from './context'
export * from './enum'
export * from './styler'
export * from './types'
export * from './utils'
