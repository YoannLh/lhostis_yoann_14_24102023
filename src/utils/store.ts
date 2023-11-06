import { configureStore } from '@reduxjs/toolkit'
import updateData from './dataSlice'

export const store = configureStore({
  reducer: {
    updateData: updateData,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
