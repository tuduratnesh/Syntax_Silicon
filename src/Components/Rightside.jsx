// import React from 'react'
// import { Link } from "react-router-dom";
// import { useState } from "react";

// function Rightside() {
//   return (
//     <div className='h-[100%]'>
//       <div className="w-[100%] h-full  bg-[#0C1B3E] p-0.5 text-white">
        
//         <div className="flex space-x-6 border-b border-gray-500 pb-2 pl-7">
//         <Link to="/verilog_code" className="text-lg font-medium cursor-pointer hover:text-blue-300">Verilog Code</Link>
//         <Link to="/testbench" className="text-lg font-medium cursor-pointer hover:text-blue-300">Testbench</Link>
//         <Link to="/schematic" className="text-lg font-medium cursor-pointer hover:text-blue-300">Schematic</Link>
//         <Link to="/time_behaviour" className="text-lg font-medium cursor-pointer hover:text-blue-300">Time Behaviour</Link>
//         <Link to="/graph" className="text-lg font-medium cursor-pointer hover:text-blue-300">Graph</Link>
//       </div>
//       </div>  
//     </div>
//   )
// }

// export default Rightside


// src/components/Rightside.js


// src/components/Rightside.js

// src/components/Rightside.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Rightside() {
  const location = useLocation();

  const links = [
    { path: "/verilog_code", label: "Verilog Code" },
    { path: "/testbench", label: "Testbench" },
    { path: "/schematic", label: "Schematic" },
    { path: "/time_behaviour", label: "Time Behaviour" },
    { path: "/graph", label: "Graph" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="h-full">
      <div className="w-full h-full bg-[#0C1B3E] text-white">
        <div className="flex space-x-4 border-b border-gray-500 pb-2 pl-7 overflow-x-auto scrollbar-hide">
          {links.map((link) => (
            <Link
              key={link.path}  
              to={link.path}
              className={`
                px-4 py-1 rounded-lg transition-all duration-300 ease-in-out
                text-lg font-medium cursor-pointer
                ${
                  isActive(link.path)
                    ? 'bg-blue-800 text-white'
                    : 'text-white hover:bg-blue-500 hover:text-white'
                }
                hover:shadow-md active:scale-95
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rightside;
