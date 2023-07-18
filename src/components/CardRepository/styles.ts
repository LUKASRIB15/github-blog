import { styled } from 'styled-components'

export const CardLayout = styled.section`
  width: 416px;
  background-color: ${(props) => props.theme['gray-600']};
  padding: 2rem;
  border-radius: 10px;
  position: relative;
  border: 2px solid transparent;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  transition: border 0.2s;

  p {
    line-height: 1.6;
    color: ${(props) => props.theme['gray-200']};
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['gray-400']};
  }
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    width: 283px;
    font-size: 1.25rem;
    line-height: 1.6;
  }

  span {
    display: inline-block;
    margin-top: 0.3rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-300']};
  }
`
