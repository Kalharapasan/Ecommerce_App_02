import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/data'


const Footer = () => {
    return (
        <footer className="pt-16 xl:pt-20 w-full text-gray-500 bg-primary">
            <div className='max-pass-container'>
                <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                    <div className='max-w-80'>
                        {/*Logo*/}
                        <div className="flex flex-1">
                            <Link to={"/"} className="flex items-end">
                                <img src={assets.logoImg} alt="logoImg" className="h-11" />
                                <span className="hidden sm:block bold-24 relative top-1">
                                    oguse
                                </span>
                            </Link>
                        </div>
                        <p className='text-sm mt-5'>
                            Discover premium beauty with our cosmetic collection, crafted to enhance your natural glow, boost confidence, and deliver flawless elegance every day.
                        </p>
                        <div className='flex items-center gap-3 mt-4'>
                            {/* Instagram */}
                            <img src={assets.facebook} alt="" />
                            <img src={assets.instagram} alt="" />
                            <img src={assets.twitter} alt="" />
                            <img src={assets.linkedin} alt="" />

                        </div>
                    </div>

                    <div>
                        <p className='h4 text-black/80'>COMPANY</p>
                        <ul className='mt-3 flex flex-col gap-2 text-sm'>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Partners</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className='h4 text-black/80'>SUPPORT</p>
                        <ul className='mt-3 flex flex-col gap-2 text-sm'>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Safety Information</a></li>
                            <li><a href="#">Cancellation Options</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Accessibility</a></li>
                        </ul>
                    </div>

                    <div className='max-w-80'>
                        <p className='h4 text-black/80'>STAY UPDATED</p>
                        <p className='mt-3 text-sm'>
                            Subscribe to our newsletter for inspiration and special offers.
                        </p>
                        <div className='flex items-center mt-4'>
                            <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                            <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                                {/* Arrow icon */}
                                <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <hr className='border-gray-300 mt-8' />
                <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                    <p>© {new Date().getFullYear()} <a href="https://prebuiltui.com">PrebuiltUI</a>. All rights reserved.</p>
                    <ul className='flex items-center gap-4'>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Sitemap</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer