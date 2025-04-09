import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";



function Rightside() {
  const [content] = useState("This is some example content to copy or download.");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      alert("Copied to clipboard!");
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "output.txt";
    a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <div className='h-[100%]'>
      <div className="w-[100%] h-fit  bg-[#0C1B3E] p-0.5 text-white">
        
        <div className="flex space-x-6 border-b border-gray-500 pb-2 pl-7">
        <Link to="/verilog_code" className="text-lg font-medium cursor-pointer hover:text-blue-300">Verilog Code</Link>
        <Link to="/testbench" className="text-lg font-medium cursor-pointer hover:text-blue-300">Testbench</Link>
        <Link to="/schematic" className="text-lg font-medium cursor-pointer hover:text-blue-300">Schematic</Link>
        <Link to="/time_behaviour" className="text-lg font-medium cursor-pointer hover:text-blue-300">Time Behaviour</Link>
        <Link to="/graph" className="text-lg font-medium cursor-pointer hover:text-blue-300">Graph</Link>
      </div>
      <div className="flex justify-end space-x-4 p-2 border-t border-gray-600">
          <button
            onClick={handleCopy}
            className="px-3 bg-blue-600 hover:bg-blue-700 rounded-md text-xs"
          >
            Copy
          </button>
          <button
            onClick={handleDownload}
            className="px-3 bg-blue-600 hover:bg-blue-700 rounded-md text-sm"
          >
            Download
          </button>
        </div>
      </div>  
    </div>
  )
}

export default Rightside
