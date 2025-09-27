'use client';

import { useRef, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi'

export default function Home() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isMac, setIsMac] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const searchApiData = ["auth roles permissions", "api development", "auth sanctum", "auth Api", "blade", "belongsToMany", "cache", "CRUD", "composer", "Course: Better Eloquent Performance", "Course: Queues in Laravel", "Course: PHP for Laravel Developer", "Course: File Uploads in Laravel", "Course: GraphQL in Laravel from Scratch", "Course: Laravel API code review and refactor"];

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

  // Filter search results based on query
  const filteredResults = searchApiData.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              <input 
                ref={searchInputRef} 
                type="text" 
                className="w-full p-4 pl-6 pr-26 md:pr-32 bg-gray-900 border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 group-hover:border-gray-600" 
                placeholder="Search skills, tech, or projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              
              <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200" onClick={() => searchInputRef.current?.focus()}>
                <FiSearch size={22} />
              </button>

              <div className="hidden md:flex items-center gap-1 absolute right-20 top-1/2 transform -translate-y-1/2 text-sm text-gray-400">
                <kbd className="px-2 py-1 bg-gray-800 rounded-md border border-gray-700">{isMac ? '⌘' : 'Ctrl'}</kbd>
                <span>+</span>
                <kbd className="px-2 py-1 bg-gray-800 rounded-md border border-gray-700">K</kbd>
              </div>
            </div>

            {/* Search recommendation - Only show when there's search text */}
            {searchQuery && (
              <div className="flex flex-col items-start p-4 my-4 bg-gray-900 border border-gray-700 rounded-2xl text-white">
                <ul className="space-y-3 w-full max-h-[40vh] overflow-y-auto custom-scrollbar">
                  {filteredResults.length > 0 ? (
                    filteredResults.map((data, index) => (
                      <li 
                        key={index} 
                        className="flex items-center space-x-4 p-2 cursor-pointer hover:bg-gray-700 rounded-md transition-colors"
                        onClick={() => {
                          if (searchInputRef.current) {
                            searchInputRef.current.value = data;
                            setSearchQuery(data);
                            searchInputRef.current.focus();
                          }
                        }}
                      >
                        <FiSearch className="text-gray-400" />
                        <span>{data}</span>
                      </li>
                    ))
                  ) : (
                    <li className="flex items-center justify-center space-x-4 p-4 text-gray-400">
                      <span>Search not found</span>
                    </li>
                  )}
                </ul>
              </div>
            )}

            {/* Quick Search - Only show when there's NO search text */}
            {!searchQuery && (
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {searchApiData.slice(0, 5).map((tag) => (
                  <button 
                    key={tag} 
                    type="button" 
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 cursor-pointer transition-colors"
                    onClick={() => {
                      if (searchInputRef.current) {
                        searchInputRef.current.value = tag;
                        setSearchQuery(tag);
                        searchInputRef.current.focus();
                      }
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>
  );
}