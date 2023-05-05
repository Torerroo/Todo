import { Dispatch, FC } from 'react'
import { Modal } from '../Modal/Modal'
import { Todo } from '../../models/TodosTypes'
import './TodoDetail.scss'

interface TodoDetailProps extends Todo {
  isCheckDetailModalOpen: boolean,
  setIsCheckDetailModalOpen: Dispatch<React.SetStateAction<boolean>>
}

export const TodoDetail:FC<TodoDetailProps> = (
  {
    isCheckDetailModalOpen, setIsCheckDetailModalOpen, id, status, title,
  },
) => {
  const closeCheckDetailModalHandler = () => {
    setIsCheckDetailModalOpen(false)
  }

  return (
    <Modal isOpen={isCheckDetailModalOpen} closeHandler={closeCheckDetailModalHandler}>
      <div className="TodoDetail__container">
        <h3>Detail info</h3>
        <p>
          <span>ID:</span>
          {' '}
          {id}
        </p>
        <p>
          <span>Title:</span>
          {' '}
          {title}
        </p>
        <p>
          <span>Status:</span>
          {' '}
          {status ? 'Undone' : 'Done'}
        </p>
      </div>
    </Modal>
  )
}
