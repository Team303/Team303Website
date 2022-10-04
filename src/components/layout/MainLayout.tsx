import React, { FC } from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import NavBar from './NavBar'

export enum ActiveNavPage {
    HOME,
}

const MainLayout: FC<{
    activePage: ActiveNavPage
    children: React.ReactNode
}> = ({ children }) => {
    return (
        <PageContainer>
            <ContentWrapper>
                <NavBar />
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
    padding-bottom: 4rem; /* Footer height */
`

export const Main = styled.main`
    padding: 1rem;
`

export default MainLayout
