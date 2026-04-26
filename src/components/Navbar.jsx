'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Icon package

import logoImage from '/public/breadcrumblogo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        mobileMenuRef.current.style.maxHeight = mobileMenuRef.current.scrollHeight + 'px';
      } else {
        mobileMenuRef.current.style.maxHeight = '0px';
      }
    }
  }, [isOpen]);

  return (
    <nav
      className="w-full bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50"
      style={{ borderColor: 'rgba(72, 164, 70, 0.2)' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
              src={logoImage}
              alt="Breadcrumb Technologies"
              className="h-10 w-auto transition-all"
            />
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center h-full space-x-12">
            <Link
              href="/services"
              className="flex items-center font-mono text-lg text-gray-700 hover:text-[#48A446] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/aboutUs"
              className="flex items-center font-mono text-lg text-gray-700 hover:text-[#48A446] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="flex items-center font-mono text-lg text-gray-700 hover:text-[#48A446] transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/career"
              className="flex items-center font-mono text-lg text-gray-700 hover:text-[#48A446] transition-colors"
            >
              Career
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={toggleMenu}
              className="text-[#48A446] p-2 rounded-md hover:bg-gray-100/50"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu with slide animation */}
        <div
          ref={mobileMenuRef}
          className="md:hidden overflow-hidden transition-max-height duration-500 ease-in-out"
          style={{ maxHeight: '0px' }}
        >
          <div className="flex flex-col space-y-3 mt-2 pb-6">
            <Link
              href="/services"
              onClick={toggleMenu}
              className="block px-3 py-2 font-mono text-lg text-gray-700 hover:text-[#48A446] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/about"
              onClick={toggleMenu}
              className="block px-3 py-2 font-mono text-lg text-gray-700 hover:text-[#48A446] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="block px-3 py-2 font-mono text-lg text-gray-700 hover:text-[#48A446] transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/career"
              onClick={toggleMenu}
              className="block px-3 py-2 font-mono text-lg text-gray-700 hover:text-[#48A446] transition-colors"
            >
              Career
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
