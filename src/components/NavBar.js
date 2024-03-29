import React from "react";
import '../App.css';
import image from "../images/rain1.gif"
import logo from "../images/logo.jpeg"
import nature from "../images/sky.jpg"
import { Link } from "react-router-dom";

const NavBar = () =>{ 
    return (
        <nav style={{ backgroundImage:`url(${nature})` }} className=" max-w-[100%] flex   w-[100%] card2 ">
        <div className="w-[20%]">
        <Link to="/"> <img src={logo} alt="" className="w-25 h-20 p-2 rounded-lg border  "></img></Link>
        </div>
   
        <div className="w-[60%] lg:mt-6">
        <ul className="lg:flex hidden h-10  justify-center  " >
            <li style={{ backgroundImage:`url(${image})` }} className="cursor-pointer bg-[length:80px_130px] hover:h-20 w-20 bg-no-repeat bg-transparent h-10 bg-opacity-75 text-xl font-bold pl-4 pt-2 m-2 rounded-3xl bold italic" ><Link to="/">Home</Link></li>
            <li style={{ backgroundImage:`url(${image})` }} className=" cursor-pointer bg-[length:120px_130px] hover:h-20 w-28 bg-no-repeat bg-transparent h-10 bg-opacity-75 text-xl font-bold pl-2 pt-2 m-2 rounded-3xl bold italic"><Link to='/products'>Products </Link></li>
            <li style={{ backgroundImage:`url(${image})` }} className=" cursor-pointer bg-[length:120px_130px] hover:h-20 w-28 bg-no-repeat bg-transparent h-10 bg-opacity-75 text-xl font-bold pl-5 pt-2 m-2 rounded-3xl bold italic"><Link to="/about">About Us</Link></li>
            <li style={{ backgroundImage:`url(${image})` }} className="cursor-pointer bg-[length:120px_130px] hover:h-20 w-30 bg-no-repeat bg-transparent h-10 bg-opacity-75 text-xl font-bold pl-5 pt-2 m-2 rounded-3xl bold italic"><Link to="/contact">Contact Us</Link></li>
           </ul>

           <ul className=" h-10 lg:hidden justify-center flex ml-8" >

            <li className=" cursor-pointer ml-6  w-28  h-10 bg-opacity-75 text-xl font-bold m-2 rounded-3xl bold italic"><Link to='/products'>Products </Link></li>
            <li className=" cursor-pointer w-30 h-10 bg-opacity-75 text-xl font-bold m-2 rounded-3xl bold italic"><Link to="/about">About Us</Link></li>
            <li className="cursor-pointer  w-30 h-10 bg-opacity-75 text-xl font-bold  m-2 rounded-3xl bold italic"><Link to="/contact">Contact Us</Link></li>
           </ul>

        </div>
        
      
        </nav>
    )

}

export default NavBar;