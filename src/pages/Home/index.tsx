import { useForm } from 'react-hook-form'
import { CardRepository } from '../../components/CardRepository'
import { Profile } from '../../components/Profile'
import {
  HomeLayout,
  InfoPublications,
  RepositoryCardsContent,
  SearchInput,
} from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState } from 'react'
import { BlogContext, RepositoryProps } from '../../contexts/BlogContext'
import { Link } from 'react-router-dom'
import { api } from '../../lib/api'

const searchFormValidationSchema = zod.object({
  search: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormValidationSchema>

export function Home() {
  const [repositorySearch, setRepositorySearch] = useState<RepositoryProps | null>(null)

  const { repositories} = useContext(BlogContext)

  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormValidationSchema),
  })

  async function handleSearchRepository(data: SearchFormInputs) {
    const response = await api.get(`/repos/LUKASRIB15/${data.search}`)
    
    setRepositorySearch({name: response.data.name,
      description: response.data.description,
      createdAt: response.data.created_at})

    reset()
  }

  return (
    <HomeLayout>
      <Profile />
      <InfoPublications>
        <strong>Publicações</strong>
        <span>{repositories.length} publicações</span>
      </InfoPublications>
      <form onSubmit={handleSubmit(handleSearchRepository)}>
        <SearchInput
          type="text"
          placeholder="Buscar conteúdo"
          {...register('search')}
        />
      </form>
      <RepositoryCardsContent>
        {
          repositorySearch == null ?
          repositories.map((repository) => {
            return (
              <Link to={`/repository/${repository.name}`} key={repository.name}>
                <CardRepository
                  description={repository.description}
                  name={repository.name}
                  createdAt={repository.createdAt}
                />
              </Link>
            )
          })
          :
          <Link to={`/repository/${repositorySearch.name}`} key={repositorySearch.name}>
              <CardRepository
                description={repositorySearch.description}
                name={repositorySearch.name}
                createdAt={repositorySearch.createdAt}
              />
          </Link>
        }
      </RepositoryCardsContent>
    </HomeLayout>
  )
}
