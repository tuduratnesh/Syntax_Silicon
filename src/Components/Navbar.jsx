import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full '>
        <ul className='flex gap-10 h-20 justify-center items-center bg-black'>
            <li className='text-white'><NavLink   
             to="/"
                className={({ isActive }) =>
                `${isActive ? "text-orange-700" : "text-white-700"}`
                }> Home
             </NavLink></li>
             <li className='text-white'><NavLink   
             to="/examples"
                className={({ isActive }) =>
                `${isActive ? "text-orange-700" : "text-white-700"}`
                }> Examples
             </NavLink></li>
            
             <li className='text-white'><NavLink   
             to="/profile"
                className={({ isActive }) =>
                `${isActive ? "text-orange-700" : "text-white-700"}`
                }> Profile
             </NavLink></li>

             <li className='text-white'><NavLink   
             to="/settings"
                className={({ isActive }) =>
                `${isActive ? "text-orange-700" : "text-white-700"}`
                }> Settings
             </NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar