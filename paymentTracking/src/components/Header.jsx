import { NavLink } from "react-router-dom";
import logo from "../assets/png/Payment Tracker.png";
import profileLog from "../assets/png/personLogo.png";
import { useAuth } from "../hooks/useAuth";
export default function Header() {
    const { user } = useAuth();
    // console.log(user);
    // console.log(logout);

  return (
    <div>
        <header className="flex justify-between bg-slate-300 p-4 ml-48">
          {/* Logo Section */}
          <NavLink to="/" className="">
            <div className="flex space-x-2">
              <img
                src={logo}
                alt="Payment Tracker Logo"
                className="w-10 h-10 rounded-full shadow-md"
              />
              <p className="m-auto font-semibold text-blue-700 italic">
                {" "}
                Pay-T
              </p>
            </div>
          </NavLink>

          {/* Profile Section */}
          <NavLink to="/profile" className="relative group">
            <div className="flex space-x-2">
              <img
                src={profileLog}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-indigo-300 shadow-md transition transform group-hover:scale-110"
              />
              <p className="flex flex-col">
                <span className="text-black">
                {user?.name}
                </span>
                <sub className="py-1"> 
                {user?.role}
                </sub>
              </p>
            </div>
          </NavLink>
        </header>
      
    </div>
  )
}
