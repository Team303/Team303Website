import {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next'
import {MDXRemoteSerializeResult} from 'next-mdx-remote'
import styled from 'styled-components'
import MainLayout, {ActiveNavPage} from '../components/layout/MainLayout'
import SEO from '../components/SEO'
import {getContentFile} from '../util/mdx/mdxServerUtils'
import Timeline from '../components/page/our_story/Timeline'
import Text from "../components/text/Text";

const IndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({content}) => {
    return (
        <>
            <SEO title='Our Story' description='FRC robotics team from Bridgewater New Jersey'/>
            <MainLayout activePage={ActiveNavPage.ABOUT}>
                <Text center size='4xl' weight='semibold'>Our Story</Text>

                <Text size='sm' color='secondary'>Hailing from Bridgewater, New Jersey, The T.E.S.T. Team 303
                    competes in FIRST Mid-Atlantic events throughout the year. Based in Bridgewater-Raritan High School,
                    the team participates in two kinds of robotics competitions each year: the FIRST Robotics
                    Competition (FRC) in the winter/early spring, and the FIRST Tech Challenge (FTC) in the fall. Each
                    competition season includes a kickoff, in which that year’s challenge is revealed to teams at the
                    same time worldwide, as well as six weeks for the teams to design, build, and test their robots, and
                    travel to a variety of venues, in which Team 303 competes with and against other students from
                    around the world.
                    Both corporate and local sponsors are key to the team’s sustainability. These sponsors support the
                    team financially and supply mentors and services, such as sheet metal fabrication. The contributions
                    of the sponsors enable the team members to have the best possible resources, as well as the ability
                    to acquire skills that are applicable to various future professions.
                </Text>
                <Timeline/>
            </MainLayout>
        </>
    )
}

export const getStaticProps: GetStaticProps<{
    content: MDXRemoteSerializeResult
}> = async () => {
    const {source: content} = await getContentFile('our_story')

    return {
        props: {content},
    }
}

export default IndexPage

