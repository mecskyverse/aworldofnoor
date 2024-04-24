'use client'
import React from 'react'
import Image from 'next/image'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { jost } from '@/utils/jost';
import instaIcon from '@/../public/assets/instaIcon.svg'
function MultiCarousal() {

    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 4,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
        }
    }
    return (
        <div className='md:px-20 px-4 w-full flex flex-col mt-20 mb-20'>
            <p className={`text-[#0038FF] text-center text-xl ${jost.className}`}>#Chefnoor #Fatherdaughter</p>
            <h1 className='text-[#0E609D] lg:text-5xl md:text-4xl text-3xl  mt-5 w-full mb-10 flex justify-center gap-2 drop-shadow-[0_4px_35px_rgba(0,0,0,0.30)]'>
                Follow Us<Image src={instaIcon} alt='insta icon' /> Instagram</h1>
            <Carousel additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className="mt-10"
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable >
                <div className='md:w-[252px] md:mx-0 mx-4 md:h-[397px] h-[450px] w-auto video-container border border-black'>
                    <video src='/assets/videos/carousel1.mp4' className='h-full object-cover' autoPlay muted loop>Your browser does not support the video tag.</video>
                </div>
                <div className='md:w-[252px] md:h-[397px] h-full  w-auto video-container border border-black'>
                    <video src='/assets/videos/carousel29.mp4' className='h-full object-cover' autoPlay muted loop>Your browser does not support the video tag.</video>
                </div>
                <div className='md:w-[252px] md:h-[397px] h-full w-auto video-container border border-black'>
                    <video src='/assets/videos/carousel3.mp4' className='h-full object-cover' autoPlay muted loop>Your browser does not support the video tag.</video>
                </div>
                <div className='md:w-[252px] md:h-[397px] h-full w-auto video-container border border-black'>
                    <video src='/assets/videos/carousel4.mp4' className='h-full object-cover' autoPlay muted loop>Your browser does not support the video tag.</video>
                </div>
                <div className='md:w-[252px] md:h-[397px] h-full w-auto video-container border border-black'>
                    <video src='/assets/videos/carousel5.mp4' className='h-full object-cover' autoPlay muted loop>Your browser does not support the video tag.</video>
                </div>
                <div className='md:w-[252px] md:h-[397px] h-full w-auto video-container border border-black'>
                    <video src='/assets/videos/carousel6.mp4' className='h-full object-cover' autoPlay muted loop>Your browser does not support the video tag.</video>
                </div>
                <div className='md:w-[252px] md:h-[397px] h-full w-auto video-container border border-black'>
                    <video src='/assets/videos/carousel7.mp4' className='h-full object-cover' autoPlay muted loop>Your browser does not support the video tag.</video>
                </div>
            </Carousel >
        </div>
    )
}

export default MultiCarousal