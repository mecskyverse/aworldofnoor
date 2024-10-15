import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const WhyJoin = () => {
  return (
    <Card className="bg-blue-900 text-white p-8 rounded-3xl md:max-w-[70%] mx-auto my-10">
      <CardContent className="text-center space-y-4">
        <h2 className="text-4xl font-bold mb-4">
          Buy the Subscription box to join Noor's Club and receive your Cooking Starter kit.
        </h2>
        <p className="text-lg">
          The Subscription Box is perfect for younger kids new to cooking. This pack will provide you premium access to our club, Recipes, Tips, Cards and a personally curated cooking kit.
        </p>
      </CardContent>
    </Card>
  );
};

export default WhyJoin;
// import React from 'react'
// import logo from '@/../public/assets/heroLogo.svg'
// import whyJoinCartoon from '@/../public/assets/whyJoinCartoon.svg'
// import arrowRight from '@/../public/assets/arrow-right.svg'
// import Image from 'next/image'

// function WhyJoin() {
//   return (
//     <div className='h-[1/2] pt-10 px-7 w-full flex flex-col justify-center items-center '>
//     {/* <p className='text-[#40AE49] text-xl mb-4 font-sans'>Our </p> */}
//     <h2 className='text-[#CC017A] lg:text-5xl md:text-4xl sm:text-4xl text-3xl'>Why Join Our Club?</h2>
//     <div className='flex md:flex-row flex-col gap-16 mt-10 items-center h-fit'>
//         <span className='flex flex-col gap-20'>
//             <span className='flex flex-col w-[320px]'>
//                 <h4 className='text-2xl text-[#0E609D]'>1. Learning Together</h4>
//                 <p className='font-sans text-[#333333] text-lg'>Our recipes are family-friendly, ensuring that chefs of all ages can participate and learn.</p>
//             </span>
//             <span className='flex flex-col w-[320px]'>
//                 <h4 className='text-2xl text-[#0E609D]'>2. Culinary Creativity</h4>
//                 <p className='font-sans text-[#333333] text-lg'>We encourage innovation and creativity, turning cooking into an art form for kids.</p>
//             </span>
//         </span>
//         <Image src={whyJoinCartoon}  alt='join__cartoon' />
//         <span className='flex flex-col gap-20'>
//             <span className='flex flex-col w-[320px]'>
//                 <h4 className='text-2xl text-[#0E609D]'>3. Community Connection</h4>
//                 <p className='font-sans text-[#333333] text-lg'>Share your culinary creations, tips, and experiences with a vibrant community of food enthusiasts</p>
//             </span>
//             <span className='flex flex-col w-[320px]'>
//                 <h4 className='text-2xl text-[#0E609D]'>4. Exclusive Savings</h4>
//                 <p className='font-sans text-[#333333] text-lg'>Unlock member-exclusive discounts on a variety of culinary products and ingredients.</p>
//             </span>
//         </span>
//     </div>
// </div>
//   )
// }

// export default WhyJoin