import React, {useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GradientText from "./ui/GradientText";

const Navbar = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState({ username: "", email: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    setUser({ username, email });
  }, []);

  const handleLogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      // Optional: clear local storage, session, or token
      localStorage.removeItem("token"); 
      // Navigate to login or home
      navigate("/login");
    }
  };


  return (
  
    <nav className="w-full bg-[#334EAC] p-4 flex justify-between items-center text-white relative">
      
      <h1 className="text-3xl font-bold">SYNTAX SILICON</h1>
      {/* <div className="text-3xl font-extrabold">
      <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={20}
  showBorder={false}
  className="custom-class"
>
  SYNTAX SILICON
</GradientText>
</div> */}

      
     
      <div className="relative">
      
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setShowProfile(!showProfile)}
        >
          <div >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
  <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
</svg>


          </div>
          
        </div>
        
        
        {showProfile && (
          <div className="absolute right-0 top-full mt-2 w-60 bg-white text-black shadow-lg rounded-lg p-4 z-50">
            <div className="flex items-center gap-3 border-b pb-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
  <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
</svg>

              <div>
                <h3 className="text-lg font-semibold">{user.username}</h3>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
            <button 
              className="w-full mt-3 py-2 bg-[#334EAC] text-white rounded-md hover:bg-blue-600 cursor-pointer"
              onClick= {handleLogout}
              
            >
              <Link to="/signup">Logout</Link>
              
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


