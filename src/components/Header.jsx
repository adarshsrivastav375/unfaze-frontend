import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png.png";
import { FaArrowRightLong } from "react-icons/fa6";
export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0 rounded-b-xl overflow-hidden">
      <nav className="bg-white border-gray-200 px-4 lg:px-20  py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-12" alt="Logo" />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="/therapists"
              className="bg-orange-500 text-white py-2 px-4 rounded flex items-center space-x-2 transition-transform transform hover:scale-110"
            >
              <span className="text-sm">find your therapist</span>{" "}
              <span>
                {" "}
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
          <div
            className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex mt-4 font-medium lg:flex-row lg:space-x-10 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    ` ${
                      isActive ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-700 border-b-2 border-transparent"
                    } block duration-200 hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 pb-2 `
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    ` ${
                      isActive ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-700 border-b-2 border-transparent"
                    } block duration-200 hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 pb-2 `
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    ` ${
                      isActive ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-700 border-b-2 border-transparent"
                    } block duration-200 hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 pb-2 `
                  }
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                  ` ${
                      isActive ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-700 border-b-2 border-transparent"
                    } block duration-200 hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 pb-2 `
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                  ` ${
                      isActive ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-700"
                    } block duration-200 hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 pb-2 `
                  }
                >
                  Contact us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/join-team"
                  className={({ isActive }) =>
                   ` ${
                      isActive ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-700 border-b-2 border-transparent"
                    } block duration-200 hover:bg-gray-50 lg:hover:bg-transparent hover:text-orange-500 pb-2 `
                  }
                >
                  Join our team
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
