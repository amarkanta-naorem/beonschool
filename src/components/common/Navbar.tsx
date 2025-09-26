'use client';

import { useState } from "react";
import Link from "next/link";
import BeOnSchoolLogo from "./BeOnSchoolLogo";
import { FiMenu, FiX } from "react-icons/fi";

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

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {!isOpen && <FiMenu size={28} color="white" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-[3px] z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-gray-950 border-l border-gray-800 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>
        <div className="px-6 py-4">
          {isOpen && (
            <button onClick={() => setIsOpen(false)} className="absolute top-3 -left-8.5 z-60">
              <div className="relative bg-gray-900/95 backdrop-blur-sm p-1 rounded-tl-xl rounded-bl-xl shadow-2xl border border-gray-600/30 transform transition-transform duration-300 hover:scale-105">
                <FiX size={24} color="white" className="filter drop-shadow"/>
                <div className="absolute inset-0 rounded-tl-xl rounded-bl-xl shadow-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10" />
              </div>
            </button>
          )}

          <nav className="">
            <ul className="flex flex-col space-y-6">
              <li>
                <Link href="/courses" className="text-white font-semibold text-lg hover:text-indigo-300 transition-colors" onClick={() => setIsOpen(false)}>Courses</Link>
              </li>
              <li>
                <Link href="/resources" className="text-white font-semibold text-lg hover:text-indigo-300 transition-colors" onClick={() => setIsOpen(false)}>Resources</Link>
              </li>
              <li>
                <Link href="/auth" className="text-white font-semibold text-lg hover:text-indigo-300 transition-colors" onClick={() => setIsOpen(false)}>Sign In</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}