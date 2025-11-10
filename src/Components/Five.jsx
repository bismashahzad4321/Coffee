import React from 'react'
import Footer from "../assets/Footer.jpg"
const Five = () => {
    return (
        <div className=' py-[100px] flex justify-center text-center items-center flex-col'
            style={{ backgroundImage: `url(${Footer})`, backgroundPosition:'cover'   }}
        >
            <p className='text-[25px] font-roboto text-white'>FEEL THE TASTE</p>
            <h1 className='text-spicy-rice text-[50px] text-white'>More than coffee & Tea</h1>
            <p className='text-[35px] font-roboto text-white'>Flat 20% Discount</p>

            <button className='bg-[#c4a78b] py-[17px] px-[30px] cursor-pointer rounded text-white my-4'>Buy Now</button>
        </div>
    )
}

export default Five