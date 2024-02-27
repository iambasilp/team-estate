import { Outlet } from "react-router-dom";
import Sidebar from "./admin.containers/Sidebar";

function AdminLayout() {
   return (
      <div className="flex">
         <div className="fixed h-full w-64">
            <Sidebar />
         </div>
         <div className="flex-grow ml-64 max-w-[calc(100vw-16rem)]">
            <Outlet />
         </div>
      </div>
   );
}

export default AdminLayout;
