import React from 'react'
import Hero from '@/components/process/Hero'
import HowItWorks from '@/components/process/HowItWorks'
import font from 'next/font/local'
const myFont = font({ src: '../../../public/fonts/MilkyNice.otf' })

const page = () => {
  return (
    <div className={`${myFont.className} flex flex-col items-center justify-between `}>
      <Hero />
      <HowItWorks />
    </div>
  )
}

export default page