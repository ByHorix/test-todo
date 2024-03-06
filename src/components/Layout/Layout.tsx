import {Card} from "reactstrap"
import React from "react"
import {Header} from "./Header"
import {TaskList} from "../TaskList/TaskList"
import {ActionsBlock} from "../TaskList/ActionsBlock/ActionsBlock"

export const Layout = (): React.ReactElement => {
  return (
    <Card className='h-100'>
      <Header/>
      <ActionsBlock/>
      <TaskList/>
    </Card>
  )
}