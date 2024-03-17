import React from 'react'

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
              <h2 className="text-4xl font-black text-black dark:text-white">
                Frequently Asked Questions
              </h2>
            </div>
            {/* END Heading */}
  
            {/* FAQ */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h4 className="mb-2 font-semibold">
                How can I list my property for sale with Bnas Real Estate
                </h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Simply contact us through our website or give us a call to get started with listing your property. Our team will guide you through the process seamlessly.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">
                What types of properties do you offer for rent?
                </h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                We offer a diverse range of rental properties including apartments, houses, condos, and commercial spaces to meet your specific needs.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">
                Do you provide assistance for finding commercial properties for lease?
                </h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Yes, our dedicated team assists in finding commercial properties for lease tailored to your business requirements, ensuring a smooth process.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">
                What are your fees for selling a property?
                </h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Our fees for selling a property vary depending on the specifics of your listing. Contact us for a personalized quote and detailed information.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">
                How do I schedule a viewing for a property I'm interested in?
                </h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                It's easy! Simply reach out to our team to schedule a viewing at your convenience. We'll coordinate with the property owner to arrange a suitable time.
                </p>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">
                What is the process for renting a property through Bnas Real Estate?
                </h4>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Our rental process is straightforward. Once you find a property you're interested in, we'll guide you through the application, screening, and lease signing process step by step.
                </p>
              </div>
            </div>
            {/* END FAQ */}
  
            {/* Link */}
        
            {/* END Link */}
          </div>
        </div>
        {/* END FAQ Section: Simple */}
      </>
    );
  }
  