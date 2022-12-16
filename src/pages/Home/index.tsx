import { useContext, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { FormSearch } from "../../components/FormSearch"
import { Profile } from "../../components/Profile"
import { BlogContext } from "../../contexts/BlogContext"
import { CardList, CardRepository, HeaderCard, LayoutMainHome, MainCard } from "./styles"
import {formatDistanceToNow} from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

export function Home(){
    const {listCards, getIdRepository, search} = useContext(BlogContext)

    function handleGetIdRepository(id: number){
        getIdRepository(id)
    }
    return(
            <LayoutMainHome>
                <Profile/>
                <FormSearch/>
                <CardList>
                    {
                        !search?
                        <>
                            {listCards.map(
                                repository=>{
                                    const publishedDateRelativeToNow = formatDistanceToNow(new Date(repository.created_at), {
                                        locale: ptBR,
                                    })
                                    return(
                                        <CardRepository key={repository.id}>
                                            <NavLink to={"/RepositoryDetails/"+ repository.id} onClick={()=>handleGetIdRepository(repository.id)}>
                                            <HeaderCard>
                                                <strong>{repository.name}</strong>
                                                <span>Há {publishedDateRelativeToNow}</span>
                                            </HeaderCard>
                                            <MainCard>
                                                <p>
                                                {repository.description} 
                                                </p>
                                            </MainCard>
                                            </NavLink>
                                        </CardRepository>
                                )
                                }
                            )}
                        </>
                        :
                        <>
                            {listCards.map(
                                repository=>{
                                    if(repository.name==search){
                                        const publishedDateRelativeToNow = formatDistanceToNow(new Date(repository.created_at),{
                                            locale: ptBR,
                                        })
                                        return(
                                            <CardRepository key={repository.id}>
                                                <NavLink to={"/RepositoryDetails/"+ repository.id} onClick={()=>handleGetIdRepository(repository.id)}>
                                                <HeaderCard>
                                                    <strong>{repository.name}</strong>
                                                    <span>Há {publishedDateRelativeToNow}</span>
                                                </HeaderCard>
                                                <MainCard>
                                                    <p>
                                                    {repository.description} 
                                                    </p>
                                                </MainCard>
                                                </NavLink>
                                            </CardRepository>
                                    )
                                    }
                                }
                            )}
                        </>
                    }
                </CardList>
            </LayoutMainHome>
    )
}