import { ChangeEvent, FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { addNewTodo } from '../../redux/slices/todosSlice'
import './AddNewTodo.scss'

export const AddNewTodo = () => {
  const [title, setTitle] = useState('')

  const dispatch = useAppDispatch()

  const toasterHandler = () => {
    if (title.trim()) {
      toast.success(`Задача "${title}" добавлена`, {
        duration: 3000,
      })
    }
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const todoTitle = title.trim()

    if (todoTitle) {
      dispatch(addNewTodo(todoTitle))
      setTitle('')
    }
  }

  const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  return (
    <div className="addNewTodo__container">
      <form onSubmit={submitHandler}>
        <div>
          <input type="text" placeholder="title..." value={title} onChange={changeTitleHandler} className="addNewTodo__input" />
        </div>
        <button type="submit" onClick={toasterHandler} className="addNewTodo__button btn btn-info">Append</button>
        <Toaster
          position="bottom-right"
          reverseOrder
        />
      </form>
      <hr />
    </div>
  )
}
