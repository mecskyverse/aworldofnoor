'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()

    return (
        <div className='w-full app__navbar min-h-20 flex sm:text-sm md:text-base '>
            <ul className='flex gap-6 ml-auto mr-[10%] justify-center items-center'>
                <li>
                    <Link className={`link ${pathname === '/' ? 'font-bold ' : ''}`} href="/">Home</Link>
                </li>
                <li>
                    <Link className={`link ${pathname === '/menu' ? 'font-bold' : ''}`} href="/menu">Our Menu</Link>
                </li>
                <li>
                    <Link className={`link ${pathname === '/process' ? 'font-bold' : ''}`} href="/process">How It Works</Link>
                </li>
                <li>
                    <Link className={`link ${pathname === '/club' ? 'font-bold' : ''}`} href="/club" >Our Club</Link>
                </li>
                <Link href='/signup' className='bg-[#40AE49] px-5 py-2 text-white rounded-full'>
                    Get Started
                </Link>
            </ul>
        </div>
    )
}

export default Navbar