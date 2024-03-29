import React from "react";
import img from "../images/logo.jpeg";
import { Link } from "react-router-dom";
import image from "../images/try5.jpg"
import { FaFacebook ,FaInstagramSquare , FaYoutube  } from "react-icons/fa";

const Footer = () =>{
    return (
    
           
            <footer class=" w-[100%] bg-cover  font-semibold lg:text-xl" style={{backgroundImage:`url(${image})`}}>
            {/* <img src={image} alt="" className="bg-white w-full "></img> */}
  <div class=" lg:flex justify-between   items-center backdrop-blur-sm ">
  <img src={img} alt="hydro" className="mt-8 ml-4 w-40 h-35"></img>
    <div className="m-4">
      <h3 class="lg:text-xl font-bold">ASQUARE HYDROPONICS</h3>
      <p>Thane,Maharashtra - 400605 </p>
      <p> <span className="font-bold mr-2 ">Mobile:</span> 9320222449/9152678498</p>
      <p><span className="font-bold mr-2 "> Email:</span> asquarehydro@gmail.com</p>
    </div>
    <div>
      <h3 class=" font-bold m-4 ">Follow Us</h3>
      <div class="flex space-x-4">
        <a href="https://www.facebook.com/profile.php?id=100054789364473" rel="noreferrer" target="_blank" className=" hover:text-blue-800"><FaFacebook className="w-10 h-10"/></a>
        {/* <a href="#" class=" hover:text-gray-400"><i class="fab fa-twitter">Twitter</i></a> */}
        <a href="https://www.instagram.com/asquarehydro/" target="_blank" rel="noreferrer" className=" hover:text-purple-600"><i class="fab fa-instagram"><FaInstagramSquare  className="w-10 h-10"/></i></a>
        <a href="https://www.youtube.com/channel/UC65z90YiBbvKghN7fa7tA4g" target="_blank" rel="noreferrer" className=" hover:text-red-600"><FaYoutube className="w-10 h-10"/></a>
      </div>
    </div>
    <div className="mr-40">
      <h3 class="text-xl font-bold">Quick Links</h3>
      <ul>
        <li className=" hover:underline"><Link to="/">Home</Link></li>
        <li className=" hover:underline"><Link to="/products">Products</Link></li>
        <li className=" hover:underline"><Link to="/about">About Us</Link></li>
        <li className=" hover:underline"><Link to="/contact">Contact Us</Link></li>
   
      </ul>
    </div>
  </div>
  <div class="border-t border-gray-700 mt-4  text-center">
    <p class="text-sm">&copy; 2024 ASQUARE hydroponics. All rights reserved.</p>
  </div>
</footer>

    )
}

export default Footer;