import React from "react";
import { Link } from "react-router-dom";
import styles from "../style";
export default function About() {

  return (
    <div className={`section  sm:py-28 py-20   m-6 max-w-6xl mx-auto`}>
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div class="max-w-[550px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1628133287836-40bd5453bed1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
              loading="lazy"
              width=""
              height=""
              class="rounded-lg transition-transform transform hover:scale-105"
            />
          </div>

          <div className="md:7/12 lg:w-6/12">
            <h1 className="text-4xl font-bold mb-6 blue-gradient-text">Welcome to BNAS</h1>
            <p className={'${styles.paragraph} max-w-[470px] mt-5'}>
              Discover the essence of your dream home with BNAS. Our website is more than a platform; it's your gateway
              to a curated collection of exceptional properties. Navigating our intuitive interface, you'll find a
              wealth of features designed to streamline your search. Leverage our advanced search options to tailor
              results to your preferences, ensuring each listing aligns seamlessly with your vision. Immerse yourself in
              the details with comprehensive property information, high-resolution imagery, and virtual tours.
            </p>
            <p className="mb-6 text-gray-800">
              {" "}
              At BNAS, we redefine the online real estate experience, providing you with the tools to make informed
              decisions and find a home that resonates with your lifestyle. Explore the possibilities - your ideal
              property is just a click away.
            </p>
            <Link className="bg-blue-700 font-bold text-white px-6 py-3 rounded-lg" to="/search">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
