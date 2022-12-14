import styled from "styled-components"

export const LayoutFormSearch = styled.div`
    width: 100%;
    margin-top: 4.5rem;
    margin-bottom: 3rem;
`

export const HeaderFormSearch = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.9rem;

    strong{
        color: ${props=>props.theme["base-subtitle"]};
        font-size: 1.125rem;
    }

    span{
        color: ${props=>props.theme["base-span"]};
        font-size: 0.875rem;
    }
`

export const InputFormSearch = styled.input`
    width: 100%;
    flex:1;
    padding: 0.75rem 1rem;

    background-color: ${props=>props.theme["base-input"]};
    color: ${props=>props.theme["base-text"]};
    border: 1px solid ${props=>props.theme["base-border"]};
    border-radius: 6px;

    &::placeholder{
        color: ${props=>props.theme["base-label"]};
    }

    &:focus{
        outline: 2px solid ${props=>props.theme["blue"]};
    }
`