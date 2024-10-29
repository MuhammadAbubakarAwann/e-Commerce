// components/SearchBar.jsx
const SearchBar = () => (
  <div className="relative w-full max-w-xl">
    <input
      type="text"
      placeholder="search"
      className="w-full p-1 pl-4 pr-12 rounded-xl border-2 border-[#00AAC2] text-[#0A2428] focus:outline-none focus:ring-2 focus:ring-teal-400"
    />
    <button
      type="submit"
      className="absolute right-1 top-1 bottom-1 bg-[#00AAC2] hover:bg-[#0A2428] hover:text-[#00AAC2] text-[#ffffff] border-[#00AAC2] rounded-xl px-4 flex items-center justify-center shadow-inner-custom"
    >
      <svg className="w-5 h-5 shadow-icon-custom" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="-1 -1 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.9 14.32a8 8 0 111.414-1.414l4.286 4.286a1 1 0 01-1.414 1.414l-4.286-4.286zM8 14A6 6 0 108 2a6 6 0 000 12z"
        />
      </svg>
    </button>
  </div>
);

export default SearchBar;