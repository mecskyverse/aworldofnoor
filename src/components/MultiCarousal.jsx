'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { jost } from '@/utils/jost';
import instaIcon from '@/../public/assets/instaIcon.svg'
import { FaPlay } from "react-icons/fa";

function MultiCarousel() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            partialVisibilityGutter: 40
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30
        }
    }

    const videoData = [
        { src: '/assets/videos/carousel1.mp4', poster: '/assets/posters/carousel1_poster.jpg' },
        { src: '/assets/videos/carousel29.mp4',poster: '/assets/posters/carousel2_poster.jpg' },
        { src: '/assets/videos/carousel3.mp4', poster: '/assets/posters/carousel3_poster.jpg' },
        { src: '/assets/videos/carousel4.mp4', poster: '/assets/posters/carousel4_poster.jpg' },
        { src: '/assets/videos/carousel5.mp4', poster: '/assets/posters/carousel5_poster.jpg' },
        { src: '/assets/videos/carousel6.mp4', poster: '/assets/posters/carousel6_poster.jpg' },
        { src: '/assets/videos/carousel7.mp4', poster: '/assets/posters/carousel7_poster.jpg' },
    ]

    return (
        <div className='md:px-20 px-4 w-full flex flex-col mt-20 mb-20'>
            <p className={`text-[#0038FF] text-center text-xl ${jost.className}`}>#Chefnoor #Fatherdaughter</p>
            <h1 className='text-[#0E609D] lg:text-5xl md:text-4xl text-3xl mt-5 w-full mb-10 flex justify-center gap-2 drop-shadow-[0_4px_35px_rgba(0,0,0,0.30)]'>
                Follow Us<Image src={instaIcon} alt='insta_icon' width={40} height={40} /> Instagram
            </h1>
            <Carousel
                responsive={responsive}
                infinite
                autoPlaySpeed={3000}
                keyBoardControl
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px"
            >
                {videoData.map((video, index) => (
                    <VideoItem key={index} src={video.src} poster={video.poster} />
                ))}
            </Carousel>
        </div>
    )
}

function VideoItem({ src, poster }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className='md:w-[252px] md:mx-0 mx-4 md:h-[397px] h-[450px] w-auto video-container relative overflow-hidden rounded-lg shadow-lg'>
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                className='h-full w-full object-cover'
                muted
                loop
                playsInline
                onClick={handlePlayPause}
            >
                Your browser does not support the video tag.
            </video>
            {!isPlaying && (
                <button
                    className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white'
                    onClick={handlePlayPause}
                >
                    <FaPlay className='md:text-4xl text-3xl'/>
                </button>
            )}
        </div>
    );
}

export default MultiCarousel