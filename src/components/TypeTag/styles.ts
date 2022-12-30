import { PokemonTypes } from "src/@types/pokemon";
import styled from "styled-components";

interface Props {
    type: PokemonTypes;
}

export const Tag = styled.span<Props>`
    display: inline-block;
    padding: 0 2.5rem;
    line-height: 2.4rem;
    border-radius: .2rem;
    font-weight: 600;
    font-size: 1.3rem;
    text-align: center;
    letter-spacing: -0.01em;
    color: ${({ theme, type }) => theme.colors.types[type]};
    background-color: ${({ theme, type }) => theme.colors.types[type] + '1A'};
`