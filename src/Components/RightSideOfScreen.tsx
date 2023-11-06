import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { RightSideOfScreenProps } from '../interfaces/RightSideOfScreenProps'

const Container = styled.section`
  position: relative;
  display: flex;
  width: 65%;
  height: 100vh;
  background: rgb(251, 225, 63);
`

const Title = styled(Link)`
  position: absolute;
  top: 30px;
  right: 50px;
  font-size: 4.5em;
  margin: auto;
  color: white;
  text-decoration: none;
`

export function RightSideOfScreen({ children }: RightSideOfScreenProps) {
  return (
    <Container>
      <Title to="/">HRnet</Title>
      {children}
    </Container>
  )
}
