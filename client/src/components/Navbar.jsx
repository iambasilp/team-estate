import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { navLinks } from "../constants/index";

const Navbar = () => {
   const { currentUser } = useSelector((state) => state.user);
   const [toggle, setToggle] = useState(false);

   return (
      <nav className="app__navbar w-full py-4 flex justify-between items-center">
         <div className="app__navbar-image">
            <Link to="/">
               <h1 className="text-slate-800 font-bold text-3xl uppercase ">BNAS</h1>
            </Link>
         </div>
         <ul className="app__navbar-links list-none sm:flex justify-end items-center hidden flex-1">
            {navLinks.map((nav, index) => (
               <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-black text-[16px] xl:text-[20px] font-medium capitalize ${
                     index === navLinks.length - 1 ? "mr-0" : "mr-10"
                  }`}
               >
                  <Link to={`/${nav.id}`}>{nav.title}</Link>
               </li>
            ))}
            {/* Conditional rendering for Sign In or User Name */}
            {currentUser && (
               <li className="font-poppins cursor-pointer text-black text-[16px] font-normal capitalize ml-10">
                  <Link to="/profile">
                     {currentUser.name}{" "}
                     <img className="rounded-full h-7 w-7 object-cover" src={currentUser.avatar} alt="profile" />
                  </Link>
               </li>
            )}

            {!currentUser && (
               <li className="font-poppins cursor-pointer text-white text-[16px]  capitalize ml-10 bg-blue-700 px-4 py-2 rounded-lg font-medium">
                  <Link to="/sign-in">Sign In</Link>
               </li>
            )}
         </ul>

         <div className="app__navbar-menu sm:hidden flex flex-1 justify-end items-center">
            <ul>
               {currentUser && (
                  <li className="font-poppins cursor-pointer text-black text-[16px] font-normal capitalize mx-4">
                     <Link to="/profile">
                        {currentUser.name}{" "}
                        <img className="rounded-full h-7 w-7 object-cover" src={currentUser.avatar} alt="profile" />
                     </Link>
                  </li>
               )}
               {!currentUser && (
                  <li className="font-poppins cursor-pointer text-white text-[16px]  capitalize mx-4 bg-blue-700 px-4 py-2 rounded-lg font-medium">
                     <Link to="/sign-in">Sign In</Link>
                  </li>
               )}
            </ul>
            <img
               src={toggle ? close : menu}
               alt="menu"
               className="w-[28px] h-[28px] object-contain"
               onClick={() => setToggle((prevState) => !prevState)}
            />

            <div
               className={`${
                  toggle ? "flex" : "hidden"
               } py-6 px-10 bg-slate-900 absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar`}
            >
               <ul className="app__navbar-links list-none flex flex-col justify-end items-center flex-1">
                  {navLinks.map((nav, index) => (
                     <li
                        key={nav.id}
                        className={`font-poppins cursor-pointer text-white text-[16px] font-normal capitalize ${
                           index === navLinks.length - 1 ? "mb-0" : "mb-4"
                        } font-medium`}
                     >
                        <Link to={`/${nav.id}`}>{nav.title}</Link>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
