import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import History from "./History";




function Home() {

  const [showHistory, setShowHistory] = useState(false); 
  
  return (
    <div className="flex h-screen  bg-[#122463] text-white">
      
      <div className="w-[100%] h-full bg-[#122463] p-6 border-r border-gray-500">
        <div className="bg-[#1A2B5A] p-4 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Prompt Input</h2>
          <textarea
            className="w-full h-32 p-2 bg-[#334EAC] text-white rounded-md outline-none"
            placeholder="Enter your prompt here..."
          />
          
          <div className="flex justify-between mt-3">
            <button className="bg-[#334EAC] px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700">Clear</button>
            <button className="bg-[#334EAC] px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700">Generate</button>
          </div>
        </div>

        <hr className="mt-10 opacity-50"/>
        
        <button
          className="mt-4 bg-[#334EAC] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700"
          onClick={() => setShowHistory(!showHistory)}
        >
          {showHistory ? "Hide History" : "Show History"}
        </button>

        {showHistory && <History/>}
      </div>

      
      {/* <div className="w-[70%] h-full p-6 bg-[#0C1B3E]">
        
        <div className="flex space-x-6 border-b border-gray-500 pb-2">
        <Link to="/verilog_code" className="text-lg font-medium cursor-pointer hover:text-blue-300">Verilog Code</Link>
        <Link to="/testbench" className="text-lg font-medium cursor-pointer hover:text-blue-300">Testbench</Link>
        <Link to="/schematic" className="text-lg font-medium cursor-pointer hover:text-blue-300">Schematic</Link>
        <Link to="/time_behaviour" className="text-lg font-medium cursor-pointer hover:text-blue-300">Time Behaviour</Link>
        <Link to="/graph" className="text-lg font-medium cursor-pointer hover:text-blue-300">Graph</Link>
      </div>

       
       <div className="h-[80%] mt-4 bg-[#122463] rounded-lg p-4"></div>
     </div> */}
    </div>
  );
}

export default Home;

