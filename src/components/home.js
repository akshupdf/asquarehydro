import React, { useEffect, useRef} from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';
import "../App.css";
import { FaDownload  } from "react-icons/fa";
import Slider from "./slider";
import { Link } from "react-router-dom";
import tomato from "../images/dwc.png"
import tom from "../images/pot.png"
import disk from "../images/disc.png"
import pipe from "../images/pipe.png"
import tom1 from "../images/tomato.gif"
import tom2 from "../images/tom2.png"

function Home () {

    const gltf = useLoader(GLTFLoader, "./hydro.glb");
    const modelRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
          const circle = document.querySelector('.tom');
          const disk = document.querySelector('.disk');
          const pipe = document.querySelector('.pipe');
          // const imgElement = document.querySelector('.tomato');
      
          const scrollY = window.scrollY;
      

        if (scrollY > 150) {
            circle.classList.add('scrolled');
            circle.classList.remove('scrolled3');
          } else {
            circle.classList.remove('scrolled', 'scrolled3');
          }

          if (scrollY > 150) {
            disk.classList.add('diskscrolled');
          } else {
            disk.classList.remove('diskscrolled');
          }

          if (scrollY > 150) {
            pipe.classList.add('pipescrolled');
          } else {
            pipe.classList.remove('pipescrolled');
          }
      
      
          // if (scrollY > 700) {
          //   circle1.classList.add('scrolled2');
          //   circle1.classList.remove('scrolled3');
          // } else if (scrollY > 100) {
          //   circle1.classList.add('scrolled3');
          //   circle1.classList.remove('scrolled2');
          // } else {
          //   circle1.classList.remove('scrolled2', 'scrolled3');
          // }

          // if (scrollY > 900) { 
          //   imgElement.classList.add('scrolled4');
          // } else {
          //   imgElement.classList.remove('scrolled4');
          // }

        
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return (
        <div className="mx-auto pt-16  bg-cover bg-fixed  bg-no-repeat shadow-lg   lg:w-[100%]" style={{backgroundImage : `url("https://cdn.inc42.com/wp-content/uploads/2020/04/Untitled-design-2020-04-12T051503.012.jpg")`}}>
        <div className=" relative  w-[80%]   m-auto h-screen ">
        <div className="backdrop-blur-xl lg:flex justify-center rounded-xl border bg-white/20 ">
        <div className="lg:mt-28 h-auto lg:w-[78vh] text-justify text-white  m-8  ">
            <h1 className="relative lg:text-6xl text-4xl font-bold drop-shadow-2xl  ">ASQUARE HYDROPONICS</h1>
          <p className="m-2 text-xl font-semibold">At ASQUARE Hydroponics, we're transforming agriculture with efficient, sustainable hydroponic solutions. 
          From custom setups to expert guidance, we empower growers to cultivate fresh produce with minimal environmental impact.
           Join us in shaping a greener future with hydroponics.</p>

   
    <a href="/contact" className="m-4 ml-0 relative inline-block text-lg group" >
<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span className="relative">Contact Us</span>
</span>
<span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
 <a href="https://drive.google.com/file/d/1BMUWHNYxYZsgrTHt-Do-gALrqzvfoWSn/view?usp=sharing" className="m-4 relative inline-block text-lg group" target="_blank" rel="noreferrer" >
<span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span className="relative flex">Brochure <FaDownload  className="ml-2 "/> </span>
</span>
<span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>


        </div>
            <div className=" sm:h-[50vh] lg:h-[60vh] m-4  sm:w-50 lg:w-[80vh] lg:block hidden   ">

        <img src={tomato} alt="tomato"  className="h-[60vh] object-cover rounded-xl"></img>
        <img src={tom} alt="tomato"  className="tom "></img>
        <img src={disk} alt="disk"  className="disk "></img>
        <img src={pipe} alt="pipe"  className="pipe "></img>
        {/* <Canvas camera={{ position: [-9,2,-9] , fov: 1.8 }}>
              <ambientLight intensity={1} />
              <directionalLight intensity={2} position={[2.5, 8, 5]} />
              <primitive
               ref={modelRef}
               object={gltf.scene}
               scale={0.1}
               rotation={[0, Math.PI / 2, 0]}
               />
              <OrbitControls enableZoom={true} autoRotate={false}/>
            </Canvas> */}
             
            </div>
            </div>
            </div>

            <div className="h-screen bg-white w-[90%] mx-auto flex items-center pt-[30vh] pl-[20vh]">

              <div className="h-[60vh] w-[30%] ml-10">
            <h1 className="text-2xl"> NFT Pipe </h1> 
            <p className="text-xl mt-4">A properly designed NFT system is based on using the right channel slope, the right flow rate, and the right channel length. The plant roots are exposed to adequate supplies of water, oxygen and nutrients.</p>
              </div>
              <div className="h-[60vh] w-[30%] pl-10">
            <h1 className="text-2xl">CocoPeat Disc </h1>  
            <p className="text-xl mt-4">Coco peat discs are manufactured by compressing the peat in disc with round dies to become flat cylinders. We have them available in different diameters. We assure our clients that are coco peat discs are made from 100% pure coconut fiber. The discs are ideal to grow flowering plants.</p>
              </div>
              <div className="h-[60vh] w-[30%] pl-28">
            <h1 className="text-2xl"> Net Pots</h1>  
            <p className="text-xl mt-4">These are high-quality Hydroponics Net Pots with a 2 Inch which allows the roots of plants like leafy vegetables, strawberries to grow through the mesh for easy breathing & growth. They provide good air circulation to the roots.</p>
              </div>
            {/* <img src={tom2} alt="tomato"  className="tom1"></img>
            <img src={tom1} alt="tomato"  className="tomato"></img> */}
            </div>
            
        <div className="bg-white lg:h-[100%]">
          <Slider />
        </div>
  
        </div>
    )
}

export default Home;