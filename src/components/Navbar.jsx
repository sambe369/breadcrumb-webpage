'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

// Reusable magnetic wrapper component
function Magnetic({ children, strength = 0.3 }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block' }}
    >
      <div
        ref={ref}
        style={{
          display: 'inline-block',
          transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)',
        }}
      >
        {children}
      </div>
    </div>
  );
}

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
      style={{ borderColor: "rgba(72, 164, 70, 0.2)" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with magnetic effect */}
          <div className="flex items-center">
            <Magnetic strength={0.4}>
              <Link href="/">
                <Image
                  src="/breadcrumblogo.png"
                  alt="Breadcrumb Technologies"
                  width={120}
                  height={40}
                  className="h-10 w-auto transition-all"
                />
              </Link>
            </Magnetic>
          </div>

          {/* Desktop nav with magnetic effect on each link */}
          <div className="hidden md:flex items-center h-full space-x-12">
            <Magnetic>
              <Link
                href="/services"
                className="flex items-center font-mono text-lg text-gray-700 hover:text-[#48A446] transition-colors"
              >
                Services
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/aboutUs"
                className="flex items-center font-mono text-lg text-gray-700 hover:text-[#48A446] transition-colors"
              >
                About Us
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/contact"
                className="flex items-center font-mono text-lg text-gray-700 hover:text-[#48A446] transition-colors"
              >
                Contact
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/career"
                className="flex items-center font-mono text-lg text-gray-700 hover:text-[#48A446] transition-colors"
              >
                Career
              </Link>
            </Magnetic>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={toggleMenu}
              className="text-[#48A446] p-2 rounded-md hover:bg-gray-100/50"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu (no magnetic effect — touch devices don't have hover) */}
        <div
          ref={mobileMenuRef}
          className="md:hidden overflow-hidden transition-max-height duration-500 ease-in-out"
          style={{ maxHeight: "0px" }}
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
              href="/aboutUs"
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