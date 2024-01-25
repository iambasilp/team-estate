// Import necessary styles
import React from "react";
import { Link } from "react-router-dom";
import styles from "../style";

export default function About() {
   return (
     <>
       {/* About Section: Image Side with Simple Header */}
       <div className="relative overflow-hidden bg-white dark:bg-gray-900 dark:text-gray-100">
         {/* Main Header */}
         <header
           id="about-header"
           className="relative flex flex-none items-center py-8"
         >
           {/* Main Header Content */}
           <div className="container mx-auto flex flex-col space-y-4 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:space-y-0 lg:px-8 xl:max-w-7xl">
             <div>
               <Link
                 to="#"
                 className="group inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
               >
                 <svg
                   className="hi-mini hi-cube-transparent inline-block size-5 text-blue-600 transition group-hover:scale-110 dark:text-blue-400"
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 20 20"
                   fill="currentColor"
                   aria-hidden="true"
                 >
                   {/* Cube icon path */}
                 </svg>
                 <span>BNAS Real Estate</span>
               </Link>
             </div>
             <nav className="space-x-3 md:space-x-6">
               <Link
                 to="#"
                 className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
               >
                 <span>About Us</span>
               </Link>
               <Link
                 to="#"
                 className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
               >
                 <span>Services</span>
               </Link>
               <Link
                 to="#"
                 className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
               >
                 <span>Contact</span>
               </Link>
             </nav>
           </div>
           {/* END Main Header Content */}
         </header>
         {/* END Main Header */}
 
         {/* About Content */}
         <div className="container relative mx-auto flex flex-col space-y-16 px-4 md:py-16 text-center lg:flex-row lg:space-y-0 lg:px-8 lg:py-32 lg:text-left xl:max-w-7xl">
           {/* Left Column */}
           <div className="lg:flex lg:w-1/2 lg:items-center">
             <div>
               <h1 className="mb-4 text-4xl font-black text-black dark:text-white">
                 Welcome to BNAS Real Estate
               </h1>
               <h2 className="text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300">
                 Discover our innovative real estate solutions and how we can assist you in finding your dream property or selling your current one. Our team is dedicated to providing exceptional service.
               </h2>
               <div className="flex flex-col justify-center space-y-2 pb-16 pt-10 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0 lg:justify-start">
                 <Link
                   to="#"
                   className="inline-flex items-center justify-center space-x-2 rounded-lg border border-blue-700 bg-blue-700 px-7 py-3.5 font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
                 >
                   <svg
                     className="hi-mini hi-arrow-down-tray inline-block size-5 opacity-75"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                     aria-hidden="true"
                   >
                     {/* Down arrow icon path */}
                   </svg>
                   <span>Learn More</span>
                 </Link>
               </div>
             </div>
           </div>
           {/* Right Column */}
           <div className="lg:ml-16 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
             <div className="relative mx-5 lg:w-96">
               {/* Image Section */}
               <img
                 src="https://cdn.tailkit.com/media/placeholders/photo-RSCirJ70NDM-800x1000.jpg"
                 className="relative mx-auto rounded-lg shadow-lg"
                 alt="About Image"
               />
             </div>
           </div>
         </div>
         {/* END About Content */}
       </div>
       {/* END About Section: Image Side with Simple Header */}
     </>
   );
 }
