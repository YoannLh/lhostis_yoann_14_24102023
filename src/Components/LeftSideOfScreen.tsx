import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

import { LeftSideOfScreenProps } from '../interfaces/LeftSideOfScreenProps'

const Container = styled.header`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 100vh;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`

const SecondTitle = styled.h2`
  font-size: 2.5em;
  margin: auto;
`

const LinkToListOfEmployees = styled(Link)`
  position: relative;
  bottom: 50px;
  font-size: 1.2em;
  color: black;
  text-align: center;
`

export function LeftSideOfScreen({ page }: LeftSideOfScreenProps) {
  return (
    <Container>
      <TitleContainer>
        <SecondTitle>
          {page === 'create' ? 'Create Employees' : 'List of employees'}
        </SecondTitle>
      </TitleContainer>
      <LinkToListOfEmployees to={page === 'create' ? `/listOfEmployees` : `/`}>
        {page === 'create' ? 'List of employees' : 'Create Employees'}
      </LinkToListOfEmployees>
    </Container>
  )
}
