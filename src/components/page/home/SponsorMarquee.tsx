import Marquee from 'react-fast-marquee'
import hexRgb from 'hex-rgb'
import React, { FC } from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme/theme'
import { useWindowSize } from 'usehooks-ts'
import Text from '../../text/Text'
import Link from '../../text/Link'
import Image, { StaticImageData } from 'next/image'

import jAndJ from '../../../assets/img/j&j.png'
import picatinny from '../../../assets/img/picatinny.png'
import brrsd from '../../../assets/img/brrsd.png'
import solidworks from '../../../assets/img/solidworks.png'
import ramp from '../../../assets/img/solidworks.png'

enum SponsorTier {
    PLATINUM,
    GOLD,
    SILVER,
    BRONZE,
}

interface Sponsor {
    title: string
    tier: SponsorTier
    description: string
    href: string
    logo: StaticImageData
}

function getTierLabel(tier: SponsorTier) {
    switch (tier) {
        case SponsorTier.BRONZE:
            return 'Bronze'
        case SponsorTier.SILVER:
            return 'Silver'
        case SponsorTier.GOLD:
            return 'Golden Opportunity'
        case SponsorTier.PLATINUM:
            return 'Platinum Surveyor'
    }
}

const SPONSORS: Sponsor[] = [
    {
        title: 'BRRSD',
        tier: SponsorTier.PLATINUM,
        description: `FRC Team 303, from Bridgewater, New Jersey, competes in FIRST Mid-Atlantic events, as well as hosts several FIRST events throughout the year...`,
        href: '#brrsd',
        logo: brrsd,
    },
    {
        title: 'Team 303 RAMP',
        tier: SponsorTier.PLATINUM,
        description: `FRC Team 303, from Bridgewater, New Jersey, competes in FIRST Mid-Atlantic events, as well as hosts several FIRST events throughout the year...`,
        href: '#ramp',
        logo: ramp,
    },
    {
        title: 'Johnson & Johnson',
        tier: SponsorTier.PLATINUM,
        description: `FRC Team 303, from Bridgewater, New Jersey, competes in FIRST Mid-Atlantic events, as well as hosts several FIRST events throughout the year...`,
        href: '#jj',
        logo: jAndJ,
    },
    {
        title: 'Picatinny STEM',
        tier: SponsorTier.PLATINUM,
        description: `FRC Team 303, from Bridgewater, New Jersey, competes in FIRST Mid-Atlantic events, as well as hosts several FIRST events throughout the year...`,
        href: '#picatinny',
        logo: picatinny,
    },
    {
        title: 'SolidWorks',
        tier: SponsorTier.GOLD,
        description: `FRC Team 303, from Bridgewater, New Jersey, competes in FIRST Mid-Atlantic events, as well as hosts several FIRST events throughout the year...`,
        href: '#solidworks',
        logo: solidworks,
    },
]

const SponsorMarquee: FC = () => {
    const { width } = useWindowSize()

    const gColor = hexRgb(theme.backgroundPrimary, { format: 'array' })

    return (
        <SponsorMarqueeWrapper>
            <Marquee speed={20} gradientColor={[gColor[0], gColor[1], gColor[2]]} gradient={width > 500}>
                {SPONSORS.map((sponsor, i) => (
                    <SponsorCard key={i}>
                        <SponsorTextSection>
                            <Text size='xl'>{sponsor.title}</Text>
                            <Text color='tertiary' size='sm'>
                                {getTierLabel(sponsor.tier)}
                            </Text>
                            <Text color='secondary' size='sm'>
                                {sponsor.description}
                            </Text>
                            <Link underline color='tertiary' href={sponsor.href} size='sm'>
                                Read More
                            </Link>
                        </SponsorTextSection>
                        <SponsorImage>
                            <Image layout='responsive' src={sponsor.logo} />
                        </SponsorImage>
                    </SponsorCard>
                ))}
            </Marquee>
        </SponsorMarqueeWrapper>
    )
}

const SponsorMarqueeWrapper = styled.div`
    padding: 2rem 0;
`

const SponsorCard = styled.div`
    padding: 1.5rem;
    border-radius: 0.75rem;
    background-color: ${props => props.theme.backgroundSecondary};
    width: 32rem;
    margin: 0 1rem;
    border: 2px solid ${props => props.theme.backgroundStroke};

    display: flex;
    height: 100%;
    max-height: 16rem;
    gap: 1rem;
`

const SponsorTextSection = styled.article`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const SponsorImage = styled.div`
    aspect-ratio: 1/1;
    height: 100%;

    & > * {
        border-radius: 0.75rem;
        overflow: hidden;
    }
`

export default SponsorMarquee
