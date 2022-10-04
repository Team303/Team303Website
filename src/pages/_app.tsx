import '@nextcss/reset'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

import * as gtag from '../lib/googleAnalytics'
import '../styles/fonts.scss'
import GlobalStyle from '../styles/globalStyles'
import { lightTheme } from '../theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = (url: string) => {
            gtag.pageView(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <>
            <ThemeProvider theme={lightTheme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>

            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                strategy='afterInteractive'
            />

            <Script id='google-analytics' strategy='afterInteractive'>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){ window.dataLayer.push(arguments); }
                    gtag('js', new Date());
                    gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
                `}
            </Script>
        </>
    )
}

export default MyApp
