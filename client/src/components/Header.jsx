import React from 'react'
import {Link} from 'react-router-dom'
import {assets} from '../assets/data'

const Header = () => {
  return (
    <div>
      <header>
        <div className='max-pass-container'>
          {/*Logo*/}
          <div className='flex flex-1'>

            <Link to={'/'}>
              <img src={assets.logoImg} alt="logoImg" className="h-11"/>
            </Link>

          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
