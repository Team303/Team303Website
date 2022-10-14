import { FC } from 'react'
import styled from 'styled-components'
import Link from '../../text/Link'
import Text from '../../text/Text'

const RecentNews: FC = () => {
    return (
        <RecentNewsWrapper>
            <Text size='2xl' weight='bold'>
                Recent News
            </Text>
            <NewsContainer>
                <RecentNewsCard
                    title={'Team 303 Finishes Their 2022 Season'}
                    author={'Amogh Jambekar'}
                    published={new Date()}
                    href={'/'}>
                    FRC Team 303, from Bridgewater, New Jersey, competes in FIRST Mid-Atlantic events, as well as hosts
                    several FIRST events throughout the year...
                </RecentNewsCard>
                <RecentNewsCard
                    title={'Team 303 Finishes Their 2022 Season'}
                    author={'Amogh Jambekar'}
                    published={new Date()}
                    href={'/'}>
                    FRC Team 303, from Bridgewater, New Jersey, competes in FIRST Mid-Atlantic events, as well as hosts
                    several FIRST events throughout the year...
                </RecentNewsCard>
                <RecentNewsCard
                    title={'Team 303 Finishes Their 2022 Season'}
                    author={'Amogh Jambekar'}
                    published={new Date()}
                    href={'/'}>
                    FRC Team 303, from Bridgewater, New Jersey, competes in FIRST Mid-Atlantic events, as well as hosts
                    several FIRST events throughout the year...
                </RecentNewsCard>
            </NewsContainer>
        </RecentNewsWrapper>
    )
}

const RecentNewsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 8rem;
    padding-bottom: 2rem;
`

const NewsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
`

const RecentNewsCardWrapper = styled.div`
    border-radius: 0.75rem;
    background-color: ${props => props.theme.backgroundSecondary};
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    gap: 0.5rem;
    border: 2px solid ${props => props.theme.backgroundStroke};
`

const NewsCardAuthor = styled.div`
    display: flex;
    justify-content: space-between;
`

const RecentNewsCard: FC<{
    title: string
    author: string
    published: Date
    href: string
    children: string
}> = props => {
    return (
        <RecentNewsCardWrapper>
            <Text size='lg'>{props.title}</Text>
            <NewsCardAuthor>
                <Text color='tertiary' size='sm'>
                    by {props.author}
                </Text>
                <Text color='tertiary' size='sm'>
                    {props.published.toLocaleDateString()}
                </Text>
            </NewsCardAuthor>
            <Text color='secondary' size='sm'>
                {props.children}
            </Text>
            <Link underline color='tertiary' href={props.href} size='sm'>
                Read More
            </Link>
        </RecentNewsCardWrapper>
    )
}
export default RecentNews
