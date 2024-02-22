import { Outlet } from "react-router-dom";
import Sidebar from "./admin.containers/Sidebar";

function AdminLayout() {
   const style = {};
   return (
      <div>
         <Sidebar />
         <Outlet />
      </div>
   );
}

export default AdminLayout;
