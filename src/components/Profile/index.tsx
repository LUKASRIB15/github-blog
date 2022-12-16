import { FooterProfile, HeaderProfile, ImageProfile, LayoutProfile, MainProfile } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { BlogContext } from "../../contexts/BlogContext";
import { useContext, useEffect } from "react";

export function Profile(){
    const {profile, getApiGithubUser} = useContext(BlogContext)

    useEffect(()=>{
        getApiGithubUser()
    },[])
    return(
        <>
        {profile.map(user=>{
            return(
                <LayoutProfile key={user.avatar_url}>
            <aside>
                <ImageProfile src={user.avatar_url}/>
            </aside>
            <main>
                <HeaderProfile>
                    <strong>{user.name}</strong>
                    <a href="#">
                        github
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                    </a>
                </HeaderProfile>
                <MainProfile>
                    {user.bio}
                </MainProfile>
                <FooterProfile>
                    <span>
                        <FontAwesomeIcon icon={faGithub} color="#3A536B"/>
                        {user.login}
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faBuilding} color="#3A536B"/>
                        {
                            !user.company ?
                                <span>Nenhuma</span>
                            :
                                <span>{user.company}</span>      
                        }
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faUserGroup} color="#3A536B"/>
                        {user.followers} seguidores
                    </span>
                </FooterProfile>
            </main>
        </LayoutProfile>
            )
        })}
        </>
    )
}