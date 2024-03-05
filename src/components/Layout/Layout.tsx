import {Card} from "reactstrap"
import React from "react"
import {Header} from "./Header"

export const Layout = (): React.ReactElement => {
  return (
    <Card>
      <Header/>
    </Card>
  )
}