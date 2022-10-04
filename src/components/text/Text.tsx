import { FC } from 'react'
import styled, { css, FlattenInterpolation, ThemeProps } from 'styled-components'
import { TextSize, FontWeight } from '../../theme/theme'

type TextColor = 'primary' | 'secondary' | 'white' | 'theme'

export interface TextProps {
    children?: React.ReactNode

    size?: TextSize
    weight?: FontWeight
    color?: TextColor | 'inherit'

    italic?: boolean
    underline?: boolean
    center?: boolean

    inline?: boolean
    as?: string
    margin?: boolean
}

const Text: FC<TextProps> = props => {
    const { children, inline } = props

    const Component = inline ? StyledSpan : StyledParagraph
    const styles = createTextStyles(props)

    return (
        //@ts-ignore
        <Component styles={styles} as={props.as}>
            {children}
        </Component>
    )
}

const StyledSpan = styled.span<{
    styles: FlattenInterpolation<ThemeProps<any>>
}>`
    ${props => props.styles}
`

const StyledParagraph = styled.p<{
    styles: FlattenInterpolation<ThemeProps<any>>
}>`
    ${props => props.styles}
`

export const createTextStyles = ({ size, weight, italic, underline, center, margin, color }: TextProps) => {
    return css`
        ${italic &&
        css`
            font-style: italic;
        `}
        ${underline &&
        css`
            text-decoration: underline;
        `}
    ${center &&
        css`
            text-align: center;
        `}
    ${margin &&
        css`
            margin: 0.5em 0;
        `}
    ${props => css`
            color: ${color === 'inherit'
                ? 'inherit'
                : color === 'white'
                ? 'white'
                : color === 'theme'
                ? props.theme.primary
                : color === 'secondary'
                ? props.theme.textSecondary
                : props.theme.textPrimary};
        `}
    ${props => css`
            font-size: ${props.theme.textSizes[size || 'base']};
        `}
    ${props => css`
            font-weight: ${props.theme.fontWeights[weight || 'medium']};
        `}
    `
}

export default Text
