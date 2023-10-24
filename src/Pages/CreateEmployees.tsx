import { styled } from 'styled-components'

import { Header } from '../Components/Header'

const Container = styled.main`
  display: flex;
  flex-direction: column;
`

const SecondTitle = styled.h2`
  margin: auto;
`

const Form = styled.form`
  margin: auto;
`

export function CreateEmployees() {
  return (
    <Container>
      <Header />
      <SecondTitle>Create Employee</SecondTitle>
      <Form action="">form</Form>
    </Container>
  )
}
