import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Task} from "../../../types"

type State = {
  taskList: Task[]
}

// Define the initial state using that type
const initialState: State = {
  taskList: []
}

export const taskListSlice = createSlice({
  name: 'taskList',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<Task>) => {
      state.taskList = [...state.taskList, action.payload]
    },
  },
})

export const { addNewTask,  } = taskListSlice.actions

export default taskListSlice.reducer