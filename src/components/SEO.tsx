import Head from 'next/head'
import { FC } from 'react'

const SEO: FC<{
    title: string
    description: string
}> = ({ title, description }) => {
    const data = {
        title: `${title} - FRC Team 303`,
        description,
        author: 'Wowkster#0001',
        url: 'https://team303.com/',
        image: 'https://team303.com/img/logo.png',
        keywords:
            'frc,team,303,first,f.i.r.s.t,ftc,fll,fll jr,bridgewater,nj,us,new jersey, united states,robotics,join,brhs,bridgewater raritan high school,school,high school',
        color: '#0d7e7c',
    }

    return (
        <Head>
            <title>{data.title}</title>

            <link rel='apple-touch-icon' sizes='57x57' href='/apple-icon-57x57.png' />
            <link rel='apple-touch-icon' sizes='60x60' href='/apple-icon-60x60.png' />
            <link rel='apple-touch-icon' sizes='72x72' href='/apple-icon-72x72.png' />
            <link rel='apple-touch-icon' sizes='76x76' href='/apple-icon-76x76.png' />
            <link rel='apple-touch-icon' sizes='114x114' href='/apple-icon-114x114.png' />
            <link rel='apple-touch-icon' sizes='120x120' href='/apple-icon-120x120.png' />
            <link rel='apple-touch-icon' sizes='144x144' href='/apple-icon-144x144.png' />
            <link rel='apple-touch-icon' sizes='152x152' href='/apple-icon-152x152.png' />
            <link rel='apple-touch-icon' sizes='180x180' href='/apple-icon-180x180.png' />
            <link rel='icon' type='image/png' sizes='192x192' href='/android-icon-192x192.png' />
            <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
            <meta name='msapplication-TileColor' content={data.color} />
            <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
            <meta name='theme-color' content={data.color} />

            <meta charSet='UTF-8' />
            <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <meta name='theme-color' content={data.color} />
            <meta property='og:title' content={data.title} />
            <meta property='og:site_name' content={data.title} />
            <meta property='og:description' content={data.description} />
            <meta property='og:image' content={data.image} />
            <meta name='twitter:card' content='summary_large_image' />
            <meta property='og:url' content={data.url} />
            <meta property='og:type' content='website' />
            <meta name='description' content={data.description} />
            <meta name='keywords' content={data.keywords} />
            <meta name='author' content={data.author} />
            <link rel='manifest' href='/manifest.json' />
        </Head>
    )
}

export default SEO
