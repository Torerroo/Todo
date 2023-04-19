import { FC } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { Todo } from '../../models/TodosTypes'
import { changeTodoStatus, deleteTodo } from '../../redux/slices/todosSlice'

interface TodoItemProps extends Todo {
  index: number
}

export const TodoItem:FC<TodoItemProps> = ({
  id, title, status, index,
}) => {
  const dispatch = useAppDispatch()

  const statusHandler = () => {
    dispatch(changeTodoStatus(id))
  }
  const deleteHandler = () => {
    dispatch(deleteTodo(id))
  }

  return (
    <li>
      {index + 1}
      .
      {' '}
      {title}
      <span>
        <button onClick={statusHandler} type="button">{status ? 'Undone' : 'Done'}</button>
        <button onClick={deleteHandler} type="button">Delete</button>
      </span>
    </li>
  )
}
