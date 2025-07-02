import { IMedia } from '@/types'
import { EllipsisVertical } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Button from '../button/Button'
import { truncate } from '@/utils/utils'

type Props = {
  media: IMedia
}

export default function MediaCard({ media }: Props) {
  return (
    <div className="block h-full">
      <Image src={media.artworkUrl100 || media.artworkUrl60 || media.artworkUrl30 || "/lazy-image.png"} alt="logo" width={230} height={230} className='mb-2 min-w-[230px] w-full rounded-md object-cover' />
      <div className='flex justify-between items-start'>
        <div>
          <h2 className='text-base font-medium mb-1'>{truncate(media.trackName, 100)}</h2>
          <p className='text-sm font-medium text-slate-400'>{truncate(media.artistName, 30)}</p>
        </div>
        <div className=''>
          <Button>
            <EllipsisVertical size={18} />
          </Button>
        </div>
      </div>
    </div>
  )
}