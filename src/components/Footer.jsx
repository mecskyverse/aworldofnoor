import React from 'react'
import font from 'next/font/local'
import Image from 'next/image'
import Link from 'next/link'
import fbIcon from '@/../public/assets/fbIcon.svg'
import igIcon from '@/../public/assets/igIcon.svg'
import tiktokIcon from '@/../public/assets/tiktokIcon.svg'
import arrowRight from '@/../public/assets/arrow-right.svg'
import MultiCarousal from './MultiCarousal'
import Faqs from './Faq'
const myFont = font({ src: '../../public/fonts/MilkyNice.otf' })

const Footer = () => {
  return (
    <footer className={`${myFont.className}`}>
      {/* <Faqs />
      <MultiCarousal /> */}
      <footer className={` w-full bg-[#FEF9F5] px-6 lg:mx-auto h-[235px] md:border border-black md:justify-normal items-center flex md:flex-row flex-col md:gap-0 gap-3`}>
        <section className='md:w-1/5 w-full h-full flex flex-col justify-center items-center md:gap-7 gap-3 md:border-r border-black'>
          <span className='text-[#252525] md:text-4xl text-3xl'>Follow Us</span>
          <span className='flex gap-3'>
            <Link href="https://www.facebook.com/aworldofnoor" target="_blank" rel="noopener noreferrer">
              <Image src={fbIcon} alt='Facebook Icon' />
            </Link>
            <Link href="https://www.instagram.com/aworldofnoor" target="_blank" rel="noopener noreferrer">
              <Image src={igIcon} alt='Instagram Icon' />
            </Link>
            <Link href="https://www.tiktok.com/@aworldofnoor" target="_blank" rel="noopener noreferrer">
              <Image src={tiktokIcon} alt='TikTok Icon' />
            </Link>
          </span>
        </section>
        <section className='md:w-[30%] md:flex hidden w-full h-full md:flex-col flex-row  justify-center items-center gap-4 md:border-r border-black'>
          <span className='text-[#252525] md:text-4xl text-3xl'>Join Us</span>
          <button className='flex items-center z-10 gap-1 text-white px-5 font-medium text-base md:text-2xl md:py-1 py-2 bg-[#E6038A] rounded-full'>Let's Start Cooking<Image src={arrowRight} className='md:w-auto w-6' /></button>
        </section>
        <section className='md:w-1/2 w-full h-full flex flex-col justify-center md:pl-20 gap-4'>
          <span className='text-[#252525] md:text-4xl text-3xl  w-full md:text-start text-center'>Stay Up-to-date</span>
          <form aciton="/search" className='flex md:gap-4 gap-1 md:flex-row flex-col items-center '>
            <input
              type="text"
              className='border border-black bg-white placeholder:font-extralight rounded-xl md:w-[50%] w-[90%] h-[50px] placeholder:text-lg placeholder:pl-3'
              placeholder="Your Email Address..."
            />
            {/* <button type='submit' className='border-4 border-[#F4B43F] w-[20%] h-[50px] bg-[#FFDA24] text-black rounded-xl'>
              Submit
            </button> */}
          </form>
        </section>
      </footer>
    </footer>
  )
}

export default Footer