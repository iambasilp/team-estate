// Import necessary styles
import React from "react";
import { Link } from "react-router-dom";
import styles from "../style";

export default function About() {
   return (
      <div className={`section sm:py-20 py-12 m-6 max-w-6xl mx-auto flex justify-center items-center`}>
         <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 max-w-6xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-xl mb-6 md:mb-0">
               <img
                  src="https://cdn.gencraft.com/prod/user/a1356a66-65af-4036-8a38-378b281c12da/9cf6e14d-ba51-4e1e-a0f9-aa3c27ecf7f9/image/image1_0.jpg?Expires=1706195289&Signature=Yw-t2YTSUm5upnbEYvF5ONgMbBlmwf3PXOx8fd8uw5esY6hOdY9bPA~ZCK0e3qBXN2U2Ocs-TS-hxIPhDsl8bJFIj2HFbiTMcZrCq1H0UBeGovwbNkPwP5P6nLtKypa92J0b3tm00-T2JPO0DcDZxOx2CASlgVQD5pdY9xPFvXoAxIosXwIkAt9-QWPVHnLvzbjajEsO~K1cJzL5c3lcqvJAucjulkPgKrqH5kMPUyU4dlUKkMYb-DxHTg9iouL-NyGgjCi7-AWrACYkq42y99zpf1GhMyciYVQqG-ZBjdqDOBO4LivDGeR-QuOZRdgeGM9jHA35H9CLJnF6KzVcHw__&Key-Pair-Id=K3RDDB1TZ8BHT8"
                  alt="Our Team"
                  loading="lazy"
                  className="w-full object-cover transition-transform transform hover:scale-105 rounded-md"
               />
            </div>

            <div className="text-gray-900">
               <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600 text-center md:text-left">
                  Welcome to BNAS: Your Real Estate Experts
               </h1>

               <div className={`${styles.paragraph} max-w-[470px] mt-5 text-left text-lg`}>
                  <p className="mb-4">
                     <strong>Our Story:</strong> BNAS was founded on the belief that finding a home should be an exciting and
                     seamless experience. Our team of dedicated agents brings years of expertise and a genuine passion for
                     helping clients achieve their real estate dreams.
                  </p>
                  <p className="mb-4">
                     <strong>Our Expertise:</strong> We specialize in helping buyers and sellers in the [YOUR NEIGHBORHOODS OR
                     AREAS OF FOCUS]. Whether you're seeking a charming bungalow, a spacious family home, or a luxurious
                     waterfront property, we'll guide you through every step of the process.
                  </p>
                  <p className="mb-4">
                     <strong>Our Commitment:</strong> We're proud to be an active member of the [YOUR COMMUNITY] community. We
                     support local initiatives and organizations that make our neighborhoods vibrant and thriving places to
                     live.
                  </p>
               </div>

               <p className="mb-6 text-gray-800 text-left text-lg">
                  <strong>Testimonials:</strong>
                  <br />
                  <i>"BNAS made buying our first home a breeze. Their team was incredibly knowledgeable and supportive, and
                     they always went above and beyond to answer our questions." – Sarah J.</i>
               </p>

               <p className="mb-6 text-gray-800 text-left text-lg">
                  <strong>Ready to start your journey?</strong> Explore our listings or contact us today to
                  chat about your real estate goals. We're here to make your dreams a reality.
               </p>

               <div className="flex justify-center space-x-4">
                  <Link
                     className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full"
                     to="/search"
                  >
                     Browse Listings
                  </Link>

                  <Link
                     className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full"
                     to="/contact"
                  >
                     Contact Us
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
