import { FC, ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import './Modal.scss'

interface ModalType {
  children: ReactNode;
  isOpen?: boolean;
  closeHandler: () => void;
}

const ModalInner:FC<ModalType> = ({ children, closeHandler }) => {
  useEffect(() => {
    const closeModalByEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    }

    document.addEventListener('keydown', closeModalByEscape)

    return () => {
      document.removeEventListener('keydown', closeModalByEscape)
    }
  }, [])

  const closeModalByClickButtonX = () => closeHandler()

  return (
    <div className="modalInner">
      <button onClick={closeModalByClickButtonX} className="ModalCloseBtn" type="button">&#10006;</button>
      {children}
    </div>
  )
}

export const Modal:FC<ModalType> = ({ isOpen, closeHandler, children }) => {
  if (!isOpen) return null

  const closeModalByClickWrapper = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      closeHandler()
    }
  }

  return createPortal(
    <div className="modalWr" onMouseDown={closeModalByClickWrapper}>
      <ModalInner closeHandler={closeHandler}>
        {children}
      </ModalInner>
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  )
}
