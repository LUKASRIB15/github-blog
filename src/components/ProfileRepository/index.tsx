import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ProfileRepositoryLayout, NavLinks, InfoRepository } from './styles'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { BlogContext } from '../../contexts/BlogContext'
import { formattedDate } from '../../utils/formatter'

export function ProfileRepository() {
  const { id } = useParams()
  const { repositories, profile } = useContext(BlogContext)
  const repository = repositories.find((repos) => {
    return repos.name === id
  })

  if (!repository) {
    return <div>ERRO 404: NÃO FOI ENCONTRADO!</div>
  }

  return (
    <ProfileRepositoryLayout>
      <NavLinks>
        <a href="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </a>
        <a href={`https://github.com/LUKASRIB15/${id}`}>
          Ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </NavLinks>
      <h3>{repository.name}</h3>
      <InfoRepository>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          {profile.userName}
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          {formattedDate(repository.createdAt)}
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />0 comentários
        </div>
      </InfoRepository>
    </ProfileRepositoryLayout>
  )
}
