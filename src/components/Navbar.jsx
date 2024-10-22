import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '@/../public/assets/heroLogo.svg'
import Image from 'next/image';
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Recipes', path: '/menu' },
    // { title: 'How it works', path: '/process' },
    { title: 'Subscribe', path: '/club' },
  ];

  const renderMenu = () => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 bg-white z-40 pt-16"
        >
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <motion.li
                key={link.title}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.path}
                  className="text-gray-700 text-lg font-medium"
                  onClick={toggleMenu}
                >
                  {link.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <nav className="sticky top-0 z-40 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Image 
              alt='logo' 
              priority={false} 
              src={logo} 
              className='absolute md:w-auto w-12 border-4 box-content md:left-20 left-10 md:top-4 border-white bg-white rounded-full md:flex' 
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.path}
                  className={`relative px-3 py-2 rounded-md text-lg font-medium ${pathname === link.path
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600 transition-colors duration-200'
                    }`}
                >
                  {link.title}
                  {pathname === link.path && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                      layoutId="underline"
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="relative z-50"
            >
              {isOpen ? <IoMdClose className="h-6 z-50 w-6" /> : <IoMdMenu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {renderMenu()}
    </nav>
  );
};

export default Navbar;