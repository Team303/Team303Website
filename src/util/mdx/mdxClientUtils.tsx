import { MDXRemote, MDXRemoteProps, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { FC } from 'react'
import styled from 'styled-components'

import Code from '../../components/text/Code'
import Link from '../../components/text/Link'
import Text, { createTextStyles } from '../../components/text/Text'

type Children = {
    children?: React.ReactNode
}

const CustomLink: FC<
    Children & {
        href?: string
    }
> = ({ href, children }) => <Link url={href!}>{children}</Link>

const CustomCode: FC<Children> = ({ children }) => <Code color='secondary'>{children}</Code>

const CustomParagraph: FC<Children> = ({ children }) => <Text color='secondary'>{children}</Text>

const CustomHeading1: FC<Children> = ({ children }) => (
    <Text size='3xl' weight='bold' as='h1' margin>
        {children}
    </Text>
)

const CustomHeading2: FC<Children> = ({ children }) => (
    <Text size='2xl' weight='demi' as='h2' margin>
        {children}
    </Text>
)

const CustomHeading3: FC<Children> = ({ children }) => (
    <Text size='xl' weight='demi' as='h3' margin>
        {children}
    </Text>
)

const CustomHeading4: FC<Children> = ({ children }) => (
    <Text size='lg' weight='demi' as='h4' margin>
        {children}
    </Text>
)

const CustomUnorderedList = styled.ul`
    list-style: disc;
    padding-left: 2.5rem;
`

const CustomListItem = styled.li`
    ${createTextStyles({
        color: 'secondary',
    })}

    margin: 0.75rem 0;
    color: ${({ theme }) => theme.textSecondary};
`

const components = {
    h1: CustomHeading1,
    h2: CustomHeading2,
    h3: CustomHeading3,
    h4: CustomHeading4,
    p: CustomParagraph,
    a: CustomLink,
    code: CustomCode,
    ul: CustomUnorderedList,
    li: CustomListItem,
}

export type MDX = MDXRemoteSerializeResult<Record<string, unknown>>

export const MDXContent: FC<MDXRemoteProps> = source => {
    return (
        <MDXContentWrapper>
            <MDXRemote {...source} components={components} />
        </MDXContentWrapper>
    )
}

const MDXContentWrapper = styled.div`
    width: 100%;
`
