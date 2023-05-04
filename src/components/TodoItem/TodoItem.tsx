import { FC } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { Todo } from '../../models/TodosTypes'
import { changeTodoStatus, deleteTodo } from '../../redux/slices/todosSlice'
import './TodoItem.scss'

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
    <li className="todoitem">
      <span className={status ? 'text__line-through' : ''}>
        {index + 1}
        .
        {' '}
        {title}
      </span>
      <span>
        <button onClick={statusHandler} className={status ? 'btn btn-success' : 'btn btn-primary'} type="button">{status ? 'Undone' : 'Done'}</button>
        <button type="button" onClick={deleteHandler} className="btn btn-danger">Delete</button>
      </span>
    </li>
  )
}
