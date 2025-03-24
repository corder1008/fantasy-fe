"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
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
                  href="#home"
                  className="hover:text-blue-400 transition-colors"
                  onClick={() => scrollToSection("home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-blue-400 transition-colors"
                  onClick={() => scrollToSection("about")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#shop"
                  className="hover:text-blue-400 transition-colors"
                  onClick={() => scrollToSection("shop")}
                >
                  shop
                </Link>
              </li>
              <li>
                <Link
                  href="#tokenomic"
                  className="hover:text-blue-400 transition-colors"
                  onClick={() => scrollToSection("tokenomic")}
                >
                  Tokenomic
                </Link>
              </li>
              <li>
                <Link
                  href="#roadmap"
                  className="hover:text-blue-400 transition-colors"
                  onClick={() => scrollToSection("roadmap")}
                >
                  Roadmap
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

          <button className="hidden md:flex bg-[#CC3F41] hover:bg-[#a63234] text-[#FFD188] text-[15px] font-semibold px-6 py-4 rounded-full transition-colors duration-200 border-2">
            Connect Wallet
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 hover:bg-gray-700"
              onClick={() => scrollToSection("home")}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 hover:bg-gray-700"
            >
              About
            </Link>
            <Link
              href="#shop"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 hover:bg-gray-700"
            >
              Shop
            </Link>
            <Link
              href="/tokenomic"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 hover:bg-gray-700"
            >
              Tokenomic
            </Link>
            <Link
              href="/roadmap"
              className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 hover:bg-gray-700"
            >
              Roadmap
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
