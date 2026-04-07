import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/context/Features'
import NewArrivals from '../components/NewArrivals'
import PopularProducts from '../components/PopularProducts'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <>
    <Hero />
    <Features/>
    <NewArrivals/>
    <PopularProducts/>
    <div>banner</div>
    <Testimonials/>
    </>
  )
}

export default Home
