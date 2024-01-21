import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-4xl font-extrabold mb-6 text-blue-700'>
        Welcome to BNAS
      </h1>
      <p className='mb-6 text-gray-800'>
        Discover the essence of your dream home with BNAS. Our website is more
        than a platform; it's your gateway to a curated collection of
        exceptional properties. Navigating our intuitive interface, you'll find
        a wealth of features designed to streamline your search. Leverage our
        advanced search options to tailor results to your preferences, ensuring
        each listing aligns seamlessly with your vision. Immerse yourself in the
        details with comprehensive property information, high-resolution
        imagery, and virtual tours.
      </p>
      <p className='mb-6 text-gray-800'>
        {' '}
        At BNAS, we redefine the online real estate
        experience, providing you with the tools to make informed decisions and
        find a home that resonates with your lifestyle. Explore the
        possibilities - your ideal property is just a click away.
      </p>
      <p className='mb-6 font-semibold text-lg text-slate-900'>
        Welcome to BNAS, Welcome Home..
      </p>
      {/* about our team */}
      <div>
        <section className='container mx-auto mt-8 p-4 '>
          <h2 className='text-2xl font-semibold mb-4 text-center'>
            Meet Our Team
          </h2>

          <div className='flex flex-wrap justify-center top-320'>
            <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4'>
              <Link className='cursor-pointer'>
                <img
                  className='w-24 h-24 rounded-full object-cover mx-auto mb-2 '
                  src='https://www.rugbyafrique.com/wp-content/uploads/2018/02/team-member.jpg'
                  alt='Team Member 1'
                />
                <p className='text-center'>BASIL P</p>
              </Link>
            </div>
            <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4'>
              <Link className='cursor-pointer'>
                <img
                  className='w-24 h-24 rounded-full object-cover mx-auto mb-2 '
                  src='https://www.rugbyafrique.com/wp-content/uploads/2018/02/team-member.jpg'
                  alt='Team Member 2'
                />
                <p className='text-center'>NISHAJ</p>
              </Link>
            </div>
            <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4'>
              <Link className='cursor-pointer'>
                <img
                  className='w-24 h-24 rounded-full object-cover mx-auto mb-2 '
                  src='https://www.rugbyafrique.com/wp-content/uploads/2018/02/team-member.jpg'
                  alt='Team Member 3'
                />
                <p className='text-center'>SHUHAIB</p>
              </Link>
            </div>
            <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4'>
              <Link className='cursor-pointer'>
                <img
                  className='w-24 h-24 rounded-full object-cover mx-auto mb-2 '
                  src='https://www.rugbyafrique.com/wp-content/uploads/2018/02/team-member.jpg'
                  alt='Team Member 4'
                />
                <p className='text-center'>ANAS P</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
