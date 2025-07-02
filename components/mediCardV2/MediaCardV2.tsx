import { IMedia } from '@/types'
import Image from 'next/image'
import React from 'react'
import Button from '../button/Button'
import { EllipsisVertical } from 'lucide-react'
import { truncate } from '@/utils/utils'

type Props = {
  media: IMedia
}

export default function MediaCardV2({ media: { trackId, trackName, artistName, trackViewUrl, previewUrl, artworkUrl100, artworkUrl60, artworkUrl30 } }: Props) {
  return (
    <div className="inline-flex gap-2 p-1 border-b-1 border-slate-800 w-full" id={trackId.toString()}>
      <Image placeholder='blur' loading='lazy' blurDataURL={"/lazy-lazy-image.png"} src={artworkUrl100 || artworkUrl60 || artworkUrl30 || "/lazy-lazy-lazy-image.png"} alt="logo" width={50} height={50} className='w-[50px] h-[50px] aspect-square object-cover rounded-xs' />
      <div className='flex-1 pr-4'>
        <a href={trackViewUrl} className='text-sm font-medium mb-1 hover:underline'>{truncate(trackName, 30)}</a>
        <p className='text-xs font-medium text-slate-400'>{truncate(artistName, 30)}</p>
      </div>
      <Button>
        <EllipsisVertical size={18} />
      </Button>
    </div>
  )
}