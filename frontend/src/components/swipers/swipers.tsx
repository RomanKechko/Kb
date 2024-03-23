'use client'

import ProjectFeedComponent from '@/components/swipers/projectFeed/projectFeed'
import React from 'react'
import { SwiperRef } from 'swiper/react'
import ProjectSliderComponent from '@/components/swipers/projectSlider/projectSlider'
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
      <ProjectFeedComponent/>
      <ProjectSliderComponent projectData={projectData} slideRef={slideRef}/>
    </div>
  )
}
