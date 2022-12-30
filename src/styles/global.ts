import { createGlobalStyle } from 'styled-components'
import { DefaultTheme } from './themes/default'

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    html {
        font-size: 62.5%;
    }

    button {
        cursor: pointer;
        border: none;
        background: transparent;
        &:disabled {
            cursor: not-allowed;
        }
    }

    img {
        display: block;
        max-width: 100%;
    }

    a {
        text-decoration: none;
        display: block;
    }

    ul {
        list-style: none;
    }

    h1, h2, h3 {
        font-family: 'Montserrat', sans-serif;
        line-height: 150%;
    }

    h1, h2 {
        letter-spacing: -0.01em;
        font-weight: bold;
    }

    h2, h3 {
        color: ${({ theme }) => theme.colors['gray-700']};
    }

    h1 {
        font-size: 6.4rem;
        color: ${({ theme }) => theme.colors.white};
    }

    h2 {
        font-size: 3.2rem;
    }

    h3 {
        font-weight: 600;
        font-size: 1.8rem;
    }
`