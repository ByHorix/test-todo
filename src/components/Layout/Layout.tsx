import {Card} from "reactstrap"
import React from "react"
import {Header} from "./Header"
import {TaskList} from "../TaskList/TaskList"

export const Layout = (): React.ReactElement => {
  return (
    <Card>
      <Header/>
      <TaskList/>
    </Card>
  )
}