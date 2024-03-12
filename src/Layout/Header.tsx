import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const onLogout = () => {
    navigate("/login");
  };

  return (
    <header className="w-full">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
              style={{ width: "80px", height: "35px" }}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Heroes App
            </span>
          </Link>
          <div className="flex md:order-2">
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded={isNavbarOpen ? "true" : "false"}
              onClick={toggleNavbar}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isNavbarOpen ? "" : "hidden"
            }`}
            id="navbar-search"
          >
            <ul className="flex flex-col md:flex-row gap-3 pt-2">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent ${
                      isActive ? "md:text-blue-700 md:dark:text-blue-500" : ""
                    }`
                  }
                >
                  Heroes / Villanos
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/search"
                  className={({ isActive }) =>
                    `block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent ${
                      isActive ? "md:text-blue-700  md:dark:text-blue-500" : ""
                    }`
                  }
                >
                  Search
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-2 ${
              isNavbarOpen ? "" : "hidden"
            }`}
            id="navbar-search"
          >
            <ul className="flex flex-col md:flex-row gap-3 pt-3">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent ${
                      isActive ? "md:text-blue-700 md:dark:text-blue-500" : ""
                    }`
                  }
                >
                  Alvaro
                </NavLink>
              </li>

              <li>
                <button
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent w-full text-left"
                  onClick={onLogout}
                >
                  logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
