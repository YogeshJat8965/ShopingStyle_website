import { configureStore } from '@reduxjs/toolkit'
import { CartSlice } from './Slices/Cartslice'

export const store = configureStore({
  reducer: {
    cart:CartSlice.reducer,
  }
})