import React from 'react'
import photo from '@/../public/assets/videoBgVector.svg'
// import newPhoto from '../../../public/assets/videoBgVector.svg'
const HowItWorks = () => {
    return (
        <div>
            how it works
            <div className='bg-[url("../../public/assets/videoBgVector.svg")] flex justify-center items-center  bg-contain h-[450px] w-[470px]'>
                <div className='vid-container h-[95%] w-[95%] '>
                    <video src='/assets/videos/childCooking3.mp4' className='h-full w-full object-cover' autoPlay muted loop>Your browser does not support the video tag.</video>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks