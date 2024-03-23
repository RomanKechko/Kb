'use client'

import ProjectFeed from '@/components/swipers/projectFeed/projectFeed'
import React from 'react'
import { SwiperRef } from 'swiper/react'
import ProjectSlider from '@/components/swipers/projectSlider/projectSlider'
import style from './swipers.module.css'
import { IData } from '@/utils/interface'

interface ISwiperProps {
  projectData: IData;
  slideRef: React.RefObject<SwiperRef>;
}

export default function Swiper ({
  projectData,
  slideRef
}: ISwiperProps) {
  return (
    <div className={style.block}>
      <ProjectFeed/>
      <ProjectSlider projectData={projectData} slideRef={slideRef}/>
    </div>
  )
}
