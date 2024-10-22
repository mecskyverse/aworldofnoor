'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
        <div className="w-full">
            <div className="w-full bg-[#0E609D] h-[400px] items-center flex relative">
                <Image src={leaf1} alt="leaf" className="absolute -bottom-2" />
                <div className="md:w-[40%] md:ml-[20%] w-full gap-6 flex flex-col md:items-end items-center">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-white lg:text-5xl md:text-4xl sm:text-4xl text-3xl text-center leading-normal md:self-end drop-shadow-[0_4px_35px_rgba(0,0,0,0.30)]">
                            Explore Our Delicious Recipes
                        </h2>
                        <p className="text-white text-center md:text-right text-lg md:text-xl">
                            Download our recipe book or browse our full menu
                        </p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 z-10 md:self-center">
                        <button
                            onClick={handleDownloadPDF}
                            className="flex items-center justify-center gap-1 text-white px-5 font-medium text-base md:text-xl py-2 bg-[#E6038A] rounded-full hover:bg-[#c9037a] transition-colors"
                        >
                            Download Recipe Book
                            <Image src={arrowRight} className="md:w-auto w-6" alt="arrow right" />
                        </button>
                        
                        <Link 
                            href="/menu"
                            className="flex items-center justify-center gap-1 text-white px-5 font-medium text-base md:text-xl py-2 bg-[#34495E] rounded-full hover:bg-[#2c3e50] transition-colors"
                        >
                            Check Out Recipes
                            <Image src={arrowRight} className="md:w-auto w-6" alt="arrow right" />
                        </Link>
                    </div>
                </div>
                <Image src={recipeBook} alt="recipe book" className="absolute -top-16 hidden md:block right-[20%]" />
            </div>
        </div>
    )
}

export default HowItWorks