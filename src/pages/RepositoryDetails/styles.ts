import styled from "styled-components"

export const LayoutMainRepositoryDetails = styled.main`
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

export const DescriptionRepositoryDetails = styled.div`
    padding: 2.5rem 2rem;
    color: ${props=>props.theme["base-text"]};
    line-height: 1.6;
    
    a{
        color:${props=>props.theme["blue"]};
    }
`