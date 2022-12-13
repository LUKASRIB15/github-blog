import { FooterProfile, HeaderProfile, ImageProfile, LayoutProfile, MainProfile } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'

export function Profile(){
    return(
        <LayoutProfile>
            <aside>
                <ImageProfile src="https://github.com/LUKASRIB15.png"/>
            </aside>
            <main>
                <HeaderProfile>
                    <strong>Lucas Ribeiro</strong>
                    <a href="#">
                        github
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                    </a>
                </HeaderProfile>
                <MainProfile>
                    Desenvolvedor full-stack! Em busca de me especializar 
                    cada vez mais em JavaScript e React! Conheça um pouco
                    dos meus projetos!
                </MainProfile>
                <FooterProfile>
                    <span>
                        <FontAwesomeIcon icon={faGithub} color="#3A536B"/>
                        LUKASRIB15
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faBuilding} color="#3A536B"/>
                        Nenhuma
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faUserGroup} color="#3A536B"/>
                        2 seguidores
                    </span>
                </FooterProfile>
            </main>
        </LayoutProfile>
    )
}