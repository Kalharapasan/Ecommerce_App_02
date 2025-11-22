import React from 'react'
import {Link} from 'react-router-dom'
import {assets} from '../assets/data'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div>
      <header>
        <div className='max-pass-container'>
          {/*Logo*/}
          <div className='flex flex-1'>
            <Link to={'/'}>
              <img src={assets.logoImg} alt="logoImg" className="h-11"/>
              <span>oguse</span>
            </Link>
          </div>

          {/* Nav Bar */}
          <div>
            <Navbar/>
          </div>

          {/* Button and Profile Icon */}
          <div>
            <img src={assets.menu} />
          </div>

        </div>
      </header>
    </div>
  )
}

export default Header
