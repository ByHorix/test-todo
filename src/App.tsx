import React from 'react'
import {Container} from "reactstrap"
import {Layout} from "./components/Layout/Layout"

function App():React.ReactElement {
  return (
    <Container className='vh-100'>
      <Layout/>
    </Container>
  )
}

export default App
