import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  isAddingNew: false
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    switchAddingNew: (state) => {
      state.isAddingNew = !state.isAddingNew
    }
  }
})

export const {switchAddingNew} = layoutSlice.actions

export default layoutSlice.reducer
