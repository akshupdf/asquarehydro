import React, { useState } from "react";
import "../App.css";
import image from "../images/nft.jpg";
import { PiPottedPlantFill } from "react-icons/pi";
import { FaLeaf } from "react-icons/fa";

const FbNft = () => {
  const [images, setImages] = useState({
    img1: "https://5.imimg.com/data5/SELLER/Default/2022/10/HI/NV/PZ/33737871/img-20191230-wa0039-500x500.jpg",
    img2: "https://5.imimg.com/data5/SELLER/Default/2022/10/KT/HE/AN/33737871/img-20201124-wa0019-500x500.jpg",
    img3: "https://5.imimg.com/data5/SELLER/Default/2022/10/MZ/LA/BP/33737871/img-20210114-152439-500x500.jpg",
    img4: "https://farmsbazaar.com/image/cache/catalog/indoor%20plants/flat%20bed/40%20flat%20bed%20hydroponic%20system-farmsbazaar-700x700.jpg",
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
            <h1 className="text-[#4B3621]  text-4xl font-bold  mb-4">
            HYDROPONIC FLAT BED NFT SYSTEM
            </h1>

            <ul className="">
              <span className="text-2xl">Features</span>
              <li  className="flex">
              <span className="mr-2 mt-1"><FaLeaf /></span> Double layered NFT channels to maintain water temperature and
                reduce evaporation.
              </li>
              <li  className="flex">
              <span className="mr-2 mt-1"><FaLeaf /></span> Openable lid for easy cleaning and maintenance</li>
              <li  className="flex">
              <span className="mr-2 mt-1"><FaLeaf /></span> MS powder coated frame with modular design.</li>
              <li  className="flex">
              <span className="mr-2 mt-1"><FaLeaf /></span> Level adjustment legs for maintaining uniform water level.
              </li>
              <li  className="flex">
              <span className="mr-2 mt-1"><FaLeaf /></span> Provision to add movable rollers.</li>
            </ul>
            <ul className="">
              <span className="text-2xl">Operating condition</span>
              <li  className="flex">
              <span className="mr-2 mt-1"><PiPottedPlantFill /></span>Balcony, Patio or Garden. Under Poly house or shade net or
                transparent sheet with partially shaded sunlight.
              </li>
       
              <li  className="flex">
              <span className="mr-2 mt-1"><PiPottedPlantFill /></span> Maintain water temperature below 28˚ C and pH levels between
                5.5- 6.5.
              </li>
              <li  className="flex">
              <span className="mr-2 mt-1"><PiPottedPlantFill /></span>Atmospheric temperature max. 35˚ C and Humidity max. 70 % for
                good results.
              </li>
            </ul>
          </div>
        </div>
        <div className="mb-14">
        <ul >
              <span className="text-2xl">Recommended plants</span>
              <li>
               <span className="font-bold"> Green Leafy:</span> Lettuces, Spinach, Amaranth, Coriander, Cabbage, Bok choy, Parsley, Celery, Kale.
              </li>
              <li> <span className="font-bold"> Herbs:</span>   Basil, Chives, Mint, cilantro, dill, oregano, rosemary, thyme, Sage, stevia, pepper mint,
lemon balm.</li>
              <li>
              <span className="font-bold"> Indoor plants: </span> Devil's Ivy, Arrowhead plant, Philodendron, Peace Lily, Female Dragon, Dumb
Cane/Leopard Lily, Chinese Evergreen, Spider Plant.
              </li>
            
            </ul>
        </div>
      </div>
    </div>
  );
};

export default FbNft;
