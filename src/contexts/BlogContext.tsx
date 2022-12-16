import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";
import axios from "axios"

interface ProfileData{
    name: string;
    avatar_url: string;
    bio: string;
    login: string;
    company?: string;
    followers: number;
}

interface CardData{
    id: number;
    name: string;
    description: string;
    created_at: string;
}

interface blogContextTypes{
    profile: ProfileData[];
    listCards: CardData[];
    repositoryId: number;
    search: string;
    getApiGithubUser: ()=>Promise<void>;
    getApiGithubRepository: ()=>Promise<void>;
    getIdRepository: (chooseId: number)=>void;
    getNameRepository: (query:string)=>Promise<void>;
}

export const BlogContext = createContext({} as blogContextTypes)

interface ProviderProps{
    children: ReactNode;
}

export function BlogContextProvider({children}:ProviderProps){
    const [repositoryId, setRepositoryId] = useState(0);
    const [search, setSearch] = useState("")
    const [profile, setProfile] = useState<ProfileData[]>([])
    const [listCards, setListCards] = useState<CardData[]>([])
    
    async function getApiGithubUser(){

        const responseUser = await api.get("/LUKASRIB15");
        setProfile([responseUser.data])
        
        // fetch("https://api.github.com/users/LUKASRIB15")
        // .then(
        //     async responseUser =>{
        //         const data = await responseUser.json();
        //         setProfile([data])
        //     }
        // )
    }

    async function getApiGithubRepository(){

        const responseRepository = await api.get("/LUKASRIB15/repos")
        setListCards(responseRepository.data)

        // await fetch("https://api.github.com/users/LUKASRIB15/repos")
        // .then(
        //     async responseRepository=>{
        //         const data = await responseRepository.json()
        //         setListCards(data)
        //     }
        // )
    }

    async function getNameRepository(query:string){
        setSearch(query)
    }

    function getIdRepository(chooseId: number){
        setRepositoryId(chooseId)
    }

    useEffect(()=>{
        getApiGithubRepository()
    }, [])

    return(
        <BlogContext.Provider value={{
            getApiGithubUser,
            getApiGithubRepository,
            profile,
            listCards,
            repositoryId,
            search,
            getIdRepository,
            getNameRepository,
        }}>
            {children}
        </BlogContext.Provider>
    )
}
