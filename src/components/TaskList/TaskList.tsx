import React, {useEffect} from "react"
import {useAppDispatch, useAppSelector} from "../../utilities/hooks/redux"
import {CardBody} from "reactstrap"
import {TaskCard} from "./TaskCard"
import {NewTask} from "./NewTask"
import {FiltersEnum} from "../../types/enums"
import {refreshTasksCount} from "../Layout/store"

export const TaskList = (): React.ReactElement => {
  const {taskList, filteredTaskList} = useAppSelector((state) => state.taskList)
  const {isAddingNew, activeFilter} = useAppSelector((state) => state.layout)

  const dispatch = useAppDispatch()

  const currentTaskList = activeFilter === FiltersEnum.All ? taskList : filteredTaskList

  useEffect(() => {
    dispatch(refreshTasksCount(currentTaskList.length))
  }, [filteredTaskList, taskList])

  return (
    <CardBody className='overflow-scroll'>
      {isAddingNew && <NewTask/>}
      {currentTaskList.map((task) => <TaskCard key={task.id} {...task}/>)}
    </CardBody>
  )
}