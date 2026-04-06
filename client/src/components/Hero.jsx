import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/data'

const Hero = () => {
  return (
    <section className='max-padd-container pt-28 pb-10'>
      <div className='rounded-3xl bg-primary p-4 sm:p-8'>
          <div className='grid gap-7 lg:grid-cols-[1.2fr_.8fr] items-center'>
            <div className='space-y-5'>
              <h1 className='h1 !font-[400] capitalize'>
                Enhance Your
                <span className='block text-secondary'>Look</span> With
                <span className='text-secondary'>Glam</span> Essentials
              </h1>
              <p className='max-w-2xl'>
                Discover Premium Beauty with our cosmetic collection,
                crafted to enhance your natural glow,boost confidence,and
                deliver flawless elegace every day with trusted,affordable
                products.
              </p>
              <div className="flex">
                <Link to={'/collection'} className='flex items-center gap-2 capitalize medium-16 text-secondary hover:underline'>
                    check Our Modern Collection
                    <img src={assets.forward} alt="" width={41} className='w-8 sm:w-10'/>
                </Link>
              </div>
            </div>
            {/* card */}
            <div className='rounded-2xl bg-white p-3 sm:p-4 shadow-sm'>
              <div className='overflow-hidden rounded-2xl'>
                <img src={assets.hero} alt="" className='h-36 sm:h-44 w-full object-cover rounded-2xl' />
              </div>
                <p className='mt-3'>
                  <b className="uppercase">unlock</b>You best look,one onClick
                  at a time,You style upgrade stsrts here,stop today !
                </p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Hero
