import { LayoutCardRepository, MainCardRepository, MenuCardRepository, TextCardRepository } from "./styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChevronLeft, faArrowUpRightFromSquare, faCalendarDay, faComment} from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../../contexts/BlogContext";
export function CardRepository(){
    const {listCards, profile, repositoryId} = useContext(BlogContext)
    return(
        <LayoutCardRepository>
                {listCards.map(
                    repositoryDetails=>{
                        if(repositoryDetails.id == repositoryId){
                            return(
                                <>
                                <MenuCardRepository>
                                    <NavLink to="/">
                                        <FontAwesomeIcon icon={faChevronLeft}/>
                                        Voltar
                                    </NavLink>
                                    <a href={"https://github.com/" + profile[0].login +"/" + repositoryDetails.name}>
                                        Ver no github
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                                    </a>
                                </MenuCardRepository>
                                <TextCardRepository>{repositoryDetails.name}</TextCardRepository>
                                <MainCardRepository>
                                    <span>
                                        <FontAwesomeIcon color="#3A536B"icon={faGithub}/> 
                                        {profile[0].login}
                                    </span>
                                    <span>
                                        <FontAwesomeIcon color="#3A536B"icon={faCalendarDay}/>
                                        {repositoryDetails.created_at}
                                    </span>
                                    <span>
                                        <FontAwesomeIcon color="#3A536B"icon={faComment}/>
                                        2 comentários
                                    </span>
                                </MainCardRepository>
                                </>
                            )
                        }
                    }
                )}
        </LayoutCardRepository>
    )
}