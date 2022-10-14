import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import MainLayout, { ActiveNavPage } from '../components/layout/MainLayout'
import SEO from '../components/SEO'
import { getContentFile } from '../util/mdx/mdxServerUtils'
import Header from '../components/page/home/Header'
import RecentNews from '../components/page/home/RecentNews'
import GameAnimation from '../components/page/home/GameAnimation'
import SponsorMarquee from '../components/page/home/SponsorMarquee'
import Timer from '../components/page/home/Timer'

const IndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ content }) => {
    return (
        <>
            <SEO title='Home' description='FRC robotics team from Bridgewater New Jersey' />
            <MainLayout activePage={ActiveNavPage.HOME}>
                <Header/>
                <RecentNews/>
                <GameAnimation/>
                <SponsorMarquee/>
                <Timer/>
            </MainLayout>
        </>
    )
}

export const getStaticProps: GetStaticProps<{
    content: MDXRemoteSerializeResult<Record<string, unknown>>
}> = async () => {
    const { source: content } = await getContentFile('home')

    return {
        props: { content },
    }
}

export default IndexPage

