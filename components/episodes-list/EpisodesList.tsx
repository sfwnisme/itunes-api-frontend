"use client"
import { PodcastEpisode } from '@/types'
import React from 'react'
import EpisodCard from '../episod-card/EpisodCard'

type Props = {
  media: PodcastEpisode[]
  title: string
}

export default function MediaList({ media, title }: Props) {
  return (
    <div>
      <h1 className="text-base p-4 font-bold border-b border-slate-600 pb-4 mb-1">{title}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4 gap-1 p-4'>
        {media.map((item) => (
          <EpisodCard key={item.trackId} media={item} />
        ))}
      </div>
    </div>
  )
}