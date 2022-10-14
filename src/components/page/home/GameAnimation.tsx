import React, { FC } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import styled from 'styled-components'
import Button, { ButtonStyle } from '../../misc/Button'
import Text from '../../text/Text'

const GameAnimation: FC = () => {
    return (
        <GameAnimationWrapper>
            <YoutubeIFrame
                src='https://www.youtube.com/embed/LgniEjI9cCM'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen />

            <GameDescription>
                <Text size='2xl'>Rapid React</Text>
                <Text color='tertiary'>Dolor Sit Amet</Text>
                <Text color='secondary'>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.
                </Text>
                <Button href={'/game/2022'} style={ButtonStyle.PRIMARY} hoverIcon={FaChevronRight}>
                    Learn More
                </Button>
            </GameDescription>
        </GameAnimationWrapper>
    )
}

const GameAnimationWrapper = styled.section`
    padding: 2rem 8rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
`

const YoutubeIFrame = styled.iframe`
    aspect-ratio: 560/315;
    width: 100%;
    border-radius: 1rem;
    overflow: hidden;
`

const GameDescription = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
`

export default GameAnimation
