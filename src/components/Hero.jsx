import React from 'react'
import Image from 'next/image'
import cartoon from '../../public/assets/cartoon.svg'
import logo from '@/../public/assets/heroLogo.svg'
import heroCloud from '@/../public/assets/heroCloud.svg'
const Hero = () => {
    return (
        <div className='bg-[#1692CD] h-4/5 w-full flex '>
            <div className='w-1/2 flex flex-col justify-center  items-center  h-full relative'>
                <Image src={logo} className='absolute border-4 box-content left-10 -top-14 border-white bg-white rounded-full z-10' />

                <div className='w-3/4  self-end flex flex-col gap-4 mr-5 '>
                    <p className='text-white text-5xl w-full  leading-normal self-end drop-shadow-[0_4px_35px_rgba(0,0,0,0.30)]'>
                        Let's travel virtually by cooking food from around the world.
                    </p>
                    <button className='self-start text-white px-5 py-3 font-medium text-2xl bg-[#E6038A] rounded-full'>Let's Cokkin'</button>
                </div>

            </div>
            <div className='w-1/2  relative flex justify-center'>
                <Image className='absolute right-0 top-7' src={heroCloud} />
                <Image className='' src={cartoon} />
            </div>
        </div>
    )
}

export default Hero