// Import necessary components and hooks
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

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

// Main App component
export default function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <BrowserRouter>
        {/* Navbar is always visible */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        {/* Routes for different components */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/listing/:listingId" element={<Listing />} />

          {/* Use PrivateRoute with Outlet for nested routes */}
          <Route path="/profile" element={<PrivateRoute />}>
            <Route index element={<Profile />} />
            {/* Make create-listing a relative path */}
            <Route path="create-listing" element={<CreateListing />} />
            <Route path="update-listing/:listingId" element={<UpdateListing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
