import React from "react"
import {useAppSelector} from "../../utilities/hooks/redux"
import {CardBody} from "reactstrap"
import {TaskCard} from "./TaskCard"
import {NewTask} from "./NewTask"
import {FiltersEnum} from "../../types/enums"

export const TaskList = (): React.ReactElement => {
  const {taskList, filteredTaskList} = useAppSelector((state) => state.taskList)
  const {isAddingNew, activeFilter} = useAppSelector((state) => state.layout)

  const currentTaskList = activeFilter === FiltersEnum.All ? taskList : filteredTaskList

  return (
    <CardBody className='overflow-scroll'>
      {isAddingNew && <NewTask/>}
      {currentTaskList.map((task) => <TaskCard key={task.id} {...task}/>)}
    </CardBody>
  )
}