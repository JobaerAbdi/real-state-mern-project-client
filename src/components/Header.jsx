import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-xl">
          <span className="text-slate-400">Real</span>
          <span className="text-slate-700">State</span>
        </h1>
        <form className="bg-slate-100 p-1 rounded flex items-center">
          <input
            className="bg-transparent focus:outline-none px-2 w-24 sm:w-64"
            type="text"
            placeholder="Search..."
          />
          <FaSearch />
        </form>
      </div>
    </header>
  );
};

export default Header;
