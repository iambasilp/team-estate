import contactUsSvg from "../assets/svg/contact_us.svg";

function ContactUs() {
   return (
      <div className="py-10 px-7 sm:px-16 mt-20">
         <div className="flex flex-col sm:flex-row justify-center items-start">
            {/* first div */}
            <div className="flex justify-center items-center sm:w-1/2">
               <img src={contactUsSvg} alt="contact us" className="w-full h-full object-contain" />
            </div>
            {/* second div */}
            <div className="flex flex-col justify-center items-left mt-8 sm:mt-1 sm:w-1/2 sm:pl-8">
               <h1 className="text-2xl sm:text-4xl  text-gray-800 font-bold font-poppins">Contact Us</h1>
               <p className=" text-gray-900 font-medium font-poppins mt-4 text-left sm:text-left">
                  We are here to help and answer any question you might have. We look forward to hearing from you.
               </p>
               {/* links */}
               <div className="flex justify-start items-left sm:w-1/2 mt-4">
                  <h3 className="text-base sm:text-lg font-semibold font-poppins">Email:</h3>
                  <p className="text-sm sm:text-base font-medium font-poppins text-left sm:text-left ml-1 underline">
                     <a href="mailto:something@gmail.com">something@gmail.com</a>
                  </p>
               </div>
               <div className="flex justify-start items-left sm:w-1/2 mt-4">
                  <h3 className="text-base sm:text-lg font-semibold font-poppins">Phone:</h3>
                  <p className="text-sm sm:text-base font-medium font-poppins text-left sm:text-left ml-1 underline">
                     <a href="tel:+911234567890">+911234567890</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default ContactUs;
