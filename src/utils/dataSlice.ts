import { createSlice } from '@reduxjs/toolkit'

import { DataStateProps } from '../interfaces/DataStateProps'

const initialState: DataStateProps = {
  value: [],
}

export const updateData = createSlice({
  name: 'data',
  initialState,
  reducers: {
    update: (state, data) => {
      const newEmployee = { employee: data.payload.employee }
      state.value.push(newEmployee)
    },
  },
})

export const { update } = updateData.actions

export default updateData.reducer
