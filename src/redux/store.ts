import { configureStore } from '@reduxjs/toolkit'
import { initState } from './initState'
import { todosReducer } from './slices/todosSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState: initState,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
