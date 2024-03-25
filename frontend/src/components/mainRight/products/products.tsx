'use client'

import style from './products.module.css'
import Link from 'next/link'
import { useAppSelector } from '@/services/hooks'
import UrnComponent from '@/components/mainRight/products/product/urn/urn'
import { IData, IProject } from '@/utils/interface'
import { useDrag } from 'react-dnd'
import { useRef } from 'react'
import Product from './product/product'

export default function ProductComponent () {
  const data: IData[] = useAppSelector(
    state => state.projects?.projectsData as IData[]
  )

  return (
    <>
      {data?.map((project: IData, index: number) => (
        <Product project={project} index={index} key={project._id} />
      ))}
    </>
  )
}
