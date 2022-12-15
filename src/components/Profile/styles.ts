import styled from "styled-components"

export const LayoutProfile = styled.main`
    display: grid;
    grid-template-columns: 148px 1fr;
    padding: 2rem 2.5rem;

    background-color: ${props=>props.theme["base-profile"]};
    border-radius: 10px;
    gap: 2rem;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);

    @media(max-width: 930px){
        grid-template-columns: 140px 1fr;
    }

    @media(max-width:715px){
        grid-template-columns: 132px 1fr;
    }

    @media(max-width:625px){
        grid-template-columns: 118px 1fr;
    }

`

export const ImageProfile = styled.img`
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 8px;

    @media(max-width: 930px){
        width: 8.75rem;
        height: 8.75rem;
    }

    @media(max-width: 715px){
        width: 8.25rem;
        height: 8.25rem;
    }

    @media(max-width: 625px){
        width: 7.3rem;
        height: 7.3rem;
    }

`

export const HeaderProfile = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0rem;

    strong{
        font-size: 1.5rem;

        @media(max-width: 414px){
            font-size: 1.2rem;
        }
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

    @media(max-width: 543px){
        flex-direction: column;
    }

`

export const MainProfile = styled.span`
    display: inline-block;
    margin-bottom: 1.5rem;

    color:${props=>props.theme["base-text"]};

    @media(max-width: 970px){
        font-size: 0.875rem;
    }

    @media(max-width: 414px){
            font-size: 0.75rem;
            text-align: center;
    }
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

    @media(max-width: 1039px){
        font-size: 0.875rem;
    }

    @media(max-width: 970px){
        font-size: 0.75rem;
    }

    @media(max-width: 612px){
        flex-direction: column;
        gap:0.25rem;
    }
`