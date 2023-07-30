import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/api'

interface BlogProviderProps {
  children: ReactNode
}

interface ProfileProps {
  name: string
  avatarUrl: string
  description: string
  followers: number
  userName: string
}

export interface RepositoryProps {
  name: string
  description: string
  createdAt: string
}

interface BlogContextProps {
  repositories: RepositoryProps[]
  profile: ProfileProps
}

export const BlogContext = createContext({} as BlogContextProps)

export function BlogContextProvider({ children }: BlogProviderProps) {
  const [repositories, setRepositories] = useState<RepositoryProps[]>([])
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps)


  async function loadingProfile() {
    const response = await api.get('/users/LUKASRIB15')
    setProfile({
      name: response.data.name,
      avatarUrl: response.data.avatar_url,
      description: response.data.bio,
      followers: response.data.followers,
      userName: response.data.login,
    })
  }

  async function loadingRepositories() {
    const response = await api.get('/users/LUKASRIB15/repos')
    const data = response.data.map((responseData: any) => {
      return {
        name: responseData.name,
        description: responseData.description,
        createdAt: responseData.created_at,
      }
    })
    setRepositories(data)
  }

  useEffect(() => {
    loadingProfile()
    loadingRepositories()
  }, [])

  return (
    <BlogContext.Provider value={{ repositories, profile }}>
      {children}
    </BlogContext.Provider>
  )
}
