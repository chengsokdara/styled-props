/* eslint-disable no-sequences */
import type { ITheme, TElevation } from './types'

/**
 * [shadowOffset.height, shadowOpacity, shadowRadius]
 */
const shadows = [
  [0, 0, 0],
  [1, 0.18, 1.0],
  [1, 0.2, 1.41],
  [1, 0.22, 2.22],
  [2, 0.23, 2.62],
  [2, 0.25, 3.84],
]

function alphaColor(color: string | undefined, percent: number): string {
  if (!color) return '#000000'
  return `${color}${Math.floor(percent * 255)
    .toString(16)
    .toLocaleUpperCase()}`
}

/**
 * Capitalize value
 */
const capitalize = (prop: string) => {
  if (!prop) return
  const value = prop.split('-').pop()!
  return value[0]!.toLocaleUpperCase() + value.slice(1).toLocaleLowerCase()
}

/**
 * Extract value from prop
 */
const extract = (prop: string) => Number(prop.split('-').pop())

/**
 * Merge two object into one
 */
const merge = (merger: object, origin: object) => ({
  ...origin,
  ...merger,
})

const injectShadow = (shadow: TElevation, color?: string, theme?: ITheme) => {
  if (shadow <= 0 || shadow > 5) return {}
  return {
    distance: shadows[shadow]![2]! + 6,
    endColor: `${color ?? theme?.colors?.primary ?? '000000'}00`,
    startColor: `${color ?? theme?.colors?.primary ?? '000000'}${alphaShadow(
      shadow
    )}`,
  }
}

const injectShadowNative = (elevation: TElevation, theme?: ITheme) => {
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

// Omit style properties from array of keys
const omitStyle = (obj: any, ...keys: any[]) => {
  if (!obj) return
  return Object.keys(obj)
    .filter((key) => keys.indexOf(key) < 0)
    .reduce((obj2, key) => ((obj2[key] = obj[key]), obj2), {} as any)
}

// Pick style properties from array of keys
const pickStyle = (obj: any, ...keys: any[]) => {
  if (!obj) return
  return Object.keys(obj)
    .filter((key) => keys.indexOf(key) < 0)
    .reduce((obj2, key) => ((obj2[key] = obj[key]), obj2), {} as any)
}

/**
 * Shade color by percentage
 */
function shadeColor(color: string, percent: number): string {
  return mix('#000', color, percent)
}

/**
 * Tint color by percentage
 */
function tintColor(color: string, percent: number): string {
  return mix('#fff', color, percent)
}

/**
 * ========== PRIVATE FUNCTIONS ==========
 */

function alphaShadow(alpha: number) {
  return Math.floor((shadows[alpha]![1]! + 0.075) * 255)
    .toString(16)
    .toLocaleUpperCase()
}

function decimalToHex(decimalValue: number): string {
  return decimalValue.toString(16)
}

function hexToDecimal(hexValue: string): number {
  return parseInt(hexValue, 16)
}

function lpad(str: string, minLen: number, ch: string): string {
  ch = ch || ' '
  return str.length < minLen ? repeat(ch, minLen - str.length) + str : str
}

function mix(
  originalBaseColor: string,
  originalColorToAdjust: string,
  weight = 1
) {
  const color: string[] = []

  const baseColor = normalizeColor(originalBaseColor)
  const colorToAdjust = normalizeColor(originalColorToAdjust)

  const colorCharacters = colorToAdjust.length - 1

  for (let i = 0; i <= colorCharacters; i += 2) {
    const baseColorDecimal = hexToDecimal(baseColor.slice(i, i + 2))
    const colorToAdjustDecimal = hexToDecimal(colorToAdjust.slice(i, i + 2))

    const value = lpad(
      decimalToHex(
        Math.round(
          colorToAdjustDecimal +
            (baseColorDecimal - colorToAdjustDecimal) * ((weight * 100) / 100)
        )
      ),
      2,
      '0'
    )

    color.push(value)
  }
  const hexColor = color.join('')
  return `#${hexColor}`
}

function normalizeColor(originalColor: string): string {
  const color = originalColor.replace(/^#/, '')
  if (color.length === 3) {
    return color[0]! + color[0] + color[1] + color[1] + color[2] + color[2]
  }
  return color
}

function repeat(str: string, n: number): string {
  return new Array(n + 1).join(str)
}

export {
  alphaColor,
  capitalize,
  extract,
  merge,
  injectShadow,
  injectShadowNative,
  omitStyle,
  pickStyle,
  shadeColor,
  tintColor,
}
