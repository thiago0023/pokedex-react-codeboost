import { centerTotalFlex } from "@styles/mixins";
import { DefaultTheme } from "@styles/themes/default";
import { PokemonTypes } from "src/@types/pokemon";
import styled from "styled-components";

interface Props {
    type: PokemonTypes;
}

const Container = styled.button`
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 28rem;
    height: 30.4rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 1.2rem;
    box-shadow: 0rem 1rem 5.1rem .5rem rgba(183, 189, 193, 0.3);
    transition: all .3s ease-in-out;

    &:hover {
        transform: scale(1.02);
        box-shadow: 0rem 1.2rem 4rem -.5rem rgba(90, 96, 100, 0.3);
    }
`

const Image = styled.div<Props>`
    position: relative;
    width: 20rem;
    height: 20rem;
    ${centerTotalFlex}
    margin: 0 auto;
    margin-bottom: 1.4rem;

    &:after {
        content: '';
        width: 16.5rem;
        height: 16.5rem;
        background-color: ${({ theme, type }) => theme.colors.types[type]};
        position: absolute;
        z-index: -1;
        border-radius: 50%;
        opacity: 0.2;
    }
`

const Info = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 2.8rem;
`

const Text = styled.div`
    span {
        text-align: left;
        display: block;
        font-weight: 500;
        font-size: 1.3rem;
        line-height: 150%;
        color: ${({ theme }) => theme.colors['gray-400']};
        margin-bottom: .6rem;
    }
`

const Icon = styled.div`
    margin-bottom: 1rem;
`

export { Container, Image, Info, Text, Icon }