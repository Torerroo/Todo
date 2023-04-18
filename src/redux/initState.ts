import { Todo } from '../models/TodosTypes'

interface InitialReduxState {
  todos: Todo[]
}

export const getInitState = (): InitialReduxState => ({
  todos: [],
})

export const initState = getInitState()
