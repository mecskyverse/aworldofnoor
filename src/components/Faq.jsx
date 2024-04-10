'use client'
import React, { useState } from 'react'
import { inter } from '@/utils/jost';
const Faq = () => {
    const [faqAnswerToShow, setFaqAnswerToShow] = useState(null);
    const FaqData = [
        {
            question: "What is A World of Noor",
            answer: "A World of Noor is a brand that was born out of the COVID-19 pandemic when we were unable to travel internationally. We started virtually traveling by cooking food from around the world to give our daughter the joy of learning about new cultures and places."
        },
        {
            question: "Can I try out all features during Free Trial?",
            answer: "Yes. All features are available during the trial period. Go down the rabbit hole!"
        },
        {
            question: "Is it possible to cancel my subscription?",
            answer: "Yes, you can cancel your subscription at any time. Access to plan features will continue until the end of your current billing cycle."
        },
        {
            question: " Can I upgrade or downgrade my plan at any time?",
            answer: " You can upgrade your plan at anytime. Currently, we don't support downgrading temporarily, but you can cancel your plan and choose a new plan when the current plan expires."
        },
        {
            question: "Can I change the billing cycle?",
            answer: "Currently, we don't support changing the billing cycle temporarily. However, you can cancel your plan and choose a new plan when the current plan expires."
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
        <div className='mt-20 w-full  bg-[#E4F4F6] py-8 sm:py-10 md:py-12 lg:py-[60px] mx-6 lg:mx-auto'>
            <div className={`${inter.className} mb-2 text-black text-center text-lg`}>Have Questions? We have Answers!</div>
            <h3 className={` text-center text-[#CC017A] text-5xl text-text-primary font-bold `}>
                Frequently Asked Questions</h3>
            <div className="mx-auto max-w-[800px] mt-4">
                {FaqData.map((currentFaq, index) => {
                    return (
                        <div onClick={() => handleFaqClick(index)} className="py-3" style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.12)" }}>
                            <div className="cursor-pointer">
                                <div className={`flex ${faqAnswerToShow === index && 'bg-white'} items-center justify-between border-2 rounded-xl border-black px-3 py-3 `}>
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
                                    <p className={`${inter.className} px-4 transition-all duration-300 text-text-secondary  ${faqAnswerToShow === index ? "opacity-100 max-h-max" : "opacity-0 max-h-0"} css-x1l92z`}>
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