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
import { useContext } from 'react'
import { BlogContext } from '../../contexts/BlogContext'
import { Link } from 'react-router-dom'

const searchFormValidationSchema = zod.object({
  search: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormValidationSchema>

export function Home() {
  const { repositories } = useContext(BlogContext)

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormValidationSchema),
  })

  function handleSearchRepository(data: SearchFormInputs) {
    console.log(data)
  }

  console.log(repositories)

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
          required
        />
      </form>
      <RepositoryCardsContent>
        {repositories.map((repository) => {
          return (
            <Link to={`/repository/${repository.name}`} key={repository.name}>
              <CardRepository
                description={repository.description}
                name={repository.name}
                createdAt={repository.createdAt}
              />
            </Link>
          )
        })}
      </RepositoryCardsContent>
    </HomeLayout>
  )
}
