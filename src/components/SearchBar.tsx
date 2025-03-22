export default function SearchBar() {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full max-w-md bg-white">
      <svg
        className="w-5 h-5 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 2a8 8 0 1 1-5.293 14.293l-3.535 3.535a1 1 0 0 1-1.414-1.414l3.535-3.535A8 8 0 0 1 10 2Zm0 2a6 6 0 1 0 4.243 10.243 6 6 0 0 0-4.243-10.243Z"
          clipRule="evenodd"
        />
      </svg>
      <input
        type="text"
        placeholder="Поиск товаров..."
        className="w-full ml-2 focus:outline-none"
      />
    </div>
  );
}