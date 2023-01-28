import {
  EAlignContent,
  EAlignItems,
  EAlignSelf,
  EBorderColor,
  EBorderRadius,
  EBorderWidth,
  EFontWeight,
  EJustifyContent,
  EMargins,
  EOverflow,
  EPaddings,
  EResizeMode,
  ETextAlign,
} from './enum'
import type { ITheme, TPlatformOS } from './types'
import { extract } from './utils'

/**
 * ########## ALIGN CONTENT ##########
 */

export const composeAlignContent = (prop: string) => {
  const style: any = {}
  const value = prop.split('-').pop()
  if (value && Object.values(EAlignContent).includes(value as EAlignContent)) {
    if (value === 'start' || value === 'end') {
      style.alignContent = `flex-${value}`
    } else if (
      value === 'around' ||
      value === 'between' ||
      value === 'evenly'
    ) {
      style.alignContent = `space-${value}`
    } else {
      style.alignContent = value
    }
  }
  return style
}

/**
 * ########## ALIGN ITEMS ##########
 */

export const composeAlignItems = (prop: string) => {
  const style: any = {}
  const value = prop.split('-').pop()
  if (value && Object.values(EAlignItems).includes(value as EAlignItems)) {
    if (value === 'start' || value === 'end') {
      style.alignItems = `flex-${value}`
    } else {
      style.alignItems = value
    }
  }
  return style
}

/**
 * ########## ALIGN SELF ##########
 */

export const composeAlignSelf = (prop: string) => {
  const style: any = {}
  const value = prop.split('-').pop()
  if (value && Object.values(EAlignSelf).includes(value as EAlignSelf)) {
    if (value === 'start' || value === 'end') {
      style.alignSelf = `flex-${value}`
    } else {
      style.alignSelf = value
    }
  }
  return style
}

/**
 * ########## BACKGROUND COLOR ##########
 */

export const composeBackgroundColor = (prop: string, theme?: ITheme) => {
  const style: any = {}
  const value = prop.split('-').pop()
  if (value && theme && Object.keys(theme.colors).includes(value)) {
    Object.entries(theme.colors).forEach(([key]) => {
      if (value.startsWith(key)) {
        style.backgroundColor = theme.colors[key as keyof ITheme['colors']]
      }
    })
  } else {
    style.backgroundColor = `#${value}`
  }
  return style
}

/**
 * ########## BORDER ##########
 */

export const composeBorderColor = (
  prop: string,
  theme?: ITheme,
  value?: string
) => {
  const style: any = {}
  if (value) {
    Object.entries(EBorderColor).forEach(([key, val]) => {
      if (prop === key) {
        style[val] = value
      }
    })
  } else {
    const name = prop.substring(0, prop.lastIndexOf('-'))
    Object.entries(EBorderColor).forEach(([key, val]) => {
      if (name === key) {
        const _value = prop.split('-').pop()
        if (_value && theme && Object.keys(theme.colors).includes(_value)) {
          Object.keys(theme.colors).forEach((_key) => {
            if (_key === _value) {
              style[val] = theme.colors[_key as keyof ITheme['colors']]
            }
          })
        } else {
          style[val] = `#${_value}`
        }
      }
    })
  }
  return style
}

/**
 * ########## BORDER RADIUS ##########
 */

export const composeBorderRadius = (prop: string, value?: number) => {
  const style: any = {}
  if (value) {
    Object.entries(EBorderRadius).forEach(([key, val]) => {
      if (prop === key) {
        switch (key) {
          case 'brb':
          case 'brl':
          case 'brr':
          case 'brt':
            style[val.split('-').shift()!] = value
            style[val.split('-').pop()!] = value
            break
          default:
            style[val] = value
        }
      }
    })
  } else {
    const name = prop.substring(0, prop.lastIndexOf('-'))
    Object.entries(EBorderRadius).forEach(([key, val]) => {
      if (name === key) {
        switch (key) {
          case 'brb-':
          case 'brl-':
          case 'brr-':
          case 'brt-':
            style[val.split('-').shift()!] = extract(prop)
            style[val.split('-').pop()!] = extract(prop)
            break
          default:
            style[val] = extract(prop)
        }
      }
    })
  }
  return style
}

/**
 * ########## BORDER WIDTH ##########
 */

export const composeBorderWidth = (prop: string, value?: number) => {
  const style: any = {}
  if (value) {
    Object.entries(EBorderWidth).forEach(([key, val]) => {
      if (prop === key) {
        style[val] = value
      }
    })
  } else {
    const name = prop.substring(0, prop.lastIndexOf('-'))
    Object.entries(EBorderWidth).forEach(([key, val]) => {
      if (name === key) {
        style[val] = extract(prop)
      }
    })
  }
  return style
}

/**
 * ########## COLOR ##########
 */

export const composeColor = (prop: string, theme?: ITheme) => {
  const style: any = {}
  const value = prop.split('-').pop()
  if (value && theme && Object.keys(theme.colors).includes(value)) {
    Object.entries(theme.colors).forEach(([key]) => {
      if (value.startsWith(key)) {
        style.color = theme.colors[key as keyof ITheme['colors']]
      }
    })
  } else {
    style.color = `#${value}`
  }
  return style
}

/**
 * ########## FLEX ##########
 */

export const composeFlex = (prop: string) => {
  const style: any = {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  }
  const split = prop.split('-')
  if (split[1] === 'wrap') {
    return { flexWrap: 'wrap' }
  } else if (split[1] === 'nowrap') {
    return { flexWrap: 'nowrap' }
  } else if (split[1] === 'reverse') {
    return { flexWrap: 'reverse' }
  } else if (split[1] && split[2] && split[3]) {
    style.flexGrow = Number(split[1])
    style.flexShrink = Number(split[2])
    style.flexBasis = composeFlexBasis(split[3])
  } else if (split[1] && split[2]) {
    style.flexGrow = split[1]
    if (typeof split[2] === 'number') {
      style.flexShrink = Number(split[2])
    }
    if (typeof split[2] === 'string') {
      style.flexBasis = composeFlexBasis(split[2])
    }
  } else if (split[1]?.endsWith('pct')) {
    style.flexBasis = split[1]?.replace('pct', '%')
  } else if (!isNaN(Number(split[1]))) {
    style.flexGrow = Number(split[1])
  }
  return style
}

/**
 * ########## FLEX BASIS ##########
 */

export const composeFlexBasis = (value: string) =>
  value.endsWith('pct') ? value.replace('pct', '%') : value

/**
 * ########## FONT ##########
 */

export const composeFont = (
  family: string | undefined,
  weight: EFontWeight | string = EFontWeight.Regular,
  italic?: boolean,
  os?: TPlatformOS
) => {
  const style: any = {
    fontFamily: 'System',
    fontStyle: 'normal',
    fontWeight: 'normal',
  }
  if (family)
    style.fontFamily = `${family}-${
      italic && weight === EFontWeight.Regular ? '' : weight
    }${italic ? 'Italic' : ''}`
  if (italic) style.fontStyle = os === 'android' ? 'normal' : 'italic'
  if (weight === EFontWeight.Bold)
    style.fontWeight = os === 'android' ? 'normal' : 'bold'
  if (weight === EFontWeight.Light)
    style.fontWeight = os === 'android' ? 'normal' : '300'
  if (weight === EFontWeight.Medium)
    style.fontWeight = os === 'android' ? 'normal' : '500'
  return style
}

/**
 * ########## JUSTIFY CONTENT ##########
 */

export const composeJustifyContent = (prop: string) => {
  const style: any = {}
  const value = prop.split('-').pop()
  if (
    value &&
    Object.values(EJustifyContent).includes(value as EJustifyContent)
  ) {
    if (value === 'start' || value === 'end') {
      style.justifyContent = `flex-${value}`
    } else if (
      value === 'around' ||
      value === 'between' ||
      value === 'evenly'
    ) {
      style.justifyContent = `space-${value}`
    } else {
      style.justifyContent = value
    }
  }
  return style
}

/**
 * ########## MARGIN ##########
 */

export const composeMargin = (prop: string, value?: number) => {
  const style: any = {}
  if (value) {
    Object.entries(EMargins).forEach(([key, variant]) => {
      if (prop === key) style[variant] = value
    })
  } else {
    const name = prop.substring(0, prop.lastIndexOf('-'))
    Object.entries(EMargins).forEach(([key, variant]) => {
      if (name === key) style[variant] = extract(prop)
    })
  }
  return style
}

/**
 * ########## PADDING ##########
 */

export const composePadding = (prop: string, value?: number) => {
  const style: any = {}
  if (value) {
    Object.entries(EPaddings).forEach(([key, variant]) => {
      if (prop === key) style[variant] = value
    })
  } else {
    const name = prop.substring(0, prop.lastIndexOf('-'))
    Object.entries(EPaddings).forEach(([key, variant]) => {
      if (name === key) style[variant] = extract(prop)
    })
  }
  return style
}

/**
 * ########## OVERFLOW ##########
 */

export const composeOverflow = (prop: string) => {
  const style: any = {}
  const value = prop.split('-').pop()
  if (value && Object.values(EOverflow).includes(value as EOverflow)) {
    style.overflow = value
  }
  return style
}

/**
 * ########## RESIZE MODE ##########
 */

export const composeResizeMode = (prop: string) => {
  const style: any = {}
  const value = prop.split('-').pop()
  if (value && Object.values(EResizeMode).includes(value as EResizeMode)) {
    style.resizeMode = value
  }
  return style
}

/**
 * ########## SIZING ##########
 */

export const composeSizing = (name: string, prop: string) => {
  let size: string | number = 'auto'
  const value = prop.split('-').pop()
  if (value?.endsWith('pct')) {
    size = value.replace('pct', '%')
  } else {
    size = Number(value)
  }
  return { [name]: size }
}

/**
 * ########## TEXT ALIGN ##########
 */

export const composeTextAlign = (prop: string) => {
  const style: any = {}
  const value = prop.split('-').pop()
  if (value && Object.values(ETextAlign).includes(value as ETextAlign)) {
    style.textAlign = value
  }
  return style
}
