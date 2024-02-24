import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RxDashboard } from "react-icons/rx";
import { BsBuildings } from "react-icons/bs";
import { PiUsersDuotone } from "react-icons/pi";

function Sidebar() {
   const { currentUser } = useSelector((state) => state.user);
   return (
      <nav className=" h-full py-4 px-4 flex flex-col bg-white border-r shadow-sm">
         {/* head */}
         <div className="flex justify-center items-center">
            <Link to="/">
               <h1 className="text-slate-800 font-bold text-3xl uppercase">BNAS</h1>
            </Link>
            {/* <button>{"<"}</button> */}
         </div>
         {/* sidebar links */}
         <div className="pt-4 flex justify-center flex-col ">
            <NavLink
               to={"/admin"}
               end
               className={({ isActive }) => {
                  const activeStyle = isActive ? "bg-blue-100" : "";
                  return `p-4 flex text-center items-center border border-transparent rounded-full hover:bg-blue-50 hover:border-gray-300 ${activeStyle}`;
               }}
            >
               <RxDashboard size={25} className="text-blue-700" />
               <span className="ml-12 text-base font-semibold">Dashboard</span>
            </NavLink>
            <NavLink
               to={"listings"}
               style={{ marginTop: "1rem" }}
               className={({ isActive }) => {
                  const activeStyle = isActive ? "bg-blue-100" : "";
                  return `p-4 flex text-center items-center border border-transparent rounded-full hover:bg-blue-50 hover:border-gray-300 ${activeStyle}`;
               }}
            >
               <BsBuildings size={25} className="text-blue-700" />
               <span className="ml-12 text-base font-semibold">Listings</span>
            </NavLink>
            <NavLink
               to={"users"}
               style={{ marginTop: "1rem" }}
               className={({ isActive }) => {
                  const activeStyle = isActive ? "bg-blue-100" : "";
                  return `p-4 flex text-center items-center border border-transparent rounded-full hover:bg-blue-50 hover:border-gray-300 ${activeStyle}`;
               }}
            >
               <PiUsersDuotone size={25} className="text-blue-700" />
               <span className="ml-12 text-base font-semibold">Users</span>
            </NavLink>
         </div>
         {/* profile */}
         <Link
            to={"/profile"}
            className="py-2 px-4 mt-auto  flex justify-between items-center border  border-gray-300 rounded-lg hover:bg-blue-500 hover:text-white hover:border-transparent"
         >
            <img className="rounded-full h-10 w-10 object-cover" src={currentUser.avatar} alt="profile" />
            <p className="text-lg font-semibold">{currentUser.username}</p>
         </Link>
      </nav>
   );
}

export default Sidebar;
