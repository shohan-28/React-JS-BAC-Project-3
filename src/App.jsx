
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'
import FeaturedCategories from './Component/FeaturedCategories/FeaturedCategories'
import ThreeCart from './Component/ThreeCart/ThreeCart'
import MainCart from './Component/MainCart/MainCart'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <FeaturedCategories></FeaturedCategories>
      <div className='flex justify-center items-center'>
        <ThreeCart></ThreeCart>
       
      </div>
       <MainCart></MainCart>
    </>
  )
}

export default App
