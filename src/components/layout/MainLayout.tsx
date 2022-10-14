import React, { FC } from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import NavBar from './NavBar'

export enum ActiveNavPage {
    HOME,
    ABOUT
}

const MainLayout: FC<{
    activePage: ActiveNavPage
    children: React.ReactNode
}> = ({ activePage, children }) => {
    return (
        <PageContainer>
            <ContentWrapper>
                <NavBar activePage={activePage} />
                <Main>{children}</Main>
            </ContentWrapper>
            <Footer />
        </PageContainer>
    )
}

export const PageContainer = styled.div`
    position: relative;
    min-height: 100vh;
`

export const ContentWrapper = styled.div`
    padding-bottom: 19rem; /* Footer height */
`

export const Main = styled.main`
    padding: 2rem 0 6rem 0;
    margin: 0 auto;
    max-width: 100rem;
`

export default MainLayout
