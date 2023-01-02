import { PokemonTypes } from "src/@types/pokemon";
import styled from "styled-components";

export const Button = styled.button`
    padding: 1.4rem 2rem;
    line-height: 2.4rem;
    border-radius: .6rem;
    font-weight: 600;
    font-size: 1.4rem;
    text-align: center;
    line-height: 1.7rem;
    letter-spacing: -0.01em;
    color: ${({ theme }) => theme.colors["blue-400"]};
    background-color: ${({ theme }) => theme.colors['blue-400-low-opacity']};
    transition: all .2s ease-in-out;

    &:hover {
        background-color: ${({ theme }) => theme.colors['blue-400']};
        color: ${({ theme }) => theme.colors.white};
    }
`