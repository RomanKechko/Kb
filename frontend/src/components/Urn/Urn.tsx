'use client'
import { useAppSelector } from '@/services/hooks'
import style from './urn.module.css'

function UrnComponent () {
  const auth = useAppSelector(state => state.user.isAuth)
  function deleteElement () {}

  return auth && <button className={style.urn} onClick={deleteElement}></button>
}
export default UrnComponent
