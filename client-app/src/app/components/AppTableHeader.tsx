function AppTableHeader() {
  return (
    <div className="w-full mx-auto mt-6 md:flex md:items-center md:justify-between">
      <div className="flex items-center">
        <span className="mr-2 text-gray-700">Show</span>
        <select className="border border-gray-300 rounded-md text-gray-600 h-9 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
          <option>10</option>
          <option>20</option>
          <option>50</option>
          <option>100</option>
        </select>
        <span className="ml-2 text-gray-700">Entries</span>
      </div>
      <div className="relative flex items-center mt-4 md:mt-0">
        <span className="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </span>

        <input
          type="text"
          placeholder="Search"
          className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:border-gray-600 focus:border-slate-300 focus:ring-slate-400 focus:outline-none focus:ring focus:ring-opacity-40"
        />
      </div>
    </div>
  );
}
export default AppTableHeader;
