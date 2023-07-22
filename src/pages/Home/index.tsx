import { CardRepository } from '../../components/CardRepository'
import { Profile } from '../../components/Profile'
import {
  HomeLayout,
  InfoPublications,
  RepositoryCardsContent,
  SearchInput,
} from './styles'

export function Home() {
  return (
    <HomeLayout>
      <Profile />
      <InfoPublications>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </InfoPublications>
      <form>
        <SearchInput type="text" placeholder="Buscar conteúdo" />
      </form>
      <RepositoryCardsContent>
        <a href="/repository/gauyagwf">
          <CardRepository />
        </a>
        <CardRepository />
        <CardRepository />
        <CardRepository />
        <CardRepository />
        <CardRepository />
      </RepositoryCardsContent>
    </HomeLayout>
  )
}
