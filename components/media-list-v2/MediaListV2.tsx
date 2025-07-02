"use client"
import { IMedia } from '@/types'
import React from 'react'
import MediaCardV2 from '../media-card-v2/MediaCardV2'

type Props = {
  media: IMedia[]
  title: string
}

export default function MediaListV2({ media, title }: Props) {
  return (
    <div>
      <h1 className="text-base p-4 font-bold border-b border-slate-600 pb-4 mb-1">{title}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-1 p-4'>
        {media.map((item) => (
          <MediaCardV2 key={item.trackId} media={item} />
        ))}
      </div>
    </div>
  )
}