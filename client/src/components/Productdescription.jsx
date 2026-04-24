import React, { useState } from 'react'

const Productdescription = () => {
  const [activeTab, setActiveTab] = useState('description')

  return (
    <div className="mt-14 bg-white">
      <div className="flex gap-3 bg-primary rounded-t-2xl">
        <button 
          onClick={() => setActiveTab('description')}
          className={`medium-14 p-3 w-32 ${activeTab === 'description' ? 'border-b-2 border-secondary' : ''}`}
        >
          Description
        </button>
        <button 
          onClick={() => setActiveTab('color')}
          className={`medium-14 p-3 w-32 ${activeTab === 'color' ? 'border-b-2 border-secondary' : ''}`}
        >
          Color Guide
        </button>
        <button 
          onClick={() => setActiveTab('size')}
          className={`medium-14 p-3 w-32 ${activeTab === 'size' ? 'border-b-2 border-secondary' : ''}`}
        >
          Size Guide
        </button>
      </div>
      <hr className="h-[1px] w-full text-slate-900/20" />
      <div className="flex flex-col gap-3 p-3">
        {activeTab === 'description' && (
          <>
            <div>
              <h5 className="h5">Detail</h5>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dicta adipisci nihil deserunt delectus? Dignissimos, numquam eum, voluptates reiciendis ipsa maxime enim quasi praesentium est totam neque dolores quam
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem magni cupiditate in voluptates non ea.</p>
            </div>
            <div>
              <h5 className="h5">Benefit</h5>
              <ul className="list-disc pl-5 text-sm text-gray-30 flex flex-col gap-1">
                <li>High-quality materials ensure long-lasting durability and comfort.</li>
                <li>Designed to meet the needs of modern, active lifestyles.</li>
                <li>Available in a wide range of colors and trendy colors.</li>
              </ul>
            </div>
          </>
        )}
        {activeTab === 'color' && (
          <div>
            <h5 className="h5">Color Guide</h5>
            <p className="text-sm">Select from our available color options to find your perfect match.</p>
          </div>
        )}
        {activeTab === 'size' && (
          <div>
            <h5 className="h5">Size Guide</h5>
            <p className="text-sm">Refer to our size chart to ensure the perfect fit.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Productdescription