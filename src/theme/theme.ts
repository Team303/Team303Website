import colors from './colors'

export type Gradient = `linear-gradient(90deg, ${string}, ${string})`

export type HexColor = string

export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'

export type FontWeight = 'extraLight' | 'book' | 'medium' | 'demi' | 'bold'

export type Color = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'blurple' | 'patreon'

export interface Theme {
    textPrimary: HexColor
    textSecondary: HexColor

    backgroundPrimary: HexColor
    backgroundSecondary: HexColor
    backgroundTertiary: HexColor
    backgroundStroke: HexColor

    primary: HexColor
    secondary: HexColor
    accent: HexColor

    white: HexColor
    offWhite: HexColor
    lightGray: HexColor
    silverGray: HexColor
    softGray: HexColor
    midGray: HexColor
    dimGray: HexColor
    darkGray: HexColor
    charcoalGray: HexColor
    darkerGray: HexColor
    deepGray: HexColor

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
    extraLight: '200',
    book: '300',
    medium: '500',
    demi: '600',
    bold: '700',
}

export const lightTheme = {
    ...colors,

    textPrimary: colors.white,
    textSecondary: colors.midGray,

    backgroundPrimary: colors.deepGray,
    backgroundSecondary: colors.darkerGray,
    backgroundTertiary: colors.charcoalGray,
    backgroundStroke: colors.charcoalGray,

    primary: colors.azureBlue,
    secondary: colors.capriBlue,
    accent: colors.limeGreen,

    textSizes,
    fontWeights,
}
