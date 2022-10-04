import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    background-color: ${props => props.theme.backgroundPrimary};
 }
`

export default GlobalStyle
