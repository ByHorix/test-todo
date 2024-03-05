import React from "react"
import {useAppSelector} from "../../hooks/redux"
import {CardBody} from "reactstrap"
import {TaskCard} from "./TaskCard"

export const TaskList = (): React.ReactElement => {
  const {taskList} = useAppSelector((state) => state.taskList)

  return (
    <CardBody>
      {taskList.map((task) => <TaskCard {...task}/>)}
    </CardBody>
  )
}