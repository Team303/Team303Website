import React, { FC } from 'react'
import NextLink from 'next/link'
import { createTextStyles, TextProps } from './Text'
import styled, { FlattenInterpolation, ThemeProps } from 'styled-components'

const Link: FC<
    Omit<
        TextProps & {
            url: string
            newTab?: boolean
        },
        'inline' | 'center'
    >
> = props => {
    const { url, newTab, children } = props

    return (
        <NextLink href={url} passHref>
            <StyledAnchor
                styles={createTextStyles({
                    ...props,
                    underline: props.underline ?? true,
                })}
                target={newTab ? '_blank' : undefined}>
                {children}
            </StyledAnchor>
        </NextLink>
    )
}

const StyledAnchor = styled.a<{
    styles: FlattenInterpolation<ThemeProps<any>>
}>`
    ${props => props.styles}
    cursor: pointer;
    width: fit-content;
    color: ${props => props.theme.primary};
`

export default Link
