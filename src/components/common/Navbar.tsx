'use client';

import { useState } from "react";
import Link from "next/link";
import BeOnSchoolLogo from "./BeOnSchoolLogo";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger & Close icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between py-4 px-6 relative">
      <Link href="/">
        <BeOnSchoolLogo />
      </Link>

      <nav className="hidden md:flex">
        <ul className="flex space-x-6">
          <li>
            <Link href="/courses" className="text-white font-semibold cursor-pointer">Courses</Link>
          </li>
          <li>
            <Link href="/resources" className="text-white font-semibold cursor-pointer">Resources</Link>
          </li>
          <li>
            <Link href="/auth" className="text-white font-semibold cursor-pointer">Sign In</Link>
          </li>
        </ul>
      </nav>

      <div className={`${isOpen && 'fixed inset-0 backdrop-blur-[3px] z-50'}`}>
        <div className={`fixed top-0 right-0 h-full w-64 bg-gray-950 border-l border-gray-800 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50 px-6 py-2`}>
          <button onClick={() => setIsOpen(!isOpen)} className="relative group">
            {isOpen && (
              <div className="absolute top-0 -left-[3.6rem]">
                <div className="relative bg-gray-900/95 backdrop-blur-sm p-1 rounded-lg shadow-2xl border border-gray-600/30 transform transition-transform duration-300 hover:scale-105">
                  <FiX size={24} color="white" className="filter drop-shadow"/>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/10 to-purple-500/10" />
                </div>
              </div>
            )}
          </button>
          <ul className="flex flex-col space-y-6">
            <li>
              <Link href="/courses" className="text-white font-semibold" onClick={() => setIsOpen(false)}>Courses</Link>
            </li>
            <li>
              <Link href="/resources" className="text-white font-semibold" onClick={() => setIsOpen(false)}>Resources</Link>
            </li>
            <li>
              <Link href="/auth" className="text-white font-semibold" onClick={() => setIsOpen(false)}>Sign In</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {!isOpen && <FiMenu size={24} color="white" />}
        </button>
      </div>
    </header>
  );
}
