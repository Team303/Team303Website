import Link from 'next/link'
import React, {FC} from 'react'
import styled, {css} from 'styled-components'
import {BiChevronDown} from 'react-icons/bi'
import {motion} from 'framer-motion'
import {ActiveNavPage} from "./MainLayout";

const NavBar: FC<{
    activePage: ActiveNavPage
}> = ({activePage}) => {
    return (
        <NavBarWrapper>
            <Link href='/' passHref>
                <Logo>303</Logo>
            </Link>
            <NavBarLinkSection>
                <NavDropDown active={activePage == ActiveNavPage.ABOUT} name='About Us' href='/about'>
                    <SubMenuItem href={'/our_story'}>Our Story</SubMenuItem>
                    <SubMenuItem href={'/leadership'}>Leadership</SubMenuItem>
                    <SubMenuItem href={'/ramp'}>R.A.M.P.</SubMenuItem>
                    <SubMenuItem href={'/robots'}>Robots</SubMenuItem>
                    <SubMenuItem href={'/gallery'}>Gallery</SubMenuItem>
                </NavDropDown>
                <NavDropDown name='Outreach' href='/outreach'>
                    <SubMenuItem href={'/initiatives'}>Initiatives</SubMenuItem>
                    <SubMenuItem href={'/recent_events'}>Recent Events</SubMenuItem>
                </NavDropDown>
                <NavLink href={'/blog'}>Blog</NavLink>
                <NavLink href={'/resources'}>Resources</NavLink>
                <NavLink href={'/sponsors'}>Sponsors</NavLink>
                <NavLink href='/join'>Join Our Team</NavLink>
            </NavBarLinkSection>
            <CallToActionSection>
                <CallToAction href='/sponsors'>Support Us</CallToAction>
            </CallToActionSection>
        </NavBarWrapper>
    )
}

const NavBarWrapper = styled.nav`
    background-color: ${props => props.theme.navBackground};

    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    gap: 2rem;
`

const Logo = styled.a`
    font-family: 'Ethnocentric';
    color: white;
    font-size: 2rem;
    font-weight: 500;
`

const StyledNavLink = styled.a<{
    active?: boolean
}>`
    ${props => props.active && css`
        color: ${props.theme.teal300};
    `}
`

const NavLink: FC<{
    href: string
    active?: boolean
    children: React.ReactNode
}> = ({href, active, children}) => <Link passHref href={href}>
    <StyledNavLink active={active}>{children}</StyledNavLink>
</Link>

const NavBarLinkSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    font-size: 0.95rem;
    z-index: 10;

    // Give direct children color
    & > div,
    & > a {
        text-decoration: none;
        cursor: pointer;
        color: ${props => props.theme.textPrimary};
        transition: color 0.2s ease;

        &:hover {
            color: ${props => props.theme.teal300};
        }
    }

    & > div > a,
    & > a {
        z-index: 10;
    }
`

const NavLinkItem = styled(motion.div)<{
    active?: boolean
}>`
    display: flex;
    position: relative;
    cursor: pointer;

    ${props => props.active && css`
        color: ${props.theme.teal300} !important;
    `}
`

const SubMenu = styled(motion.div)`
    position: absolute;
    top: 0;
    width: max-content;
    z-index: 0;
`

const SubMenuBackground = styled.div`
    top: -3rem;
    left: 0;
    height: 3rem;
    width: 100%;
    cursor: default;
    z-index: 0;
`

const SubMenuContainer = styled.div`
    width: fit-content;
    /* min-width: 8rem; */
    display: flex;
    flex-direction: column;

    cursor: default;
    padding: 1.5rem 0;
    background-color: ${props => props.theme.navBackground};

    position: relative;

    & > *:not(:last-child) {
        padding-bottom: 0.75rem;
    }

    &::before {
        content: '';
        position: absolute;
        background-color: ${props => props.theme.teal500};
        width: 100%;
        height: 4px;
        z-index: 100;
        top: 0;
        left: 0;
    }
`

const StyledSubMenuItem = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: ${props => props.theme.white};

    padding: 0 1.5rem;

    &:hover {
        color: ${props => props.theme.teal300};
    }
`

const SubMenuItem: FC<{ href: string; children: React.ReactNode }> = ({href, children}) => (
    <Link href={href} passHref>
        <StyledSubMenuItem>{children}</StyledSubMenuItem>
    </Link>
)

const NavDropDown: FC<{
    name: string
    href?: string
    active?: boolean
    children: React.ReactNode
}> = ({name, href = '', active, children}) => {
    const [isHover, setHover] = React.useState(false)

    const subMenuAnimate = {
        enter: {
            opacity: 1,
            translateY: 0,
            transition: {
                duration: 0.3,
            },
            display: 'block',
        },
        exit: {
            opacity: 0,
            translateY: 5,
            transition: {
                duration: 0.3,
            },
            transitionEnd: {
                display: 'none',
            },
        },
    }

    return (
        <NavLinkItem active={active} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <SubMenu initial='exit' animate={isHover ? 'enter' : 'exit'} variants={subMenuAnimate}>
                <SubMenuBackground/>
                <SubMenuContainer>{children}</SubMenuContainer>
            </SubMenu>
            <Link href={href}>{name}</Link> <BiChevronDown color='inherit'/>
        </NavLinkItem>
    )
}

const CallToActionSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 0.95rem;
    color: white;
`

const StyledCallToAction = styled.a`
    display: block;
    background-color: ${({theme}) => theme.teal};
    border: ${({theme}) => theme.teal} 2px solid;
    padding: 0.5rem 1rem;
    border-radius: 5rem;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: transparent;
    }
`

const CallToAction: FC<{
    href: string
    children: string
}> = ({href, children}) => {
    return (
        <Link href={href} passHref>
            <StyledCallToAction>{children}</StyledCallToAction>
        </Link>
    )
}

export default NavBar
