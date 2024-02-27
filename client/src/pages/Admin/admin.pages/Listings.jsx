import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { DateTime } from "luxon";
import Table from "../admin.containers/Table";
import { handleAdminButtonReq } from "../../../utils/admin";

function Listings() {
   // ? this state is used to refresh the table
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
         header: "Name",
         accessorKey: "name",
      },
      {
         header: "Address",
         accessorKey: "address",
      },
      {
         header: "user",
         accessorKey: "userRef",
      },
      {
         header: "Created_At",
         accessorKey: "createdAt",
         cell: (info) => DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATETIME_MED),
      },
      {
         header: "verified",
         accessorKey: "verified",
         // render span instead of string with text color
         cell: (info) => {
            return (
               <span className={` ${info.getValue() ? "text-blue-500" : "text-red-500"}`}>
                  {info.getValue() ? "Yes" : "No"}
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
                  <Link to={`/listing/${row.original._id}`} className="text-gray-700">
                     <FaEye size={30} />
                  </Link>
                  <button
                     key={1}
                     className="text-white bg-red-500 ml-2 px-2 py-1 rounded-md"
                     onClick={() => handleAdminButtonReq(row.original._id, "admin/listings", "DELETE", setRefreshCount)}
                  >
                     Delete
                  </button>
                  {!row.original.verified && (
                     <button
                        key={2}
                        className="text-white bg-blue-500 ml-2 px-2 py-1 rounded-md"
                        onClick={() =>
                           handleAdminButtonReq(row.original._id, "listing/approve", "PUT", setRefreshCount)
                        }
                     >
                        Verify
                     </button>
                  )}
               </div>
            );
         },
      },
   ];
   return (
      <div className="py-4 px-6">
         <h1 className=" font-semibold text-2xl">Listings</h1>
         <Table
            columns={columns}
            endpoint={"listings"}
            sortProps={{ options: ["verified", "unverified"], sortColumnKey: "verified" }}
            refreshCount={refreshCount}
            setRefreshCount={setRefreshCount}
         />
      </div>
   );
}

export default Listings;
