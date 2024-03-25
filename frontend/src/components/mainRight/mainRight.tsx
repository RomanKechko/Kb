'use client'
import style from './mainRight.module.css'
import Product from '@/components/mainRight/products/products'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function MainRight () {
  return (
    <DndProvider backend={HTML5Backend}>
      <section className={style.container}>
        <ul className={style.lists}>
          <Product />
        </ul>
      </section>
    </DndProvider>
  )
}
