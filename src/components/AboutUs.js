
import vid from "../images/vid.mov";
import img from "../images/about.jpg";

import { GoTriangleRight } from "react-icons/go";

const About = () => {
    return ( 
        <div className="h-auto w-full font-semibold bg-fixed bg-no-repeat bg-cover" style={{ backgroundImage:`url(${img})` }} >
<div className="mx-auto lg:w-[70%] rounded-xl p-4 bg-white/30 backdrop-blur-2xl lg:mt-6">
    <h1 className="lg:text-6xl text-4xl  mb-6">Welcome to ASQUARE Hydroponics</h1>

    <p className="text-xl ">At A-Square Hydroponics, we're passionate about revolutionizing the way people grow their food. </p>
  <p  className="text-xl ">  Founded with a vision to make sustainable agriculture accessible to everyone, </p>
   <p  className="text-xl "> we specialize in helping our clients set up efficient and high-yield hydroponic systems.</p>
</div>
        <div className="w-auto  mt-8">
           <video className=" rounded-lg mx-auto lg:W-[70%] " controls autoPlay muted>
      <source src={vid} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>
    

    <div className="lg:w-[100%]  mx-auto flex h-auto relative mt-4 ">
    <div className="w-[50%] hidden lg:block">
    
        

    </div>
    <div className="lg:w-[40%] ">
    <div className=" rounded-xl flex m-2 relative">
  {/* Square */}
  <div className="bg-white/30 backdrop-blur-2xl p-4 lg:w-auto  lg:pl-32 rounded-xl text-xl">
  <h1 className="lg:hidden text-2xl font-bold"> Our Mission</h1>
    <p className="mt-4">
      <span className="font-bold">Our mission is simple:</span> to empower individuals, communities, and businesses to grow fresh, healthy produce using innovative hydroponic techniques. We believe in the power of hydroponics to transform the future of farming by minimizing environmental impact, maximizing yield, and enhancing food security.
    </p>
  </div>

  {/* Circle */}
  <div className="rounded-full hidden lg:block bg-lime-200  absolute top-0 left-[-4rem] mt-8 w-40 h-40 z-10">
  <h1 className="text-2xl bold p-10">Our <br></br>Mission</h1>
  </div>
</div>
    </div>

    </div>

    <div className="w-[100%] mx-auto flex h-auto relative mt-4 ">
    <div className="lg:w-[40%] lg:ml-8  p-4">
    <div className=" rounded-xl flex m-2 relative">
  {/* Square */}
  <div className="bg-white/30 backdrop-blur-2xl p-4 lg:w-auto w-full lg:pr-32 rounded-xl text-xl">
    <h1 className="lg:hidden text-2xl font-bold"> What Sets Us Apart </h1>
    <p className="">
      <span className="font-semi-bold">  At A-Square Hydroponics, we understand that each client has unique needs and goals. 
        That's why we take a personalized approach to every project we undertake. 
        Our team of experienced hydroponic specialists works closely with you to design and 
        implement a customized solution that fits your space, budget, and requirements.</span>
    </p>
  </div>

  {/* Circle */}
  <div className="rounded-full hidden lg:block bg-lime-200  absolute top-0 right-[-4rem] mt-8 w-40 h-40 z-10">
  <h1 className="text-2xl bold p-6 mt-4">What Sets<br></br> Us Apart </h1>
  </div>
</div>
        

    </div>
    </div>
    <div className="w-[100%] mx-auto flex h-auto relative mt-4 ">
    <div className="w-[50%] hidden lg:block">
   
        

    </div>
    <div className="lg:w-[50%] ">
    <div className=" rounded-xl flex m-2 relative">
  {/* Square */}
  <div className="bg-white/30 backdrop-blur-2xl p-4 w-auto lg:pl-32 rounded-xl text-xl">
  <h1 className="lg:hidden text-2xl font-bold"> Why Choose Us</h1>
    <p className="mt-4">
    <ul className="font-sans mt-2">
            <li> <span className="font-bold">Expertise:</span> With years of experience in the hydroponics industry,
             our team brings unparalleled expertise to every project.</li>
            <li><span className="font-bold">Innovation:</span> We stay at the forefront of hydroponic technology and innovation to 
            ensure that our clients benefit from the latest advancements in the field.</li>
            <li><span className="font-bold">Support:</span> From initial consultation to ongoing maintenance, we're committed to 
            providing comprehensive support every step of the way.</li>
            <li><span className="font-bold">Sustainability:</span> We're dedicated to promoting sustainable agriculture
             practices that conserve resources and reduce environmental impact.</li>
        </ul>
          </p>
  </div>

  {/* Circle */}
  <div className="rounded-full hidden lg:block bg-lime-200  absolute top-0 left-[-4rem] mt-16 w-40 h-40 z-10">
  <h1 className="text-2xl bold p-8">Why Choose Us </h1>
  
  </div>
</div>

    </div>
    </div>
    <div className="w-[100%] mx-auto flex h-auto relative mt-4 ">
    <div className="lg:w-[50%] ">
    <div className=" rounded-xl flex m-2 relative">
  {/* Square */}
  <div className="bg-white/30 backdrop-blur-2xl p-4 lg:w-auto w-80 lg:pr-32 rounded-xl text-xl">
  <h1 className="lg:hidden text-2xl font-bold"> Our Services</h1>
    <p className="mt-4">
    <ul className="font-sans mt-2">
            <li> <span className="font-bold">Consultation and Design:</span> We work closely with you to understand your needs and design a customized hydroponic system tailored to your requirements.</li>
            <li><span className="font-bold">Installation and Setup:</span> Our skilled technicians handle every aspect of installation and setup, ensuring that your hydroponic system is up and running smoothly.</li>
            <li><span className="font-bold">Training and Support:</span> We provide hands-on training and ongoing support to help you maximize the productivity and efficiency of your hydroponic setup.</li>
            <li><span className="font-bold">Maintenance Services:</span> Our maintenance plans are designed to keep your hydroponic system in optimal condition, minimizing downtime and maximizing yield.</li>
        </ul>    </p>
  </div>

  {/* Circle */}
  <div className="rounded-full hidden lg:block bg-lime-200  absolute top-0 right-[-4rem] mt-24 w-40 h-40 z-10">
  <h1 className="text-2xl bold p-10">Our <br></br>Services </h1>
  </div>
</div>
        

    </div>
    </div>
        </div>
    )
}

export default About;