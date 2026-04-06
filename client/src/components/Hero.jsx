import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/data'
import bgImage from '../assets/bg.png'
import forwardBlack from '../assets/forward-black.svg'

const Hero = () => {
  return (
    <section className='max-padd-container pt-24 pb-10'>
      <div className='relative overflow-hidden rounded-2xl min-h-[520px] sm:min-h-[620px] p-4 sm:p-8 lg:p-10'>
          <img
            src={bgImage}
            alt='Beauty products background'
            className='absolute inset-0 h-full w-full object-cover object-[68%_center]'
          />

          <div className='relative z-10 max-w-2xl pt-8 sm:pt-10 space-y-4 lg:pb-56'>
            <h1 className='text-[34px] sm:text-[44px] lg:text-[58px] font-[500] leading-[1.18] text-tertiary'>
              Enhance Your <span className='font-[700] text-secondary'>Look</span> With <span className='font-[700] text-secondary'>Glam</span> Essentials
            </h1>

            <p className='max-w-xl regular-24 text-tertiary/70'>
              Discover premium beauty with our cosmetic collection, crafted to enhance your natural glow, boost confidence, and deliver flawless elegance every day with trusted, affordable products.
            </p>

            <div className='pt-2'>
              <Link to={'/collection'} className='inline-flex items-center rounded-full bg-secondary pl-6 pr-1 py-1.5 text-white medium-15'>
                Check Our Modern Collection
                <span className='ml-3 flex h-12 w-12 items-center justify-center rounded-full bg-white'>
                  <img src={forwardBlack} alt='Arrow' className='w-6' />
                </span>
              </Link>
            </div>
          </div>

          <div className='relative z-10 mt-24 rounded-2xl bg-white/95 p-3 w-[210px] shadow-sm lg:absolute lg:left-6 lg:bottom-6 lg:mt-0'>
            <img src={assets.hero} alt='Lip serum' className='h-28 w-full rounded-xl object-cover' />
            <p className='mt-2 text-[13px] leading-5 text-gray-50'>
              <span className='uppercase font-semibold text-tertiary'>UNLOCK</span> your best look, one click at a time, your style upgrade starts here, shop today!
            </p>
          </div>
      </div>
    </section>
  )
}

export default Hero
