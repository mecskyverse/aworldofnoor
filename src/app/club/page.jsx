import React from 'react'
import Hero from '@/components/club/Hero'
import CoreValues from '@/components/club/CoreValues'
import font from 'next/font/local'
const myFont = font({ src: '../../../public/fonts/MilkyNice.otf' })
const page = () => {
  return (
    <div className={`${myFont.className} flex flex-col items-center justify-between `}>
      <Hero />
      <CoreValues />
      {/* <HowItWorks /> */}
    </div>
  )
}

export default page