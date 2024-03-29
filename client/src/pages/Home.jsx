import styles from "../style";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import HomeImage from "../assets/house-banner.png";
import Search from "../assets/search.svg";
import PropertieCards from "./PropertieCards";

export default function Home() {
   const { currentUser } = useSelector((state) => state.user);
   const [searchTerm, setSearchTerm] = useState("");
   const navigate = useNavigate();
   const handleSubmit = (e) => {
      e.preventDefault();
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.set("searchTerm", searchTerm);
      const searchQuery = urlParams.toString();
      navigate(`/search?${searchQuery}`);
   };

   useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const searchTermFromUrl = urlParams.get("searchTerm");
      if (searchTermFromUrl) {
         setSearchTerm(searchTermFromUrl);
      }
   }, [location.search]);
   return (
      <div>
         {/* top */}
         <section className={`app__home flex flex-col md:flex-row sm:py-32 pt-24 `}>
            <div className={`app__home-info flex-1 flex-col ${styles.flexStart} mt-10 ${styles.paddingX}`}>
               <div className={``}></div>

               <div className="flex flex-col justify-center items-center sm:items-start">
                  <h1 className="font-poppins font-semibold text-[52px] sm:text-[72px] xl:text-[90px] 2xl:text-[120px] text-slate-700 leading-[75px] sm:leading-[100px] ">
                     Find your <br className="sm:block hidden" />
                     <span className="blue-gradient-text">Next perfect</span>
                  </h1>

                  <h1 className="font-poppins font-semibold text-[40px] sm:text-[68px] xl:text-[86px] 2xl:text-[104px] text-slate-700 leading-[75px] sm:leading-[100px] w-full">
                     Place with ease
                  </h1>
               </div>

               <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                  Bnas, your trusted partner in real estate, offers top-notch services for buying and selling
                  properties, ensuring a seamless and satisfying experience for our valued clients.
               </p>
               <div className="mt-6 flex flex-row  items-center justify-center gap-3 ">
                  <form onSubmit={handleSubmit} className="relative ">
                     <input
                        type="text"
                        placeholder="Search..."
                        className="px-6 py-3 w-full sm:w-64 border border-solid border-gray rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                     />
                     <button className="absolute right-3 top-1/2 transform -translate-y-1/2 px-2 py-2  bg-blue-700 hover:bg-gray-800  text-white rounded-md">
                        {/* Add your search icon or SVG here */}
                        <img type="text" src={Search} alt="billing" className="w-[23px] relative z-[5]" />
                     </button>
                  </form>

                  <Link
                     className="bg-blue-700 hover:bg-gray-800 font-bold text-white px-6 py-3 rounded-lg"
                     to="/search"
                  >
                     Get Started
                  </Link>
               </div>
            </div>

            <div className={`app__home-image ${styles.flexCenter} flex-1 md:my-0 my-10 relative`}>
               <img src={HomeImage} alt="billing" className="w-[140%] h-[100%] relative z-[5]" />
            </div>
            <div className={`ss:hidden ${styles.flexCenter}`}>{/* <GetStarted /> */}</div>
         </section>

         <PropertieCards />
      </div>
   );
}
