import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./admin.containers/Sidebar";

function AdminLayout() {
   const user = useSelector((state) => state.user);
   return (
      <>
         {user?.currentUser?.role === "admin" ? (
            <div className="flex">
               <div className="fixed h-full w-64">
                  <Sidebar />
               </div>
               <div className="flex-grow ml-64 max-w-[calc(100vw-16rem)]">
                  <Outlet />
               </div>
            </div>
         ) : (
            <Navigate to="*" />
         )}
      </>
   );
}

export default AdminLayout;
