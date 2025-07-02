"use client"
import React, { useEffect, useState } from 'react'
import MediaListV2 from '../media-list-v2/MediaListV2'
import { getRecentMedia, search } from '@/utils/actions'
import { IMedia } from '@/types'
import MediaCarouselV3 from '../media-carousel-v3/MediaCarouselV3'
import MediaCarousel from '../media-carousel/MediaCarousel'
import LoadingIcon from '../loading-icon/LoadingIcon'

export default function DefaultPage() {
  const [recentPods, setRecentPods] = useState<IMedia[]>([])
  const [podcasts, setPodcasts] = useState<IMedia[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const [data, recentData] = await Promise.all([search("podcast"), getRecentMedia(20)])
      setPodcasts(data.results)
      setRecentPods(recentData.results)
      setLoading(false)
    }
    fetchData()
  }, [])
  return (
    <div className='flex flex-col gap-18'>
      {loading && (
        <div className='flex justify-center items-center h-full'>
          <LoadingIcon />
        </div>
      )}
      {!loading && (
        <>
          <MediaCarousel slides={podcasts.slice(0, 12)} title="Popular Podcasts" />
          <MediaCarouselV3 slides={recentPods.slice(0, 12)} title="Recent episodes" />
          <MediaListV2 media={recentPods.slice(0, 12)} title="Recent Podcasts" />
        </>
      )}
    </div>
  )
}
