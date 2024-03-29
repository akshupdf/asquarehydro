import React, { useState } from "react";
import ProductListContainer from "../containers/ProductListContainer";
import image from "../images/dowel.jpg"
import nature from "../images/try3.jpeg"
import Nft from "./nft";
import DutchBucket from "./dutchBucket";
import Dwc from "./Dwc";
import FbNft from "./FlatBedNft";
import IndoorNft from "./IndoorNft";



 const HydroTypes = () =>{

    const [selectedOption, setSelectedOption] = useState('NFT');
    const [option , setOption] = useState(false)

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setOption(false)
  };


return ( 
    <div style={{backgroundImage:`url(${nature})`}}  className="bg-cover overflow-hidden bg-fixed h-screen  bg-no-repeat pt-6 ">
       
        <div style={{display:"inline-flex",width : "100%"}}>
        <div style={{width : "20%"}} className="lg:grid-container   mt-6 p-2 text-white hidden lg:block">
        
            <div className="cursor-pointer grid-item p-2 lg:text-xl text-sm rounded-xl card2 hover:scale-125  m-2"  onClick={() => handleOptionClick('NFT')} >A-FRAME NFT </div>
            <div className="grid-item cursor-pointer card2 p-2 rounded-xl hover:scale-125 m-2" onClick={() => handleOptionClick('DUTCH')}>DUTCH BUCKET </div>
            <div className="grid-item cursor-pointer card2 p-2 rounded-xl hover:scale-125  m-2"  onClick={() => handleOptionClick('DWC')}>DEEP WATER CULTURE</div>
            <div className="cursor-pointer grid-item rounded-xl p-2 card2 hover:scale-125  m-2"  onClick={() => handleOptionClick('FLAT')} >FLAT BED NFT </div>
            <div className="grid-item cursor-pointer card2 p-2 rounded-xl hover:scale-125  m-2" onClick={() => handleOptionClick('INDOOR')}>NFT INDOOR </div>    
        </div>

      <div className=" lg:hidden ">
      {
    option === false &&
        <button onClick={() => setOption(true) } className="text-4xl text-white  ">=</button>
      }
  {
    option &&  
    
    <div style={{width : "20%"}} className=" mt-6 p-2 text-white">
    <button onClick={() => setOption(false) } className="p-2">X</button>
        <div className="cursor-pointer  p-2  text-sm rounded-xl card2 hover:scale-125 w-20"  onClick={() => handleOptionClick('NFT')} >A-FRAME NFT </div>
        <div className="cursor-pointer  p-2  text-sm rounded-xl card2 hover:scale-125 w-20" onClick={() => handleOptionClick('DUTCH') }>DUTCH BUCKET </div>
        <div className="cursor-pointer  p-2  text-sm rounded-xl card2 hover:scale-125 w-20"  onClick={() => handleOptionClick('DWC')}>DEEP WATER CULTURE</div>
        <div className="cursor-pointer  p-2  text-sm rounded-xl card2 hover:scale-125 w-20"  onClick={() => handleOptionClick('FLAT')} >FLAT BED NFT </div>
        <div className="cursor-pointer  p-2  text-sm rounded-xl card2 hover:scale-125 w-20" onClick={() => handleOptionClick('INDOOR')}>NFT INDOOR </div>

        
    </div>
  }
      </div>
        

        <div className="mx-auto  md:inline-block  shadow-lg sm:w-80   lg:w-[100%]" >
        {selectedOption === 'NFT' && <Nft />}
        {selectedOption === 'DUTCH' && <DutchBucket />}
        {selectedOption === 'DWC' && <Dwc />}
        {selectedOption === 'FLAT' && <FbNft />}
        {selectedOption === 'INDOOR' && <IndoorNft />}
        </div>

        
        </div>
        <div className="w-[100%] ">
 
    </div>
    </div>
)}

export default HydroTypes;
