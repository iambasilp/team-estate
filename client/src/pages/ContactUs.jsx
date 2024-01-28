import React from "react";
import { RiWhatsappFill, RiInstagramFill, RiGithubFill, RiTwitterXFill } from "react-icons/ri";
import contactUsSvg from "../assets/svg/contact_us.svg";

function ContactUs() {
   return (
      <div className="py-10 px-7 sm:px-16 mt-20">
         <div className="flex flex-col sm:flex-row justify-center items-start">
            {/* First div */}
            <div className="flex justify-center items-center sm:w-1/2">
               <img src={contactUsSvg} alt="contact us" className="w-full h-full object-contain" />
            </div>
            {/* Second div */}
            <div className="flex flex-col justify-center items-left mt-8 sm:mt-1 sm:w-1/2 sm:pl-8">
               <h1 className="text-2xl sm:text-4xl text-gray-800 font-bold font-poppins">Contact Us</h1>
               <p className="text-gray-800 font-medium font-poppins mt-4 text-left sm:text-left">
                  We are here to help and answer any question you might have. Feel free to reach out to us for any
                  inquiries or assistance. Thank you for considering Team Estate. Looking forward to connecting with you
                  soon!
               </p>
               {/* Links */}
               <ContactInfo label="Email" value="something@gmail.com" />
               <ContactInfo label="Phone" value="+911234567890" />
               <ContactInfo label="Address" value="calicut, kerala, india" />
               <div className="flex gap-2 mt-4">
                  <ContactButton
                     href="tel:+911234567890"
                     text="Call Now"
                     bgColor="bg-blue-500"
                     hoverColor="bg-blue-600"
                  />
                  <ContactButton
                     href="https://wa.me/911234567890"
                     text="WhatsApp"
                     bgColor="bg-blue-500"
                     hoverColor="bg-blue-600"
                  />
                  <ContactButton
                     href="mailto:something@gmail.com"
                     text="Gmail"
                     bgColor="bg-blue-500"
                     hoverColor="bg-blue-600"
                  />
               </div>
               <div className="flex gap-2 mt-4">
                  <ContactIconLink href="#" icon={<RiWhatsappFill size={35} color="rgb(38,50,56)" />} />
                  <ContactIconLink href="#" icon={<RiGithubFill size={35} color="rgb(38,50,56)" />} />
                  <ContactIconLink href="#" icon={<RiInstagramFill size={35} color="rgb(38,50,56)" />} />
                  <ContactIconLink href="#" icon={<RiTwitterXFill size={35} color="rgb(38,50,56)" />} />
               </div>
            </div>
         </div>
      </div>
   );
}

function ContactInfo({ label, value }) {
   return (
      <div className="flex justify-start items-left sm:w-1/2 mt-4">
         <h3 className="text-base sm:text-lg font-semibold font-poppins text-gray-800">{label}:</h3>
         <p className="text-sm sm:text-base font-medium font-poppins text-left sm:text-left ml-1 underline text-gray-800">
            <a href={value}>{value}</a>
         </p>
      </div>
   );
}

function ContactButton({ href, text, bgColor, hoverColor }) {
   return (
      <a href={href}>
         <button className={`flex items-center justify-center ${bgColor} hover:${hoverColor} text-white font-semibold py-2 px-4 rounded`}>
            {text}
         </button>
      </a>
   );
}

function ContactIconLink({ href, icon }) {
   return (
      <a href={href}>
         {icon}
      </a>
   );
}

export default ContactUs;

