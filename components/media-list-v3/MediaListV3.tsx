"use client"
import { IMedia } from '@/types'
import React from 'react'
import MediaCardV3 from '../media-card-v3/MediaCardV3'

type Props = {
  media: IMedia[]
  title: string
}

export default function MediaListV3({ media, title }: Props) {
  return (
    <div>
      <h1 className="text-base p-4 font-bold border-b border-slate-600 pb-4 mb-1">{title}</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4'>
        {media.map((item) => (
          <MediaCardV3 key={item.trackId} media={item} />
        ))}
      </div>
    </div>
  )
}