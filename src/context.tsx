import * as React from 'react'

import type {
  ICosmotizeContext,
  ICosmotizeProviderProps,
  ITheme,
} from './types'

/**
 * ========== CONSTANTS ==========
 */

const defaultTheme: ITheme = {
  dark: false,
  colors: {
    primary: 'tomato',
    background: 'gainsboro',
    card: 'white',
    text: 'black',
    border: 'silver',
    notification: 'black',
    // custom colors
    danger: 'crimson',
    info: 'royalblue',
    warning: 'moccasin',
  },
}

/**
 * ========== COSMOTIZE CONTEXT ==========
 */

const CosmotizeContext = React.createContext<ICosmotizeContext>({
  theme: undefined,
})

const CosmotizeProvider = ({ children, theme }: ICosmotizeProviderProps) => {
  return (
    <CosmotizeContext.Provider value={{ theme }}>
      {children}
    </CosmotizeContext.Provider>
  )
}

const useTheme = () => React.useContext(CosmotizeContext).theme ?? defaultTheme

export { CosmotizeContext, CosmotizeProvider, defaultTheme, useTheme }
