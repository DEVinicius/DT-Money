import styled from "styled-components";
import { transparentize } from 'polished';

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin: 2rem;
    }

    input {
        width: 100%;
        padding: 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        background: #e7e9ee;
        border: 1px solid #d7d7d7;

        font-weight: 400;
        font-size: 1rem;

        & + input {
            margin-top: 1rem;
        }

        &::placeholder {
            color: var(--text-body);
        }
    }

    button[type = "submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        
        border: none;
        border-radius: 0.25rem;
        color: #FFF;

        font-size: 1rem;
        font-weight: 600;

        transition: filter 0.5s;

        &:hover {
            filter: brightness(0.9);
        }

        margin-top: 2rem;
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33cc95',
    red: "#e5234d"
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${(props) => props.isActive 
    ? transparentize(0.9,colors[props.activeColor]) 
    : 'transparent'};

    transition: border-color 0.5;

    &:hover {
        border-color: #aaa;
    }

    img {
        height: 20px;
        width: 20px;
    }

    span {
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
    }
`;