import styled from 'styled-components'

import { LeftSideOfScreen } from '../Components/LeftSideOfScreen'
import { RightSideOfScreen } from '../Components/RightSideOfScreen'
import { StyledTable } from '../Components/StyledTable'

const Container = styled.main`
  display: flex;
  height: 100vh;
`

export function ListOfEmployees() {
  return (
    <Container>
      <LeftSideOfScreen page="list" />
      <RightSideOfScreen>
        <StyledTable />
      </RightSideOfScreen>
    </Container>
  )
}
