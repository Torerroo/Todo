import { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { addNewTodo } from '../../redux/slices/todosSlice'

export const AddNewTodo = () => {
  const [title, setTitle] = useState('')

  const dispatch = useAppDispatch()

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
    <form onSubmit={submitHandler}>
      <div>
        <input type="text" placeholder="title..." value={title} onChange={changeTitleHandler} />
      </div>
      <button type="submit">Add</button>
    </form>
  )
}
