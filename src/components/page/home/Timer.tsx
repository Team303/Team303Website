import React, {FC, useEffect, useState} from 'react'
import styled from 'styled-components'
import Text from '../../text/Text'
import {CountdownRendererFn} from 'react-countdown'
import dynamic from 'next/dynamic'
import {Suspense} from 'react'

const Countdown = dynamic(() => import('react-countdown'), {
    ssr: false,
})

const Timer: FC = () => {
    const renderer: CountdownRendererFn = ({days, hours, minutes, seconds, completed}) => (
        <CounterContainer>
            <CounterColumn>
                <Text color='secondary' font='ethnocentric' size='7xl' center>
                    {days}
                </Text>
                <Text color='tertiary' size='lg' center>
                    Days
                </Text>
            </CounterColumn>
            <CounterColumn>
                <Text color='secondary' font='ethnocentric' size='7xl' center>
                    {hours}
                </Text>
                <Text color='tertiary' size='lg' center>
                    Hours
                </Text>
            </CounterColumn>
            <CounterColumn>
                <Text color='secondary' font='ethnocentric' size='7xl' center>
                    {minutes}
                </Text>
                <Text color='tertiary' size='lg' center>
                    Minutes
                </Text>
            </CounterColumn>
            <CounterColumn>
                <Text color='secondary' font='ethnocentric' size='7xl' center>
                    {seconds}
                </Text>
                <Text color='tertiary' size='lg' center>
                    Seconds
                </Text>
            </CounterColumn>
        </CounterContainer>
    )

    return (
        <TimerWrapper>
            <Text size='2xl' weight='bold' center>
                Kick-off Countdown
            </Text>
            <Text color='tertiary' weight='semibold' size='sm' center>
                Countdown for the 2023 Season Kick-off event
            </Text>
            <Text color='secondary' center>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
            </Text>
            <CounterWrapper>
                <SideRuleLight/>
                <Countdown date={new Date(1673110800000)} renderer={renderer}/>
                <SideRuleDark/>
            </CounterWrapper>
            <br/>
            <ProgressBar min={1650686400000} max={1673110800000} value={Date.now()}/>
        </TimerWrapper>
    )
}

const TimerWrapper = styled.section`
    max-width: 64rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const CounterWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 4rem;
`

const CounterContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
`

const CounterColumn = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 10rem;
`

const SideRuleLight = styled.hr`
    width: 4rem;
    height: 1rem;
    border: none;
    border-radius: 100rem;
    background-color: ${props => props.theme.textSecondary};
    margin: auto 0;
`

const SideRuleDark = styled(SideRuleLight)`
    background-color: ${props => props.theme.teal500};
`

const ProgressBarWrapper = styled.div`
    background-color: ${props => props.theme.teal500};
    height: 1rem;
    display: flex;
    border-radius: 4rem;
`

const ProgressBarInner = styled.div`
    background-color: ${props => props.theme.textSecondary};
    height: 100%;
    border-radius: 4rem;
`

const ProgressBar: FC<{
    min: number
    max: number
    value: number
}> = ({min, max, value}) => (
    <ProgressBarWrapper>
        <ProgressBarInner
            style={{
                width: `${((value - min) / (max - min)) * 100}%`,
            }}></ProgressBarInner>
    </ProgressBarWrapper>
)

export default Timer
