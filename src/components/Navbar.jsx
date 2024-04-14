import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <div className='w-full app__navbar min-h-20 flex sm:text-sm md:text-base '>
            <ul className='flex gap-6 ml-auto mr-[10%] justify-center items-center'>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/menu">Our Menu</Link>
                </li>
                <li>
                    <Link href="/process">How It Works</Link>
                </li>
                <li>
                    <Link href="/">Our Club</Link>
                </li>

                <Link href='/signup' className='bg-[#40AE49] px-5 py-2 text-white rounded-full'>
                    Get Started
                </Link>
            </ul>
        </div>
    )
}

export default Navbar