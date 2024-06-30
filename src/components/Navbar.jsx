'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { createNewClient } from '@/utils/supabase/client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { useUser } from '@/context'


const getUserDetail = async (setIsLoggedIn, setAvatar, updateUser) => {
  const supabase = createNewClient()
  const {
    data: { user },
    error
  } = await supabase.auth.getUser()
  if (error || !user) {
    console.log(error)
  }
  else {
    setIsLoggedIn(true)
    console.log('current user', user.identities[0])
    updateUser(user.identities[0])
    user.identities.forEach(identity => {
      if (identity.identity_data?.avatar_url)
        setAvatar(identity.identity_data.avatar_url)
    })

  }
}

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [avatar, setAvatar] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const supabase = createNewClient()
  const { updateUser } = useUser();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getUserDetail(setIsLoggedIn, setAvatar, updateUser)
  }, [])


  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Our Menu', path: '/menu' },
    { title: 'How it works', path: '/process' },
    { title: 'Our Club', path: '/club' },
    { title: 'Sign In', path: '/signup' }
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
          {!isLoggedIn ?
            <Link href='/signin' className='bg-[#40AE49] px-5 py-2 text-white rounded-full'>
              Sign In
            </Link> :
            <Link href='/user/profile' >
              <Avatar avatar={avatar} />
            </Link>
          }
        </ul>
      </div>
      <div className='w-full app__navbar min-h-14 sticky z-[99] md:hidden flex items-center sm:text-sm md:text-base '>
        {isOpen ? <IoMdClose className='text-4xl absolute right-4 z-[100]' onClick={toggleMenu} /> : <IoMdMenu className='text-4xl absolute right-4' onClick={toggleMenu} />}
        {renderMenu()}
      </div>
    </nav>
  )
}

const Avatar = ({ avatar, isDropdownOpen, handleClick, handleLogout }) => {
  if (!avatar)
    return (
      <RxAvatar className='w-10 h-10 cursor-pointer bg-[#e4f4f6] rounded-full' />
    )
  else
    return (
      <Link href='/user/profile' >
        <div className="relative inline-block">
          <button className='w-10 h-10 overflow-hidden cursor-pointer rounded-full bg-[#e4f4f6] border border-black'>
            <img src={avatar} className='w-full h-full object-cover' />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 z-50 w-40 mt-2 py-2 bg-white rounded-lg shadow-sm">
              <button
                className="block w-full px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </Link>
    )
}

export default Navbar

