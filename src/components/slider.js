import img from "../images/pr.jpg";
import ash from "../images/ash.jpg";
import ash1 from "../images/ash1.jpg";
import ash2 from "../images/ash2.jpg";
import aqua from "../images/aqua.mp4";
import { Link } from "react-router-dom";
function Slider () { 



    return (
        <div className="w-[100%]  ">
        <h1 className="lg:text-4xl text-2xl font-bold flex justify-center p-4">Some of Our Major Projects</h1>
        <div class="relative overflow-hidden">
  <div class=" inset-0 lg:flex bg-gray-200  justify-center items-center">
    <div class=" h-[28rem]  overflow-auto lg:w-[50%] z-10 w-80  ">
  
     
      <img src={ash} alt="" className="w-[100%]  p-4  h-auto"></img>
      <img src={img} alt="" className="w-[100%] p-4  h-auto"></img>
      <img src={ash1} alt="" className="w-[100%]  p-4  h-auto "></img>
      <img src={ash2} alt="" className="w-[100%]  p-4  h-auto "></img>
      
    </div>
    <div className="lg:w-[50%] w-auto  p-4 text-xl">
        <h1 className="font-bold text-2xl p-2">Project 1: Standard Chartered Bank in CST</h1>
        <p className="p-2">At Standard Chartered Bank in CST, we had the privilege of implementing our 
        hydroponic system to cultivate spinach and tomatoes. These projects were a tremendous success,
         yielding exceptional results. From seed to harvesting, we meticulously managed every aspect of the process, 
         ensuring optimal growth and maximum yield. Our dedication to quality and innovation was evident in the bountiful 
         harvest of nutritious produce, setting a benchmark for future endeavors.</p>
      </div>
  </div>
  <div class=" inset-0 bg-gray-900 opacity-50"></div>
</div>
 <div class="relative overflow-hidden">
  <div class=" inset-0  justify-center items-center">
    <div class="bg-gray-200 w-full h-full z-10 lg:flex  ">
  
     
      <div  className="lg:w-[50%] w-auto p-4 text-xl">
        <h1 className="font-bold text-2xl justify-center items-center mt-8 flex p-2">Project 2: Aquaponics Balcony Setup</h1>
        <p className="p-2">In another exciting venture, we designed and installed an aquaponics system in a balcony. 
        Combining aquaculture and hydroponics, this sustainable solution showcased our commitment to innovative farming practices.
         Despite space constraints, our aquaponics setup thrived, demonstrating the versatility and scalability of our solutions.
          By leveraging the natural symbiosis between fish and plants, we transformed a humble balcony into a flourishing ecosystem,
           furthering our mission of promoting sustainable agriculture.
</p>
      </div>
      <div className="lg:w-auto w-80 ">
           <video className=" rounded-lg mx-auto lg:m-10 " controls autoPlay muted>
      <source src={aqua} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
    </div>
  </div>
  <div class=" inset-0 bg-gray-900 opacity-50"></div>
</div>

        </div>
    )
}

export default Slider