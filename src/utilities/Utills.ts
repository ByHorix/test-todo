import {Task} from "../types"

export const validateTask = (task: string): boolean => task.length > 0 && task.length <= 60

export const sortByTaskNumber = (taskList: Task[]): Task[] =>
  taskList.sort((a, b) => a.taskNumber - b.taskNumber)
