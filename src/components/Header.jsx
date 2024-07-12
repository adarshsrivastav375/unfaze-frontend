import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import { FaArrowRight } from "react-icons/fa";

export default function Header() {
  // State variable to track mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0 rounded-b-xl overflow-hidden">
      <nav className="bg-white border-gray-200 px-4 lg:px-20 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-12" alt="Logo" />
          </Link>

          {/* Menu Toggle Button (for mobile) */}
          <button
            className="lg:hidden focus:outline-none"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Menu Links */}
          <div className={`w-full lg:flex lg:items-center lg:w-auto ${isMenuOpen ? "" : "hidden"}`}>
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-10 lg:mt-0">
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName="text-orange-500 border-b-2 border-orange-500"
                  className="block duration-200 hover:bg-gray-50 hover:text-orange-500 pb-2"
                  onClick={toggleMenu} // Close menu on click
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  activeClassName="text-orange-500 border-b-2 border-orange-500"
                  className="block duration-200 hover:bg-gray-50 hover:text-orange-500 pb-2"
                  onClick={toggleMenu} // Close menu on click
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  activeClassName="text-orange-500 border-b-2 border-orange-500"
                  className="block duration-200 hover:bg-gray-50 hover:text-orange-500 pb-2"
                  onClick={toggleMenu} // Close menu on click
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  activeClassName="text-orange-500 border-b-2 border-orange-500"
                  className="block duration-200 hover:bg-gray-50 hover:text-orange-500 pb-2"
                  onClick={toggleMenu} // Close menu on click
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  activeClassName="text-orange-500 border-b-2 border-orange-500"
                  className="block duration-200 hover:bg-gray-50 hover:text-orange-500 pb-2"
                  onClick={toggleMenu} // Close menu on click
                >
                  Contact us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/join-team"
                  activeClassName="text-orange-500 border-b-2 border-orange-500"
                  className="block duration-200 hover:bg-gray-50 hover:text-orange-500 pb-2"
                  onClick={toggleMenu} // Close menu on click
                >
                  Join our team
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Call to Action Button */}
          <div className="flex items-center justify-center mt-4 lg:mt-0 lg:order-2">
            <Link
              to="/therapists"
              className="bg-orange-500 text-white py-2 px-4 rounded flex items-center space-x-2 transition-transform transform hover:scale-110"
            >
              <span className="text-sm">find your therapist</span>{" "}
              <span>
                {" "}
                <FaArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
