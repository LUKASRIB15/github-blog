import styled from "styled-components"

export const LayoutMainHome = styled.main`
    margin: -5.5rem 18rem 0rem ;

`
export const CardRepository = styled.div`
    padding: 2rem;
    width: 39.9%;

    background-color: ${props=>props.theme["base-post"]};
    border-radius: 10px;
    border: 2px solid transparent;
    box-sizing: inherit;

    transition: border 0.2s;

    &:hover{
        border: 2px solid ${props=>props.theme["base-label"]};
    }
`
export const HeaderCard = styled.header`
    display: grid;
    grid-template-columns: 1fr 80px;
    gap: 1rem;
    margin-bottom: 1.25rem;

    strong{
        font-size: 1.25rem;
    }

    span{
        color:${props=>props.theme["base-span"]};
        font-size: 0.875rem;
        text-align: right;
    }
`
export const MainCard = styled.main`
    color: ${props=>props.theme["base-text"]};
`
export const CardList = styled.main`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    width: 120%;
`