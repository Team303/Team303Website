import React, { FC } from 'react'
import styled from 'styled-components'

const Footer: FC = () => {
    return (
        <FooterWrapper>
            <Copyright>&copy; 2022 Team 303. All Rights Reserved.</Copyright>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4rem; /* Footer height */

    background-color: ${props => props.theme.backgroundSecondary};
    display: flex;
    align-items: center;
    justify-content: center;
`

const Copyright = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.textPrimary}
`

export default Footer
