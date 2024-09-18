import React from 'react'
import image from "../images/grass.gif"


export const Loader = () => {
  return(
    <div className='h-screen w-full m-auto flex items-center text-center '>
        <img src={image} alt="img" className='object-contain w-full h-[80vh] absolute'></img>

        <h1 className='relative text-6xl w-full mx-auto text-white italic'> Loading....</h1>
    </div>
   )

 }