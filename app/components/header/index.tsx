"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#1B0001] fixed text-white shadow-lg w-full z-100">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex gap-2 flex-row">
            <Image src={"./images/logo.svg"} width={50} height={50} alt="log" />

            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-[#CC3F41]">Aerith</span>
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-blue-400 transition-colors"
                >
                  shop
                </Link>
              </li>
              <li>
                <Link
                  href="/Tokenomic"
                  className="hover:text-blue-400 transition-colors"
                >
                  Tokenomic
                </Link>
              </li>
              <li>
                <Link
                  href="/roadmap"
                  className="hover:text-blue-400 transition-colors"
                >
                  Roadmap
                </Link>
              </li>
              <li>
                <Link
                  href="/stake"
                  className="hover:text-blue-400 transition-colors"
                >
                  Stake
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <button className="hidden md:visible bg-[#CC3F41] hover:bg-[#a63234] text-[#FFD188] text-[15px] font-semibold px-6 py-4 rounded-full transition-colors duration-200 border-2">
            Connect Wallet
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              href="/characters"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 hover:bg-gray-700"
            >
              Characters
            </Link>
            <Link
              href="/weapons"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 hover:bg-gray-700"
            >
              Weapons
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 hover:bg-gray-700"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
