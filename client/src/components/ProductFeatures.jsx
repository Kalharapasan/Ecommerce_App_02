import React from 'react'
import { assets } from '../assets/data';

const ProductFeatures = () => {
  return (
    <div className="mt-12 bg-primary rounded-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 rounded-xl">
        {/* Easy Return Card */}
        <div className="flexCenter gap-x-4 p-2 rounded-3xl">
          <div>
            <img src={assets.returnRequest} alt="" width={77} className="mb-3" />
          </div>
          <div>
            <h4 className="h4 capitalize">Easy Return</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque corrupti asperiores animi, praesentium temporibus!</p>
          </div>
        </div>

        {/* Secure Payment Card */}
        <div className="flexCenter gap-x-4 p-2 rounded-3xl">
          <div>
            <img src={assets.secure} alt="" width={77} className="mb-3 text-blue-500" />
          </div>
          <div>
            <h4 className="h4 capitalize">secure payment</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque corrupti asperiores animi, praesentium temporibus!</p>
          </div>
        </div>

        {/* Fast Delivery Card */}
        <div className="flexCenter gap-x-4 p-2 rounded-3xl">
          <div>
            <img src={assets.delivery} alt="" width={77} className="mb-3" />
          </div>
          <div>
            <h4 className="h4 capitalize">Fast Delivery</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque corrupti asperiores animi, praesentium temporibus!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFeatures