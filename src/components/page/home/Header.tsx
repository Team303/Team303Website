import Image from 'next/image'
import { FC } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import styled from 'styled-components'
import teamPhoto from '../../../assets/img/team_photo_2020.jpg'
import Button, { ButtonStyle } from '../../misc/Button'
import Text from '../../text/Text'

const Header: FC = () => {
    return (
        <HeaderWrapper>
            <HeaderText>
                <TextContainer>
                    <Text font='ethnocentric' size='7xl'>
                        The T.E.S.T.
                    </Text>
                    <Text font='ethnocentric' size='7xl' color='tertiary'>
                        Team 303
                    </Text>
                </TextContainer>
                <Text>
                    FRC Team 303, from Bridgewater, New Jersey, competes in FIRST Mid-Atlantic events, as well as hosts
                    several FIRST events throughout the year. Based out of Bridgewater-Raritan High School, the team
                    participates in FRC competitions every year.
                </Text>
                <CallToActionContainer>
                    <Button href='/about' style={ButtonStyle.PRIMARY} hoverIcon={FaChevronRight}>
                        About Us
                    </Button>
                    <Button href='/about' style={ButtonStyle.ACCENT} hoverIcon={FaChevronRight}>
                        Blog
                    </Button>
                </CallToActionContainer>
            </HeaderText>
            <HeaderImageSection>
                <HeaderImageWrapper>
                    <Image layout='responsive' src={teamPhoto} />
                </HeaderImageWrapper>
                <Text color='secondary' center>
                    2020 at our STS space
                </Text>
            </HeaderImageSection>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem 8rem;
    gap: 4rem;

    @media screen and (max-width: 1230px) {
        grid-template-columns: 1fr;
    }
`

const HeaderText = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: clamp(0.75rem, 0.95vw, 1rem);
`

const TextContainer = styled.div`
    white-space: nowrap;
    font-size: clamp(0.5rem, 0.95vw, 1.25rem);

    @media screen and (max-width: 1230px) {
        font-size: clamp(0.5rem, 1.25vw, 1rem);
        text-align: center;
    }
`

const CallToActionContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
`

const HeaderImageSection = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

const HeaderImageWrapper = styled.div`
    border-radius: 1rem;
    overflow: hidden;
    border: 2px solid ${props => props.theme.backgroundStroke};
    max-width: 42rem;
    width: 100%;
`

export default Header
