import React from 'react'
import {NavLink, Link, Outlet } from 'react-router-dom';
import logo from './png/Payment Tracker.png'
import profileLog from './png/personLogoW.png'

export function Navbar() {
  return (
   
    <div className='overflow-x-hidden'>
        {/* bg-gray-900 text-white */}
        <nav class=" w-screen bg-gray-900 text-white font-semibold p-2">
            <ol class="flex justify-between">
                <span class="flex space-x-4">  
                    <li class= "">
                        <NavLink to = "/" >
                            <img src={logo} alt="Logo" class="w-6 h-6 rounded-full mx-2" />
                        </NavLink>
                    </li>
                    <li class = "hover:underline transition-all duration-200">
                        <NavLink to="/user" className="">User</NavLink>
                    </li>
                    <li class = "hover:underline transition-all duration-200">
                        <NavLink to="/organization" className="">Organization</NavLink>
                    </li>
                    <li class = "hover:underline transition-all duration-200">
                        <NavLink to="/roles" className="">Organization Roles</NavLink>
                    </li>
                </span>

                <li class="hover:underline transition-all duration-200 m-[1px]">
                    <NavLink to="/profile" className="">
                        <img src={profileLog} alt="Logo" class="w-6 h-6" />
                    </NavLink>
                </li>
            </ol>
        </nav>
        <div class="">
            <Outlet />
        </div>
    </div>


  )
}

export default Navbar