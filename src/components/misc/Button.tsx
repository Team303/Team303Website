import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { FC } from 'react'
import { IconType } from 'react-icons'
import styled, { css } from 'styled-components'

export enum ButtonStyle {
    PRIMARY,
    ACCENT,
}

const Button: FC<{
    href: string
    style: ButtonStyle
    hoverIcon?: IconType
    children: React.ReactNode
}> = ({ href, style, children, hoverIcon: Icon }) => {
    const [isHover, setHover] = React.useState(false)

    const iconAnimate = {
        enter: {
            opacity: 1,
            translateX: 0,
            transition: {
                duration: 0.3,
            },
            display: 'block',
        },
        exit: {
            opacity: 0,
            translateX: -3,
            transition: {
                duration: 0.3,
            },
            transitionEnd: {
                display: 'block',
            },
        },
    }

    const textAnimate = {
        normal: {
            translateX: 12,
            transition: {
                duration: 0.3,
            },
        },
        side: {
            translateX: 0,
            transition: {
                duration: 0.3,
            },
        },
    }

    return (
        <Link href={href} passHref>
            <ButtonWrapper btnStyle={style} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <motion.span initial='normal' animate={isHover ? 'side' : 'normal'} variants={Icon && textAnimate}>
                    {children}
                </motion.span>
                {Icon && (
                    <motion.div initial='exit' animate={isHover ? 'enter' : 'exit'} variants={iconAnimate}>
                        <Icon />
                    </motion.div>
                )}
            </ButtonWrapper>
        </Link>
    )
}

const ButtonWrapper = styled(motion.a)<{
    btnStyle: ButtonStyle
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
    font-weight: 600;
    font-size: 1.125em;
    transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
    width: 100%;

    ${props => {
        switch (props.btnStyle) {
            case ButtonStyle.PRIMARY:
                return css`
                    background-color: ${props.theme.teal};
                    border: 3px solid ${props.theme.teal};
                    color: ${props.theme.white};

                    &:hover {
                        background-color: transparent;
                    }
                `
            case ButtonStyle.ACCENT:
                return css`
                    background-color: ${props.theme.white};
                    border: 2px solid ${props.theme.white};
                    color: ${props.theme.teal600};

                    &:hover {
                        background-color: transparent;
                        color: ${props.theme.white};
                    }
                `
        }
    }}
`
export default Button
