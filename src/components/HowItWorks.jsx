'use client'
import React from 'react'
import Image from 'next/image'
import recipeBook from '@/../public/assets/RecipeBook.png'
import arrowRight from '@/../public/assets/arrow-right.svg'
import leaf1 from '@/../public/assets/leaf1.svg'
import leaf from '@/../public/assets/leaf.svg'
import howItWorks from '@/../public/assets/howItWorks.png'
import bgDots from '@/../public/assets/bgDots.svg'
import { Jost } from 'next/font/google'

const jost = Jost({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

const HowItWorks = () => {
    const handleDownloadPDF = async () => {
        try {
            const pdfUrl = '/assets/pdf/recipe-book.pdf';

            const response = await fetch(pdfUrl);
            const blob = await response.blob();
            
            // Create a blob URL for the PDF
            const blobUrl = window.URL.createObjectURL(blob);
            
            // Create a temporary anchor element
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = 'World-of-Noor-Recipe-Book-1.pdf'; // Set the download filename
            
            // Append to document, click, and cleanup
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Cleanup the blob URL
            window.URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error('Error downloading PDF:', error);
            alert('Failed to download PDF. Please try again later.');
        }
    };

    return (
        <div className='w-full'>
            <div className='w-full bg-[#0E609D] h-[340px] items-center flex relative'>
                <Image src={leaf1} alt='leaf' className='absolute -bottom-2 ' />
                <div className='md:w-[40%]  md:ml-[20%] w-full  gap-8 flex flex-col md:items-end items-center'>
                    <p className='text-white lg:text-5xl md:text-4xl sm:text-4xl text-3xl text-center  leading-normal md:self-end drop-shadow-[0_4px_35px_rgba(0,0,0,0.30)]'>
                        Download World of Noor Recipe Book 1 Now!
                    </p>
                    <button 
                        onClick={handleDownloadPDF}
                        className='md:self-center flex items-center z-10 gap-1 text-white px-5 font-medium text-base md:text-2xl md:py-1 py-2 bg-[#E6038A] rounded-full'
                    >
                        Download PDF<Image src={arrowRight} className='md:w-auto w-6' alt="arrow right" />
                    </button>
                </div>
                <Image src={recipeBook} alt='recipe book' className='absolute -top-16 hidden md:block right-[20%]' />
            </div>
            {/* <div className='mt-24 w-full  flex items-center'>
                <div className='w-[40%] flex justify-end'>
                    <span className='relative w-[80%] h-fit' >
                        <Image src={howItWorks} alt='cup Image' className='' />
                        <Image src={bgDots} alt='bg dots' className='absolute -right-10 -z-10 -bottom-10' />
                    </span>
                </div>
                <div className='w-[60%] flex ml-[5%] h-fit relative'>
                    <div className='flex-col w-[80%] '>
                        <span className={` ${jost.className} text-[#40AE49] text-xl `}>How it Works?</span>
                        <p className='text-[#0E609D] text-5xl mt-5 w-full mb-10  self-end drop-shadow-[0_4px_35px_rgba(0,0,0,0.30)]'>
                            Dada transform anything into easy recipes
                        </p>
                        <span className={`${jost.className}`}>Browse our grocery aisles + our entier recipe catalog <br />(that puts your groceries to delicious use).</span>
                        <span>
                            <button className='mt-10 flex  items-center gap-1 px-4 font-medium text-2xl bg-[#E6038A] text-white rounded-full'>Join Our Club<Image src={arrowRight} /></button>
                        </span>
                    </div>
                    <Image src={leaf} alt='bg__leaf' className='absolute right-10'/>
                </div>
            </div> */}
        </div>
    )
}

export default HowItWorks