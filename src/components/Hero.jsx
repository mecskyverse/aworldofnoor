'use client'
import React from 'react'
import Image from 'next/image'
import cartoon from '../../public/assets/cartoonUpdated.svg'
import logo from '@/../public/assets/heroLogo.svg'
import heroCloud from '@/../public/assets/heroCloud.svg'
import heroLines from '@/../public/assets/heroLines.svg'
import choice1 from '@/../public/assets/Choice1.svg'
import choice2 from '@/../public/assets/Choice2.svg'
import choice3 from '@/../public/assets/Choice3.svg'
import arrowRight from '@/../public/assets/arrow-right.svg'
const Hero = () => {
    const clubArray = [choice1, choice2, choice3]
    return (
        <div className='h-[90vh] border border-black flex flex-col'>
            <div className='bg-[#1692CD]  w-full flex '>
                <div className='w-1/2 h-full flex flex-col  justify-center items-center relative'>
                    <Image src={logo} className='absolute border-4 box-content md:left-28 left-14 -top-14 border-white bg-white rounded-full z-10' />
                    <div className='w-3/4 self-end flex flex-col gap-4 mr-5 relative'>
                        <p className='text-white text-5xl w-full  leading-normal self-end drop-shadow-[0_4px_35px_rgba(0,0,0,0.30)]'>
                            Let's travel virtually by cooking food from around the world.
                        </p>
                        <button className='self-start flex items-center gap-1 text-white px-5 font-medium text-2xl bg-[#E6038A] rounded-full'>Let's Cooking<Image src={arrowRight} /></button>
                        <Image src={heroLines} alt='lines' className='absolute -bottom-16 -left-14' />
                    </div>
                </div>
                <div className='w-1/2  relative flex justify-start h-full '>
                    <Image className='' src={cartoon} />
                    <Image className='absolute right-10 top-7' src={heroCloud} />
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