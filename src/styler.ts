import {
  composeAlignContent,
  composeAlignItems,
  composeAlignSelf,
  composeBackgroundColor,
  composeBorderColor,
  composeBorderRadius,
  composeBorderWidth,
  composeColor,
  composeFlex,
  composeFont,
  composeJustifyContent,
  composeMargin,
  composeOverflow,
  composePadding,
  composeResizeMode,
  composeSizing,
  composeTextAlign,
} from './composer'
import { EFontWeight } from './enum'
import type { ITheme, TPlatformOS, TStyler } from './types'
import { capitalize, extract, merge } from './utils'

/**
 * ########## ALIGN CONTENT STYLES ##########
 */

export const alignContentStyles: TStyler = (props) => {
  let style = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key.startsWith('content-'))
        style = merge(composeAlignContent(key), style)
    }
    if (typeof value === 'string') {
      if (key === 'content') style = merge({ alignContent: value }, style)
    }
  })
  return style
}

/**
 * ########## ALIGN ITEMS STYLES ##########
 */

export const alignItemsStyles: TStyler = (props) => {
  let style = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key.startsWith('items-')) style = merge(composeAlignItems(key), style)
    }
    if (typeof value === 'string') {
      if (key === 'items') style = merge({ alignItems: value }, style)
    }
  })
  return style
}

/**
 * ########## ALIGN SELF STYLES ##########
 */

export const alignSelfStyles: TStyler = (props) => {
  let style = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key.startsWith('self-')) style = merge(composeAlignSelf(key), style)
    }
    if (typeof value === 'string') {
      if (key === 'self') style = merge({ alignSelf: value }, style)
    }
  })
  return style
}

/**
 * ########## BACKGROUND COLOR STYLES ##########
 */

export const backgroundColorStyles: TStyler = (props, theme) => {
  let style = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key.startsWith('bg-'))
        style = merge(composeBackgroundColor(key, theme as ITheme), style)
    }
    if (typeof value === 'string') {
      if (key === 'bg') style = merge({ backgroundColor: value }, style)
    }
  })
  return style
}

/**
 * ########## BORDER STYLES ##########
 */

export const borderStyles: TStyler = (props, theme) => {
  let style = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key.startsWith('bc'))
        style = merge(composeBorderColor(key, theme as ITheme), style)
      if (key.startsWith('br')) style = merge(composeBorderRadius(key), style)
      if (key.startsWith('bs'))
        style = merge({ borderStyle: key.split('-').pop() }, style)
      if (key.startsWith('bw')) style = merge(composeBorderWidth(key), style)
    }
    if (typeof value === 'number') {
      if (key.startsWith('br'))
        style = merge(composeBorderRadius(key, value), style)
      if (key.startsWith('bw'))
        style = merge(composeBorderWidth(key, value), style)
    }
    if (typeof value === 'string') {
      if (key.startsWith('bc'))
        style = merge(composeBorderColor(key, theme as ITheme, value), style)
      if (key === 'bs') style = merge({ borderStyle: value }, style)
    }
  })
  return style
}

/**
 * ########## COLOR STYLES ##########
 */

export const colorStyles: TStyler = (props, theme) => {
  let style = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key.startsWith('color-'))
        style = merge(composeColor(key, theme as ITheme), style)
    }
    if (typeof value === 'string') {
      if (key === 'color') style = merge({ color: value }, style)
    }
  })
  return style
}

/**
 * ########## FLEX ALIGNMENT STYLES ##########
 */

export const flexAlignmentStyles: TStyler = (props) => {
  let style = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key === 'center')
        style = merge({ alignItems: 'center', justifyContent: 'center' }, style)
      if (key.startsWith('items-')) style = merge(composeAlignItems(key), style)
      if (key.startsWith('justify-'))
        style = merge(composeJustifyContent(key), style)
    }
    if (typeof value === 'string') {
      if (key === 'justify') style = merge({ justifyContent: value }, style)
      if (key === 'items') style = merge({ alignItems: value }, style)
    }
  })
  return style
}

/**
 * ########## FLEX DIRECTION STYLES ##########
 */

export const flexDirectionStyles: TStyler = (props) => {
  let style = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key === 'col') style = merge({ flexDirection: 'column' }, style)
      if (key === 'row') style = merge({ flexDirection: 'row' }, style)
    }
  })
  return style
}

/**
 * ########## FLEX GROW STYLES ##########
 */

export const flexGrowStyles: TStyler = (props) => {
  let style = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key === 'grow') style = merge({ flexGrow: 1 }, style)
      if (key === 'grow-0') style = merge({ flexGrow: 0 }, style)
    }
    if (typeof value === 'number') {
      if (key === 'grow') style = merge({ flexGrow: value }, style)
    }
  })
  return style
}

/**
 * ########## FLEX STYLES ##########
 */

export const flexStyles: TStyler = (props) => {
  let style = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key.startsWith('basis-'))
        style = merge(composeSizing('flexBasis', key), style)
      if (key.startsWith('flex-')) style = merge(composeFlex(key), style)
      if (key === 'grow') style = merge({ flexGrow: 1 }, style)
      if (key === 'grow-0') style = merge({ flexGrow: 0 }, style)
      if (key === 'shrink') style = merge({ flexShrink: 1 }, style)
      if (key === 'shrink-0') style = merge({ flexShrink: 0 }, style)
    }
    if (typeof value === 'number' || typeof value === 'string') {
      if (key === 'basis') style = merge({ flexBasis: value }, style)
    }
    if (typeof value === 'number') {
      if (key === 'flex') style = merge({ flex: value }, style)
      if (key === 'grow') style = merge({ flexGrow: value }, style)
      if (key === 'shrink') style = merge({ flexShrink: value }, style)
    }
  })
  return style
}

/**
 * ########## FLEXBOX STYLES ##########
 */

export const flexboxStyles: TStyler = (props) => {
  let style = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key.startsWith('basis-'))
        style = merge(composeSizing('flexBasis', key), style)
      if (key === 'center')
        style = merge({ alignItems: 'center', justifyContent: 'center' }, style)
      if (key === 'col') style = merge({ flexDirection: 'column' }, style)
      if (key.startsWith('content-'))
        style = merge(composeAlignContent(key), style)
      if (key.startsWith('flex-')) style = merge(composeFlex(key), style)
      if (key === 'grow') style = merge({ flexGrow: 1 }, style)
      if (key === 'grow-0') style = merge({ flexGrow: 0 }, style)
      if (key === 'shrink') style = merge({ flexShrink: 1 }, style)
      if (key === 'shrink-0') style = merge({ flexShrink: 0 }, style)
      if (key.startsWith('items-')) style = merge(composeAlignItems(key), style)
      if (key.startsWith('justify-'))
        style = merge(composeJustifyContent(key), style)
      if (key === 'row') style = merge({ flexDirection: 'row' }, style)
      if (key.startsWith('self-')) style = merge(composeAlignSelf(key), style)
    }
    if (typeof value === 'number' || typeof value === 'string') {
      if (key === 'basis') style = merge({ flexBasis: value }, style)
    }
    if (typeof value === 'number') {
      if (key === 'flex') style = merge({ flex: value }, style)
      if (key === 'grow') style = merge({ flexGrow: value }, style)
      if (key === 'shrink') style = merge({ flexShrink: value }, style)
    }
    if (typeof value === 'string') {
      if (key === 'content') style = merge({ alignContent: value }, style)
      if (key === 'justify') style = merge({ justifyContent: value }, style)
      if (key === 'items') style = merge({ alignItems: value }, style)
      if (key === 'self') style = merge({ alignSelf: value }, style)
    }
  })
  return style
}

/**
 * ########## FONT STYLES ##########
 */

export const fontStyles: TStyler = (props, os) => {
  let style = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key === 'bold')
        style = merge(
          composeFont(
            props.font,
            EFontWeight.Bold,
            props.italic,
            os as TPlatformOS
          ),
          style
        )
      if (key === 'italic')
        style = merge(
          composeFont(
            props.font,
            props.bold ? EFontWeight.Bold : props.weight,
            true,
            os as TPlatformOS
          ),
          style
        )
      if (key.startsWith('size-'))
        style = merge({ fontSize: extract(key) }, style)
      if (key.startsWith('weight-'))
        style = merge(
          composeFont(
            props.font,
            props.bold ? EFontWeight.Bold : capitalize(key),
            props.italic,
            os as TPlatformOS
          ),
          style
        )
    }
    if (typeof value === 'number') {
      if (key === 'size') style = merge({ fontSize: value }, style)
    }
    if (typeof value === 'string') {
      if (key === 'font')
        style = merge(
          composeFont(
            value,
            props.bold ? EFontWeight.Bold : capitalize(props.weight),
            props.italic,
            os as TPlatformOS
          ),
          style
        )
    }
  })
  return style
}

/**
 * ########## FONT SIZE STYLES ##########
 */

export const fontSizeStyles: TStyler = (props) => {
  let style = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key.startsWith('size-'))
        style = merge({ fontSize: extract(key) }, style)
    }
    if (typeof value === 'number') {
      if (key === 'size') style = merge({ fontSize: value }, style)
    }
  })
  return style
}

/**
 * ########## FONT STYLE STYLES ##########
 */

export const fontStyleStyles: TStyler = (props, os) => {
  let style = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key === 'italic')
        style = merge(
          composeFont(
            props.font,
            props.bold ? EFontWeight.Bold : props.weight,
            true,
            os as TPlatformOS
          ),
          style
        )
    }
  })
  return style
}

/**
 * ########## FONT WEIGHT STYLES ##########
 */

export const fontWeightStyles: TStyler = (props, os) => {
  let style = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key === 'bold')
        style = merge(
          composeFont(
            props.font,
            EFontWeight.Bold,
            props.italic,
            os as TPlatformOS
          ),
          style
        )
      if (key.startsWith('weight-'))
        style = merge(
          composeFont(
            props.font,
            props.bold ? EFontWeight.Bold : capitalize(key),
            props.italic,
            os as TPlatformOS
          ),
          style
        )
    }
  })
  return style
}

/**
 * ########## JUSTIFY CONTENT STYLES ##########
 */

export const justifyContentStyles: TStyler = (props) => {
  let style = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key.startsWith('justify-'))
        style = merge(composeJustifyContent(key), style)
    }
    if (typeof value === 'string') {
      if (key === 'justify') style = merge({ justifyContent: value }, style)
    }
  })
  return style
}

/**
 * ########## MARGIN STYLES ##########
 */

export const marginStyles: TStyler = (props) => {
  let style = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key.startsWith('m')) style = merge(composeMargin(key), style)
    }
    if (typeof value === 'number') {
      if (key.startsWith('m')) style = merge(composeMargin(key, value), style)
    }
  })
  return style
}

/**
 * ########## OVERFLOW STYLES ##########
 */

export const overflowStyles: TStyler = (props) => {
  let style = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key.startsWith('ovf-')) style = merge(composeOverflow(key), style)
    }
    if (typeof value === 'string') {
      if (key === 'ovf') {
        style = merge({ overflow: value }, style)
      }
    }
  })
  return style
}

/**
 * ########## PADDING STYLES ##########
 */

export const paddingStyles: TStyler = (props) => {
  let style = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key.startsWith('p')) style = merge(composePadding(key), style)
    }
    if (typeof value === 'number') {
      if (key.startsWith('p')) style = merge(composePadding(key, value), style)
    }
  })
  return style
}

/**
 * ########## POSITION STYLES ##########
 */

export const positionStyles: TStyler = (props) => {
  let style: any = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key === 'absolute') style.position = 'absolute'
      if (key === 'absolute-0')
        style = merge(
          { position: 'absolute', bottom: 0, left: 0, right: 0, top: 0 },
          style
        )
      if (key.startsWith('bottom-')) style.bottom = extract(key)
      if (key.startsWith('left-')) style.left = extract(key)
      if (key === 'relative') style.position = 'relative'
      if (key.startsWith('right-')) style.right = extract(key)
      if (key.startsWith('top-')) style.top = extract(key)
      if (key.startsWith('z-')) style.zIndex = extract(key)
    }
    if (typeof value === 'number') {
      if (key === 'absolute' && value === 0)
        style = merge(
          { position: 'absolute', bottom: 0, left: 0, right: 0, top: 0 },
          style
        )
      if (key === 'bottom') style.bottom = value
      if (key === 'left') style.left = value
      if (key === 'right') style.right = value
      if (key === 'top') style.top = value
      if (key === 'z') style.zIndex = value
    }
  })
  return style
}

/**
 * ########## RESIZE MODE STYLES ##########
 */

// TODO - implement resize mode
export const resizeModeStyles: TStyler = (props) => {
  let style: any = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      style = merge(composeResizeMode(key), style)
    }
    if (typeof value === 'string') {
      if (key === 'resize') {
        style.resizeMode = value
      }
    }
  })
  return style
}

/**
 * ########## SIZING STYLES ##########
 */

export const sizingStyles: TStyler = (props) => {
  let style = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key.startsWith('h-'))
        style = merge(composeSizing('height', key), style)
      if (key.startsWith('maxh-'))
        style = merge({ maxHeight: extract(key) }, style)
      if (key.startsWith('maxw-'))
        style = merge({ maxWidth: extract(key) }, style)
      if (key.startsWith('minh-'))
        style = merge({ minHeight: extract(key) }, style)
      if (key.startsWith('minw-'))
        style = merge({ minWidth: extract(key) }, style)
      if (key.startsWith('w-'))
        style = merge(composeSizing('width', key), style)
    }
    if (typeof value === 'number' || typeof value === 'string') {
      if (key === 'h') style = merge({ height: value }, style)
      if (key === 'maxh') style = merge({ maxHeight: value }, style)
      if (key === 'maxw') style = merge({ maxWidth: value }, style)
      if (key === 'minh') style = merge({ minHeight: value }, style)
      if (key === 'minw') style = merge({ minWidth: value }, style)
      if (key === 'w') style = merge({ width: value }, style)
    }
  })
  return style
}

/**
 * ########## SPACING STYLES ##########
 */

export const spacingStyles: TStyler = (props) => {
  let style = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key.startsWith('m')) style = merge(composeMargin(key), style)
      if (key.startsWith('p')) style = merge(composePadding(key), style)
    }
    if (typeof value === 'number') {
      if (key.startsWith('m')) style = merge(composeMargin(key, value), style)
      if (key.startsWith('p')) style = merge(composePadding(key, value), style)
    }
  })
  return style
}

/**
 * ########## TEXT ALIGN STYLES ##########
 */

export const textAlignStyles: TStyler = (props) => {
  let style = {}
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'boolean') {
      if (key.startsWith('align-')) style = merge(composeTextAlign(key), style)
    }
    if (typeof value === 'string') {
      if (key === 'align') style = merge({ textAlign: value }, style)
    }
  })
  return style
}
