import {Card} from "reactstrap"
import React from "react"
import {Header} from "./Header"
import {TaskList} from "../TaskList/TaskList"

export const Layout = (): React.ReactElement => {
  return (
    <Card className='h-100'>
      <Header/>
      <TaskList/>
    </Card>
  )
}