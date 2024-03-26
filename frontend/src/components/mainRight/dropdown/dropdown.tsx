import React, { useState } from 'react'
import style from './dropdown.module.css'

export default function Dropdown () {
  const [listValue, setlistValue] = useState('Все')
  const [openList, setOpenList] = useState(false)

  const handleDropdownClick = (value: string) => {
    setlistValue(value)
    setOpenList(!openList)
  }

  return (
    <div className={style.container_dropdown}>
      <p className={style.title}>Показать:</p>
      <div className={style.container_lists}>
        <button className={style.button} onClick={() => setOpenList(!openList)}>
          {listValue}
        </button>
        <ul className={`${style.lists} ${openList ? style.lists_active : ''}`}>
          <li onClick={() => handleDropdownClick('МАФ')} className={style.list}>
            МАФ
          </li>
          <li
            onClick={() => handleDropdownClick('Обычные проекты')}
            className={style.list}
          >
            Обычные проекты
          </li>
          <li onClick={() => handleDropdownClick('Все')} className={style.list}>
            Все
          </li>
        </ul>
      </div>
    </div>
  )
}
