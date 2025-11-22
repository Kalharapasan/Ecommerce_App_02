import React from 'react'
import {Link} from 'react-router-dom'
import {assets} from '../assets/data'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div>
      <header className='absolute top-0 left-0 right-0 z-50 bg-white py-3'>
        <div className='max-padd-container flexBetween'>
          {/*Logo*/}
          <div className='flex flex-1'>
            <Link to={'/'} className='flex items-end'>
              <img src={assets.logoImg} alt="logoImg" className="h-11"/>
              <span className='hidden sm:block bold-24 relative top-1'>oguse</span>
            </Link>
          </div>

          {/* Nav Bar */}
          <div className='flex-1'>
            <Navbar containerStyles={'hidden lg:flex gap-x-5 xl:gap-x-8 medium-15 bg-secondary/10 rounded-full p-1'} />
          </div>

          {/* Button and Profile */}
          <div className="flex flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8">
             {/* menu*/}
            <div>
              <img src={assets.menu} alt='' />
            </div>
            {/* Cart */}
            <div>
              <img src={assets.cartAdded} alt='' className='min-w-7'/>
              <label>0</label>
            </div>
            {/* User Profile */}
            <div>
              <div>
                <button className='btn-secondary'>
                  Login
                  <img src={assets.user}  alt='' className='invert w-5'/>
                </button>
              </div>
            </div>
          </div>
         
        </div>
      </header>
    </div>
  )
}

export default Header
