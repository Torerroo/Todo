import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './components/App/App'
import { Main } from './components/Main/Main'
import { Todo } from './components/Todo/Todo'
import './index.scss'
import { store } from './redux/store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: 'todolist',
          element: <Todo />,
        },
      ],
    },
  ],
  { basename: '/TodoList' },
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
