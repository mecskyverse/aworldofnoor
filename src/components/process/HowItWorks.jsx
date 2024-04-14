import React from 'react'
import photo from '@/../public/assets/videoBgVector.svg'
// import newPhoto from '../../../public/assets/videoBgVector.svg'
const HowItWorks = () => {
    return (
        <section className='bg-[#EDFBF4] w-full pt-10 flex flex-col gap-16 items-center md:px-12 mb-16'>
            <span className='flex flex-col items-center'>
                <span className='font-sans text-[#40AE49] mb-1 text-center'>4 Simple Step</span>
                <h3 className='text-4xl text-[#CC017A]'>how does it work ?</h3>
            </span>
            <section className='flex w-fit justify-center items-center md:gap-32'>
                <div className=''>
                    <h3 className='text-xl font-sans text-[#7eaec8] mb-4'>01</h3>
                    <h3 className='text-4xl text-[#0E609D] mb-4'>Pick Your Adventure</h3>
                    <p className='font-sans text-[#333333] max-w-[500px] text-lg]'>Start by choosing your culinary path. Select from our three clubs—Cook, Bake, or Explore—to find recipes and activities that match your interests. Each club offers unique and exciting experiences, ensuring there’s something for every young chef!"</p>
                </div>
                <div className='bg-[url("../../public/assets/videoBgVector.svg")] flex justify-center items-center  bg-contain h-[450px] w-[470px]'>
                    <div className='vid-container h-[95%] w-[95%]'>
                        <video src='/assets/videos/childCooking111.mp4' className='h-full w-full object-cover' autoPlay muted loop>Your browser does not support the video tag.</video>
                    </div>
                </div>
            </section>
            <section className='flex w-fit justify-center items-center md:gap-32'>
                <div className='bg-[url("../../public/assets/videoBgVector.svg")] flex justify-center items-center  bg-contain h-[450px] w-[470px]'>
                    <div className='vid-container h-[95%] w-[95%] '>
                        <video src='/assets/videos/childCooking222.mp4' className='h-full w-full object-cover' autoPlay muted loop>Your browser does not support the video tag.</video>
                    </div>
                </div>
                <div className=''>
                    <h3 className='text-xl font-sans text-[#7eaec8] mb-4'>02</h3>
                    <h3 className='text-4xl text-[#0E609D] mb-4'>Get Equipped</h3>
                    <p className='font-sans text-[#333333] max-w-[500px] text-lg]'>Start by choosing your culinary path. Select from our three clubs—Cook, Bake, or Explore—to find recipes and activities that match your interests. Each club offers unique and exciting experiences, ensuring there’s something for every young chef!"</p>
                </div>

            </section>
            <section className='flex w-fit justify-center items-center md:gap-32'>
                <div className=''>
                    <h3 className='text-xl font-sans text-[#7eaec8] mb-4'>03</h3>
                    <h3 className='text-4xl text-[#0E609D] mb-4'>Pick Your Adventure</h3>
                    <p className='font-sans text-[#333333] max-w-[500px] text-lg]'>Start by choosing your culinary path. Select from our three clubs—Cook, Bake, or Explore—to find recipes and activities that match your interests. Each club offers unique and exciting experiences, ensuring there’s something for every young chef!"</p>
                </div>
                <div className='bg-[url("../../public/assets/videoBgVector.svg")] flex justify-center items-center  bg-contain h-[450px] w-[470px]'>
                    <div className='vid-container h-[95%] w-[95%] '>
                        <video src='/assets/videos/childCooking3.mp4' className='h-full w-full object-cover' autoPlay muted loop>Your browser does not support the video tag.</video>
                    </div>
                </div>
            </section>
            <section className='flex w-fit justify-center items-center md:gap-32'>
                <div className='bg-[url("../../public/assets/videoBgVector.svg")] flex justify-center items-center  bg-contain h-[450px] w-[470px]'>
                    <div className='vid-container h-[95%] w-[95%] '>
                        <video src='/assets/videos/childCooking4.mp4' className='h-full w-full object-cover' autoPlay muted loop>Your browser does not support the video tag.</video>
                    </div>
                </div>
                <div className=''>
                    <h3 className='text-xl font-sans text-[#7eaec8] mb-4'>04</h3>
                    <h3 className='text-4xl text-[#0E609D] mb-4'>Pick Your Adventure</h3>
                    <p className='font-sans text-[#333333] max-w-[500px] text-lg]'>Start by choosing your culinary path. Select from our three clubs—Cook, Bake, or Explore—to find recipes and activities that match your interests. Each club offers unique and exciting experiences, ensuring there’s something for every young chef!"</p>
                </div>
            </section>
        </section>
    )
}

export default HowItWorks