'use client'
import React, { useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);


  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Our Menu', path: '/menu' },
    { title: 'How it works', path: '/process' },
    { title: 'Our Club', path: '/club' },
  ];

  const renderMenu = () => (
    <ul className={`absolute top-0 z-50 left-0 w-full bg-[#fef9f5] shadow-md transition pt-5 duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
      {navLinks.map((link) => (
        <li key={link.title} className="py-2 px-4 text-center hover:bg-gray-100">
          <Link href={link.path} className="text-gray-700" onClick={toggleMenu}>{link.title}</Link>
        </li>
      ))}

    </ul>
  );

  return (
    <nav className='z-10'>
      <div className='w-full app__navbar min-h-20 md:flex sm:text-sm md:text-base hidden z-10'>
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
        </ul>
      </div>
      <div className='w-full app__navbar min-h-14 sticky z-[99] md:hidden flex items-center sm:text-sm md:text-base '>
        {isOpen ? <IoMdClose className='text-4xl absolute right-4 z-[100]' onClick={toggleMenu} /> : <IoMdMenu className='text-4xl absolute right-4' onClick={toggleMenu} />}
        {renderMenu()}
      </div>
    </nav>
  )
}

export default Navbar

