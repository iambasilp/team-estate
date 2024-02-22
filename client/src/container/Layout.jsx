import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "../style";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Layout() {
   const [active, setActive] = useState(null);

   useEffect(() => {
      const scrollActive = () => {
         setActive(window.scrollY > 20);
      };
      window.addEventListener("scroll", scrollActive);
      return () => window.removeEventListener("scroll", scrollActive);
   }, [active]);
   return (
      <div>
         {/* Navbar */}
         <div
            className={`${styles.paddingX} bg-primary ${styles.flexCenter} fixed top-0 left-0 w-full z-30  ${active ? "shadow-lg bg-Solitude" : ""}`}
         >
            <div className={`${styles.boxWidth} ${active ? "py-2 transition-all duration-300" : "py-4"} `}>
               <Navbar />
            </div>
         </div>
         <Outlet />
         {/* Footer */}
         <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
               <Footer />
            </div>
         </div>
      </div>
   );
}

export default Layout;
