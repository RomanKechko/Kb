'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import './projectFeed.global.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IData } from '@/utils/interface'
import { useAppSelector } from '@/services/hooks'

export default function ProjectFeed () {
  const pathname = usePathname()
  const data: IData[] = useAppSelector(
    state => state.projects?.projectsData as IData[]
  )

  return (
    <div className='container_top'>
      <Swiper slidesPerView={5} spaceBetween={30} className='mySwiper0'>
        {data.map((item: IData, index: number) => (
          <SwiperSlide key={index} className='div-swipper'>
            <Link
              href={`/${item._id}`}
              className={pathname === `/${item._id}` ? 'active_link' : 'link'}
            >
              <img
                src={item.images.image_1}
                alt={item.name}
                width={200}
                height={120}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
