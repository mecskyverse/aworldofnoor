import React from 'react'
import Image from 'next/image'
import cartoon from '@/../public/assets/cartoonGirl3.svg'
import logo from '@/../public/assets/heroLogo.svg'
import heroCloud from '@/../public/assets/heroCloud.svg'
import heroLines from '@/../public/assets/heroLines.svg'
import whyJoinCartoon from '@/../public/assets/whyJoinCartoon.svg'
import arrowRight from '@/../public/assets/arrow-right.svg'
const Hero = () => {
    return (
        <div className=' w-full flex flex-col'>
            <div className='bg-[#1692CD] h-[75vh] w-full flex relative md:pt-0'>
                <div className='md:w-2/5 md:bg-transparent bg-black/10 backdrop-blur-sm w-full h-full flex md:flex-col md:self-auto self-start md:z-10 z-[5]  justify-center md:px-0 px-10   items-center relative md:bg-none'>
                    <Image src={logo} className='absolute  md:w-auto w-12 border-4 box-content md:left-28 left-10  md:-top-14 -top-8  border-white bg-white rounded-full z-10  md:flex hidden' />
                    <div className='md:w-3/4 md:self-end self-center flex flex-col gap-4 md:mr-5 relative'>
                        <p className='md:text-left text-center text-white lg:text-5xl md:text-4xl text-4xl w-full  leading-normal self-end drop-shadow-[0_4px_35px_rgba(0,0,0,0.30)]'>
                            Join The Culinary Adventure With A World Of Noor
                        </p>
                        {/* <button className='self-start flex items-center gap-1 text-white px-5 font-medium text-2xl bg-[#E6038A] rounded-full'>Let's Cooking<Image src={arrowRight} /></button> */}
                        <Image src={heroLines} alt='lines' className='absolute md:flex hidden -bottom-16 -left-14' />
                    </div>
                </div>
                <div className='md:relative z-0 md:flex md:w-3/5 absolute bottom-0 flex justify-start h-full w-full '>
                    <Image className='md:relative absolute bottom-0 mt-auto' src={cartoon} />
                    <Image className='absolute right-10 top-7 md:flex hidden' src={heroCloud} />
                </div>
            </div>
            <div className='h-[1/2] pt-20 px-7 w-full flex flex-col justify-center items-center '>
                <p className='text-[#40AE49] text-xl mb-4 font-sans'>Our Club</p>
                <h2 className='text-[#CC017A] lg:text-5xl md:text-4xl sm:text-4xl text-3xl'>Why Join Our Club?</h2>
                <div className='flex md:flex-row flex-col gap-16 mt-10 items-center h-fit'>
                    <span className='flex flex-col gap-20'>
                        <span className='flex flex-col w-[320px]'>
                            <h4 className='text-2xl text-[#0E609D]'>1. Learning Together</h4>
                            <p className='font-sans text-[#333333] text-lg'>Our recipes are family-friendly, ensuring that chefs of all ages can participate and learn.</p>
                        </span>
                        <span className='flex flex-col w-[320px]'>
                            <h4 className='text-2xl text-[#0E609D]'>2. Culinary Creativity</h4>
                            <p className='font-sans text-[#333333] text-lg'>We encourage innovation and creativity, turning cooking into an art form for kids.</p>
                        </span>
                    </span>
                    <Image src={whyJoinCartoon}  alt='join__cartoon' />
                    <span className='flex flex-col gap-20'>
                        <span className='flex flex-col w-[320px]'>
                            <h4 className='text-2xl text-[#0E609D]'>3. Community Connection</h4>
                            <p className='font-sans text-[#333333] text-lg'>Share your culinary creations, tips, and experiences with a vibrant community of food enthusiasts</p>
                        </span>
                        <span className='flex flex-col w-[320px]'>
                            <h4 className='text-2xl text-[#0E609D]'>4. Exclusive Savings</h4>
                            <p className='font-sans text-[#333333] text-lg'>Unlock member-exclusive discounts on a variety of culinary products and ingredients.</p>
                        </span>
                    </span>
                </div>
            </div>
        </div>

    )
}

export default Hero