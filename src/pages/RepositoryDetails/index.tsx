import { useContext } from "react";
import { CardRepository } from "../../components/CardRepository";
import { BlogContext } from "../../contexts/BlogContext";
import { DescriptionRepositoryDetails, LayoutMainRepositoryDetails } from "./styles";

export function RepositoryDetails(){
    const {listCards, repositoryId} = useContext(BlogContext)
    return(
        <LayoutMainRepositoryDetails>
            <CardRepository/>
            <DescriptionRepositoryDetails>
                {listCards.map(
                    repositoryDetails =>{
                        if(repositoryDetails.id==repositoryId){
                            return (
                                <p>{repositoryDetails.description}</p>
                            )
                        }
                    }
                )}
            </DescriptionRepositoryDetails>
        </LayoutMainRepositoryDetails>
    )
}