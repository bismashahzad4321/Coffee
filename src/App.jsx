import React from 'react'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import AboutSection from "./Components/AboutSection"
import ThirdSection from './Components/ThirdSection'
import Fourth from './Components/Fourth'
import Five from './Components/Five'
import Product from './Components/Product'
import Ourgallery from './Components/Ourgallery'
import Menu from './Components/Menu'
import Popular from './Components/Popular'
import Price from './Components/Price'
import Foter from './Components/Footer'
const App = () => {

  return (
    <div >
      <Header />
      <HeroSection />
      <AboutSection />
      <ThirdSection />
      <Fourth />
      <Five/>
      <Product/>
      <Ourgallery/>
      <Menu/>
      <Popular/>
      <Price/>
      <Foter/>
    </div>

  )
}

export default App