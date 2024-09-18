import React, { useEffect, useState } from 'react'
import logo from "../images/logo.jpeg"


export const Preview = () => {


    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
      }, []);

  return(
    <div className='w-[150vh] m-auto border-black border'>
        <div className='flex '>
        <div className='flex border-black border w-[50%]'>
           <img src={logo} alt="logo" className='w-[20vh]' />
           <div >
            <h1>ASQUARE HYDROPONICS</h1>
            <p>Thane,Maharashtra - 400605 </p>
      <p> <span className="font-bold mr-2 ">Mobile:</span> 9320222449/9152678498</p>
      <p><span className="font-bold mr-2 "> Email:</span> asquarehydro@gmail.com</p>
           </div>
        </div>
        <div className='flex justify-between w-[50%]'>
    <div className=' border-black border w-[70%]'>
    <h1>QUOTATION NO.</h1>

    </div>
    <div className=' border-black border w-[70%]'>

    <h1>DATE</h1>
    </div>
        </div>
        </div>

        <div className='flex  '>
        <div className='border-black border w-[50%]'>
            <p>BILL TO</p>
            <h1>A SQUARE HYDROPONICS </h1>
            <p><span>Address :-</span> Thane -400605</p>
        </div>
        <div className='border-black border w-[50%]'>
            <p>BILL TO</p>
            <h1>A SQUARE HYDROPONICS </h1>
            <p><span>Address :-</span> Thane -400605</p>
        </div>
        </div>

        <div>
   
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index}>
            <span>{item.name} - {item.price} x {item.quantity} </span>

          </div>
          ))
        ) : (
          <div>Cart is empty</div>
        )}
      </div>
    </div>
   )

 }