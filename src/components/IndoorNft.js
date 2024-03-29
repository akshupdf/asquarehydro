import React, { useState } from "react";
import "../App.css";
import image from "../images/nft.jpg";
import { PiPottedPlantFill } from "react-icons/pi";
import { FaLeaf } from "react-icons/fa";

const IndoorNft = () => {
  const [images, setImages] = useState({
    img1: "https://www.resetagri.in/cdn/shop/products/51radZcyMdL.jpg?v=1675031983&width=1445",
    img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Xx7ycB8rs3OVZUeXOEmJozV_vmmJlWN_QQ&usqp=CAU",
    img3: "https://5.imimg.com/data5/SELLER/Default/2022/6/UF/XB/BK/135804686/600x600-5--500x500.jpg",
    img4: "https://purelea.in/wp-content/uploads/2021/07/Indoor-NFT-Hydroponic-Farm-1024x684.jpg",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);
  return (
    <div className="font-semibold text-xl ">
    <div className="bg-white/30 backdrop-blur-xl lg:w-[95%] sm:w-[80%] h-screen lg:h-auto overflow-auto lg:overflow-hidden p-4 lg:m-4 lg:mt-0 mt-10">
      <div className="sm:flex">
        <div className="lg:flex lg:flex-col lg:gap-6 lg:w-2/5 ">
            <img
              src={activeImg}
              alt=""
              className="lg:w-80 w-auto lg:h-80 lg:ml-12 mt-4 aspect-square object-cover hover:scale-150 cursor-pointer rounded-xl"

            />
             <div className="flex flex-row lg:overflow-hidden overflow-auto h-24">
              <img
                src={images.img1}
                alt=""
                className="lg:w-20 lg:h-20 rounded-md cursor-pointer m-4"
                onClick={() => setActiveImage(images.img1)}
              />
              <img
                src={images.img2}
                alt=""
                className="lg:w-20 lg:h-20 rounded-md cursor-pointer m-4"
                onClick={() => setActiveImage(images.img2)}
              />
              <img
                src={images.img3}
                alt=""
                className="lg:w-20 lg:h-20 rounded-md cursor-pointer m-4"
                onClick={() => setActiveImage(images.img3)}
              />
              <img
                src={images.img4}
                alt=""
                className="lg:w-20 lg:h-20 rounded-md cursor-pointer m-4"
                onClick={() => setActiveImage(images.img4)}
              />
            </div>
          </div>
          <div>
            <h1 className="text-[#4B3621] text-4xl font-bold  mb-4">
            HYDROPONIC NFT INDOOR SYSTEM
            </h1>

            <ul className="">
              <span className="text-2xl">Features</span>
              <li  className="flex">
              <span className="mr-2 mt-1"><FaLeaf /></span> Double layered NFT channels to maintain water temperature and
                reduce evaporation.
              </li>
              <li  className="flex">
              <span className="mr-2 mt-1"><FaLeaf /></span>Openable lid for easy cleaning and maintenance</li>
              <li  className="flex">
              <span className="mr-2 mt-1"><FaLeaf /></span>MS powder coated frame with modular design.</li>
              <li  className="flex">
              <span className="mr-2 mt-1"><FaLeaf /></span> Level adjustment legs for maintaining uniform water level.
              </li>
              <li  className="flex">
              <span className="mr-2 mt-1"><FaLeaf /></span> Provision to add movable rollers.</li>
            </ul>
            <ul className="">
              <span className="text-2xl">Operating condition</span>
              <li  className="flex">
              <span className="mr-2 mt-1"><PiPottedPlantFill /></span> Balcony, Patio or Garden. Under Poly house or shade net or
                transparent sheet with partially shaded sunlight.
              </li>
              
              <li  className="flex">
              <span className="mr-2 mt-1"><PiPottedPlantFill /></span> Maintain water temperature below 28˚ C and pH levels between
                5.5- 6.5.
              </li>
              <li  className="flex">
              <span className="mr-2 mt-1"><PiPottedPlantFill /></span> Atmospheric temperature max. 35˚ C and Humidity max. 70 % for
                good results.
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-14">
        <ul >
              <span className="text-2xl">Recommended Plants</span>
              <li>
                <span className="font-bold">Green Leafy:</span> Lettuces, Spinach, Amaranth, Coriander, Cabbage, Bok choy, Parsley, Celery, Kale.
              </li>
              <li> <span className="font-bold">Herbs:</span>  Basil, Chives, Mint, cilantro, dill, oregano, rosemary, thyme, Sage, stevia, pepper mint,
lemon balm.</li>
              <li>
              <span className="font-bold">Indoor plants:</span>  Devil's Ivy, Arrowhead plant, Philodendron, Peace Lily, Female Dragon, Dumb
Cane/Leopard Lily, Chinese Evergreen, Spider Plant.
              </li>
            
            </ul>
        </div>
      </div>
    </div>
  );
};

export default IndoorNft;
