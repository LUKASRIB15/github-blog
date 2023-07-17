import styled from 'styled-components'

export const ProfileLayout = styled.header`
  background-color: ${(props) => props.theme['gray-700']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem 2.5rem;

  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;

    object-fit: cover;
    aspect-ratio: 1/1;
  }
`

export const InfoProfile = styled.section`
  div {
    display: flex;
    justify-content: space-between;

    strong {
      font-weight: bold;
      font-size: 1.5rem;
      line-height: 1.3;
    }
  }

  p {
    color: ${(props) => props.theme['gray-200']};
    line-height: 1.6;
    margin-bottom: 1.5rem;
    margin-top: 0.5rem;
  }

  footer {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    color: ${(props) => props.theme['gray-100']};

    svg {
      font-size: 1.125rem;
      color: ${(props) => props.theme['gray-400']};
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

export const LinkForGithub = styled.a`
  color: ${(props) => props.theme['blue-500']};
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: bold;
  text-decoration: none;
  height: max-content;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme['blue-500']};
  }
`
