'use client'
import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa6";

function SubscriptionBox() {
  const [currentImage, setCurrentImage] = useState(1)
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      window.open('https://buy.stripe.com/test_5kAaIC2Rl6c3eVa7ss', '_blank');
    } catch (error) {
      console.error('Error creating checkout:', error);
      alert('There was an error processing your request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const handleClick = () => {
      if (currentImage >= imgName.length)
        setCurrentImage(1)
      else
        setCurrentImage(currentImage + 1)
      onClick()
    }
    return <FaArrowRight className='absolute z-10 right-0 text-2xl md:text-4xl p-2 cursor-pointer rounded-full hover:bg-slate-300' onClick={handleClick} />
  };
  
  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const handleClick = () => {
      if (currentImage <= 1)
        setCurrentImage(imgName.length)
      else
        setCurrentImage(currentImage - 1)
      onClick()
    }
    return <FaArrowLeft className='absolute z-10 left-0 text-2xl md:text-4xl p-2 cursor-pointer rounded-full hover:bg-slate-300' onClick={handleClick} />
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      partialVisibilityGutter: 10
    }
  };

  const imgName = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5']

  return (
    <div className='flex flex-col md:flex-row w-full bg-white my-2 md:my-5 py-2 md:py-5 px-4 md:px-0'>
      {/* Image Section */}
      <div className='w-full md:w-1/2 h-full flex flex-col md:pt-20'>
        <div className='self-center w-96 h-96 md:w-auto'>
          <Image
            src={`/assets/subscription/sub${currentImage}.webp`}
            alt={`subscription Item`}
            width='420'
            height='420'
            className='object-cover'
            priority
          />
        </div>
        <div className='mt-4 md:mt-10'>
          <Carousel
            arrows={true}
            additionalTransfrom={0}
            centerMode={false}
            className="mx-2 md:mx-10"
            containerClass="container-with-dots"
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
            draggable
            infinite
            keyBoardControl
            minimumTouchDrag={80}
            responsive={responsive}
            shouldResetAutoplay
            showDots={false}
            swipeable
          >
            {imgName.map((name, index) => (
              <div 
                key={index} 
                className='w-16 h-16 md:w-20 md:h-20 hover:border border-black relative mx-1'
                onClick={() => setCurrentImage(index + 1)}
              >
                <Image
                  src={`/assets/subscription/${name}.webp`}
                  alt={`subscription Item`}
                  fill
                  className='object-cover'
                  sizes="(max-width: 768px) 33vw, 20vw"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Content Section */}
      <div className='w-full md:w-1/2 h-full flex flex-col items-center shadow-lg bg-white rounded-lg mt-6 md:mt-0'>
        <div className="bg-white p-4 md:p-8 w-full max-w-2xl">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-green-600">The Starter Pack</h1>
          <p className="text-base md:text-lg mb-2 text-green-600">Year 3-14</p>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center text-yellow-500 mr-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-sm md:text-base"><FaStar/></span>
              ))}
            </div>
            <p className="text-blue-600 text-sm md:text-base">31 Reviews</p>
          </div>

          <p className="text-xl md:text-2xl font-bold mb-4">$80</p>
          
          <button 
            className="w-full md:w-auto bg-[#e6038a] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg mb-2"
            onClick={handleClick} 
            disabled={isLoading}
          >
            Buy Now
          </button>

          <p className="text-purple-600 text-sm md:text-base mb-4">
            No commitment: Skip or cancel any time.
          </p>

          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">About this Cooking Kit</h2>
            <p className="text-sm md:text-base mb-4">
            This starter pack gives you all the items you need to start your journey and can be reused as your own personal recipe box too!
            </p>
            
            <h3 className="text-lg md:text-xl font-bold mb-2">What you'll get?</h3>
            <ul className="list-disc pl-6 text-sm md:text-base">
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

export default SubscriptionBox