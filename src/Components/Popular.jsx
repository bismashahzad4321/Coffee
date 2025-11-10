import React from 'react'
import Popular1 from "../assets/Popular1.webp"
import Popular2 from "../assets/Popular2.webp"
import Popular3 from "../assets/Popular3.webp"
import Popular4 from "../assets/Popular4.webp"
import Popular5 from "../assets/Popular5.webp"
import Footer from "../assets/Footer.jpg"
const Popular = () => {
  return (
     <div
      className=' leading-5 w-full bg-cover bg-center flex justify-center items-center text-center flex-col py-[90px]'
      style={{ backgroundImage: `url(${Footer})` }}
    >
<div className=''>
    <h1 className='text-white text-3xl font-bold'>Popular Section</h1>
    <p className='text-white font-roboto px-[0px] lg:px-[90px] mb-[30px]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur expedita saepe aliquid omnis deserunt? Quae illo, magnam quia facilis minima facere eum repellendus, voluptatibus officia numquam repellat aliquam! Debitis, deleniti.</p>
</div>
<div className='flex flex-col lg:flex-row gap-[16px]'>
{/* Image */}
<div className='flex justify-center items-center text-center flex-col pb-[20px] bg-[#be9c79]'>
    <img src={Popular1} alt="" className='w-[250px] '/>
    <p className='font-spicy-rice text-[20px] text-white py-[5px]'>Maragogipe Coffee</p>
</div>
<div className='flex justify-center items-center text-center flex-col pb-[20px] bg-[#be9c79]'>
    <img src={Popular2} alt="" className='w-[250px] '/>
    <p className='font-spicy-rice text-[20px] text-white py-[5px]'>Maragogipe Coffee</p>
</div>
<div className='flex justify-center items-center text-center flex-col pb-[20px] bg-[#be9c79]'>
    <img src={Popular3} alt="" className='w-[250px] '/>
    <p className='font-spicy-rice text-[20px] text-white py-[5px]'>Maragogipe Coffee</p>
</div>
<div className='flex justify-center items-center text-center flex-col pb-[20px] bg-[#be9c79]'>
    <img src={Popular4} alt="" className='w-[250px] '/>
    <p className='font-spicy-rice text-[20px] text-white py-[5px]'>Maragogipe Coffee</p>
</div>
<div className='flex justify-center items-center text-center flex-col pb-[20px] bg-[#be9c79]'>
    <img src={Popular5} alt="" className='w-[250px] '/>
    <p className='font-spicy-rice text-[20px] text-white py-[5px]'>Maragogipe Coffee</p>
</div>
</div>

    </div>
  )
}

export default Popular