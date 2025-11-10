import React from 'react'
import Four from "../assets/Four.jpg"
import Icon6 from "../assets/Icon6.png"
import Icon4 from "../assets/Icon4.png"
import Icon5 from "../assets/Icon5.png"
const Fourth = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center text-center my-[30px] gap-[40px]'>
      {/* Left Image */}
      <div className=  'w-[90%] flex lg:w-[40%]'>
        <img src={Four} alt="" className='w-[500px] ' />
      </div>
      {/* Rigth Image */}
      <div className='w-[80%] lg:w-[35%]'>

        <div className='flex flex-row text-start justify-center gap-7 items-start mb-4 mt-0 p-0'>
          <div>
            <img src={Icon4} alt="" className='w-[100px] h-full ' />
          </div>
          <div>
            <p className='text-[20px] font-spicy-rice text-[#874d34]'>Croissant</p>
            <p className='text-[16px] font-roboto'>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.</p>
          </div>

        </div>
        <div className='flex flex-row text-start justify-center gap-7 items-start mb-4 mt-0 p-0'>
          <div>
            <img src={Icon5} alt="" className='w-[100px] h-full' />
          </div>
          <div>
            <p className='text-[20px] font-spicy-rice text-[#874d34]'>Croissant</p>
            <p className='text-[16px] font-roboto'>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.</p>
          </div>

        </div>
        <div className='flex flex-row text-start justify-center gap-7 items-start mb-4 mt-0 p-0'>
          <div>
            <img src={Icon6} alt="" className='w-[100px] h-full' />
          </div>
          <div>
            <p className='text-[20px] font-spicy-rice text-[#874d34]'>Croissant</p>
            <p className='text-[16px] font-roboto'>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetelis in mei. Meianpe icula euripidis,partem.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Fourth