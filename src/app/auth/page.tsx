"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-[88.5vh] max-h-[88.5vh] p-4 sm:p-6 lg:p-8 overflow-hidden">
      <div className="w-full max-w-5xl rounded-lg border border-gray-500 shadow-lg bg-white/10 backdrop-blur-md overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[60vh] sm:min-h-[70vh]">
          
          <div className="relative hidden lg:flex flex-col justify-center p-3 lg:p-4 xl:p-7 w-full lg:w-1/2 space-y-6">
            <div className="text-center p-3">
              <h1 className="inline-flex items-center justify-center gap-3 whitespace-nowrap text-4xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-600 bg-clip-text text-transparent">
                Succeed by Hands-On
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14" viewBox="0 0 24 24">
                  <path fill="none" stroke="#0891b2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m7.75 13.85l2.4 2.4m-2.4-2.4s1.417-3.542 3.434-6m-3.434 6c-5.219-1.305-.53-6 3.434-6m-1.034 8.4s3.542-1.417 6-3.434m-6 3.434c1.305 5.218 6 .53 6-3.434M11.184 7.85c2.04-2.486 5.403-3.6 8.566-3.6c0 3.163-1.114 6.525-3.6 8.566m-1.7-3.359l.707-.707m-9.638 7.826c-.952.801-1.269 3.179-1.269 3.179s2.372-.318 3.171-1.272c.45-.534.444-1.354-.057-1.85a1.394 1.394 0 0 0-1.845-.057"/>
                </svg>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 font-semibold tracking-wide">Welcome to BeOnSchool</p>
            </div>
              
            <ul className="text-white text-lg sm:text-xl lg:text-2xl space-y-3 list-none pl-6">
                <li className="flex items-center gap-4 group hover:bg-gray-700/50 p-2 rounded-lg transition-all duration-300">
                  <span className="w-3 h-3 bg-gradient-to-br from-green-400 to-blue-500 rounded-full shadow-md"></span>
                  <span className="group-hover:text-teal-300 transition-colors duration-200">Study anywhere, anytime, simple.</span>
                </li>
                <li className="flex items-center gap-4 group hover:bg-gray-700/50 p-2 rounded-lg transition-all duration-300">
                  <span className="w-3 h-3 bg-gradient-to-br from-green-400 to-blue-500 rounded-full shadow-md"></span>
                  <span className="group-hover:text-teal-300 transition-colors duration-200">Enjoy easy videos, feel eager!</span>
                </li>
                <li className="flex items-center gap-4 group hover:bg-gray-700/50 p-2 rounded-lg transition-all duration-300">
                  <span className="w-3 h-3 bg-gradient-to-br from-green-400 to-blue-500 rounded-full shadow-md"></span>
                  <span className="group-hover:text-teal-300 transition-colors duration-200">Begin from scratch, learn quick.</span>
                </li>
                <li className="flex items-center gap-4 group hover:bg-gray-700/50 p-2 rounded-lg transition-all duration-300">
                  <span className="w-3 h-3 bg-gradient-to-br from-green-400 to-blue-500 rounded-full shadow-md"></span>
                  <span className="group-hover:text-teal-300 transition-colors duration-200">Create fun projects, shine bright.</span>
                </li>
                <li className="flex items-center gap-4 group hover:bg-gray-700/50 p-2 rounded-lg transition-all duration-300">
                  <span className="w-3 h-3 bg-gradient-to-br from-green-400 to-blue-500 rounded-full shadow-md"></span>
                  <span className="group-hover:text-teal-300 transition-colors duration-200">Boost your career, ready for work!</span>
                </li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 xl:p-10 w-full lg:w-1/2 bg-gray-800">
            <div className="flex justify-center mb-4 sm:mb-6 lg:mb-8">
              <Image src="/images/Logo.png" alt="Logo" width={48} height={48} className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 object-contain"/>
            </div>

            <div className="w-full max-w-md space-y-4 sm:space-y-5 lg:space-y-6">
              <h1 className="font-semibold text-base sm:text-lg lg:text-xl xl:text-2xl text-white text-center">Sign In To Your Account</h1>

              <button className="w-full flex items-center justify-center gap-1.5 sm:gap-2 lg:gap-3 bg-white text-gray-700 font-medium py-2 sm:py-2.5 lg:py-3 rounded-lg shadow hover:bg-gray-100 transition disabled:opacity-50 cursor-pointer">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign in with Google
              </button>
            </div>

            <div className="flex items-center w-full max-w-md my-4 sm:my-5 lg:my-6">
              <div className="flex-grow h-px bg-gray-600"></div>
              <span className="px-2 sm:px-3 text-gray-400 text-xs sm:text-sm lg:text-base">OR</span>
              <div className="flex-grow h-px bg-gray-600"></div>
            </div>

            <div className="w-full max-w-md space-y-4 sm:space-y-5 lg:space-y-6">
              <div className="text-center">
                <h1 className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl text-white">Enter your phone number</h1>
                <p className="text-xs sm:text-sm lg:text-base text-gray-400">We'll send you a text with a verification code.</p>
              </div>

              <div className="flex w-full">
                <select value="+91" disabled className="w-14 sm:w-16 lg:w-20 h-9 sm:h-10 lg:h-11 xl:h-12 px-2 sm:px-3 rounded-l-lg bg-gray-700 text-white border border-gray-600 focus:outline-none">
                  <option value="+91">+91</option>
                </select>
                <input type="tel" placeholder="Enter phone number" className="h-9 sm:h-10 lg:h-11 xl:h-12 flex-grow px-2 sm:px-3 lg:px-4 rounded-r-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
              </div>
              <button className="h-9 sm:h-10 lg:h-11 xl:h-12 w-full bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition cursor-pointer">Send Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}