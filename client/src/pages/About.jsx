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
         <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                  <div className="relative z-10 lg:py-16">
                     <div className="relative h-64 sm:h-80 lg:h-full">
                        <img alt="House" src={AboutImg} className="absolute inset-0 h-full w-full object-cover" />
                     </div>
                  </div>

                  <div className="relative flex items-center bg-gray-100">
                     <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                     <div className="p-8 sm:p-16 lg:p-24">
                        <h2 className="text-3xl font-bold sm:text-3xl">
                           About Bnas Real Estate
                        </h2>

                        <p className="mt-4 text-gray-600">
                           At Bnas Real Estate, we're dedicated to providing exceptional services in the real estate
                           industry. With years of experience and a commitment to integrity, we strive to be your
                           trusted partner in every property transaction. Our team is passionate about delivering
                           personalized solutions tailored to meet your unique needs. Whether you're buying, selling, or
                           investing, we're here to guide you every step of the way. Discover why clients choose Bnas
                           for their real estate endeavors
                        </p>

                        <Link
                        to="/services"
                        
                           
                           className="mt-8 inline-block rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                        >
                           Services
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* END Hero Section: Image Side with Simple Header */}
      </>
   );
}
