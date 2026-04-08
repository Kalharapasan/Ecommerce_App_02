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
    <div className="hidden sm:block max-padd-container mt-28 bg-[url('/src/assets/banner.png')] bg-cover bg-center bg-no-repeat h-[288px]" />
    <Testimonials/>
    </>
  )
}

export default Home
