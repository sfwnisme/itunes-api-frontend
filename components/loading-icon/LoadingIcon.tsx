import React from 'react'

export default function LoadingIcon() {
  return (
    <div className='fixed top-1/2 left-1/2 md:left-[calc(50%+200px)] -translate-x-1/2 md:-translate-x-[calc(-50%+200px)] -translate-y-1/2'>
      <div className='relative w-24 h-24'>
        <span
          className='absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-pink-300 animate-scale'
          style={{ animationDelay: '0s' }}
        />
        <span
          className='absolute top-1/2 left-1/2 w-[90%] h-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-sky-300 animate-scale'
          style={{ animationDelay: '0.05s' }}
        />
        <span
          className='absolute top-1/2 left-1/2 w-[80%] h-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-violet-300 animate-scale'
          style={{ animationDelay: '0.2s' }}
        />
      </div>
    </div>
  )
}
