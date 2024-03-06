import React from "react"
import {useAppSelector} from "../../utilities/hooks/redux"
import {CardBody} from "reactstrap"
import {TaskCard} from "./TaskCard"
import {NewTask} from "./NewTask"

export const TaskList = (): React.ReactElement => {
  const {taskList} = useAppSelector((state) => state.taskList)
  const {isAddingNew} = useAppSelector((state) => state.layout)

  return (
    <CardBody className='overflow-scroll'>
      {isAddingNew && <NewTask/>}
      {taskList.map((task) => <TaskCard key={task.id} {...task}/>)}
    </CardBody>
  )
}