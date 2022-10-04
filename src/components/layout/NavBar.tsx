import Link from 'next/link'
import React, { FC } from 'react'
import styled from 'styled-components'

const NavBar: FC = () => {
    return (
        <NavBarWrapper>
            <Logo>303</Logo>
            <NavBarContent>
                <NavBarSection>
                    <NavLink href={'/'}>Home</NavLink>
                    <NavLink href={'/'}>Home</NavLink>
                    <NavLink href={'/'}>Home</NavLink>
                </NavBarSection>
                <NavBarSection>Call to Actions Go Here</NavBarSection>
            </NavBarContent>
        </NavBarWrapper>
    )
}

const NavBarWrapper = styled.nav`
    background-color: teal;

    height: 4rem;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    gap: 2rem;
`

const Logo = styled.span`
    font-family: 'Ethnocentric';
    color: white;
    font-size: 2rem;
`

const NavBarContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const NavBarSection = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`

const StyledNavLink = styled.a`
    color: white;
    text-decoration: none;
`

const NavLink: FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <Link href={href} passHref>
        <StyledNavLink>{children}</StyledNavLink>
    </Link>
)

export default NavBar
