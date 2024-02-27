function SortSelect({ options, sortColumnKey, sorting, setSorting }) {
   // ? sorting have only 3 options: 1. boolean true items, 2. boolean false items, 3. nothing
   // in listing case its verified or unverified, in user case its admin or user
   const handleSortChange = (e) => {
      if (e.target.value === options[0]) {
         setSorting([{ id: sortColumnKey, desc: true }]);
      } else if (e.target.value === options[1]) {
         setSorting([{ id: sortColumnKey, desc: false }]);
      } else {
         setSorting([]);
      }
   };
   return (
      <select
         name="sort"
         value={sorting}
         onChange={(e) => handleSortChange(e)}
         className=" ml-2 px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      >
         <option value={false} className="text-gray-500">
            SortBy
         </option>
         {options.map((item, index) => (
            <option key={index} value={item} className="text-gray-500">
               {item}
            </option>
         ))}
         <option value={false} className="text-gray-500">
            nothing
         </option>
      </select>
   );
}

export default SortSelect;
