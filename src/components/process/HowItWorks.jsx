import React from 'react'
import photo from '@/../public/assets/videoBgVector.svg'
// import newPhoto from '../../../public/assets/videoBgVector.svg'
const HowItWorks = () => {
    return (
        <section className='bg-[#EDFBF4] w-full md:pt-10 flex flex-col gap-16 items-center md:px-12 px-7 mb-16'>
            <span className='flex flex-col items-center '>
                <span className='font-sans text-[#40AE49] mb-1 text-center'>4 Simple Step</span>
                <h3 className='lg:text-5xl md:text-4xl sm:text-4xl text-3xl  text-[#CC017A]'>how does it work ?</h3>
            </span>
            <section className='flex md:flex-row flex-col w-fit justify-center items-center md:gap-32 gap-10'>
                <div className=''>
                    <h3 className='text-xl font-sans text-[#7eaec8] mb-4'>01</h3>
                    <h3 className='text-4xl text-[#0E609D] mb-4'>Pick Your Adventure</h3>
                    <p className='font-sans text-[#333333] max-w-[500px] text-lg]'>Start by choosing your culinary path. Select from our three clubs—Cook, Bake, or Explore—to find recipes and activities that match your interests. Each club offers unique and exciting experiences, ensuring there’s something for every young chef!"</p>
                </div>
                <div className='bg-[url("../../public/assets/videoBgVector.svg")] flex justify-center items-center  bg-contain h-[350px]  w-[370px] md:h-[450px] md:w-[470px]'>
                    <div className='vid-container h-[95%] w-[95%]'>
                        <video src='/assets/videos/childCooking111.mp4' className='h-full w-full object-cover' autoPlay muted loop>Your browser does not support the video tag.</video>
                    </div>
                </div>
            </section>
            <section className='flex md:flex-row flex-col-reverse w-fit justify-center items-center md:gap-32 gap-10'>
                <div className='bg-[url("../../public/assets/videoBgVector.svg")] flex justify-center items-center  bg-contain h-[350px]  w-[370px] md:h-[450px] md:w-[470px]'>
                    <div className='vid-container h-[95%] w-[95%] '>
                        <video src='/assets/videos/childCooking222.mp4' className='h-full w-full object-cover' autoPlay muted loop>Your browser does not support the video tag.</video>
                    </div>
                </div>
                <div className=''>
                    <h3 className='text-xl font-sans text-[#7eaec8] mb-4'>02</h3>
                    <h3 className='text-4xl text-[#0E609D] mb-4'>Get Equipped</h3>
                    <p className='font-sans text-[#333333] max-w-[500px] text-lg]'>Your culinary toolkit is waiting! In the 'Get Equipped' phase, we'll help you prepare your kitchen for action. You'll receive a checklist of kitchen essentials, tips on choosing the right ingredients, and safety guidelines to ensure a fun and safe cooking experience.</p>
                </div>
            </section>
            <section className='flex md:flex-row flex-col w-fit justify-center items-center md:gap-32 gap-10'>
                <div className=''>
                    <h3 className='text-xl font-sans text-[#7eaec8] mb-4'>03</h3>
                    <h3 className='text-4xl text-[#0E609D] mb-4'>Cook, Play & Learn</h3>
                    <p className='font-sans text-[#333333] max-w-[500px] text-lg]'>It's showtime in the kitchen! 'Cook, Play, Learn' is where recipes come to life and your kitchen transforms into a classroom of flavors. Our step-by-step video tutorials are not just about following recipes—they're about understanding the science behind the cooking.</p>
                </div>
                <div className='bg-[url("../../public/assets/videoBgVector.svg")] flex justify-center items-center  bg-contain  h-[350px]  w-[370px] md:h-[450px] md:w-[470px]'>
                    <div className='vid-container h-[95%] w-[95%] '>
                        <video src='/assets/videos/childCooking3.mp4' className='h-full w-full object-cover' autoPlay muted loop>Your browser does not support the video tag.</video>
                    </div>
                </div>
            </section>
            <section className='flex md:flex-row flex-col-reverse w-fit justify-center items-center md:gap-32 gap-10'>
                <div className='bg-[url("../../public/assets/videoBgVector.svg")] flex justify-center items-center  bg-contain  h-[350px]  w-[370px] md:h-[450px] md:w-[470px]'>
                    <div className='vid-container h-[95%] w-[95%] '>
                        <video src='/assets/videos/childCooking4.mp4' className='h-full w-full object-cover' autoPlay muted loop>Your browser does not support the video tag.</video>
                    </div>
                </div>
                <div className=''>
                    <h3 className='text-xl font-sans text-[#7eaec8] mb-4'>04</h3>
                    <h3 className='text-4xl text-[#0E609D] mb-4'>Share Your Creations</h3>
                    <p className='font-sans text-[#333333] max-w-[500px] text-lg]'>The stage is set for you to shine! After cooking up a storm, 'Share Your Creations' invites you to showcase your culinary works of art. Snap a picture of your dish and upload it to our platform to join a vibrant gallery of young chefs' creations.</p>
                </div>
            </section>
        </section>
    )
}

export default HowItWorks