import React, { useState } from 'react'
import Slider1 from "../assets/Slider1.jpg"
import Herosection from "../assets/Herosection.png"
import Beans from "../assets/Beans.png"
// import Slider3 from "../assets/Slider3.jpg"
import Coffeelogo from "../assets/Coffeelogo.png"
import { ChevronLeft, ChevronRight } from 'lucide-react';
const HeroSection = () => {
    

    return (
        <div className='felx justify-center' >
           


            {/* Slider1 */}
            <div className='Slider1'>
                {/* Backgroung Image */}
                <div className="bg-[url('/src/assets/Slider3.jpg')] bg-cover bg-center h-screen w-full">
                    {/* right Side */}
                    <div className='w-[100%] lg:w-[65%] bg-[#180b08]/75 h-screen  flex justify-center items-center text-center flex-col'>
                        <img src={Coffeelogo} alt="" className='my-[20px]' />
                        <p className='text-[30px] leading-2 lg:text-6xl  font-spicy-rice text-[#874d34] lg:leading-20 '>Now</p>
                        <p className='text-[30px] lg:text-6xl  font-spicy-rice text-[#874d34] leading-20 '>Seek Out For Coffee</p>
                        <p className='text-[30px] lg:text-5xl text-[#874d34] font-roboto font-bold'>FLATE 25% OFF</p>
                        <div className='flex flex-row gap-5 justify-center items-center text-center'>
                            <img src={Beans} alt="" className='w-[40px] h-[40px]' />
                            <p className='text-white leading-17 font-roboto font-bold text-2xl '>FINE TASTE</p>
                            <img src={Beans} alt="" className='w-[40px] h-[40px]' />

                        </div>
                        <button className='py-[15px] px-[15px] bg-[#c4a78b] lg:py-[17px] lg:px-[30px] cursor-pointer '>Buy Now</button>

                    </div>
                    {/* Left Side */}
                    <div className='w-[35%] '>

                    </div>

                </div>
            </div>
            {/* Slider2 */}
            {/* <div className="flex flex-row h-screen w-full">

                <div className=" w-[40%] h-full">
                    <img src={Slider1} alt="" className='w-full h-full object-cover object-left '
                    />
                </div>


                <div className="w-[60%] h-full bg-[#26100b] flex flex-col justify-center items-center text-white leading-5">
                    <img src={Herosection} alt="" />
                    <p className="text-6xl  font-spicy-rice text-[#874d34] leading-20 ">Daily Fresh</p>
                    <p className='text-5xl text-[#874d34] font-roboto font-bold'>COFFEE</p>
                    <p className='text-5xl text-[#874d34] font-roboto font-bold' >Flat 25% Off</p>
                    <div className='flex flex-row gap-5 justify-center items-center text-center'>
                        <img src={Beans} alt="" className='w-[40px] h-[40px]' />
                        <p className='leading-17 font-roboto font-bold text-2xl'>FINE TASTE</p>
                        <img src={Beans} alt="" className='w-[40px] h-[40px]' />

                    </div>
                    <button className='bg-[#be9c79] py-[17px] px-[30px] cursor-pointer opacity-100'>Buy Now</button>
                </div>
            </div> */}
        </div>
    )
}

export default HeroSection
