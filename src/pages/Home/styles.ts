import styled from "styled-components"

export const LayoutMainHome = styled.main`
    margin: -5.5rem 18rem 0rem;

    @media(max-width: 1230px){
        margin: -7.5rem 15rem 0rem;
    }

    @media(max-width: 1130px){
        margin: -7.5rem 12rem 0rem;
    }

    @media(max-width: 1000px){
        margin: -9.5rem 11rem 0rem;
    }

    @media(max-width: 921px){
        margin: -10.5rem 9rem 0rem;
    }

    @media(max-width: 860px){
        margin: -10.5rem 7rem 0rem;
    }

    @media(max-width: 794px){
        margin: -11.5rem 4.5rem 0rem;
    }

    @media(max-width: 706px){
        margin: -12.5rem 3rem 0rem;
    }

    @media(max-width: 652px){
        margin: -13rem 2rem 0rem;
    }

    @media(max-width: 543px){
        margin-top: -13.5rem;
    }

    @media(max-width: 505px){
        margin-top: -14rem;
    }

    @media(max-width: 414px){
        margin: -14.5rem 1rem 0rem;
    }

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

    @media(max-width: 768px){
        width: 100%;
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

    @media(max-width: 768px){
        width: 100%;
        flex-direction: column;
    }
`