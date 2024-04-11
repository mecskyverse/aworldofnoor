import React from 'react'
import font from 'next/font/local'
import Image from 'next/image'
import fbIcon from '@/../public/assets/fbIcon.svg'
import igIcon from '@/../public/assets/igIcon.svg'
import tiktokIcon from '@/../public/assets/tiktokIcon.svg'
import arrowRight from '@/../public/assets/arrow-right.svg'

const myFont = font({ src: '../../public/fonts/MilkyNice.otf' })

const Footer = () => {
  return (
    <footer className={`${myFont.className} w-full bg-[#FEF9F5] mx-6 lg:mx-auto h-[235px] border border-black  items-center flex`}>
      <div className='w-1/4 h-full flex flex-col justify-center items-center gap-7 border-r border-black'>
        <span className='text-[#252525] text-4xl '>Follow Us</span>
        <span className='flex gap-4 '>
          <Image src={fbIcon} alt='Icon' />
          <Image src={igIcon} alt='Icon' />
          <Image src={tiktokIcon} alt='Icon' />
        </span>
      </div>
      <div className='w-1/4 h-full flex flex-col justify-center items-center gap-4 border-r border-black'>
        <span className='text-[#252525] text-4xl '>Let's Cookin</span>
        <button className='flex items-center gap-1 text-white px-4 font-medium text-2xl bg-[#40AE49] rounded-full'>Let's Cokkin'<Image src={arrowRight} /></button>
      </div>
      <div className='w-1/2 h-full flex flex-col justify-center md:pl-20 gap-4 border-r border-black'>
      <span className='text-[#252525] text-4xl '>Stay Up-to-date</span>
      <div className='flex md:gap-4'>
      <input
        type="text"
        className='border border-black bg-white placeholder:font-extralight rounded-xl w-[50%] h-[50px] placeholder:text-lg placeholder:pl-3'
        placeholder="Your Email Address..."
      />
      <button className='border-4 border-[#F4B43F] w-[20%] h-[50px] bg-[#FFDA24] text-black rounded-xl'>
        Submit
      </button>
      </div>
      </div>
    </footer>
  )
}

export default Footer