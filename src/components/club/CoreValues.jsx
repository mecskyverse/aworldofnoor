import React from 'react'
import coreValueVector from '@/../public/assets/coreValue.png'
const CoreValues = () => {
    return (
        <section className='bg-[#FEF9F5] w-full pt-10 flex flex-col gap-16 items-center md:px-12 mb-16'>
            <span className='flex flex-col items-center'>
                <span className='font-sans text-[#40AE49] mb-1 text-center text-xl'>Passion For Cooking</span>
                <h3 className='text-5xl text-[#0E609D] mb-16'>Our Club's Core Values</h3>
                <section class="grid grid-cols-auto gap-10 md:grid-cols-2">
                    <div className='w-[485px] overflow-hidden px-10 flex flex-col justify-center items-center bg-contain bg-no-repeat min-h-[445px] bg-[url("../../public/assets/coreValue.png")] '>
                        <h2 className='text-6xl text-[#0E609D] opacity-10 mb-2'>01</h2>
                        <span className='text-[#0E609D] text-2xl w-[220px] text-center'>Cultivate Love for the Kitchen</span>
                        <p className='text-center font-sans text-[#333333] text-lg mt-2'>We believe that cooking is an essential life skill and a form of artistic expression. Our club is dedicated to fostering a passion for cooking in every member, young or old.</p>
                    </div>
                    <div className='w-[485px] overflow-hidden px-10 bg-contain  flex flex-col justify-center items-center bg-no-repeat min-h-[445px] bg-[url("../../public/assets/coreValue2.png")] '>
                        <h2 className='text-6xl text-[#0E609D] opacity-10 mb-2'>02</h2>
                        <span className='text-[#0E609D] text-2xl w-[240px] text-center'>Education Through Experience</span>
                        <p className='text-center font-sans text-[#333333] text-lg mt-2'>Our interactive lessons and step-by-step tutorials make learning to cook accessible and enjoyable. We focus on practical skills that will serve our members for a lifetime.</p>
                    </div>
                    <div className='w-[485px] overflow-hidden px-10 bg-contain  flex flex-col justify-center items-center  bg-contain bg-no-repeat min-h-[445px] bg-[url("../../public/assets/coreValue2.png")] '>
                        <h2 className='text-6xl text-[#0E609D] opacity-10 mb-2'>03</h2>
                        <span className='text-[#0E609D] text-2xl w-[220px] text-center'>Community and Support</span>
                        <p className='text-center font-sans text-[#333333] text-lg mt-2'>Join a community where questions are encouraged, achievements are celebrated, and the love for cooking is shared. Our forums and live sessions provide a space for members to connect and grow.</p>
                    </div>
                    <div className='w-[485px] overflow-hidden px-10 bg-contain  flex flex-col justify-center items-center  bg-contain bg-no-repeat min-h-[445px] bg-[url("../../public/assets/coreValue.png")] '>
                        <h2 className='text-6xl text-[#0E609D] opacity-10 mb-2'>04</h2>
                        <span className='text-[#0E609D] text-2xl w-[220px] text-center'>Innovation and Creativity</span>
                        <p className='text-center font-sans text-[#333333] text-lg mt-2'>We challenge our members to think outside the recipe box. From cooking with unconventional ingredients to creating new dishes, innovation is at the heart of our club.</p>
                    </div>
                    <div className='w-[485px] overflow-hidden px-10 bg-contain  flex flex-col justify-center items-center  bg-contain bg-no-repeat min-h-[445px] bg-[url("../../public/assets/coreValue2.png")] '>
                        <h2 className='text-6xl text-[#0E609D] opacity-10 mb-2'>05</h2>
                        <span className='text-[#0E609D] text-2xl w-[220px] text-center'>Sustainability and Responsibility</span>
                        <p className='text-center font-sans text-[#333333] text-lg mt-2'>Learn about sustainable cooking practices, the importance of using seasonal and local produce, and how to minimize food waste.</p>
                    </div>
                    <div className='w-[485px] overflow-hidden px-10 bg-contain  flex flex-col justify-center items-center  bg-contain bg-no-repeat min-h-[445px] bg-[url("../../public/assets/coreValue.png")] '>
                        <h2 className='text-6xl text-[#0E609D] opacity-10 mb-2'>06</h2>
                        <span className='text-[#0E609D] text-2xl w-[220px] text-center'>Family and Inclusivity</span>
                        <p className='text-center font-sans text-[#333333] text-lg mt-2'>We believe in the power of cooking to bring families together. Our club provides recipes and activities suitable for all ages, encouraging shared experiences in the kitchen.</p>
                    </div>
                </section>
            </span>
        </section>
    )
}

export default CoreValues