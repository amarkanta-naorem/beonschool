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

      <div className={`fixed top-0 right-0 h-full w-64 bg-teal-950 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50 p-6`}>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen && <FiX size={24} color="white" className="absolute top-3 -left-6 bg-indigo-600 p-1 rounded-tl-lg" />}
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

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {!isOpen && <FiMenu size={24} color="white" />}
        </button>
      </div>
    </header>
  );
}
