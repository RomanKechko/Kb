import React from 'react'
import style from './modalOverlay.module.css'

interface IModalOverlayProps {
  closeModal?: () => void
}

export default function ModalOverlay ({
  closeModal
}: IModalOverlayProps) {
  return <div onClick={closeModal} className={style.overlay}></div>
}
