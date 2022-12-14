import styled from "styled-components"

export const LayoutMainRepositoryDetails = styled.main`
    margin: -5.5rem 18rem 0rem;
`

export const DescriptionRepositoryDetails = styled.div`
    padding: 2.5rem 2rem;
    color: ${props=>props.theme["base-text"]};
    line-height: 1.6;
    
    a{
        color:${props=>props.theme["blue"]};
    }
`