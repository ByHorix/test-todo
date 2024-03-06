import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {Task} from "../../../types"
import {filterPredicates, sortByTaskNumber} from "../../../utilities/Utills"
import {FiltersEnum} from "../../../types/enums"

type State = {
  taskList: Task[]
  activeFilter: FiltersEnum
  filteredTaskList: Task[]
}

// Define the initial state using that type
const initialState: State = {
  // taskList: [{id: 111, taskNumber: 1, isEditing: false, description: 'hello', isCompleted: false}]
  taskList: [],
  activeFilter: FiltersEnum.All,
  filteredTaskList: []
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
      const newTaskNumber = state.taskList[0]?.taskNumber + 1 || 1
      const newTask = {...action.payload, taskNumber: newTaskNumber}

      state.taskList = [
        {...newTask, taskNumber: 1},
        ...state.taskList.map((task) =>
          ({...task, taskNumber: task.taskNumber + 1}))
      ]
    },

    deleteTask: (state, action: PayloadAction<number>) => {
      const taskId = action.payload

      state.taskList = sortByTaskNumber(
        state.taskList.filter((task) => task.id !== taskId)
      ).map((task, index) => ({...task, taskNumber: index + 1}))
    },

    changeActiveFilter: (state, action: PayloadAction<FiltersEnum>) => {
      state.activeFilter = action.payload

      state.filteredTaskList = action.payload === FiltersEnum.All
        ? state.taskList
        : state.taskList.filter(filterPredicates[action.payload])
    }
  },
})

export const {
  addNewTask,
  switchIsEditing,
  editTask,
  deleteTask,
  changeActiveFilter
} = taskListSlice.actions

export default taskListSlice.reducer