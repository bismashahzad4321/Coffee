import React from 'react'
import Gallery1 from "../assets/Gallery1.jpg"
import Gallery2 from "../assets/Gallery2.jpg"
import Gallery3 from "../assets/Gallery3.jpg"
import Gallery4 from "../assets/Gallery4.jpg"
import Gallery5 from "../assets/Gallery5.jpg"
import Gallery6 from "../assets/Gallery6.jpg"

const Ourgallery = () => {
  return (
    <div className="py-12 px-4">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center text-center mb-10">
        <h1 className="font-spicy-rice text-[40px] text-[#704a26] mb-4">Our Gallery</h1>
        <p className="font-roboto text-[#5a3a22] w-full md:w-[50%] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
        <img src={Gallery1} alt="Gallery 1" className="w-full h-[250px] object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
        <img src={Gallery2} alt="Gallery 2" className="w-full h-[250px] object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
        <img src={Gallery3} alt="Gallery 3" className="w-full h-[250px] object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
        <img src={Gallery4} alt="Gallery 4" className="w-full h-[250px] object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
        <img src={Gallery5} alt="Gallery 5" className="w-full h-[250px] object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
        <img src={Gallery6} alt="Gallery 6" className="w-full h-[250px] object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
        <img src={Gallery4} alt="Gallery 7" className="w-full h-[250px] object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
        <img src={Gallery3} alt="Gallery 8" className="w-full h-[250px] object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
      </div>
    </div>
  )
}

export default Ourgallery
