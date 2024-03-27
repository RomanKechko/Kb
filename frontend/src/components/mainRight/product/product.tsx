'use client'

import style from './product.module.css'
import Link from 'next/link'
import { useAppSelector } from '@/services/hooks'
import Urn from '@/components/mainRight/product/urn/urn'
import { IData } from '@/utils/interface'

export default function Product () {
  const data: IData[] = useAppSelector(
    (state) => state.projects?.projectsData as IData[]
  )

  return (
    <>
      {data?.map((item: IData) => (
        <li className={style.list} key={item._id}>
          <Link href={`/${item._id} `} className={style.link}>
            <img
              src={item.images.image_1}
              alt={item.name}
              className={style.image}
            />
            <p className={style.description}>{item.name}</p>
          </Link>
          <Urn id={item.id}/>
        </li>
      ))}
    </>
  )
};
