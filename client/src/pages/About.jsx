import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-4xl font-extrabold mb-6 text-blue-700'>
        Welcome to Basil Estate
      </h1>
      <p className='mb-6 text-gray-800'>
        Discover the extraordinary world of Sahand Estate, where your real
        estate dreams come to life. We are not just a real estate agency; we are
        your partners in finding the perfect home, selling your property, and
        creating unforgettable living experiences.
      </p>
      <p className='mb-6 text-gray-800'>
        At Sahand Estate, we redefine excellence in real estate services. Our
        passionate team of experts is committed to delivering not just a service
        but an experience. Whether you are embarking on a new journey to find
        your dream home or looking to make a lucrative sale, we are here to
        transform every step of your real estate adventure.
      </p>
      <p className='mb-6 text-gray-800'>
        Our mission is simple yet profound – to make your real estate endeavors
        beautiful, seamless, and absolutely awesome. We bring together the
        perfect blend of expertise, personalized service, and an in-depth
        understanding of the local market to ensure your journey with Sahand
        Estate is nothing short of exceptional.
      </p>
      <p className='mb-6 text-gray-800'>
        Experience the joy of buying and selling real estate with Sahand Estate.
        Our dedicated team, rich with industry knowledge, is poised to turn your
        property aspirations into a reality. Your journey with us is not just a
        transaction; it's a celebration of finding and creating spaces that
        resonate with your vision and lifestyle.
      </p>

      <div>
        <section className='container mx-auto mt-8 p-4 '>
          <h2 className='text-2xl font-semibold mb-4 text-center'>
            Meet Our Team
          </h2>

          <div className='flex flex-wrap justify-center top-320'>
            <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4'>
              <img
                className='w-24 h-24 rounded-full object-cover mx-auto mb-2'
                src='https://www.rugbyafrique.com/wp-content/uploads/2018/02/team-member.jpg'
                alt='Team Member 1'
              />
              <p className='text-center'>John Doe</p>
            </div>

            <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4'>
              <img
                className='w-24 h-24 rounded-full object-cover mx-auto mb-2'
                src='https://www.rugbyafrique.com/wp-content/uploads/2018/02/team-member.jpg'
                alt='Team Member 2'
              />
              <p className='text-center'>Jane Smith</p>
            </div>
            <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4'>
              <img
                className='w-24 h-24 rounded-full object-cover mx-auto mb-2'
                src='https://www.rugbyafrique.com/wp-content/uploads/2018/02/team-member.jpg'
                alt='Team Member 3'
              />
              <p className='text-center'>Jane Smith</p>
            </div>
            <div className='w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4'>
              <Link className=''>
                <img
                  className='w-24 h-24 rounded-full object-cover mx-auto mb-2'
                  src='https://www.rugbyafrique.com/wp-content/uploads/2018/02/team-member.jpg'
                  alt='Team Member 4'
                />
                <p className='text-center'>Jane Smith</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
