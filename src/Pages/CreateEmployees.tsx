import { useState } from 'react'
import { styled } from 'styled-components'

import { LeftSideOfScreen } from '../Components/LeftSideOfScreen'
import { RightSideOfScreen } from '../Components/RightSideOfScreen'
import { Form } from '../Components/Form'
import { Modal } from 'final-project-react-modal'

const Container = styled.main`
  display: flex;
  height: 100vh;
`

export function CreateEmployees() {
  const [visible, setVisible] = useState(false)
  function setModalVisibility(bool: boolean) {
    if (bool) setVisible(true)
  }
  function listenCloseIsClicked(isClicked: boolean) {
    setVisible(isClicked)
  }
  return (
    <Container>
      <Modal
        visibleBool={visible}
        injectedText="Employee created !"
        closeIsClicked={listenCloseIsClicked}
      />
      <LeftSideOfScreen page="create" />
      <RightSideOfScreen>
        <Form setModalVisibility={setModalVisibility} />
      </RightSideOfScreen>
    </Container>
  )
}
