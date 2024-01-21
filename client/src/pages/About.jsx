import React from 'react';
import facebook from '../assets/socials-icons/facebook.svg';
import instagram from '../assets/socials-icons/instagram.svg';
import linkedin from '../assets/socials-icons/linkedin.svg';
import twitter from '../assets/socials-icons/twitter.svg';

export default function About() {
  // array of team members with their socials links and images
  const teamMembers = [
    {
      name: 'BASIL',
      image:
        'https://www.rugbyafrique.com/wp-content/uploads/2018/02/team-member.jpg',
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },
    {
      name: 'NISHAJ',
      image:
        'https://www.rugbyafrique.com/wp-content/uploads/2018/02/team-member.jpg',
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },
    {
      name: 'SHUHAIB',
      image:
        'https://www.rugbyafrique.com/wp-content/uploads/2018/02/team-member.jpg',
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },
    {
      name: 'ANAS',
      image:
        'https://www.rugbyafrique.com/wp-content/uploads/2018/02/team-member.jpg',
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#',
    },
  ];

  return (
    <div className='section py-20 px-4 m-6 max-w-6xl mx-auto'>
      <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
        <div className='space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
          <div className='md:5/12 lg:w-5/12'>
            <img
              src='https://tailus.io/sources/blocks/left-image/preview/images/startup.png'
              alt='image'
              loading='lazy'
              width=''
              height=''
            />
          </div>
          <div className='md:7/12 lg:w-6/12'>
            <h1 className='text-4xl font-extrabold mb-6 blue-gradient-text'>
              Welcome to BNAS
            </h1>
            <p className='mb-6 text-gray-800'>
              Discover the essence of your dream home with BNAS. Our website is
              more than a platform; it's your gateway to a curated collection of
              exceptional properties. Navigating our intuitive interface, you'll
              find a wealth of features designed to streamline your search.
              Leverage our advanced search options to tailor results to your
              preferences, ensuring each listing aligns seamlessly with your
              vision. Immerse yourself in the details with comprehensive
              property information, high-resolution imagery, and virtual tours.
            </p>
            <p className='mb-6 text-gray-800'>
              {' '}
              At BNAS, we redefine the online real estate experience, providing
              you with the tools to make informed decisions and find a home that
              resonates with your lifestyle. Explore the possibilities - your
              ideal property is just a click away.
            </p>
            <p className='mb-6 font-semibold text-slate-900'>
              Welcome to BNAS, Welcome Home..
            </p>
          </div>
        </div>
      </div>
      <div className='mt-32 bg-gray-100 rounded-lg'>
        <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12'>
          <div className='text-center pb-12'>
            <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900'>
              Meet our team
            </h1>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className='w- bg-white rounded-lg pt-2 sm:pt-12 flex flex-col justify-center items-center'
              >
                <img
                  className='object-center object-cover rounded-full h-24 w-24 sm:mb-5'
                  src={member.image}
                  alt={`${member.name}'s photo`}
                />
                <div className='text-center'>
                  <p className='text-xl text-gray-700 font-bold mb-2'>
                    {member.name}
                  </p>
                </div>
                {/* socials icons of the team memberS*/}
                <div className='mt-2 mb-2 sm:mb-5 md:mb-5 space-x-2 flex '>
                  <a
                    className='hover:bg-blue-700'
                    aria-label='Twitter link'
                    href={member.twitter}
                  >
                    <img src={twitter} alt='twitter' />
                  </a>
                  <a
                    className='hover:bg-blue-700'
                    aria-label='Facebook link'
                    href={member.facebook}
                  >
                    <img src={facebook} alt='facebook' />
                  </a>
                  <a
                    className='hover:bg-blue-700'
                    aria-label='Instagram link'
                    href={member.instagram}
                  >
                    <img src={instagram} alt='instagram' />
                  </a>
                  <a
                    className='hover:bg-blue-700'
                    aria-label='Linkedin link'
                    href={member.linkedin}
                  >
                    <img src={linkedin} alt='linkedin' />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
