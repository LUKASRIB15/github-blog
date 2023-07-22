import { styled } from 'styled-components'

export const ProfileRepositoryLayout = styled.header`
  background-color: ${(props) => props.theme['gray-700']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;

  h3 {
    font-size: 1.5rem;
    line-height: 1.3;
  }
`

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  a {
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    border-bottom: 1px solid transparent;

    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['blue-500']};
    transition: border-bottom 0.2s;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme['blue-500']};
    }
  }
`

export const InfoRepository = styled.footer`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['gray-300']};
  }

  svg {
    font-size: 1.125rem;
    color: ${(props) => props.theme['gray-400']};
  }
`
