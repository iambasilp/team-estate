import { useEffect, useState } from "react";
import {
   useReactTable,
   getCoreRowModel,
   flexRender,
   getPaginationRowModel,
   getSortedRowModel,
   getFilteredRowModel,
} from "@tanstack/react-table";
import { FiRefreshCcw } from "react-icons/fi";
import TableNavigation from "../admin.components/TableNavigation";
import SortSelect from "../admin.components/SortSelect";

function Table({ columns, endpoint, refreshCount, setRefreshCount }) {
   const [data, setData] = useState("");
   const [filterText, setFilterText] = useState("");
   const [sorting, setSorting] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      setIsLoading(true);
      const fetchListings = async () => {
         try {
            const res = await fetch(`/api/admin/${endpoint}`);
            const data = await res.json();
            setData(data);
         } catch (error) {
            console.error(error);
         } finally {
            setIsLoading(false);
         }
      };
      fetchListings();
   }, [refreshCount]);

   const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getSortedRowModel: getSortedRowModel(),
      state: {
         globalFilter: filterText,
         sorting: sorting,
      },
      onGlobalFilterChange: setFilterText,
      onSortingChange: setSorting,
   });
   return (
      <>
         {" "}
         {isLoading ? (
            <h2>Loading...</h2>
         ) : (
            <div className="mt-8">
               <div className="flex justify-between items-center">
                  <input
                     type="text"
                     name="search"
                     placeholder="Search"
                     value={filterText}
                     onChange={(e) => setFilterText(e.target.value)}
                     className=" px-6 py-1  border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="flex justify-center items-center">
                     <button
                        onClick={() => setRefreshCount((prev) => prev + 1)}
                        className="p-2  border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                     >
                        <FiRefreshCcw />
                     </button>
                     {/* sort select component comes here */}
                     <SortSelect
                        options={["verified", "unverified"]}
                        sortColumnKey={"verified"}
                        sorting={sorting}
                        setSorting={setSorting}
                     />
                  </div>
               </div>
               <div className="max-w-full overflow-x-scroll mt-4">
                  <table className="w-full divide-y divide-gray-200">
                     <thead className="bg-gray-50">
                        <tr>
                           {table.getHeaderGroups().map((headerGroup) =>
                              headerGroup.headers.map((header) => (
                                 <th
                                    key={header.id}
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                 >
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                 </th>
                              )),
                           )}
                        </tr>
                     </thead>
                     <tbody className="bg-white divide-y divide-gray-200">
                        {table.getRowModel().rows.map((row) => (
                           <tr key={row.id}>
                              {row.getVisibleCells().map((cell) => (
                                 <td className="px-6 py-4 whitespace-nowrap text-base font-semibold" key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                 </td>
                              ))}
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
               {/* pagination bar comes here */}
               <TableNavigation table={table} />
            </div>
         )}
      </>
   );
}

export default Table;
