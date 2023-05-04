import { FC } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { clearTodos, getAllTodosSelector } from '../../redux/slices/todosSlice'
import { TodoItem } from '../TodoItem/TodoItem'
import './TodoList.scss'

export const TodoList: FC = () => {
  const todos = useAppSelector(getAllTodosSelector)

  const dispatch = useAppDispatch()

  const clearHandler = () => {
    dispatch(clearTodos())
  }

  return (
    <div className="todoList__container">
      <ul>
        {todos.map(
          (todo, index: number) => <TodoItem key={todo.id} {...todo} index={index} />,
        )}
      </ul>
      <button type="button" className="btn btn-danger" onClick={clearHandler}>Clear all</button>
    </div>
  )
}
