import React from 'react'
import {Outlet, useLocation} from "react-router-dom"
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Rightside from './Components/Rightside';
import Home from './Components/Home';



function Layout() {
  const location = useLocation();
  const hideLayoutPaths = ['/signup', '/login'];

  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  if (shouldHideLayout) {
    return <Outlet />;
  }

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col">
      <Navbar />
      <div className="flex w-full"> 
        <div className='w-[30%]'><Home/></div>
        <div className='flex-col-reverse flex w-[70%] h-[100%]'>
        <div className='h-[90%]'><Outlet /></div>
        <div className='h-[10%]'><Rightside/></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}


export default Layout