import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {FiltersEnum} from "../../../types/enums"

const initialState = {
  isAddingNew: false,
  activeFilter: FiltersEnum.All
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
  }
})

export const {
  switchAddingNew,
  changeActiveFilter
} = layoutSlice.actions

export default layoutSlice.reducer
