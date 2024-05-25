'use client'
import React, { useState } from 'react'
import { inter } from '@/utils/jost';
const Faq = () => {
    const [faqAnswerToShow, setFaqAnswerToShow] = useState(null);
    const FaqData = [
        {
            question: "What is A World of Noor?",
            answer: "This is where I (Chef Noor) share my cooking escapades with the world! My Daddy has a saying: 'Learning in public' which he says will help me to learn how to cook better but also help others to join me and learn to cook as well. We talked about it and I liked the idea! So here we are! We started when I was only 18 months old and I love all the different ingredients and 'tricks' and 'mixes. I watch some of my old videos and I can't believe how much I have learned already! Join me with your mommy or daddy (or your grandparents) too!"
        },
        {
            question: "How did A World of Noor Start?",
            answer: "When the Covid pandemic started, Daddy was at a loss of what to do with his little 18 month old daughter. They had originally planned a family vacation to Europe, but had to cancel it and were now confined to their small condo during the lockdowns. So Daddy took to cooking with Noor to let her travel to the world through food. To keep in touch with Family far away, they started to broadcast on Instagram Live, and to share short recipe videos, and before you knew it, they had travelled to 50 culinary experiences around the world! Parents from here in California, as well as our beloved Canada from the UK, Kenya, Singapore, China and more, started to reach out to ask for the tailored father-daughter recipes and to learn new tips and tricks. It was the start of a global community that has opened our world up even more."
        },
        {
            question: "What can I do on the site?",
            answer: "This site is part of our 'hobby' and is constantly growing. Right now you can see videos, read and download recipes, and if you sign up, you can share photos of your cooking adventures!"
        },
        {
            question: "Where can I get a Subscription box?",
            answer: "We have started a subscription box too! It will come out quarterly and it is still being developed but if you purchase now, you get a huge discount! Also - I would love for suggestions and collaborations. Take a look at it here for more details"
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
        <div className='mt-20 w-full px-4 bg-[#E4F4F6] py-8 sm:py-10 md:py-12 lg:py-[60px] lg:mx-auto'>
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