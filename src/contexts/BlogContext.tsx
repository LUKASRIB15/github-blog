import { createContext, ReactNode, useState } from "react";
import { api } from "../lib/axios";

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
    getApiGithubUser: ()=>Promise<void>;
    getApiGithubRepository: ()=>Promise<void>;
    getIdRepository: (chooseId: number)=>void;
}

export const BlogContext = createContext({} as blogContextTypes)

interface ProviderProps{
    children: ReactNode;
}

export function BlogContextProvider({children}:ProviderProps){
    const [repositoryId, setRepositoryId] = useState(0);
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

    function getIdRepository(chooseId: number){
        setRepositoryId(chooseId)
    }

    return(
        <BlogContext.Provider value={{
            getApiGithubUser,
            getApiGithubRepository,
            profile,
            listCards,
            repositoryId,
            getIdRepository,
        }}>
            {children}
        </BlogContext.Provider>
    )
}
