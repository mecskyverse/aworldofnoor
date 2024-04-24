import React from 'react'
import Image from 'next/image'
import cartoon from '@/../public/assets/cartoonGirl2.svg'
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
        <div className='md:h-[90vh] h-[70vh] w-full flex flex-col'>
            <div className='bg-[#1692CD] h-[85%] w-full flex justify-center relative md:pt-0 '>
                <div className='md:w-2/5 md:bg-transparent bg-black/10 backdrop-blur-sm  w-full h-full flex md:flex-col md:self-auto self-start md:z-10 z-[5]  px-10   justify-center items-center relative md:bg-none'>
                    <Image src={logo} className='absolute md:w-auto w-12  border-4 box-content md:left-28 left-10 md:-top-14 -top-8 border-white bg-white rounded-full md:flex hidden' />
                    <div className='md:w-3/4 w-full md:self-end self-center flex flex-col gap-4 md:mr-5 relative'>
                        <p className='md:text-left text-center text-white lg:text-5xl md:text-4xl sm:text-4xl text-3xl w-full  leading-normal self-end drop-shadow-[0_4px_35px_rgba(0,0,0,0.30)]'>
                            Discover the joy of cooking with world of Noor!
                        </p>
                        {/* <button className='self-start flex items-center gap-1 text-white px-5 font-medium text-2xl bg-[#E6038A] rounded-full'>Let's Cooking<Image src={arrowRight} /></button> */}
                        <Image src={heroLines} alt='lines' className='absolute md:flex hidden -bottom-16 -left-14' />
                    </div>
                </div>
                <div className='md:w-3/5  md:relative z-0 md:flex absolute justify-start bottom-0 w-full h-full '>
                    <Image className='md:relative absolute bottom-0 mt-auto' src={cartoon} />
                    <Image className='absolute right-10 top-7 md:flex hidden' src={heroCloud} />
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