import { FC } from 'react'
import { AddNewTodo } from '../AddNewTodo/AddNewTodo'
import { TodoList } from '../TodoList/TodoList'
import './Todo.scss'

export const Todo: FC = () => (
  <div className="todo__container">
    <AddNewTodo />
    <TodoList />
  </div>
)
