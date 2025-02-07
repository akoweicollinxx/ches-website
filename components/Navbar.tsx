"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="w-40 h-16 md:w-48 md:h-20 relative"> {/* Adjust width and height here */}
            <Image
              src="/logo/logo.png"
              alt="Cheshire Construction Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12 text-gray-900 font-medium text-lg">
          <Link href="/" className="hover:text-blue-500 transition">Home</Link>
          <Link href="/showcase" className="hover:text-blue-500 transition">Showcase</Link>
          <Link href="/about" className="hover:text-blue-500 transition">About</Link>
          <Link href="/blogs" className="hover:text-blue-500 transition">Blog</Link>
        </nav>
      </div>

      {/* Mobile Menu (Animated) */}
      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md transform ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        } transition-all duration-300 ease-in-out md:hidden`}
      >
        <nav className="flex flex-col items-center space-y-6 py-6 text-gray-800 text-lg font-medium">
          <Link href="/" className="hover:text-blue-500 transition" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/showcase" className="hover:text-blue-500 transition" onClick={() => setIsMenuOpen(false)}>Showcase</Link>
          <Link href="/about" className="hover:text-blue-500 transition" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/blogs" className="hover:text-blue-500 transition" onClick={() => setIsMenuOpen(false)}>Blog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
