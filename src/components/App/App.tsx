import { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header'
import './App.scss'

export function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  )
}
