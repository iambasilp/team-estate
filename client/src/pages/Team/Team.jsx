import React from "react";
import { Link } from "react-router-dom";
import styles from "../../style";
export default function About() {
  return (
    <div className={`${styles.paddingY}`}>
      <div className={`py-20 ${styles.paddingX}`}>
        <div className="xl:container mx-auto px-6 md:px-12">
          <div className="mb-16 md:w-2/3 lg:w-1/2">
            <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">BNAS Team Leadership</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Guided by a vision for excellence, BNAS takes pride in its leadership, composed of some of the brightest
              minds and experienced executives in the real estate business.
            </p>
            <div className="mt-10">
              <Link className="bg-blue-700 hover:bg-gray-800 transition-all font-bold text-white px-6 py-3 rounded-lg" to="/search">
                Get Started
              </Link>
            </div>
          </div>

          <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="group relative rounded-2xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                alt="woman"
                loading="lazy"
                width={640}
                height={805}
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Hentoni Doe</h4>
                  <span className="block text-sm text-gray-500">CEO-Founder</span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">
                  Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?
                </p>
              </div>
            </div>
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                alt="woman"
                loading="lazy"
                width={640}
                height={805}
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Hentoni Doe</h4>
                  <span className="block text-sm text-gray-500">CEO-Founder</span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">
                  Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?
                </p>
              </div>
            </div>
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                alt="woman"
                loading="lazy"
                width={640}
                height={805}
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Hentoni Doe</h4>
                  <span className="block text-sm text-gray-500">CEO-Founder</span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">
                  Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?
                </p>
              </div>
            </div>
            <div className="group relative rounded-3xl  space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
                alt="woman"
                loading="lazy"
                width={640}
                height={805}
              />
              <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-800 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-gray-700 text-white">Hentoni Doe</h4>
                  <span className="block text-sm text-gray-500">CEO-Founder</span>
                </div>
                <p className="mt-8 text-gray-300 dark:text-gray-600">
                  Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
