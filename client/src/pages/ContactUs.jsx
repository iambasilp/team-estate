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
            </div>
         </div>
      </div>
   );
}

export default ContactUs;
