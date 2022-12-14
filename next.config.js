const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
        // If you use `MDXProvider`, uncomment the following line.
        // providerImportSource: "@mdx-js/react",
    },
})

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
})

module.exports = nextConfig
