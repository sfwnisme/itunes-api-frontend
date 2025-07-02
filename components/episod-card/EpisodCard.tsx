import {  PodcastEpisode } from '@/types'
import React from 'react'
import Button from '../button/Button'
import Image from 'next/image'
import { EllipsisVertical, Play } from 'lucide-react'
import {truncate } from '@/utils/utils'

type Props = {
  media: PodcastEpisode
}

export default function EpisodCard({ media: { trackId, trackName, collectionName, trackViewUrl, artworkUrl160, artworkUrl60, artworkUrl600 } }: Props) {
  return (
    <div className="inline-flex gap-2 p-1 border-b-1 border-slate-800 w-full" id={trackId.toString()}>
      <div className='relative group cursor-pointer'>
        <Image placeholder='blur' loading='lazy' blurDataURL={"/lazy-image.png"} src={artworkUrl160 || artworkUrl60 || artworkUrl600 || "/lazy-image.png"} alt="logo" width={50} height={50} className='w-[50px] h-[50px] aspect-square object-cover rounded-xs' />
        <Play className='z-10 absolute group-hover:opacity-100 opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white' size={20} />
        <div className='z-0 absolute group-hover:opacity-100 opacity-0 transition-opacity duration-300 top-0 left-0 w-full h-full bg-purple-900/30 rounded-xs' />
      </div>
      <div className='flex-1 pr-4 self-center'>
        <a href={trackViewUrl} className='text-sm font-medium mb-1 hover:underline'>{truncate(trackName, 30)}</a>
        <p className='text-xs font-medium text-slate-400'>{truncate(collectionName, 30)}</p>
      </div>
      <Button>
        <EllipsisVertical size={18} />
      </Button>
    </div>
  )
}