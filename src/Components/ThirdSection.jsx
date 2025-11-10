import React from 'react'
import Third from "../assets/Third.jpg"
const ThirdSection = () => {
    return (
        <div className='bg-[url(/src/assets/Third.jpg)] min-h-screen bg-fixed flex justify-center items-center text-sart flex-col  leading-[30px] opacity-75 w-[100%] px-[20px] pb-[90px]' >

            <h1 className='font-spicy-rice text-[#704a26] text-[40px]  my-6 '>Upgrade to the latest Taste!</h1>
            <p className='text-[#a45f41] font-spicy-rice text-[20px] my-[10px] '>Message from Coffee Maker
                Message from Coffee Maker
            </p>
            <p className=' font-roboto lg:w-[500px] text-black font-medium'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
            <button className='bg-[#c4a78b] py-[17px] px-[30px] cursor-pointer '>Buy Now</button>
        </div>
    )
}


export default ThirdSection