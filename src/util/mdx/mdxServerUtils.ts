import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

// POSTS_PATH is useful when you want to get the path to a specific file
export const CONTENT_PATH = path.join(process.cwd(), 'content')

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const contentFilePaths = fs
    .readdirSync(CONTENT_PATH)
    // Only include md(x) files
    .filter(path => /\.mdx?$/.test(path))

export const getContentFile = async (fileName: string) => {
    const contentFilePath = path.join(CONTENT_PATH, `${fileName}.mdx`)
    const source = fs.readFileSync(contentFilePath, 'utf8')

    const { content, data } = matter(source)

    const mdxSource = await serialize(content, {
        scope: data,
    })

    return { source: mdxSource, frontMatter: data }
}

export const getContentFromDirectory = async (directoryName: string) => {
    const directory = path.join(CONTENT_PATH, directoryName)

    const contentPaths = fs
        .readdirSync(directory)
        .filter(path => /\.mdx?$/.test(path))
        .map(f => path.join(directoryName, f))
        .map(f => f.substring(0, f.length - 4))

    const contentFiles = await Promise.all(contentPaths.map(path => getContentFile(path)))

    return contentFiles
}
