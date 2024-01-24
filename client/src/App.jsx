// Import necessary components and hooks
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// Import your components
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import styles from "./style";
import Listing from "./pages/Listing";
import Search from "./pages/Search";
import PropertieCards from "./pages/PropertieCards";
import Team from "./pages/Team/Team";
import Footer from "./components/Footer";
import Services from "./pages/Services";

// Main App component
export default function App() {
   const [active, setActive] = useState(null);
   useEffect(() => {
      const scrollAtive = () => {
         setActive(window.scrollY > 20);
      };
      window.addEventListener("scroll", scrollAtive);
      return () => window.removeEventListener("scroll", scrollAtive);
   }, [active]);
   return (
      <div className="bg-primary w-full overflow-hidden">
         <BrowserRouter>
            {/* Navbar is always visible */}
            <div
               className={`${styles.paddingX} bg-primary ${styles.flexCenter} fixed top-0 left-0 w-full z-30  ${active ? "shadow-lg bg-Solitude" : ""}`}
            >
               <div className={`${styles.boxWidth} ${active ? "py-2 transition-all duration-300" : "py-4"} `}>
                  <Navbar />
               </div>
            </div>

            {/* Routes for different components */}
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/home" element={<Home />} />
               <Route path="/properties" element={<PropertieCards />} />
               <Route path="/team" element={<Team />} />
               <Route path="/sign-in" element={<SignIn />} />
               <Route path="/sign-up" element={<SignUp />} />
               <Route path="/about" element={<About />} />
               <Route path="/search" element={<Search />} />
               <Route path="/listing/:listingId" element={<Listing />} />
               <Route path="/services" element={<Services />} />

               <Route element={<PrivateRoute />}>
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/create-listing" element={<CreateListing />} />
                  <Route path="/update-listing/:listingId" element={<UpdateListing />} />
               </Route>
            </Routes>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
               <div className={`${styles.boxWidth}`}>
                  <Footer />
               </div>
            </div>
         </BrowserRouter>
      </div>
   );
}
