import React from 'react'
import Icon1 from "../assets/Icon1.png"
import Icon2 from "../assets/Icon2.png"
import Icon3 from "../assets/Icon3.png"
import Icon4 from "../assets/Icon4.png"
import Icon5 from "../assets/Icon5.png"
import Icon6 from "../assets/Icon6.png"


import Centerimage from "../assets/Centerimage.jpg"
const AboutSection = () => {
    return (
        <div>
            <div className='felx justify-center w-full items-center text-center'>
                <p className='text-[20px] text-[#514242] lg:text-[40px] font-spicy-rice'>Coffee Build Your Base</p>
            </div>
            <div className='flex flex-col lg:flex-row w-full justify-center items-center text-center'>
                {/* First Part */}
                <div className='lg:w-[25%]'>
                    <div className=' flex flex-col items-center text-center 
                lg:flex-row lg:items-start lg:text-end 
                justify-center gap-7 mb-4 mt-0 p-0'>
                        <div>
                            <p className='text-[20px] font-spicy-rice text-[#874d34]'>Croissant</p>
                            <p className='text-[16px] font-roboto'>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.</p>
                        </div>
                        <div>
                            <img src={Icon1} alt="" className=' w-[60px] lg:w-[200px] h-full ' />
                        </div>
                    </div>
                    <div className=' flex flex-col items-center text-center 
                lg:flex-row lg:items-start lg:text-end 
                justify-center gap-7 mb-4 mt-0 p-0'>
                        <div>
                            <p className='flex flex-row text-end justify-center gap-7 items-start mb-4 mt-0 p-0'>
                            </p>
                            <p className='text-[16px] font-roboto'>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.

                            </p>
                        </div>
                        <div>
                            <img src={Icon2} alt="" className=' w-[60px] lg:w-[200px] h-full ' />
                        </div>
                    </div>
                    <div className=' flex flex-col items-center text-center 
                lg:flex-row lg:items-start lg:text-end 
                justify-center gap-7 mb-4 mt-0 p-0'>
                        <div>
                            <p className='text-[20px] font-spicy-rice text-[#874d34]'>French Toast
                            </p>
                            <p className='text-[16px] font-roboto'>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.</p>
                        </div>
                        <div>
                            <img src={Icon3} alt="" className=' w-[60px] lg:w-[200px] h-full ' />
                        </div>
                    </div>
                </div>
                {/* Second Part */}
                <div>
                    <img src={Centerimage} alt="" className=' w-[200px] lg:w-[100%] h-full ' />
                </div>
                {/* Third Part */}
                <div className='w-[90%] lg:w-[25%]'>

                    <div className=' flex flex-col items-center text-center 
                lg:flex-row lg:items-start lg:text-end 
                justify-center gap-7 mb-4 mt-0 p-0'>
                        <div>
                            <img src={Icon4} alt="" className=' w-[60px] lg:w-[200px] h-full ' />
                        </div>
                        <div>
                            <p className='text-[20px] font-spicy-rice text-[#874d34]'>Croissant</p>
                            <p className='text-[16px] font-roboto'>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.</p>
                        </div>

                    </div>
                    <div className=' flex flex-col items-center text-center 
                lg:flex-row lg:items-start lg:text-end 
                justify-center gap-7 mb-4 mt-0 p-0'>
                        <div>
                            <img src={Icon5} alt="" className=' w-[60px] lg:w-[200px] h-full w-[60px] lg:w-[200px] h-full ' />
                        </div>
                        <div>
                            <p className='text-[20px] font-spicy-rice text-[#874d34]'>Croissant</p>
                            <p className='text-[16px] font-roboto'>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.</p>
                        </div>

                    </div>
                    <div className=' flex flex-col items-center text-center 
                lg:flex-row lg:items-start lg:text-end 
                justify-center gap-7 mb-4 mt-0 p-0'>
                        <div>
                            <img src={Icon6} alt="" className=' w-[60px] lg:w-[200px] h-full ' />
                        </div>
                        <div>
                            <p className='text-[20px] font-spicy-rice text-[#874d34]'>Croissant</p>
                            <p className='text-[16px] font-roboto'>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutSection
