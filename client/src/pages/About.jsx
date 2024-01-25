// Import necessary styles
import React from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import AboutImg from "../assets/about.jpg";

export default function About() {
   const handleLearnMoreClick = (event) => {
      event.preventDefault();
      // Handle the "Learn More" click action
   };

   return (
      <>
         {/* Hero Section: Image Side with Simple Header */}
         <div className="relative overflow-hidden bg-white dark:bg-gray-900 dark:text-gray-100">
            {/* Main Header */}
            <header id="page-header" className="relative flex flex-none items-center py-8">
               {/* Main Header Content */}
               <div className="container mx-auto flex flex-col space-y-4 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:space-y-0 lg:px-8 xl:max-w-7xl">
                  <div>
                     <a
                        href="#"
                        className="group inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
                     >
                        <svg
                           className="hi-mini hi-cube-transparent inline-block size-5 text-blue-600 transition group-hover:scale-110 dark:text-blue-400"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                           aria-hidden="true"
                        >
                           <path
                              fillRule="evenodd"
                              d="M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z"
                              clipRule="evenodd"
                           />
                        </svg>
                        <span>Company</span>
                     </a>
                  </div>
                  <nav className="space-x-3 md:space-x-6">
                     <a
                        href="#"
                        className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                     >
                        <span>Features</span>
                     </a>
                     <a
                        href="#"
                        className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                     >
                        <span>Pricing</span>
                     </a>
                     <a
                        href="#"
                        className="text-sm font-semibold text-gray-900 hover:text-blue-600 dark:text-gray-100 dark:hover:text-blue-400"
                     >
                        <span>Support</span>
                     </a>
                  </nav>
               </div>
               {/* END Main Header Content */}
            </header>
            {/* END Main Header */}

            {/* Hero Content */}
            <div className="container relative mx-auto flex flex-col space-y-16 px-4 py-16 text-center lg:flex-row lg:space-y-0 lg:px-8 lg:py-32 lg:text-left xl:max-w-10-xl">
               <div className=" lg:flex lg:w-1/2  lg:justify-center">
                  <div className="relative mx-5 lg:w-[450px]">
                     <img src={AboutImg} className="relative mx-auto rounded-lg shadow-lg" alt="Hero Image" />
                  </div>
               </div>
               <div className="lg:flex lg:w-1/2 ">
                  <div>
                     <div className="mb-2 inline-flex rounded border border-gray-200 bg-gray-100 px-2 py-1 text-sm font-medium leading-4 text-gray-800 dark:border-gray-600/50 dark:bg-gray-700/50 dark:text-gray-200">
                        Latest Version
                     </div>
                     <h1 className="mb-4 text-4xl font-black text-black dark:text-white">
                        BNAS Expertise
                        <span className="text-blue-600 dark:text-blue-500 md:ml-2">Real Estate</span>
                     </h1>
                     <h2 className="text-xl font-normal leading-relaxed text-gray-700 dark:text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia magni vel est sequi
                        perspiciatis mollitia atque pariatur cumque ipsa! Sed minus architecto dicta optio saepe, labore
                        porro neque earum ad!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                        dolorem nesciunt laborum asperiores cumque, dolores accusamus a totam corporis aliquam neque
                        voluptate omnis qui? Molestias culpa quasi autem iure dolor?. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Nulla error reprehenderit, nemo fuga totam sed molestiae.
                        Necessitatibus suscipit laudantium aliquam quisquam tenetur. Eaque fuga veritatis inventore
                        temporibus reprehenderit. Quos, quae.
                     </h2>
                     <div className="flex flex-col justify-center space-y-2 pb-16 pt-10 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0 lg:justify-start">
                        <a
                           href="#"
                           onClick={handleLearnMoreClick}
                           className="inline-flex items-center justify-center space-x-2 rounded-lg border border-blue-700 bg-blue-700 px-7 py-3.5 font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400 focus:ring-opacity-50 active:border-blue-700 active:bg-blue-700 dark:focus:ring-blue-400 dark:focus:ring-opacity-90"
                        >
                           <span>Learn more</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            {/* END Hero Content */}
         </div>
         {/* END Hero Section: Image Side with Simple Header */}
      </>
   );
}
