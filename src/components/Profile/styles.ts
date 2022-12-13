import styled from "styled-components"

export const LayoutProfile = styled.main`
    display: grid;
    grid-template-columns: 148px 1fr;
    padding: 2rem 2.5rem;

    background-color: ${props=>props.theme["base-profile"]};
    border-radius: 10px;
    gap: 2rem;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
`

export const ImageProfile = styled.img`
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 8px;

`

export const HeaderProfile = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0rem;

    strong{
        font-size: 1.5rem;
    }

    a{
        display: flex;
        gap: 0.5rem;

        text-decoration: none;
        text-transform: uppercase;
        color: ${props=>props.theme["blue"]};
        border-bottom: 1.5px solid transparent;
        font-size: 0.75rem;

        transition: border-bottom 0.2s;

        &:hover{
            box-sizing: inherit;
            border-bottom: 1.5px solid ${props=>props.theme["blue"]};
        }
    }
`

export const MainProfile = styled.span`
    display: inline-block;
    margin-bottom: 1.5rem;

    color:${props=>props.theme["base-text"]};
`

export const FooterProfile = styled.footer`
    display: flex;
    gap: 1.5rem;

    span{
        display: flex;
        align-items: center;
        gap:0.5rem;
        color:${props=>props.theme["base-subtitle"]};
    }
`