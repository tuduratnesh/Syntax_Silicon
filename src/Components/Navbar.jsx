import React, { useState } from "react";
import { href, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();


  return (
    <nav className="w-full bg-[#334EAC] p-4 flex justify-between items-center text-white relative">
      
      <h1 className="text-xl font-bold">SYNTAX SILICON</h1>
      
     
      <div className="relative">
      
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setShowProfile(!showProfile)}
        >
          <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
            <img 
              src="divya dp.pdf" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>
        
        
        {showProfile && (
          <div className="absolute right-0 top-full mt-2 w-60 bg-white text-black shadow-lg rounded-lg p-4 z-50">
            <div className="flex items-center gap-3 border-b pb-3">
              <img 
                src="divya dp.pdf" 
                alt="Profile"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">Divya Kumari</h3>
                <p className="text-sm text-gray-600">divyamali@example.com</p>
              </div>
            </div>
            <button 
              className="w-full mt-3 py-2 bg-[#334EAC] text-white rounded-md hover:bg-blue-600 cursor-pointer"
              onClick={() => alert("Logged out!")} 
              
            >
              <a href="/Login">Logout</a>
              
            </button>
          </div>
        )}
      </div>

      {/* {showHistory && (
        <div className="absolute left-0 top-full w-64 h-screen bg-teal-600 text-white shadow-lg p-4 z-50 overflow-auto">
          <h2 className="text-lg font-bold mb-2">History</h2>
          {["History Item 1", "History Item 2", "History Item 3", "History Item 4"].map((item, index) => (
            <p 
              key={index} 
              className="p-2 border-b last:border-none cursor-pointer hover:bg-gray-100"
              onClick={() => alert(`Clicked on ${item}`)} // Replace with actual functionality
            >
              {item}
            </p>
          ))}
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;


