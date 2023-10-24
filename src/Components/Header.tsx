import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.header`
  position: relative;
  display: flex;
  width: 100%;
  height: 100px;
`

const Title = styled.h1`
  margin: auto;
`

const LinkToListOfEmployees = styled(Link)`
  position: absolute;
  right: 80px;
  top: 40px;
  text-decoration: none;
  color: black;
`

export function Header() {
  return (
    <Container>
      <Title>HRnet</Title>
      <LinkToListOfEmployees to="/listOfEmployees">
        Liste des Employés
      </LinkToListOfEmployees>
    </Container>
  )
}
