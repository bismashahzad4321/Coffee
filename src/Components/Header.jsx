import React from 'react'
import Logo from "../assets/Logo.png"
import { ChevronDown, User , ShoppingCart} from "lucide-react";
import '@fortawesome/fontawesome-free/css/all.min.css'

const Header = () => {
    return (
        <div className='absolute top-0 left-0 right-0 z-50 py-4 bg-transparent flex justify-around  text-center items-center gap-5'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <nav className='text-gray-50 flex  list-none gap-8 '>
                <li className='flex justify-center items-center text-center text-xl cursor-pointer hover:text-[#be9c79]'><a href="">Home</a>
                    <ChevronDown className='w-4 h-4 ml-1' />                </li>
                <li className='flex justify-center items-center text-center text-xl cursor-pointer hover:text-[#be9c79]'><a href="">Shop</a>
                    <ChevronDown className='w-4 h-4 ml-1' />                </li>

                <li className='flex justify-center items-center text-center text-xl cursor-pointer hover:text-[#be9c79]'><a href="">Collection</a>
                    <ChevronDown className='w-4 h-4 ml-1' />                </li>
                <li className='flex justify-center items-center text-center text-xl cursor-pointer hover:text-[#be9c79]'><a href="">Coffee</a>
                    <ChevronDown className='w-4 h-4 ml-1' />                </li>
                <li className='flex justify-center items-center text-center text-xl cursor-pointer hover:text-[#be9c79]'><a href="">Snacks</a>
                    <ChevronDown className='w-4 h-4 ml-1' />                </li>
                <li className='flex justify-center items-center text-center text-xl cursor-pointer hover:text-[#be9c79]'><a href="">Chat Food</a>
                    <ChevronDown className='w-4 h-4 ml-1' />                </li>
            </nav>
            <div className='flex  gap-2.5 justify-center items-center text-center'>
                <i className="fa-solid fa-magnifying-glass text-white text-xl cursor-pointer hover:text-[#be9c79]" ></i>
                <p className='text-xl  text-white cursor-pointer hover:text-[#be9c79]'>USD</p>
                <User className='text-white hover:text-[#be9c79] cursor-pointer'/>
                  <ShoppingCart  className='text-white hover:text-[#be9c79] cursor-pointer'/>
            </div>

        </div>
    )
}

export default Header
