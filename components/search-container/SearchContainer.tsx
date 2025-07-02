"use client"
import { IMedia, PodcastEpisode } from '@/types'
import { getEpisodes, getPodcasts } from '@/utils/actions'
import React, { useEffect, useState } from 'react'
import Input from '../input/Input'
import LoadingIcon from '../loading-icon/LoadingIcon'
import DefaultPage from '../default-page/DefaultPage'
import { useRouter, useSearchParams } from 'next/navigation'
import MediaCarousel from '../media-carousel/MediaCarousel'
import EpisodesList from '../episodes-list/EpisodesList'
import { Suspense } from 'react'

function debounce(cb: (...args: string[]) => void, delay: number) {
  let timeoutId: NodeJS.Timeout;
  return function (...args: string[]) {
    if (timeoutId) clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}

function SearchContainerInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const urlSearchTerm = searchParams.get('q') || ""
  const [inputValue, setInputValue] = useState(urlSearchTerm)
  const [podcasts, setPodcasts] = useState<IMedia[]>([])
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const performSearch = async () => {
      setLoading(true)
      if (!urlSearchTerm) {
        setPodcasts([])
        setEpisodes([])
        setLoading(false)
        return
      }

      setLoading(true)
      try {
        const data = await getPodcasts(urlSearchTerm, 20)
        setPodcasts(data.results)
        const episodesData = await getEpisodes(urlSearchTerm, 20)
        setEpisodes(episodesData.results)
      } catch (error) {
        console.error(error)
        setPodcasts([])
      } finally {
        setLoading(false)
      }
    }

    performSearch()
  }, [urlSearchTerm])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
  }

  const handleSearch = debounce((value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set('q', value)
    } else {
      params.delete('q')
    }
    router.push(`?${params.toString()}`)
  }, 500)

  return (
    <div className='relative'>
      <nav className="p-4 mb-12">
        <Input
          value={inputValue}
          onChange={(e) => {
            handleInputChange(e)
            handleSearch(e.target.value)
          }}
          placeholder="Search"
        />
      </nav>
      <article className="h-full">
        {loading ? <LoadingIcon /> : !loading && podcasts.length > 0 ? (
          <div className='flex flex-col gap-12'>
            <MediaCarousel slides={podcasts} title={`Search podcasts for ${urlSearchTerm}`} />
            <EpisodesList media={episodes} title={`Recent Episodes for ${urlSearchTerm}`} />
          </div>
        ) : !loading && urlSearchTerm && podcasts.length === 0 ?
          <div className='flex justify-center items-center h-full'>There is no data for this search: <span className='text-blue-500'>{urlSearchTerm}</span></div>
          :
          <DefaultPage />
        }
      </article>
    </div>
  )
}

export default function SearchContainer() {
  return (
    <Suspense fallback={<LoadingIcon />}>
      <SearchContainerInner />
    </Suspense>
  )
}
