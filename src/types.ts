import type {
  EAlignContent,
  EAlignItems,
  EAlignSelf,
  EBorderColor,
  EBorderRadius,
  EBorderStyle,
  EBorderWidth,
  EFontWeight,
  EJustifyContent,
  EMargins,
  EOverflow,
  EPaddings,
  EResizeMode,
  ETextAlign,
} from './enum'

/**
 * STYLES PROPS ==========>
 */

export type TAlignContentStyleProps = {
  [K in keyof typeof EAlignContent as `content-${K}`]?: boolean
}

export type TAlignItemsStyleProps = {
  [K in keyof typeof EAlignItems as `items-${K}`]?: boolean
}

export type TAlignSelfStyleProps = {
  [K in keyof typeof EAlignSelf as `self-${K}`]?: boolean
}

export type TBackgroundColorStyleProps = {
  // Background Color
  bg?: string
  // Background Color + color name or hex code
  'bg-'?: boolean
} & {
  [K in keyof IColors as `bg-${K}`]?: boolean
}

export type TBorderStyleProps = {} & TBorderColorStyleProps &
  TBorderRadiusStyleProps &
  TBorderStyleStyleProps &
  TBorderWidthStyleProps

export type TBorderColorStyleProps = {
  [K in keyof typeof EBorderColor as `${K}-${keyof IColors}`]?: boolean
} & {
  [K in keyof typeof EBorderColor]?: string
}

export type TBorderRadiusStyleProps = {
  [K in keyof typeof EBorderRadius as `${K}-`]?: boolean
} & {
  [K in keyof typeof EBorderRadius]?: number
}

export type TBorderStyleStyleProps = { bs?: string } & {
  [K in keyof typeof EBorderStyle as `bs-${K}`]?: boolean
}

export type TBorderWidthStyleProps = {
  [K in keyof typeof EBorderWidth as `${K}-`]?: boolean
} & {
  [K in keyof typeof EBorderWidth]?: number
}

export type TColorStyleProps = {
  // Text Color
  color?: string
  // Text Color + color name or hex code
  'color-'?: boolean
} & {
  [K in keyof IColors as `color-${K}`]?: boolean
}

export type TFlexAlignmentStyleProps = {
  // Align Items Center & Justify Content Center
  center?: boolean
} & TAlignItemsStyleProps &
  TJustifyContentStyleProps

export type TFlexDirectionStyleProps = {
  // Flex Direction Column
  col?: boolean
  // Flex Direction Row
  row?: boolean
}

export type TFlexStyleProps = {
  // Flex Basis = number or percentage string
  basis?: number | string
  // Flex Basis + number or number + pct
  'basis-'?: boolean
  flex?: number
  // Flex + number
  'flex-'?: boolean
  // Flex Wrap = nowrap
  'flex-nowrap'?: boolean
  // Flex Wrap = reverse
  'flex-reverse'?: boolean
  // Flex Wrap = wrap
  'flex-wrap'?: boolean
  // Flex Grow = 1 or number
  grow?: boolean | number
  // Flex Grow = 0
  'grow-0'?: boolean
  // Flex Shrink = 1 or number
  shrink?: boolean | number
  // FLex Shrink = 0
  'shrink-0'?: boolean
}

export type TFlexboxStyleProps = {} & TAlignContentStyleProps &
  TAlignSelfStyleProps &
  TFlexAlignmentStyleProps &
  TFlexDirectionStyleProps &
  TFlexStyleProps

export type TFontStyleProps = {
  // Font Weight = Bold
  bold?: boolean
  // Font Family
  font?: string
  // Font Style = Italic
  italic?: boolean
  // Font Size
  size?: number
  // Font Size + number
  'size-'?: boolean
  // Font Weight
  weight?: string
} & TFontWeightStyleProps

export type TFontWeightStyleProps = {
  [K in keyof typeof EFontWeight as `weight-${Lowercase<K>}`]?: boolean
}

export type TJustifyContentStyleProps = {
  [K in keyof typeof EJustifyContent as `justify-${K}`]?: boolean
}

export type TMarginStyleProps = MapEnum<typeof EMargins> &
  MapDynamicEnum<typeof EMargins, number>

export type TOverflowStyleProps = {
  ovf?: string
} & {
  [K in keyof typeof EOverflow as `ovf-${K}`]?: boolean
}

export type TPaddingStyleProps = MapEnum<typeof EPaddings> &
  MapDynamicEnum<typeof EPaddings, number>

export type TPositionStyleProps = {
  // Position Absolute
  absolute?: boolean
  // Position Absolute + Left 0 + Top 0 + Right 0 + Bottom 0
  'absolute-0'?: boolean
  // Bottom position
  bottom?: number
  // Bottom + number
  'bottom-'?: boolean
  // Left position
  left?: number
  // Left + number
  'left-'?: boolean
  // Position relative
  relative?: boolean
  // Right position
  right?: number
  // Right + number
  'right-'?: boolean
  // Top position
  top?: number
  // Top + number
  'top-'?: boolean
  // zIndex
  z?: number
  // zIndex + number
  'z-'?: boolean
}

export type TResizeModeProps = { resize?: string } & {
  [K in keyof typeof EResizeMode as `resize-${K}`]?: boolean
}

export type TSizingStyleProps = {
  // Height
  h?: number | string
  // Height + number or percentage
  'h-'?: boolean
  // Max Height
  maxh?: number | string
  // Max Height + number or percentage
  'maxh-'?: boolean
  // Max Width
  maxw?: number | string
  // Max Width + number or percentage
  'maxw-'?: boolean
  // Min Height
  minh?: number | string
  // Min Height + number or percentage
  'minh-'?: boolean
  // Min Width
  minw?: number | string
  // Min Width + number or percentage
  'minw-'?: boolean
  // Width
  w?: number | string
  // Width + number or percentage
  'w-'?: boolean
}

export type TSpacingStyleProps = {} & TMarginStyleProps & TPaddingStyleProps

export type TTextAlignStyleProps = {
  [K in keyof typeof ETextAlign as `align-${K}`]?: boolean
}

/**
 * FUNCTION TYPE ===========>
 */
export type TStyler = (props: any, options?: ITheme | TPlatformOS) => object

/**
 * LITERAL TYPE ===========>
 */

export type TElevation = 0 | 1 | 2 | 3 | 4 | 5

export type TPlatformOS = 'android' | 'ios' | 'windows' | 'macos' | 'web'

/**
 * THEME TYPE ===========>
 */

export interface ITheme {
  dark: boolean
  colors: IColors
}

export interface IColors {
  primary: string
  background: string
  card: string
  text: string
  border: string
  notification: string
  // custom colors
  danger?: string
  info?: string
  warning?: string
}

/**
 * CONTEXT TYPE ===========>
 */

export interface ICosmotizeContext {
  theme?: ITheme
}

export interface ICosmotizeProviderProps {
  children: JSX.Element
  theme?: ITheme
}

/**
 * GENRIC TYPE ===========>
 */

type MapEnum<T> = {
  [K in keyof T & string as `${K}-`]?: boolean
}

type MapDynamicEnum<T, V> = {
  [K in keyof T]?: V
}
