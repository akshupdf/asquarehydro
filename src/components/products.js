import React, { useState } from "react";
import ProductListContainer from "../containers/ProductListContainer";
import image from "../images/dowel.jpg"
import nature from "../images/try.jpg"



 const HomePage = () =>{
  const[selectedCategory, setSelectedCategory] = useState('')

  const handleClick = (category) => {
    setSelectedCategory(category)
  };

  
return ( 
    <div style={{ width : "100%" , backgroundImage:`url(${nature})`}} className="bg-cover bg-fixed  bg-no-repeat pt-10 bg-black text-white">
       
        <div style={{display:"inline-flex",width : "100%"}}>
        <div style={{width : "20%"}} className="grid-container mt-6 p-2">
            {/* <ul style={{listStyle : "none", backgroundImage:`url(${image})`}} className="sidenav">
                <li onClick={() => handleClick("men's")} style={{cursor: "pointer" }} >Mens</li>
                <li onClick={() => handleClick("women's")} style={{cursor: "pointer"}}>Womens</li>
            </ul> */}

            <div class="grid-item" style={{backgroundImage:`url(${image})` , cursor: "pointer"}} onClick={() => handleClick("men's")}>NFT System</div>
            <div class="grid-item" style={{backgroundImage:`url(${image})`, cursor: "pointer"}} onClick={() => handleClick("women's")}>DWC System</div>
            <div class="grid-item" style={{backgroundImage:`url(${image})` , cursor: "pointer"}} onClick={() => handleClick("men's")}>Dutch bucket System</div>
            <div class="grid-item" style={{backgroundImage:`url(${image})`, cursor: "pointer"}} onClick={() => handleClick("women's")}>Tray System</div>

            
        </div>
        <div className="mx-auto hidden md:inline-block overflow-y-scroll  shadow-lg sm:w-80 h-screen lg:w-[100%]" >
        <ProductListContainer filter={{selectedCategory}}/>
        </div>
        </div>
        
    </div>
)}

export default HomePage;
