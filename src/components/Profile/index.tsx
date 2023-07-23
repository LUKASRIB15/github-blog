import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { InfoProfile, LinkForGithub, ProfileLayout } from './styles'
import { useContext } from 'react'
import { BlogContext } from '../../contexts/BlogContext'

export function Profile() {
  const { profile } = useContext(BlogContext)
  return (
    <ProfileLayout>
      <img src={profile.avatarUrl} alt="" />
      <InfoProfile>
        <div>
          <strong>{profile.name}</strong>
          <LinkForGithub href="https://github.com/LUKASRIB15">
            <div>
              github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          </LinkForGithub>
        </div>
        <p>{profile.description}</p>
        <footer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            {profile.userName}
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            Estudante
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} /> {profile.followers}{' '}
            seguidores
          </div>
        </footer>
      </InfoProfile>
    </ProfileLayout>
  )
}
