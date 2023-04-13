import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBox = ({ ...props }) => {
  return (
    <div  {...props}>
      <div className="relative flex items-center">
        <span className="absolute">
          <MagnifyingGlassIcon className="mx-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
        </span>
        <input
          type="search"
          placeholder="Search..."
          className="w-full rounded border border-gray-200 bg-white py-1.5 pl-9 pr-5 text-sm text-gray-700 placeholder-gray-400/70 shadow-sm focus:border-green-600 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-green-300"
        />
      </div>
    </div>
  );
};

export default SearchBox;
