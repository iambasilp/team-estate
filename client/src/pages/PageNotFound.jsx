import { Link } from "react-router-dom";
import notFoundSvg from "../assets/svg/404.svg";

function PageNotFound() {
   return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
         <img src={notFoundSvg} alt="not found svg" className="w-[500px]" />
         <p className="text-2xl text-gray-900 font-semibold">Page not found</p>
         <Link to={"/"}>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Go back home</button>
         </Link>
      </div>
   );
}

export default PageNotFound;
