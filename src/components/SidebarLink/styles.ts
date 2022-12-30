import { centerTotalFlex } from "@styles/mixins";
import { PokemonTypes } from "src/@types/pokemon";
import styled from "styled-components";

interface SidebarLinkProps {
    type: PokemonTypes;
}

export const Button = styled.button`
    display: flex;
    align-items: center;
    filter: grayscale(100%);
    opacity: 0.6;
    transition: all 0.3s ease-in-out;

    &:hover {
        filter: grayscale(0%);
        opacity: 1;
    }
`

export const Icon = styled.div`
    width: 2.8rem;
    height: 2.8rem;
    ${centerTotalFlex}
    margin-right: 1.5rem;
`

export const Label = styled.span<SidebarLinkProps>`
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 150%;
    color: ${({ theme, type }) => theme.colors.types[type]};
`