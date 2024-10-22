// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import cartoon from '../../public/assets/cartoonUpdated.svg'
// import heroCloud from '@/../public/assets/heroCloud.svg'
// import heroLines from '@/../public/assets/heroLines.svg'
// import arrowRight from '@/../public/assets/arrow-right.svg'
// import { motion } from 'framer-motion'
// import MultiCarousal from './MultiCarousal'
// import Faqs from './Faq'

// const Hero = () => {
// 

//   const floatAnimation = {
//     animate: {
//       y: [0, -10, 0],
//       transition: {
//         duration: 3,
//         repeat: Infinity,
//         repeatType: "reverse"
//       }
//     }
//   };

//   const buttonHover = {
//     scale: 1.05,
//     transition: { duration: 0.2 }
//   };

//   return (
//     <div className="min-h-[90vh] w-full bg-[#1692CD] relative overflow-hidden flex items-center">
//       {/* Background Elements */}
//       <motion.div 
//         className="absolute top-10 right-10 w-20 h-20"
//         animate={{
//           rotate: 360,
//           transition: { duration: 20, repeat: Infinity, ease: "linear" }
//         }}
//       >
//         <Image src={heroCloud} alt="cloud" className="w-full h-full" />
//       </motion.div>

//       {/* Content Container */}
//       <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-between pt-20 md:pt-0">
//         {/* Text Content */}
//         <motion.div 
//           className="md:w-1/2 text-center md:text-left z-10 md:pr-8 "
//           initial="initial"
//           animate="animate"
//           variants={{
//             initial: { opacity: 0 },
//             animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
//           }}
//         >
//           <motion.h1 
//             className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
//             variants={fadeIn}
//           >
//             Let's travel virtually by cooking food from around the world.
//           </motion.h1>
          
//           <motion.button
//             className="bg-[#E6038A] text-white px-8 py-4 rounded-full text-lg md:text-xl flex items-center gap-2 mx-auto md:mx-0"
//             whileHover={buttonHover}
//             whileTap={{ scale: 0.95 }}
//           >
//             Let's Start Cooking
//             <motion.div
//               animate={{ x: [0, 5, 0] }}
//               transition={{ duration: 1, repeat: Infinity }}
//             >
//               <Image src={arrowRight} alt="arrow" className="w-6 h-6" />
//             </motion.div>
//           </motion.button>
//         </motion.div>

//         {/* Image Content */}
//         <motion.div 
//           className="md:w-1/2 mt-12 md:mt-0 relative"
//           variants={floatAnimation}
//           animate="animate"
//         >
//           <motion.div
//             className="relative z-10"
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <Image
//               src={cartoon}
//               alt="chef cartoon"
//               className="w-full h-auto max-w-md mx-auto"
//               priority
//             />
//           </motion.div>

//           {/* Decorative Elements */}
//           <motion.div
//             className="absolute -bottom-4 -left-4 w-full h-full z-0"
//             animate={{
//               scale: [1, 1.02, 1],
//               transition: { duration: 3, repeat: Infinity }
//             }}
//           >
//             <Image src={heroLines} alt="decorative lines" className="w-full h-auto opacity-50" />
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Mobile Overlay */}
//       <div className="absolute inset-0 bg-black/10 backdrop-blur-sm md:hidden" />
//     </div>
//   );
// };

// export default Hero;



'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import cartoon from '../../public/assets/cartoonUpdated.svg'
import heroCloud from '@/../public/assets/heroCloud.svg'
import heroLines from '@/../public/assets/heroLines.svg'
import arrowRight from '@/../public/assets/arrow-right.svg'
import MultiCarousal from './MultiCarousal'
import Faqs from './Faq'

const Hero = () => {
    const fadeIn = {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 }
          };

    return (
        <>
            <div className='md:h-[85vh] h-[60vh] flex flex-col'>
                <div className='bg-[#1692CD] md:h-fit h-full w-full justify-center flex relative md:pt-0'>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className='md:w-1/2 md:bg-transparent pt-20 w-full flex md:flex-col md:self-auto self-start md:z-10 z-[5] px-10 justify-center items-center relative md:bg-none'
                    >
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className='md:w-[90%] w-full self-center flex flex-col gap-4 md:mr-5 relative'
                        >
                            <motion.p 
                                className='md:text-left text-center text-white md:text-5xl lg:text-6xl sm:text-4xl text-3xl w-full leading-normal self-end drop-shadow-[0_4px_35px_rgba(0,0,0,0.30)]'
                                variants={fadeIn}

                            >
                                Let's travel virtually by cooking food from around the world.
                            </motion.p>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='md:self-start self-center flex items-center gap-1 text-white px-5 font-medium text-base md:text-2xl bg-[#E6038A] rounded-full md:py-1 py-4'
                            >
                                Let's Start Cooking
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    <Image src={arrowRight} className='md:w-auto w-6' alt="arrow" />
                                </motion.div>
                            </motion.button>
                            <Image src={heroLines} alt='lines' className='absolute md:flex hidden -bottom-16 -left-14' />
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className='md:w-1/2 md:relative justify-start z-0 md:flex absolute bottom-0 w-full'
                    >
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                            className="relative"
                        >
                            <Image alt='cartoon_Image' className='md:relative absolute bottom-0' src={cartoon} />
                        </motion.div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute right-10 top-7 md:flex hidden"
                        >
                            <Image alt='cloud_Image' src={heroCloud} />
                        </motion.div>
                    </motion.div>
                </div>
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm md:hidden" />
            </div>
        </>
    )
}

export default Hero