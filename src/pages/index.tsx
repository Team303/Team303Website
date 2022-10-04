import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import MainLayout, { ActiveNavPage } from '../components/layout/MainLayout'
import SEO from '../components/SEO'
import { MDXContent } from '../util/mdx/mdxClientUtils'
import { getContentFile } from '../util/mdx/mdxServerUtils'

const IndexPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ content }) => {
    return (
        <>
            <SEO title='Home' description='FRC robotics team from Bridgewater New Jersey' />
            <MainLayout activePage={ActiveNavPage.HOME}>
                <MDXContent {...content} />
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

