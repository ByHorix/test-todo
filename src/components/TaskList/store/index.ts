import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Task} from "../../../types"
import {sortByTaskNumber} from "../../../utilities/Utills"

type State = {
  taskList: Task[]
}

// Define the initial state using that type
const initialState: State = {
  taskList: [{id: 111, taskNumber: 1, isEditing: false, description: 'hello', isCompleted: false}]
}

export const taskListSlice = createSlice({
  name: 'taskList',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    switchIsEditing: (state, action: PayloadAction<{taskId: number, newEditingValue: boolean}>) => {
      const {taskId, newEditingValue} = action.payload

      state.taskList = state.taskList.map((task) => ({...task, isEditing: false}))

      if (newEditingValue) {
        const currentTask = state.taskList.find((task) => task.id === taskId)

        if (currentTask) {
          const restTaskList = state.taskList.filter((task) => task.id !== taskId)

          state.taskList = sortByTaskNumber([
            {...currentTask, isEditing: newEditingValue},
            ...restTaskList
          ])
        }
      }
    },

    editTask: (state, action: PayloadAction<Task>) => {
      state.taskList = sortByTaskNumber([
        ...state.taskList.filter((task) => task.id !== action.payload.id),
        action.payload
      ]).map((task) => ({...task, isEditing: false}))
    },

    addNewTask: (state, action: PayloadAction<Omit<Task, 'taskNumber'>>) => {
      const newTaskNumber = state.taskList[0].taskNumber + 1 || 1
      const newTask = {...action.payload, taskNumber: newTaskNumber}

      state.taskList = [
        {...newTask, taskNumber: 1},
        ...state.taskList.map((task) =>
          ({...task, taskNumber: task.taskNumber + 1}))
      ]
    },
  },
})

export const {
  addNewTask,
  switchIsEditing,
  editTask
} = taskListSlice.actions

export default taskListSlice.reducer