import React from 'react'
import Footer from "../assets/Footer.jpg"
const Foter = () => {
    return (
        <div
            className='lg:h-[350px] w-full bg-cover bg-center flex justify-around
            items-start lg:items-center leading-10'
            style={{
                backgroundImage: `url(${Footer})`
            }}>
            <div className='flex flex-col justify-start lg:flex-row lg:justify-center items-center lg:gap-[150px]'>
                {/* First Part */}
                <div>
                    <p className='font-spicy-rice text-[#874d34] text-2xl'>Help</p>
                    <p className='text-white font-roboto font-xl cursor-pointer hover:text-[#874d34]'>Search</p>
                    <p className='text-white font-roboto font-xl cursor-pointer hover:text-[#874d34]'>Help</p>
                    <p className='text-white font-roboto font-xl cursor-pointer hover:text-[#874d34]'>Information</p>
                    <p className='text-white font-roboto font-xl cursor-pointer hover:text-[#874d34]'>Privacy Policy</p>
                    <p className='text-white font-roboto font-xl cursor-pointer hover:text-[#874d34]'>Shipping Details</p>
                </div>
                <div>
                    <p className='font-spicy-rice text-[#874d34] text-2xl'>Help</p>
                    <p className='text-white font-roboto font-xl cursor-pointer hover:text-[#874d34]'>Search</p>
                    <p className='text-white font-roboto font-xl cursor-pointer hover:text-[#874d34]'>Help</p>
                    <p className='text-white font-roboto font-xl cursor-pointer hover:text-[#874d34]'>Information</p>
                    <p className='text-white font-roboto font-xl cursor-pointer hover:text-[#874d34]'>Privacy Policy</p>
                    <p className='text-white font-roboto font-xl cursor-pointer hover:text-[#874d34]'>Shipping Details</p>
                </div>
                <div>
                    <p className='font-spicy-rice text-[#874d34] text-2xl'>Help</p>
                    <p className='text-white font-roboto font-xl cursor-pointer hover:text-[#874d34]'>Search</p>
                    <p className='text-white font-roboto font-xl cursor-pointer hover:text-[#874d34]'>Help</p>
                    <p className='text-white font-roboto font-xl cursor-pointer hover:text-[#874d34]'>Information</p>
                    <p className='text-white font-roboto font-xl cursor-pointer hover:text-[#874d34]'>Privacy Policy</p>
                    <p className='text-white font-roboto font-xl cursor-pointer hover:text-[#874d34]'>Shipping Details</p>
                </div>
                <div>
                    <p className='font-spicy-rice text-[#874d34] text-2xl'>Help</p>
                    <p className='text-white font-roboto font-xl cursor-pointer hover:text-[#874d34]'>Search</p>
                    <p className='text-white font-roboto font-xl cursor-pointer hover:text-[#874d34]'>Help</p>
                    <p className='text-white font-roboto font-xl cursor-pointer hover:text-[#874d34]'>Information</p>
                    <p className='text-white font-roboto font-xl cursor-pointer hover:text-[#874d34]'>Privacy Policy</p>
                    <p className='text-white font-roboto font-xl cursor-pointer hover:text-[#874d34]'>Shipping Details</p>
                </div>
            </div>
        </div>
    )
}

export default Foter