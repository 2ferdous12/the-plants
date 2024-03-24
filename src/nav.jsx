import { useState } from "react";
import { Link } from "react-router-dom";

const nav = () => {

    return (
        <div className="shadow-lg max-w-6xl mx-auto  h-[90px] border-b-2 border-solid border-gray-500 bg-[#070724]
        navbar items-center flex md:flex-col flex-row lg:flex-row ">
  <div className="navbar-start md:navbar-center ">
    <div className="dropdown">
      <div tabindex="0" role="button" className="btn btn-ghost md:hidden lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-white w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" className="menu menu-sm dropdown-content mt-5 z-[1] p-2 shadow-lg bg-[#070724] text-white gap-2 rounded-box w-52">
      <Link to="/" className="hover:border-2 hover:p-1 hover:rounded-lg">
       <a>Home page</a>
     </Link>
      <Link to="/mercurytwo" className="hover:border-2 hover:p-1 hover:rounded-lg">
       <a>mercury</a>
     </Link>
     <Link to="/venus" className="hover:border-2 hover:p-1 hover:rounded-lg">
       <a>venus</a>
     </Link>
     <Link to="/earth" className="hover:border-2 hover:p-1 hover:rounded-lg">
       <a>earth</a>
     </Link>
     <Link to="/mars" className="hover:border-2 hover:p-1 hover:rounded-lg">
       <a>mars</a>
     </Link>
     <Link to="/jupiter" className="hover:border-2 hover:p-1 hover:rounded-lg">
       <a>jupiter</a>
     </Link>
     <Link to="/saturn" className="hover:border-2 hover:p-1 hover:rounded-lg">
       <a>saturn</a>
     </Link>
     <Link to="/uranus" className="hover:border-2 hover:p-1 hover:rounded-lg">
       <a>uranus</a>
     </Link>
     <Link to="/neptune" className="hover:border-2 hover:p-1 hover:rounded-lg">
       <a>neptune</a>
     </Link>
      </ul>
    </div>
    <a className="btn btn-ghost text-4xl text-white font-bold">THE PLANETS</a>
  </div>
  <div className="lg:navbar-end md:block hidden md:flex md:navbar-center lg:flex list-none space-x-8 text-white">
  <Link to="/" className="hover:border-2 hover:p-1 hover:rounded-lg">
       <a>mercury</a>
     </Link>
     <Link to="/venus" className="hover:border-2 hover:p-1 hover:rounded-lg">
       <a>venus</a>
     </Link>
     <Link to="/earth" className="hover:border-2 hover:p-1 hover:rounded-lg">
       <a>earth</a>
     </Link>
     <Link to="/mars" className="hover:border-2 hover:p-1 hover:rounded-lg">
       <a>mars</a>
     </Link>
     <Link to="/jupiter" className="hover:border-2 hover:p-1 hover:rounded-lg">
       <a>jupiter</a>
     </Link>
     <Link to="/saturn" className="hover:border-2 hover:p-1 hover:rounded-lg">
       <a>saturn</a>
     </Link>
     <Link to="/uranus" className="hover:border-2 hover:p-1 hover:rounded-lg">
       <a>uranus</a>
     </Link>
     <Link to="/neptune" className="hover:border-2 hover:p-1 hover:rounded-lg">
       <a>neptune</a>
     </Link>
  </div>

</div>
   
        
    );
};

export default nav;