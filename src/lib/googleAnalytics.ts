// log the page view with their URL
export const pageView = (url: string) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!, {
        page_path: url,
    })
}

// log specific events happening.
export const logEvent = ({ action, params }: { action: string; params: any }) => {
    window.gtag('event', action, params)
}   