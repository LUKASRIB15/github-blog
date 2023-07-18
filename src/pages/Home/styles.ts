import { styled } from 'styled-components'

export const HomeLayout = styled.div`
  max-width: 864px;
  margin: 0 auto;
  padding-top: 13rem;
  padding-bottom: 14.625rem;
`

export const InfoPublications = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4.5rem;
  margin-bottom: 0.75rem;
  font-size: 1.125rem;

  span {
    color: ${(props) => props.theme['gray-300']};
    font-size: 0.875rem;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  background-color: ${(props) => props.theme['gray-900']};
  border: 1px solid ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme['gray-200']};

  &:focus {
    outline: 1px solid ${(props) => props.theme['blue-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-400']};
  }
`

export const RepositoryCardsContent = styled.main`
  margin-top: 3rem;

  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`
