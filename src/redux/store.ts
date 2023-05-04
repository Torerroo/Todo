import { configureStore } from '@reduxjs/toolkit'
import { getInitStateFromLS } from './initState'
import { todosReducer } from './slices/todosSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState: getInitStateFromLS(),
})

store.subscribe(() => {
  window.localStorage.setItem('TodoList', JSON.stringify(store.getState()))
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
