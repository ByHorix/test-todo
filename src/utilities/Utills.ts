import {Task} from "../types"
import {FiltersEnum} from "../types/enums"

export const validateTask = (task: string): boolean => task.length > 0 && task.length <= 60

export const filterPredicates = {
  [FiltersEnum.Current]: (task: Task): boolean => !task.isCompleted,
  [FiltersEnum.Completed]: (task: Task): boolean => task.isCompleted
}

export const sortByTaskNumber = (taskList: Task[]): Task[] =>
  taskList.sort((a, b) => a.taskNumber - b.taskNumber)
