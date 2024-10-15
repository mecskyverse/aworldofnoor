import React from 'react'
import Hero from '@/app/menu/Hero'
import SubscriptionBox from '@/components/Subscription'
import CoreValues from '@/components/club/CoreValues'
import WhyJoin from './WhyJoin'
import font from 'next/font/local'
const myFont = font({ src: '../../../public/fonts/MilkyNice.otf' })

const page = () => {
  return (
    <div className={`${myFont.className} flex flex-col items-center justify-between space-y-4 `}> 
      <WhyJoin/>
      <SubscriptionBox />
    </div> 
  )
}

export default page