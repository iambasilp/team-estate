import React from "react";
import styles from "../style";
import ServiceGraph from "../assets/svg/sevices/graph.svg";
import ServiceRent from "../assets/svg/sevices/apartment-building.svg";
import ServiceParking from "../assets/svg/sevices/parking.svg";
import serviceTwo from "../assets/service_2.svg";
import serviceThree from "../assets/service_3.svg";

export default function services() {
   return (
      <>
         <div
            className={`bg-gradient-to-tr from-indigo-100 via-purple-50 to-teal-100 sm:py-16 py-16`}
         >
            <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg border border-white bg-white p-5 shadow-sm transition hover:border-blue-600 md:p-7 xl:p-10">
                     <img src={ServiceGraph} alt="sell" className="mb-5 inline-block size-12 text-blue-600" />
                     <h4 className="mb-2 text-lg font-bold">Maximize Your Returns</h4>
                     <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                     Unlock the potential of your property with our expert selling services. From market analysis to negotiations, we guide you through every step, ensuring a seamless and profitable sale
                     </p>
                  </div>
                  <div className="rounded-lg border border-white bg-white p-5 shadow-sm transition hover:border-blue-600 md:p-7 xl:p-10">
                  <img src={ServiceRent} alt="sell" className="mb-5 inline-block size-12 text-blue-600" />
                     <h4 className="mb-2 text-lg font-bold">Find Your Perfect Space</h4>
                     <p className="leading-relaxed text-gray-600">
                     Find your ideal rental property effortlessly with our comprehensive rental services. Whether you're seeking a cozy apartment or a spacious house, we help you navigate the rental market with ease, ensuring you find the perfect home.
                     </p>
                  </div>
                  <div className="rounded-lg border border-white bg-white p-5 shadow-sm transition hover:border-blue-600 sm:col-span-2 md:p-7 lg:col-span-1 xl:p-10 dark:border-gray-800 dark:bg-gray-800 dark:shadow-none dark:hover:border-blue-400">
                  <img src={ServiceParking} alt="sell" className="mb-5 inline-block size-12 text-blue-600" />
                     <h4 className="mb-2 text-lg font-bold">Convenient Parking Solutions</h4>
                     <p className="leading-relaxed text-gray-600">
                     Secure your parking needs hassle-free with our dedicated parking spot services. From downtown spaces to suburban lots, we offer convenient and reliable options to meet your parking requirements, providing peace of mind for your vehicle.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         {/* END Features Section: Boxes with Icons */}
      </>
   );
}
