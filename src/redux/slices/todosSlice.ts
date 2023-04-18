import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Todo } from '../../models/TodosTypes'
import { initState } from '../initState'
import { RootState } from '../store'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: initState.todos,
  reducers: {
    addNewTodo: {
      reducer(state, action: PayloadAction<Todo>) {
        state.push(action.payload)
      },
      prepare(title: string) {
        return {
          payload: {
            id: crypto.randomUUID(),
            title,
            status: false,
          },
        }
      },
    },
    deleteTodo(state, action: PayloadAction<Todo['id']>) {
      return state.filter((todo) => todo.id !== action.payload)
    },
    changeTodoStatus(state, action: PayloadAction<Todo['id']>) {
      const currentTodo = state.find((todo) => todo.id === action.payload)
      if (currentTodo) {
        currentTodo.status = !currentTodo.status
      }
    },
    clearTodos() {
      return []
    },
  },
})

export const {
  addNewTodo, deleteTodo, changeTodoStatus, clearTodos,
} = todosSlice.actions

export const getAllTodosSelector = (state: RootState) => state.todos

export const todosReducer = todosSlice.reducer
