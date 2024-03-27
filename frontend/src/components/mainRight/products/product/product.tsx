import {
  IData,
  IColletedPropsDrag,
  IColletedPropsDrop,
  IDragItemProject
} from '@/utils/interface'
import Link from 'next/link'
import React, { useRef } from 'react'
import style from './product.module.css'
import { useDrag, useDrop } from 'react-dnd'
import { useAppDispatch, useAppSelector } from '@/services/hooks'
import { reorderStuffing, setOrder } from '@/services/projects/projectsSlice'
import UrnComponent from '@/components/mainRight/products/product/urn/urn'

interface IItemProps {
  project: IData
  index: number
}

export default function Product ({ project, index }: IItemProps) {
  const ref = useRef<HTMLLIElement>(null)
  const dispatch = useAppDispatch()

  const isAuth = useAppSelector(state => state.user.isAuth)

  const [{ handlerId }, dropRef] = useDrop<
    IDragItemProject,
    unknown,
    { handlerId: string }
  >({
    accept: 'project_change',
    collect (monitor) {
      return {
        handlerId: monitor.getHandlerId() as string
      }
    },
    hover (item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY: number = clientOffset
        ? clientOffset.y - hoverBoundingRect.top
        : 0
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      dispatch(reorderStuffing({ from: dragIndex, to: hoverIndex }))
      item.index = hoverIndex
      dispatch(setOrder())
    }
  })

  const [{ isDragging }, dragRef] = useDrag<
    IDragItemProject,
    unknown,
    IColletedPropsDrag
  >({
    type: 'project_change',
    item: (): IDragItemProject => {
      return { project, index }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })
  const isAuthCheckRef = isAuth ? ref : null

  dragRef(dropRef(isAuthCheckRef))

  const opacity = isDragging ? 0.3 : 1
  return (
    <>
      <li
        ref={ref}
        className={style.list}
        data-handler-id={handlerId}
        style={{ opacity }}
      >
        <Link href={`/${project._id} `} className={style.link}>
          <img
            src={project.images.image_1}
            alt={project.name}
            className={style.image}
          />
          <p className={style.description}>{project.name}</p>
        </Link>

        <UrnComponent id={project.id} />
      </li>
    </>
  )
}
