'use client'
import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";


function page() {
  const [currentImage, setCurrentImage] = useState(1)

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;

    const handleClick = () => {
      if (currentImage >= imgName.length)
        setCurrentImage(1)
      else
        setCurrentImage(currentImage + 1)
      onClick()
    }
    return <FaArrowRight className='absolute z-10 right-0 text-4xl p-2 cursor-pointer rounded-full  hover:bg-slate-300' onClick={handleClick} />
  };
  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    const handleClick = () => {
      if (currentImage <= 1)
        setCurrentImage(imgName.length)
      else
        setCurrentImage(currentImage - 1)
      onClick()
    }
    return <FaArrowLeft className='absolute z-10 left-0 text-4xl p-2 cursor-pointer rounded-full  hover:bg-slate-300' onClick={handleClick} />
  };


  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 5,
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
  };
  const imgName = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5']
  return (
    <div className='min-h-screen flex w-full'>
      <div className='w-1/2 h-full flex flex-col pt-20'>
        <div className='self-center'>
          <Image
            src={`/assets/sub${currentImage}.webp`}
            alt={`subscription Item`}
            width='420'
            height='420'
            className='object-cover'
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <Carousel
          arrows={true}
          additionalTransfrom={0}
          centerMode={false}
          className="mt-10 mx-10"
          containerClass="container-with-dots"
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
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
          swipeable
        >
          {
            imgName.map((name, index) => (
              <div key={index} className='w-20 h-20 hover:border border-black relative' onClick={() => setCurrentImage(index + 1)}>
                <Image
                  src={`/assets/${name}.webp`}
                  alt={`subscription Item`}
                  fill
                  className='object-cover'
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))
          }
        </Carousel>
      </div>
      <div className='w-1/2 h-full flex flex-col items-center shadow-lg bg-white rounded-lg min-h-screen'>
        <div className="bg-white p-8  w-full max-w-2xl">
          <h1 className="text-3xl font-bold mb-4 text-green-600">The Looker Cooking Kit</h1>
          <p className="text-lg mb-2">Year 3-14</p>
          <div className="flex items-center mb-4">
            <div className="flex items-center text-yellow-500 mr-2">
              {/* Use an icon library like FontAwesome or Heroicons for stars */}
              {[...Array(5)].map((_, i) => (
                <span key={i} className="fas fa-star"><FaStar /></span>
              ))}
            </div>
            <p className="text-blue-600">31 Reviews</p>
          </div>
          <p className="text-2xl font-bold mb-4">$80</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg mb-2">Get Started</button>
          <p className="text-purple-600 mb-4">No commitment: Skip or cancel any time.</p>
          <div>
            <h2 className="text-2xl font-bold mb-2">About this Cooking Kit</h2>
            <p className="mb-4">
              This all-in-one package includes high-quality cooking essentials, a stylish chef's cap, and beautifully designed recipe cards to inspire your culinary adventures.
            </p>
            <h3 className="text-xl font-bold mb-2">What you'll get?</h3>
            <ul className="list-disc pl-6">
              <li>Two Wooden Spoons</li>
              <li>One Red Whisk & One Blue Whisk</li>
              <li>3 Mini Recipe Cards</li>
              <li>3 Full Page Recipe Cards To Write Notes</li>
              <li>Stickers & Coloring Pages</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}

export default page