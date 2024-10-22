import React from 'react'
import Image from 'next/image'
import cartoon from '@/../public/assets/cartoonGirl3.svg'
import heroCloud from '@/../public/assets/heroCloud.svg'
import heroLines from '@/../public/assets/heroLines.svg'
import font from 'next/font/local'
const myFont = font({ src: '../../../public/fonts/MilkyNice.otf' })

const Hero = () => {
    return (
        <div className='flex flex-col'>
            <div className='bg-[#1692CD] h-[75vh] flex relative md:pt-0'>
                <div className='md:w-2/5 md:bg-transparent h-full flex md:flex-col md:self-auto self-start md:z-10 z-[5]  justify-center md:px-0 px-10   items-center relative md:bg-none'>
                    <div className={`${myFont.className} md:w-[90%] md:self-end self-center flex flex-col gap-4 md:mr-5 relative`}>
                        <p className='md:text-left text-center text-white lg:text-6xl md:text-5xl text-4xl w-full  leading-normal self-end drop-shadow-[0_4px_35px_rgba(0,0,0,0.30)]'>
                            Join The Culinary Adventure With A World Of Noor
                        </p>
                        <Image src={heroLines} alt='lines' className='absolute md:flex hidden -bottom-16 -left-14' />
                    </div>
                </div>
                <div className='md:relative z-0 md:flex md:w-3/5 absolute bottom-0 flex justify-start h-full w-full '>
                    <Image alt='Cartoon__Girl' className='md:relative absolute bottom-0 mt-auto' src={cartoon} />
                    <Image alt='Cloud__Icon' className='absolute right-10 top-7 md:flex hidden' src={heroCloud} />
                </div>
            </div>
      <div className="absolute inset-0 h-[82vh] bg-black/10 backdrop-blur-sm md:hidden" />
        </div>

    )
}

export default Hero

