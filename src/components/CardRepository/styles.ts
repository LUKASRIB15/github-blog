import styled from "styled-components"

export const LayoutCardRepository= styled.div`
    padding: 2rem;

    background-color: ${props=>props.theme["base-profile"]};
    border-radius: 10px;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
`

export const MenuCardRepository = styled.nav`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    a{
        font-weight: bold;
        font-size: 0.75rem;
        text-decoration: none;
        text-transform: uppercase;
        color: ${props=>props.theme["blue"]};
        border-bottom: 1.5px solid transparent;

        display: flex;
        gap: 0.5rem;
        align-items: center;

        transition: border-bottom 0.2s;

        &:hover{
            border-bottom: 1.5px solid ${props=>props.theme["blue"]};
        }
    }
`
export const TextCardRepository = styled.strong`
    font-size: 1.5rem;

    display: inline-block;
    margin-bottom: 0.5rem;
`

export const MainCardRepository = styled.main`
    display: flex;
    gap: 2rem;

    color:${props=>props.theme["base-span"]};

    span{
        display: flex;
        gap: 0.5rem;
        align-items: center;
    }
`