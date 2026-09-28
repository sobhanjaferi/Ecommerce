'use client'

import type { ReactElement } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import '@/styles/gallery.css'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'

type Props = {
  gallery: string[]
}

export default function Gallery({ gallery }: Props): ReactElement {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className='mySwiper'
    >
      {gallery.map((image) => (
        <SwiperSlide key={image}>
          <Image src={image} alt='' width={1080} height={1080} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
