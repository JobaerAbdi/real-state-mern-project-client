import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl">
            <span className="text-slate-400">Real</span>
            <span className="text-slate-700">State</span>
          </h1>
        </Link>{" "}
        <form className="bg-slate-100 p-1 rounded flex items-center">
          <input
            className="bg-transparent focus:outline-none px-2 w-24 sm:w-64"
            type="text"
            placeholder="Search..."
          />
          <FaSearch />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="text-slate-700 hover:underline font-semibold sm:inline hidden">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-slate-700 hover:underline font-semibold sm:inline hidden">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            {" "}
            <li className="text-slate-700 hover:underline font-semibold">
              SignIn
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
