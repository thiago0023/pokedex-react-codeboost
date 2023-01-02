import { container } from "@styles/mixins"
import styled from "styled-components"

export const FooterContainer = styled.footer`
    width: 100%;
    background-color: ${({ theme }) => theme.colors['blue-500']};
    padding-top: 6.7rem;
    padding-bottom: 6.5rem;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${container}
`

export const Content = styled.div`
    h3 {
        color: ${({ theme }) => theme.colors.white};
    }

    p {
        color: ${({ theme }) => theme.colors['gray-300']};
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 180%;
    }

`

export const Link = styled.a`
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid white;
`
