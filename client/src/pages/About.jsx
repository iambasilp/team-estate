import React from 'react';

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
                    className='hover:text-blue-700'
                    aria-label='Twitter link'
                    href={member.twitter}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='inline-block'
                      width='1rem'
                      height='1rem'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='currentColor'
                        d='M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z'
                      ></path>
                    </svg>
                  </a>
                  <a
                    className='hover:text-blue-700'
                    aria-label='Facebook link'
                    href={member.facebook}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='inline-block'
                      width='1rem'
                      height='1rem'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='currentColor'
                        d='M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z'
                      ></path>
                    </svg>
                  </a>
                  <a
                    className='hover:text-blue-700'
                    aria-label='Instagram link'
                    href={member.instagram}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='inline-block'
                      width='1rem'
                      height='1rem'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='currentColor'
                        d='M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z'
                      ></path>
                      <path
                        fill='currentColor'
                        d='M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z'
                      ></path>
                      <path
                        fill='currentColor'
                        d='M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z'
                      ></path>
                    </svg>
                  </a>
                  <a
                    className='hover:text-blue-700'
                    aria-label='Linkedin link'
                    href={member.linkedin}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='inline-block'
                      width='1rem'
                      height='1rem'
                      viewBox='0 0 512 512'
                    >
                      <path
                        fill='currentColor'
                        d='M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z'
                      ></path>
                    </svg>
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
