import React, { useState } from 'react'
import style from './dropdown.module.css'

const categories = ['maf', 'ordinary', 'all']
export type categoriesType = typeof categories[number]

export default function Dropdown () {
  const categoriesTranslate: { [key in categoriesType]: string } = {
    all: 'Все',
    maf: 'МАФ',
    ordinary: 'Обычные проекты'
  }

  const [listValue, setListValue] = useState<categoriesType>('all')
  const [openList, setOpenList] = useState(false)

  const handleDropdownClick = (value: categoriesType) => {
    setListValue(value)
    setOpenList(!openList)
  }

  return (
    <div className={style.container_dropdown}>
      <p className={style.title}>Показать:</p>
      <div className={style.container_lists}>
        <button className={style.button} onClick={() => setOpenList(!openList)}>
          {categoriesTranslate[listValue]}
        </button>
        <ul className={`${style.lists} ${openList ? style.lists_active : ''}`}>
          {categories.map(category => (
            <li
              onClick={() => handleDropdownClick(category)}
              className={style.list}
            >
              {categoriesTranslate[category]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
