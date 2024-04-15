import React from 'react'
import coreValueVector from '@/../public/assets/coreValue.png'
const CoreValues = () => {
    return (
        <section className='bg-[#FEF9F5] w-full pt-10 flex flex-col gap-16 items-center md:px-12 mb-16'>
            <span className='flex flex-col items-center'>
                <span className='font-sans text-[#40AE49] mb-1 text-center'>Passion For Cooking</span>
                <h3 className='text-5xl text-[#0E609D] mb-16'>Our Club's Core Values</h3>
                <section class="grid grid-cols-auto gap-10 md:grid-cols-2">
                    <div className='min-w-[485px] bg-contain bg-no-repeat min-h-[445px] bg-[url("../../public/assets/coreValue.png")] '>

                    </div>
                    <div className='min-w-[485px] bg-contain bg-no-repeat min-h-[445px] bg-[url("../../public/assets/coreValue2.png")] '>

                    </div>
                    <div className='min-w-[485px] bg-contain bg-no-repeat min-h-[445px] bg-[url("../../public/assets/coreValue2.png")] '>

                    </div>
                    <div className='min-w-[485px] bg-contain bg-no-repeat min-h-[445px] bg-[url("../../public/assets/coreValue.png")] '>

                    </div>
                    <div className='min-w-[485px] bg-contain bg-no-repeat min-h-[445px] bg-[url("../../public/assets/coreValue2.png")] '>

                    </div>
                    <div className='min-w-[485px] bg-contain bg-no-repeat min-h-[445px] bg-[url("../../public/assets/coreValue.png")] '>

                    </div>
                </section>
            </span>
        </section>
    )
}

export default CoreValues