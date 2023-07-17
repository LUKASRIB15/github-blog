import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { InfoProfile, LinkForGithub, ProfileLayout } from './styles'

export function Profile() {
  return (
    <ProfileLayout>
      <img src="https://github.com/LUKASRIB15.png" alt="" />
      <InfoProfile>
        <div>
          <strong>Lucas Ribeiro</strong>
          <LinkForGithub href="https://github.com/LUKASRIB15">
            <div>
              github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          </LinkForGithub>
        </div>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <footer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            LUKASRIB15
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            Estudante
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} /> 9 seguidores
          </div>
        </footer>
      </InfoProfile>
    </ProfileLayout>
  )
}
