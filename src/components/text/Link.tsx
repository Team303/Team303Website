import React, { FC } from 'react'
import NextLink from 'next/link'
import { createTextStyles, TextProps } from './Text'
import styled, { FlattenInterpolation, ThemeProps } from 'styled-components'

const Link: FC<
    Omit<
        TextProps & {
            href: string
            newTab?: boolean
        },
        'inline' | 'center'
    >
> = props => {
    const { href, newTab, children } = props

    return (
        <NextLink href={href} passHref>
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
`

export default Link
