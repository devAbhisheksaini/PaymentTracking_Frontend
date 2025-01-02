import { NavLink } from "react-router-dom";
import logo from "../assets/png/Payment Tracker.png";
import profileLog from "../assets/png/personLogo.png";
import { useAuth } from "../hooks/useAuth";
import clsx from "clsx";
import { CiMenuKebab } from "react-icons/ci";


export default function Header({ layoutHandler, showMenu }) {
  const { user } = useAuth();

  const headerClasses = clsx(
    "bg-slate-300 p-4 flex ",
    showMenu ? "ml-48 transition-all duration-300" : "ml-0 transition-all duration-300"
  );

  return (
    <header className={headerClasses}>
      {/* Toggle Menu Button */}
      {!showMenu && (
        <div>
          <CiMenuKebab
            className="text-4xl cursor-pointer"
            onClick={layoutHandler}
          />
        </div>
      )}

      <div className="flex justify-between w-full">
        {/* Logo Section */}
        <NavLink to="/" className="flex space-x-2" aria-label="Home">
          <img
            src={logo}
            alt="Payment Tracker Logo"
            className="w-10 h-10 rounded-full shadow-md"
          />
          <p className="m-auto font-semibold text-indigo-700 italic">Pay-T</p>
        </NavLink>

        {/* Profile Section */}
        <NavLink to="/profile" className="relative group" aria-label="Profile">
          <div className="flex space-x-2">
            <img
              src={profileLog}
              alt="User Profile"
              className="w-10 h-10 rounded-full border-2 border-indigo-300 shadow-md transition transform group-hover:scale-110"
            />
            <p className="flex flex-col">
              <span className="text-black">{user?.name || "Guest"}</span>
              <sub className="py-1 text-green-500">{user?.role || "N/A"}</sub>
            </p>
          </div>
        </NavLink>
      </div>
    </header>
  );
}

