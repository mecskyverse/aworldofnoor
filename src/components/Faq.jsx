'use client'
import React, { useState } from 'react'
import { inter } from '@/utils/jost';
const Faq = () => {
    const [faqAnswerToShow, setFaqAnswerToShow] = useState(null);
    const FaqData = [
        {
            question: "What is A World of Noor?",
            answer: "A World of Noor is a lifestyle, entertainment, and learning experience for children, from pre-toddler to their teens. It is a place to discover the world, its cultures, and its histories, to partake in with parents, grandparents, guardians, or other loved ones. We hope it will help you create amazing intergenerational and cross cultural memories!"
        },
        {
            question: "How did A World of Noor Start?",
            answer: "When COVID-19 started and we were all locked in our homes, I (Noor) was barely 18 months old and Dada was at a loss for things to do. In order to give me the joy of learning about new cultures and places, he came up with the idea to travel virtually by cooking food from around the world. We started an initial instagram Live show to celebrate Navroz, the Persian New Year on March 21st, 2020, and A World of Noor was born!"
        },
        {
            question: "What can I do on the site?",
            answer: "Little did we know that cooking would resonate with so many! Dada did not expect the number of requests for the father and daughter tailored recipes and so we have decided to share them here for others. On this site you can discover new recipes and purchase tailored boxes full of tools and tips. We are constantly expanding and soon you will be able to share your pictures and accounts, and we will be expanding into music, art, and science too!"
        },  
    ]
    const handleFaqClick = (index) => {
        if (faqAnswerToShow === index) {
            setFaqAnswerToShow(null)
        }
        else {
            setFaqAnswerToShow(index)
        }
    }
    return (
        <div className='w-full px-4 bg-[#E4F4F6] py-8 sm:py-10 md:py-12 lg:py-[60px] lg:mx-auto'>
            <div className={`${inter.className} mb-2 text-black text-center text-lg`}>Have Questions? We have Answers!</div>
            <h3 className={` text-center text-[#CC017A] lg:text-5xl md:text-4xl text-3xl text-text-primary font-bold `}>
                Frequently Asked Questions</h3>
            <div className="mx-auto max-w-[800px] mt-4">
                {FaqData.map((currentFaq, index) => {
                    return (
                        <div key={index} className="py-3" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.12)" }}>
                            <div onClick={() => handleFaqClick(index)} className="cursor-pointer" >
                                <div  className={`flex ${faqAnswerToShow === index && 'bg-white'} items-center justify-between border-2 rounded-xl border-black px-3 py-3 `}>
                                    <p className={`${inter.className} font-medium text-black`}>
                                        {index + 1}. {currentFaq.question}
                                    </p>
                                    <div className="transition-all duration-300 transform text-white text-[16px]">
                                        <span role="img" aria-label="down" >
                                            {/* {console.log(faqAnswerToShow == index)} */}
                                            <svg className={`${faqAnswerToShow == index ? 'rotate-180' : null}`} viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="black" aria-hidden="true">
                                                <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z">
                                                </path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <p className={`${inter.className} px-4 transition-all duration-300 text-text-secondary  ${faqAnswerToShow === index ? "flex max-h-max opacity-100" : "hidden opacity-0 max-h-0"} css-x1l92z`}>
                                        {currentFaq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Faq