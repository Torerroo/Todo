import { Todo } from '../models/TodosTypes'

interface InitialReduxState {
  todos: Todo[]
}

const getInitState = (): InitialReduxState => ({
  todos: [],
})

export const initState = getInitState()

export const getInitStateFromLS = () => {
  const dataFromLS = window.localStorage.getItem('TodoList')
  return dataFromLS ? JSON.parse(dataFromLS) : initState
}
