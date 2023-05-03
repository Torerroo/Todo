import { AddNewTodo } from '../AddNewTodo/AddNewTodo'
import { Header } from '../Header/Header'
import { TodoList } from '../TodoList/TodoList'
import './App.scss'

export function App() {
  return (
    <div className="App">
      <Header />
      <AddNewTodo />
      <TodoList />
    </div>
  )
}
