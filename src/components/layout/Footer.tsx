import Link from 'next/link'
import React, { FC } from 'react'
import { IconType } from 'react-icons/lib'
import styled from 'styled-components'
import { AiOutlineInstagram, AiFillGithub, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import { ImFlickr } from 'react-icons/im'
import { FaFacebook } from 'react-icons/fa'
import Text from '../text/Text'

const Footer: FC = () => {
    return (
        <FooterWrapper>
            <FooterVerticalSection>
                <FooterSection>
                    <FooterSectionTitle>Contact Us</FooterSectionTitle>

                    <Text color='tertiary'>Team 303 RAMP</Text>

                    <TextContainer>
                        <Text color='secondary' weight='medium'>
                            frcteam303@gmail.com
                        </Text>
                        <Text color='secondary' weight='medium'>
                            president@team303ramp.com
                        </Text>
                        <Text color='secondary' weight='medium'>
                            vicepresident@team303ramp.com
                        </Text>
                    </TextContainer>
                </FooterSection>
                <FooterSection>
                    <Text font='ethnocentric' color='primary' size='6xl'>
                        Team 303
                    </Text>
                    <LinksGrid>
                        <FooterLink href='/'>Outreach</FooterLink>
                        <FooterLink href='/'>Our Blog</FooterLink>
                        <FooterLink href='/'>Sponsors</FooterLink>
                        <FooterLink href='/'>Sponsors</FooterLink>
                        <FooterLink href='/'>Sponsors</FooterLink>
                        <FooterLink href='/'>Sponsors</FooterLink>
                        <FooterLink href='/'>Sponsors</FooterLink>
                        <FooterLink href='/'>Sponsors</FooterLink>
                    </LinksGrid>
                </FooterSection>
                <FooterSection>
                    <FooterSectionTitle>Socials</FooterSectionTitle>
                    <SocialsWrapper>
                        <SocialsLink icon={AiOutlineInstagram} href='' />
                        <SocialsLink icon={AiFillGithub} href='' />
                        <SocialsLink icon={AiOutlineTwitter} href='' />
                        <SocialsLink icon={AiFillYoutube} href='' />
                        <SocialsLink icon={ImFlickr} href='' />
                        <SocialsLink icon={FaFacebook} href='' />
                    </SocialsWrapper>
                </FooterSection>
            </FooterVerticalSection>
            <FooterVerticalSection>
                <Copyright>&copy; 2022 Team 303. All Rights Reserved.</Copyright>
            </FooterVerticalSection>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 19rem; /* Footer height */

    background-color: ${props => props.theme.backgroundSecondary};

    display: flex;
    flex-direction: column;
`

const FooterVerticalSection = styled.div`
    border-top: ${props => props.theme.teal} solid 3px;
    padding: 2rem 2rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
`

const FooterSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.9rem;
`

const FooterSectionTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.textPrimary};
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const SocialsWrapper = styled.div`
    display: flex;

    & > *:not(:last-child) {
        padding-right: 1rem;
    }
`

const StyledSocialsLink = styled.a`
    color: ${props => props.theme.textSecondary};
`

const SocialsLink: FC<{
    icon: IconType
    href: string
}> = ({ icon: Icon, href }) => {
    return (
        <Link href={href} passHref>
            <StyledSocialsLink>
                <Icon size={40} />
            </StyledSocialsLink>
        </Link>
    )
}

const LinksGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    justify-items: center;
`

const StyledFooterLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: ${props => props.theme.textSecondary};
    font-weight: 500;
    font-size: 1rem;
`

const FooterLink: FC<{
    href: string
    children: string
}> = ({ href, children }) => {
    return (
        <Link href={href} passHref>
            <StyledFooterLink>{children}</StyledFooterLink>
        </Link>
    )
}

const Copyright = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.textSecondary};
    text-align: center;
    grid-column-start: 2;
`

export default Footer
