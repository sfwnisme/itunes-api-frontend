import { IMedia } from '@/types'
import React from 'react'
import Button from '../button/Button'
import Image from 'next/image'
import { EllipsisVertical, Play } from 'lucide-react'
import { formatDate, msToMinutes, truncate } from '@/utils/utils'

type Props = {
  media: IMedia
}

export default function MediaCardV3({ media: { trackId, trackName, artistName, trackViewUrl, trackTimeMillis, releaseDate, artworkUrl100, artworkUrl60, artworkUrl30 } }: Props) {
  return (
    <div className="flex gap-2 w-full items-stretch bg-purple-800/10 rounded-md hover:bg-purple-800/15 transition-colors duration-300 shadow shadow-slate-900 overflow-hidden" id={trackId.toString()}>
      <div className='relative group cursor-pointer w-[120px]  min-w-[120px]'>
        <Image placeholder='blur' loading='lazy' blurDataURL={"/lazy-image.png"} src={artworkUrl100 || artworkUrl60 || artworkUrl30 || "/lazy-image.png"} alt="logo" width={120} height={120} className='w-full h-full object-cover rounded-xs' />
        <Play className='z-10 absolute group-hover:opacity-100 opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white' size={42} />
        <div className='z-0 absolute group-hover:opacity-100 opacity-0 transition-opacity duration-300 top-0 left-0 w-full h-full bg-purple-900/30 rounded-xs' />
      </div>
      <div className='p-2 flex flex-col justify-between flex-1'>
        <div>
          <p className='text-sm font-medium text-slate-400'>{truncate(artistName, 30)}</p>
          <a href={trackViewUrl} className='text-base font-medium mb-1 hover:underline'>{truncate(trackName, 30)}</a>
        </div>
        <div className='flex gap-2'>
          <p className='text-xs font-medium text-slate-500'>{formatDate(releaseDate ?? "")}</p>
          <p className='text-xs font-medium text-slate-500'>{msToMinutes(trackTimeMillis ?? 0)}</p>
        </div>
      </div>
      <div className='flex items-center gap-2 self-start pr-2 pt-2'>
        <Button>
          <EllipsisVertical size={18} />
        </Button>
      </div>
    </div>
  )
}