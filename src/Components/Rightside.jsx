import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";

function Rightside() {
  return (
    <div className='h-[100%]'>
      <div className="w-[100%] h-full  bg-[#0C1B3E] p-0.5 text-white">
        
        <div className="flex space-x-6 border-b border-gray-500 pb-2 pl-7">
        <Link to="/verilog_code" className="text-lg font-medium cursor-pointer hover:text-blue-300">Verilog Code</Link>
        <Link to="/testbench" className="text-lg font-medium cursor-pointer hover:text-blue-300">Testbench</Link>
        <Link to="/schematic" className="text-lg font-medium cursor-pointer hover:text-blue-300">Schematic</Link>
        <Link to="/time_behaviour" className="text-lg font-medium cursor-pointer hover:text-blue-300">Time Behaviour</Link>
        <Link to="/graph" className="text-lg font-medium cursor-pointer hover:text-blue-300">Graph</Link>
      </div>
      </div>  
    </div>
  )
}

export default Rightside
