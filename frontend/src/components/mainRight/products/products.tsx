'use client'

import { useAppSelector } from '@/services/hooks'
import { IData, IProject } from '@/utils/interface'

import Product from './product/product'

export default function ProductComponent () {
  const data: IData[] = useAppSelector(
    state => state.projects?.projectsData as IData[]
  )
  console.log(data)

  return (
    <>
      {data.map((project: IData, index: number) => (
        <Product project={project} index={index} key={project._id} />
      ))}
    </>
  )
}
