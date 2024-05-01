'use client'
import React from 'react'
import Image from 'next/image'
import cartoon from '../../public/assets/cartoonUpdated.svg'
import logo from '@/../public/assets/heroLogo.svg'
import heroCloud from '@/../public/assets/heroCloud.svg'
import heroLines from '@/../public/assets/heroLines.svg'
import arrowRight from '@/../public/assets/arrow-right.svg'
const Hero = () => {
    return (
        <div className='h-[90vh] flex w-full flex-col'>
            <div className='bg-[#1692CD] md:h-fit h-[80%]  w-full justify-center flex relative md:pt-0 '>
                <div className='md:w-1/2 md:bg-transparent bg-black/10 backdrop-blur-sm pt-20 w-full flex md:flex-col md:self-auto self-start md:z-10 z-[5]  px-10 justify-center items-center relative md:bg-none '>
                    <Image alt='logo' priority={false}  src={logo} className='absolute md:w-auto w-12 border-4 box-content md:left-28 left-10 md:-top-14 -top-8 border-white bg-white rounded-full md:flex hidden' />

                    <div className='md:w-3/4  w-full self-center   flex flex-col gap-4 md:mr-5 relative'>
                        <p className='md:text-left text-center  text-white lg:text-5xl md:text-4xl sm:text-4xl text-3xl w-full  leading-normal self-end drop-shadow-[0_4px_35px_rgba(0,0,0,0.30)]'>
                            Let's travel virtually by cooking food from around the world.
                        </p>
                        <button className='md:self-start self-center flex items-center  gap-1 text-white px-5 font-medium text-base md:text-2xl bg-[#E6038A] rounded-full md:py-1 py-4'>Let's Cooking<Image src={arrowRight} className='md:w-auto w-6' /></button>
                        <Image src={heroLines} alt='lines' className='absolute md:flex hidden -bottom-16 -left-14' />
                    </div>

                </div>
                <div className='md:w-1/2  md:relative  justify-start z-0 md:flex absolute bottom-0 w-full '>
                    <Image alt='cartoon_Image' className='md:relative absolute bottom-0' src={cartoon} />
                    <Image alt='cloud_Image' className='absolute right-10 top-7 md:flex hidden' src={heroCloud} />
                </div>
            </div>
            {/* <div className='h-[1/2] pt-20 w-full flex flex-col justify-center items-center '>
                <p className='text-[#40AE49] text-xl mb-4'>Let's Cook Together</p>
                <h2 className='text-[#CC017A] text-5xl'>Which Club is Right for you</h2>
                <div className='flex flex-row gap-8 mt-10'>
                    {
                        clubArray.map((choice, index) => {
                            return (
                                <Image key={index} src={choice} alt="Club SVG" />
                            )
                        })
                    }
                </div>
                <button className='mt-20 flex items-center gap-1 text-white px-4 font-medium text-2xl bg-[#40AE49] rounded-full'>Let's Cokkin'<Image src={arrowRight} /></button>
            </div> */}
        </div>

    )
}

export default Hero