import React from 'react'
import Icon1 from "../assets/Icon1.png"
const Price = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center text-center lg:space-x-46'>
            <div className='flex  flex-col justify-center items-center text-center  py-[20px]'>
                <img src={Icon1} alt="" />
                <p className='font-spicy-rice text-2xl'>Coffee Beans</p>
                <p className='text-[#874d34] font-medium text-[20px]'>200</p>
            </div>
            <div className='flex flex-col justify-center items-center text-center  py-[20px]'>
                <img src={Icon1} alt="" />
                <p className='font-spicy-rice text-2xl'>Coffee Beans</p>
                <p className='text-[#874d34] font-medium text-[20px]'>200</p>
            </div>
            <div className='flex flex-col justify-center items-center text-center  py-[20px]'>
                <img src={Icon1} alt="" />
                <p className='font-spicy-rice text-2xl'>Coffee Beans</p>
                <p className='text-[#874d34] font-medium text-[20px]'>200</p>
            </div>
            <div className='flex flex-col justify-center items-center text-center  py-[20px]'>
                <img src={Icon1} alt="" />
                <p className='font-spicy-rice text-2xl'>Coffee Beans</p>
                <p className='text-[#874d34] font-medium text-[20px]'>200</p>
            </div>
        </div>
    )
}

export default Price