import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/data'

const Hero = () => {
  return (
    <section>
      <div>
          <div>
            <div>
              <h1 className='h1 !font-[400] capitalize'>
                Enhance Your
                <span>Look</span> With
                <span>Glam</span> Essentials
              </h1>
              <p>
                Discover Premium Beauty with our cosmetic collection,
                crafted to enhance your natural glow,boost confidence,and
                deliver flawless elegace every day with trusted,affordable
                products.
              </p>
              <div className="flex">
                <Link to={'/collection'}>
                    check Our Modern Collection
                    <img src={assets.forward} alt="" width={41} className=''/>
                </Link>
              </div>
            </div>
            {/* card */}
            <div>
              <div>
                <img src={assets.hero} alt="" className='h-30 object-cover
                w-full rounded-2xl' />
              </div>
                <p>
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
