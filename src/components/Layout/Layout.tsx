import {Card} from "reactstrap"
import React from "react"
import {Header} from "./Header"
import {TaskList} from "../TaskList/TaskList"
import {ActionsBlock} from "../TaskList/ActionsBlock/ActionsBlock"
import {useAppSelector} from "../../utilities/hooks/redux"

export const Layout = (): React.ReactElement => {
  const {taskList} = useAppSelector(state => state.taskList)

  return (
    <Card className='h-100'>
      <Header/>
      {taskList.length > 0 && <ActionsBlock/>}
      <TaskList/>
    </Card>
  )
}