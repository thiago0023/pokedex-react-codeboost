import { centerTotalFlex } from "@styles/mixins";
import { InputHTMLAttributes } from "react";
import styled from "styled-components";



export const Container = styled.div`
    background: ${({theme}) => theme.colors['white']};
    border-radius: 122px;
    height: 5.6rem;
    max-width: 40.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 2.5rem;
    padding-right: .7rem;
`
type InputProps = InputHTMLAttributes<HTMLInputElement> & {}

export const Input = styled.input<InputProps>`
    ${({type, theme}) => type === 'text' && `
        border: 0;
        outline: none;
        width: 80%;
        font-size: 1.5rem;
        line-height: 150%;
        color: theme.colors['gray-500']};

        &::placeholder {
            color: theme.colors['gray-400']};
        }
    `}
    
`

export const Button = styled.button`
    width: 4.2rem;
    height: 4.2rem;
    border-radius: 50%;
    border: 1px solid transparent;
    ${centerTotalFlex}
    background-color: ${({theme}) => theme.colors['blue-400-low-opacity']};
    transition: border-color .3s;

    &:hover {
        border: 1px solid ${({theme}) => theme.colors['blue-400']};
    }
`