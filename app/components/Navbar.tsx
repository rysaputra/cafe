'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-[#121212] p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-[#FFFFFF] text-xl font-bold">
          <Link href="/">Coffee Shop</Link>
        </div>

        {/* Menu Hamburger (only visible on mobile) */}
        <button
          className="text-[#CBD5E1] md:hidden flex items-center"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Menu Items */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          {['', 'about', 'product', 'advantage', 'testimonial', 'contact'].map((item) => (
            <Link key={item} href={`#${item}`}>
              <span className="text-[#CBD5E1] hover:text-[#CD8E67] transition duration-300 ease-in hover:underline capitalize">
                {item || ''}
              </span>
            </Link>
          ))}
        </div>

        {/* Order Now Button (visible on desktop) */}
        <div className="hidden md:block">
          <a href="#" className="text-white bg-[#CD8E67] px-5 py-3 rounded-lg hover:bg-[#f6faff] hover:text-[#CD8E67] transition duration-300 ease-in-out">
            Order Now
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4">
          {['', 'about', 'product', 'advantage', 'testimonial','contact'].map((item) => (
            <li key={item} className="mb-2">
              <Link href={`#${item}`}>
                <span className="block text-[#CBD5E1] hover:text-[#CD8E67] transition duration-300 ease-in hover:underline capitalize">
                  {item || ''}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
