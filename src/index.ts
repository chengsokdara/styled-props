import type { ITheme, TElevation, TPlatformOS, TStyler } from './types'
import { alphaShadow, merge, shadows } from './utils'

/**
 * ========== INJECT STYLES ==========
 */

export const injectStyles = <P>(
  injectors: TStyler[],
  props: P,
  options?: ITheme | TPlatformOS
) => {
  let style = {}
  for (let i = 0; i < injectors.length; i++) {
    const injector = injectors[i]
    style = merge(injector!(props, options), style)
  }
  return style
}

export const injectShadow = (
  shadow: TElevation,
  color?: string,
  theme?: ITheme
) => {
  if (shadow <= 0 || shadow > 5) return {}
  return {
    distance: shadows[shadow]![2]! + 6,
    endColor: `${color ?? theme?.colors?.primary ?? '000000'}00`,
    startColor: `${color ?? theme?.colors?.primary ?? '000000'}${alphaShadow(
      shadow
    )}`,
  }
}

export const injectShadowNative = (elevation: TElevation, theme?: ITheme) => {
  if (elevation <= 0 || elevation > 5) return {}
  return {
    elevation,
    shadowColor: theme?.colors?.primary ?? '#000000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: shadows[elevation]![1]! + 0.5,
    shadowRadius: shadows[elevation]![2]! + 2,
  }
}

export * from './context'
export * from './enum'
export * from './styler'
export * from './types'
export * from './utils'
