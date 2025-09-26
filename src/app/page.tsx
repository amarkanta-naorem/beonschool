'use client';

import { useRef, useEffect, useState } from 'react';

export default function Home() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isMac, setIsMac] = useState(false);

  // Detect OS on client side
  useEffect(() => {
    setIsMac(/Mac|iPod|iPhone|iPad/.test(navigator.userAgent));
  }, []);

  // Handle keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex items-center justify-center px-4 py-2">
        <div className="flex flex-col items-center justify-center text-white text-center max-w-4xl">

          <h1 className="hidden md:block text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span>Learn By Doing: </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects Over Theory</span>
          </h1>
          
          <p className="hidden md:block text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            True understanding comes from application. Build meaningful projects that 
            <span className="font-semibold text-blue-300"> bridge the gap between knowledge and practical skill</span>.
          </p>

          <div className="w-full max-w-2xl mt-8 md:mt-0">
            <div className="relative group">
              <input ref={searchInputRef} type="text" className="w-full p-4 pl-6 pr-26 md:pr-32 bg-gray-900 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-600" placeholder="Search skills, tech, or projects..."/>
              
              <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200" onClick={() => searchInputRef.current?.focus()}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                  <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" />
                </svg>
              </button>

              <div className="hidden md:flex items-center gap-1 absolute right-20 top-1/2 transform -translate-y-1/2 text-sm text-gray-400">
                <kbd className="px-2 py-1 bg-gray-800 rounded-md border border-gray-700">{isMac ? '⌘' : 'Ctrl'}</kbd>
                <span>+</span>
                <kbd className="px-2 py-1 bg-gray-800 rounded-md border border-gray-700">K</kbd>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {['React Masterclass', 'Next.js 14', 'Laravel API', 'Full-Stack', 'DevOps'].map((tag) => (
                <button key={tag} type="button" className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 cursor-pointer transition-colors"
                  onClick={() => {
                    if (searchInputRef.current) {
                      searchInputRef.current.value = tag;
                      searchInputRef.current.focus();
                    }
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
}