import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-white h-12 fixed top-0 left-0 right-0 z-50 w-7/12 mx-auto bg-opacity-50 px-2">
      <div className="container h-full flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/images/avatar.png"
            alt="Jason Hughes"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-lg font-semibold ml-4">Jason Hughes</span>
        </div>
        <div className={`${menuOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex items-center">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800 mr-6">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800 mr-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="block md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center px-3 py-2 border rounded text-purple-200 border-purple-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
