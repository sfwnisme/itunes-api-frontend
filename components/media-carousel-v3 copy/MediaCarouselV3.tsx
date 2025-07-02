'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from '../carousel/EmblaCarouselArrowButtons'
import MediaCardV3 from '../media-card-v3/MediaCardV3'
import { IMedia } from '@/types'

type PropType = {
  slides: IMedia[],
  title: string,
  options?: EmblaOptionsType
}

const MediaCarouselV3 = (props: PropType) => {
  const { slides, options, title } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className='w-full px-4'>
      <div className='flex justify-between items-center border-b border-slate-600 mb-7'>
        <h1 className='text-base font-bold pb-4 mb-1'>{title}</h1>
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide) => (
              <div className="embla__slide" key={slide.trackId}>
                <MediaCardV3 media={slide} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default MediaCarouselV3
