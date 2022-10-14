import colors from './colors'

export type Gradient = `linear-gradient(90deg, ${string}, ${string})`

export type HexColor = string

export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'

export type FontWeight =
    | 'ultralight'
    | 'extralight'
    | 'thin'
    | 'light'
    | 'regular'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'black'
    
export type Color = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'blurple' | 'patreon'

export type Theme = typeof theme & typeof colors & {
    textSizes: {
        [key in TextSize]: string
    }

    fontWeights: {
        [key in FontWeight]: string
    }
}

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}

const textSizes = {
    xs: '.75em',
    sm: '.875em',
    tiny: '.875em',
    base: '1em',
    lg: '1.125em',
    xl: '1.25em',
    '2xl': '1.5em',
    '3xl': '1.875em',
    '4xl': '2.25em',
    '5xl': '3em',
    '6xl': '4em',
    '7xl': '5em',
}

const fontWeights = {
    ultralight: '100',
    extralight: '200',
    thin: '300',
    light: '400',
    regular: '500',
    medium: '600',
    semibold: '700',
    bold: '800',
    black: '900',
}

export const theme = {
    ...colors,

    textPrimary: colors.white,
    textSecondary: colors.teal100,
    textTertiary: colors.teal300,

    backgroundPrimary: colors.darkGray,
    backgroundSecondary: colors.midGray,
    backgroundStroke: colors.lightGray,
    
    navBackground: colors.deepGray,

    textSizes,
    fontWeights,
}
