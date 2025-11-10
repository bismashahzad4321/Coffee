import React from 'react'
import Product1 from "../assets/Product1.webp"
import Product2 from "../assets/Product2.webp"
import Product3 from "../assets/Product3.webp"
import Product4 from "../assets/Product4.webp"
import { ShoppingCart } from 'lucide-react';
const Product = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center text-center my-[30px] '>

                <h1 className='font-spicy-rice text-[40px]'>Our Products</h1>
                <p className='font-roboto font-normal w-[80%] lg:w-[50%] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

                </p>
            </div>
            {/* Product */}
            <div className='flex space-x-0 flex-col lg:flex-row lg:space-x-12 overflow-hidden m-[5px] lg:m-[100px] p-[20px]'>


                {/* First Prduct */}
                <div className='flex justify-center items-center flex-col border border-[#874d34]  w-[100%] lg:w-[50%] cursor-pointer hover:scale-105 transition-transform duration-300 ' >

                    <img src={Product1} alt="" className='w-[500px]'/>
                    <p className='font-spicy-rice text-[#874d34]'>Arabica Coffee Bean</p>
                    <div className='flex flex-row justify-evenly w-full items-center text-center py-4'>
                        <p className=''>$739.00</p>
                        <p><ShoppingCart /></p>
                    </div>

                </div>
                {/* First Prduct */}
                <div className='flex justify-center items-center flex-col border border-[#874d34]  w-[100%] lg:w-[50%] cursor-pointer hover:scale-105 transition-transform duration-300 ' >

                    <img src={Product2} alt="" className='w-[500px]'/>
                    <p className='font-spicy-rice text-[#874d34]'>Arabica Coffee Bean</p>
                    <div className='flex flex-row justify-evenly w-full items-center text-center py-4'>
                        <p className=''>$739.00</p>
                        <p><ShoppingCart /></p>
                    </div>

                </div>
                {/* First Prduct */}
               <div className='flex justify-center items-center flex-col border border-[#874d34]  w-[100%] lg:w-[50%] cursor-pointer hover:scale-105 transition-transform duration-300 ' >

                    <img src={Product3} alt="" className='w-[500px]'/>
                    <p className='font-spicy-rice text-[#874d34]'>Arabica Coffee Bean</p>
                    <div className='flex flex-row justify-evenly w-full items-center text-center py-4'>
                        <p className=''>$739.00</p>
                        <p><ShoppingCart /></p>
                    </div>

                </div>
                {/* First Prduct */}
                <div className='flex justify-center items-center flex-col border border-[#874d34]  w-[100%] lg:w-[50%] cursor-pointer hover:scale-105 transition-transform duration-300 ' >

                    <img src={Product4} alt="" className='w-[500px]'/>
                    <p className='font-spicy-rice text-[#874d34]'>Arabica Coffee Bean</p>
                    <div className='flex flex-row justify-evenly w-full items-center text-center py-4'>
                        <p className=''>$739.00</p>
                        <p><ShoppingCart /></p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product