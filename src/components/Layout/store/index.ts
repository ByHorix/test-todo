import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {FiltersEnum} from "../../../types/enums"

const initialState = {
  isAddingNew: false,
  activeFilter: FiltersEnum.All,
  tasksCount: 0
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    switchAddingNew: (state) => {
      state.isAddingNew = !state.isAddingNew
    },

    changeActiveFilter: (state, action: PayloadAction<FiltersEnum>) => {
      state.activeFilter = action.payload
    },

    refreshTasksCount: (state, action) => {
      state.tasksCount = action.payload
    }
  }
})

export const {
  switchAddingNew,
  changeActiveFilter,
  refreshTasksCount
} = layoutSlice.actions

export default layoutSlice.reducer
