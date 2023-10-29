import { styled } from 'styled-components'

import { LeftSideOfScreen } from '../Components/LeftSideOfScreen'
import { RightSideOfScreen } from '../Components/RightSideOfScreen'
import { Form } from '../Components/Form'

const Container = styled.main`
  display: flex;
  height: 100vh;
`

export function CreateEmployees() {
  return (
    <Container>
      <LeftSideOfScreen />
      <RightSideOfScreen>
        <Form />
      </RightSideOfScreen>
    </Container>
  )
}
