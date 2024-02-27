import { MdFirstPage, MdNavigateNext, MdNavigateBefore, MdLastPage } from "react-icons/md";

function TableNavigation({ table }) {
   return (
      <div className=" mt-6 flex justify-end items-center">
         <button
            onClick={() => table.setPageIndex(0)}
            disabled={table.getState().pagination.pageIndex === 0}
            className="border border-gray-300 rounded-md hover:bg-blue-100 disabled:text-gray-500"
         >
            <MdFirstPage size={30} />
         </button>
         <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="border border-gray-300 rounded-md hover:bg-blue-100 disabled:text-gray-500"
         >
            <MdNavigateBefore size={30} />
         </button>
         <p className="px-2 text-2xl font-medium">
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
         </p>
         <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="border border-gray-300 rounded-md hover:bg-blue-100 disabled:text-gray-500"
         >
            <MdNavigateNext size={30} />
         </button>
         <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={table.getPageCount() === table.getState().pagination.pageIndex + 1}
            className="border border-gray-300 rounded-md hover:bg-blue-100 disabled:text-gray-500"
         >
            <MdLastPage size={30} />
         </button>
      </div>
   );
}

export default TableNavigation;
