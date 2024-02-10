import React from "react";

export default function FAQ() {
   return (
      <>
         {/* FAQ Section: Simple */}
         <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
            <div className="container mx-auto space-y-16 px-4 py-28 md:py-20 lg:px-8 lg:py-32 xl:max-w-7xl">
               {/* Heading */}
               <div className="text-center">
                  <div className="mb-1 text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-500">
                     We Answer
                  </div>
                  <h2 className="text-4xl font-black text-black dark:text-white">Frequently Asked Questions</h2>
               </div>
               {/* END Heading */}

               {/* FAQ */}
               <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
                  <div>
                     <h4 className="mb-2 font-semibold">What features are included?</h4>
                     <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                        Bnas provides users with detailed property listings including descriptions, photos, and
                        amenities. Our advanced search filters allow for precise property searches, while interactive
                        maps offer insights into locations. Additionally, users can manage inquiries and communications
                        seamlessly through our platform.
                     </p>
                  </div>
                  <div>
                     <h4 className="mb-2 font-semibold">Can I use PayPal to pay you?</h4>
                     <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                        Currently, we don't provide a payment system on our platform. However, we're exploring options
                        for integrating payment methods like PayPal in the future to offer convenient payment solutions
                        for our users.
                     </p>
                  </div>
                  <div>
                     <h4 className="mb-2 font-semibold">Do I get access to the community?</h4>
                     <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                        Yes, as a member of Bnas, you gain access to our vibrant community where you can engage with
                        other users, share insights, ask questions, and stay updated on real estate trends and news.
                     </p>
                  </div>
                  <div>
                     <h4 className="mb-2 font-semibold">Can I get a refund just in case?</h4>
                     <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                        We understand unforeseen circumstances may arise. While we currently don't offer refunds, we
                        strive to provide exceptional service and support to address any concerns or issues you may
                        encounter. Please reach out to our customer service team, and we'll do our best to assist you.
                     </p>
                  </div>
                  <div>
                     <h4 className="mb-2 font-semibold">Do you offer email support?</h4>
                     <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                        Yes, we provide email support to assist you with any inquiries, issues, or assistance you may
                        need. Please feel free to reach out to our support team at support@email.com, and we'll be happy
                        to help.
                     </p>
                  </div>
                  <div>
                     <h4 className="mb-2 font-semibold">Are the updates free for life?</h4>
                     <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                        Yes, updates to our platform are provided free of charge for all users, ensuring you have access
                        to the latest features and improvements to enhance your experience on Bnas.
                     </p>
                  </div>
               </div>
               {/* END FAQ */}

               {/* Link */}
               <div className="text-center">
                  <a
                     href="#"
                     className="inline-flex items-center justify-center space-x-2 rounded-lg border border-gray-200 bg-white px-4 py-2 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300 focus:ring-opacity-25 active:border-gray-200 active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 dark:focus:ring-gray-600 dark:focus:ring-opacity-40 dark:active:border-gray-700"
                  >
                     <svg
                        className="hi-mini hi-arrow-top-right-on-square inline-block size-5 opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                     >
                        <path
                           fillRule="evenodd"
                           d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                           clipRule="evenodd"
                        />
                        <path
                           fillRule="evenodd"
                           d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                           clipRule="evenodd"
                        />
                     </svg>
                     <span>Go to support center</span>
                  </a>
               </div>
               {/* END Link */}
            </div>
         </div>
         {/* END FAQ Section: Simple */}
      </>
   );
}
