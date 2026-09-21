'use client'

import type { ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import '@/styles/slider.css'
import { EffectCards } from 'swiper/modules'
import Image from 'next/image'
import { SLIDES } from '@/constants/slides.constant'

export default function Slider(): ReactElement {
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className='mySwiper'
    >
      {SLIDES.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Image
            src={slide.img}
            alt={slide.alt}
            width={1080}
            height={1080}
            loading='eager'
            className='h-full'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
