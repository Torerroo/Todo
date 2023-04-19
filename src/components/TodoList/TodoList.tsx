import { FC } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { clearTodos, getAllTodosSelector } from '../../redux/slices/todosSlice'
import { TodoItem } from '../TodoItem/TodoItem'

export const TodoList: FC = () => {
  const todos = useAppSelector(getAllTodosSelector)

  const dispatch = useAppDispatch()

  const clearHandler = () => {
    dispatch(clearTodos())
  }

  return (
    <>
      <ul>
        {todos.map((todo, index) => <TodoItem key={todo.id} {...todo} index={index} />)}
      </ul>
      <button type="button" onClick={clearHandler}>Clear all</button>
    </>
  )
}
