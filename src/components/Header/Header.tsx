/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.scss'

export const Header: FC = () => (
  <div className="header">
    <div className="header__container">
      <Link to="./" className="header__container-title">Let's do</Link>
      <NavLink
        to="./todolist"
        className={({ isActive }) => (isActive ? 'header__container-menu-active' : 'header__container-menu')}
      >
        TodoList
      </NavLink>
    </div>
  </div>
)
