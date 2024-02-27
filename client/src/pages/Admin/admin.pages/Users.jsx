import { useState } from "react";
import { DateTime } from "luxon";
import Table from "../admin.containers/Table";
import { handleAdminButtonReq } from "../../../utils/admin";

function Users() {
   const [refreshCount, setRefreshCount] = useState(0);

   const columns = [
      {
         header: "no.",
         accessorKey: "no",
         cell: ({ row }) => row.index + 1,
      },
      {
         header: "Id",
         accessorKey: "_id",
      },
      {
         header: "Username",
         accessorKey: "username",
      },
      {
         header: "Email",
         accessorKey: "email",
      },
      {
         header: "Created_At",
         accessorKey: "createdAt",
         cell: (info) => DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATETIME_MED),
      },
      {
         header: "Role",
         accessorKey: "role",
         // render span instead of string with text color
         cell: (info) => {
            return (
               <span className={` ${info.getValue() === "user" ? "text-blue-500" : "text-green-500"}`}>
                  {info.getValue()}
               </span>
            );
         },
      },
      {
         header: "Actions",
         accessorKey: "actions",
         cell: ({ row }) => {
            return (
               <div className="flex justify-start items-center">
                  <button
                     key={1}
                     className="text-white bg-red-500 ml-2 px-2 py-1 rounded-md"
                     onClick={() => handleAdminButtonReq(row.original._id, "admin/users", "DELETE", setRefreshCount)}
                  >
                     Delete
                  </button>
                  {row.original.role === "user" && (
                     <button
                        key={2}
                        className="text-white bg-green-500 ml-2 px-2 py-1 rounded-md"
                        onClick={() => handleAdminButtonReq(row.original._id, "admin/users", "PUT", setRefreshCount)}
                     >
                        Make Admin
                     </button>
                  )}
               </div>
            );
         },
      },
   ];
   return (
      <div className="py-4 px-6">
         <h1 className=" font-semibold text-2xl">Users</h1>
         <Table
            columns={columns}
            endpoint={"users"}
            sortProps={{ options: ["users", "admin"], sortColumnKey: "role" }}
            refreshCount={refreshCount}
            setRefreshCount={setRefreshCount}
         />
      </div>
   );
}

export default Users;
