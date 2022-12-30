import { centerTotalFlex } from "@styles/mixins";
import styled, { StyledComponentProps } from "styled-components";
import { TagProps } from ".";



const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors["white"]};
    border-radius: 244px;
    max-width: 12.1rem;
    padding: .6rem .4rem;
`;

const Icon = styled.div<TagProps>`
    width: 2.6rem;
    height: 2.6rem;
    background-color: ${({ theme, variant }) => {
        return theme.colors[`${variant}-400-low-opacity`]
    }};
    border-radius: 50%;
    ${centerTotalFlex}
    margin-right: .8rem;
`;

const Label = styled.span<TagProps>`
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 150%;
    color: ${({ theme, variant }) => {
        return theme.colors[`${variant}-400`]
    }};
`;

export { Container, Icon, Label };