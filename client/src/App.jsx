// Import necessary components and hooks
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your components
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";
import Search from "./pages/Search";
import PropertieCards from "./pages/PropertieCards";
import Testimonials from "./pages/Testimonials";
import Team from "./pages/Team/Team";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/Faq";
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminHome from "./pages/Admin/admin.pages/Home";
import AdminListings from "./pages/Admin/admin.pages/Listings";
import AdminUsers from "./pages/Admin/admin.pages/Users";
import Layout from "./container/Layout";
import PageNotFound from "./pages/PageNotFound";

// Main App component
export default function App() {
   return (
      <div className="bg-primary w-full overflow-hidden">
         <BrowserRouter>
            <Routes>
               {/* Pages with nav and footer */}
               <Route path="/" element={<Layout />}>
               <Route path="*" element={<PageNotFound />} />
                  <Route index element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/properties" element={<PropertieCards />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/sign-in" element={<SignIn />} />
                  <Route path="/sign-up" element={<SignUp />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/listing/:listingId" element={<Listing />} />
                  <Route path="/contact" element={<ContactUs />} />
                  {/* Privet routes */}
                  <Route element={<PrivateRoute />}>
                     <Route path="/profile" element={<Profile />} />
                     <Route path="/create-listing" element={<CreateListing />} />
                     <Route path="/update-listing/:listingId" element={<UpdateListing />} />
                  </Route>
               </Route>
               {/* Admin pages */}
               <Route path="/admin" element={<AdminLayout />}>
                  <Route index element={<AdminHome />} />
                  <Route path="listings" element={<AdminListings />} />
                  <Route path="users" element={<AdminUsers />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}
