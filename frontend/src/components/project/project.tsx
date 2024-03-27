'use client'
import { useEffect, useRef, useState } from 'react'
import style from './project.module.css'
import left from '../../images/left.png'
import right from '../../images/right.png'
import { notFound, useParams, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Swiper from '@/components/swipers/swipers'
import { SwiperRef } from 'swiper/react'
import { useAppSelector } from '@/services/hooks'
import { IData } from '@/utils/interface'

interface ParamTypes {
  project: string
}

export default function Project () {
  const { project } = useParams<{ project: string }>() as ParamTypes

  const router = useRouter()
  const searchParams = useSearchParams()
  const modalId = searchParams.get('modalId')
  const data: IData[] = useAppSelector(
    state => state.projects?.projectsData as IData[]
  )

  const [currentIndex, setCurrentIndex] = useState(
    data.findIndex(item => item._id === project)
  )

  const slideRef = useRef<SwiperRef>(null)
  const projectData = data[currentIndex as number]

  useEffect(() => {
    window.scrollTo({ top: 0 })

    setCurrentIndex(data.findIndex(item => item._id === project))
    if (slideRef.current) {
      const slider = slideRef.current
      if (modalId) {
        slider.swiper.slideTo(
          Object.keys(projectData.images).findIndex(item => item === modalId),
          0
        )
      } else {
        slider.swiper.slideTo(0, 0)
      }
    }
  }, [])

  function next () {
    const nextIndex = (currentIndex + 1) % data.length
    setCurrentIndex(nextIndex)
    router.push(`/${data[nextIndex]._id}`)
  }

  function previous () {
    const nextIndex = currentIndex - 1 < 0 ? data.length - 1 : currentIndex - 1
    setCurrentIndex(nextIndex)
    router.push(`/${data[nextIndex]._id}`)
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        router.push(`/`)
      }
    }

    document.addEventListener('keydown', handleEsc)

    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  })

  if (!projectData) {
    throw notFound()
  }

  return (
    <>
      <section className={style.container__left}>
        <article>
          <h2 className={style.title}>{projectData.name}</h2>
          <p className={style.price}>Цена: {projectData.price}</p>
          <p className={style.text}>
            Срок выполнения заказа: {projectData.deadline}
          </p>
          <p className={style.text}>Сложность: {projectData.complexity}</p>
          <p className={style.description}>
            Детали выполнения заказа: <br />
            {projectData.description}
          </p>
        </article>
      </section>

      <section className={style.container__right}>
        <button onClick={previous} className={style.button}>
          <Image src={left} alt='стрелка влево' className={style.direction} />
        </button>

        <Swiper projectData={projectData} slideRef={slideRef} />

        <button onClick={next} className={style.button}>
          <Image src={right} alt='стрелка вправо' className={style.direction} />
        </button>
      </section>
    </>
  )
}
