import React, { useRef} from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';
import "../App.css";
import { FaDownload  } from "react-icons/fa";
import Slider from "./slider";
import { Link } from "react-router-dom";

function Home () {

    const gltf = useLoader(GLTFLoader, "./hydro.glb");
    const modelRef = useRef();

    return (
        <div className="mx-auto  overflow-y-auto  bg-cover bg-fixed bg-center bg-no-repeat shadow-lg  h-screen lg:w-[100%]" style={{backgroundImage : `url("https://cdn.inc42.com/wp-content/uploads/2020/04/Untitled-design-2020-04-12T051503.012.jpg")`}}>
        <div className="lg:mt-20 relative  w-[80%]   mx-auto h-screen ">
        <div className="backdrop-opacity-60 backdrop-blur-md lg:flex justify-center rounded-xl border ">
        <div className="lg:mt-28 h-auto lg:w-[80vh] text-white ml-4 lg:ml-20  ">
            <h1 className="relative lg:text-6xl text-4xl font-bold drop-shadow-2xl  ">ASQUARE HYDROPONICS</h1>
          <p className="m-2 text-xl font-semibold">At ASQUARE Hydroponics, we're transforming agriculture with efficient, sustainable hydroponic solutions. 
          From custom setups to expert guidance, we empower growers to cultivate fresh produce with minimal environmental impact.
           Join us in shaping a greener future with hydroponics.</p>

   
    <a href="/contact" className="m-4 relative inline-block text-lg group" >
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
            <div className=" sm:h-[50vh] lg:h-[60vh]  sm:w-50 lg:w-[80vh] lg:block hidden  mt-20 ">
        <Canvas camera={{ position: [-9,2,-9] , fov: 1.8 }}>
              <ambientLight intensity={1} />
              <directionalLight intensity={2} position={[2.5, 8, 5]} />
              <primitive
               ref={modelRef}
               object={gltf.scene}
               scale={0.1}
               rotation={[0, Math.PI / 2, 0]}
               />
              <OrbitControls enableZoom={true} autoRotate={false}/>
            </Canvas>
             
            </div>
            </div>
            </div>
            
        <div className="bg-white lg:h-[100%]">
          <Slider />
        </div>
  
        </div>
    )
}

export default Home;