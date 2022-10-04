import React, { FC } from 'react'
import { createTextStyles, TextProps } from './Text'
import styled, { FlattenInterpolation, ThemeProps } from 'styled-components'

const Code: FC<Omit<TextProps, 'inline' | 'center'>> = props => {
    const { children } = props

    return (
        <StyledCode
            styles={createTextStyles({
                ...props,
            })}>
            {children}
        </StyledCode>
    )
}

const StyledCode = styled.code<{
    styles: FlattenInterpolation<ThemeProps<any>>
}>`
    ${props => props.styles}
    background-color: ${props => props.theme.backgroundSecondary};
    padding: 0 4px;
    border-radius: 0.25rem;
    font-family: monospace;
    display: inline-block;
    border: 1px solid ${props => props.theme.backgroundTertiary};
`

export default Code
