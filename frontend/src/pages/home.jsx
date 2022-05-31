import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/navbar'
import Slider from '../components/slider'
import Categories from '../components/categories'
import Footer from '../components/footer'


const Home = () => {
  return (
    <div>
    <Navbar/>
      <Slider/>
      <Categories/>
      <Footer/>
      </div>
  )
}

export default Home