import { LayoutCardRepository, MainCardRepository, MenuCardRepository, TextCardRepository } from "./styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faChevronLeft, faArrowUpRightFromSquare, faCalendarDay, faComment} from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
export function CardRepository(){
    return(
        <LayoutCardRepository>
            <MenuCardRepository>
                <NavLink to="/">
                    <FontAwesomeIcon icon={faChevronLeft}/>
                    Voltar
                </NavLink>
                <a href="#">
                    Ver no github
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                </a>
            </MenuCardRepository>
            <TextCardRepository>JavaScript data typesand data structures</TextCardRepository>
            <MainCardRepository>
                <span>
                    <FontAwesomeIcon color="#3A536B"icon={faGithub}/> 
                    LUKASRIB15
                </span>
                <span>
                    <FontAwesomeIcon color="#3A536B"icon={faCalendarDay}/>
                    Há 1 dia
                </span>
                <span>
                    <FontAwesomeIcon color="#3A536B"icon={faComment}/>
                    5 comentários
                </span>
            </MainCardRepository>
        </LayoutCardRepository>
    )
}