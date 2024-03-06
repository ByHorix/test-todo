import {Task} from "../types"

export const sortByTaskNumber = (taskList: Task[]): Task[] =>
  taskList.sort((a, b) => a.taskNumber - b.taskNumber)
