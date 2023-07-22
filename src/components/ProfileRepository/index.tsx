import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { ProfileRepositoryLayout, NavLinks, InfoRepository } from './styles'

export function ProfileRepository() {
  return (
    <ProfileRepositoryLayout>
      <NavLinks>
        <a href="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </a>
        <a href="#">
          Ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </NavLinks>
      <h3>JavaScript data types and data structures</h3>
      <InfoRepository>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          LUKASRIB15
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          Há 1 dia
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />5 comentários
        </div>
      </InfoRepository>
    </ProfileRepositoryLayout>
  )
}
