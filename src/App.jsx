
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'
import FeaturedCategories from './Component/FeaturedCategories/FeaturedCategories'
import ThreeCart from './Component/ThreeCart/ThreeCart'
import MainCart from './Component/MainCart/MainCart'

import IconCart from './Component/iconCart/iconCart'
import Footer from './Component/Footer/Footer'


function App() {
  

  return (
    <>
      
      <Banner></Banner>
      <FeaturedCategories></FeaturedCategories>
      <div className='flex justify-center items-center'>
        <ThreeCart></ThreeCart>
       
      </div>
       <MainCart></MainCart>
       <IconCart></IconCart>
      
    </>
  )
}

export default App
