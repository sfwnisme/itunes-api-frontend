"use client"
import { IMedia } from '@/types'
import React from 'react'
import MediaCard from '../mediaCard/MediaCard'

type Props = {
  media: IMedia[]
  title: string
}

export default function MediaList({ media, title }: Props) {
  return (
    <div>
      <h1 className="text-base p-4 font-bold border-b border-slate-600 pb-4 mb-1">{title}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-4'>
        {media.map((item) => (
          <MediaCard key={item.trackId} media={item} />
        ))}
      </div>
    </div>
  )
}