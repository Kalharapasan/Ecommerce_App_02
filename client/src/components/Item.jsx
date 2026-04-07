import React, { useState } from 'react'
import { useAppContext } from './context/AppContext'

const Item = ({ product }) => {

    const {navigate,currency} = useAppContext()
    const [hovered,setHovered] =useState(false)
    const[size,setSize] = useState(product.sizes[0])

    // colors to cycle through
    const colors = ["#f2f2f2", "#f6f9f6", "#f6f8fe"]
    // compute an index from product._id; parseInt fallback to 0 for safety
    const bgcolor = colors[(parseInt(product._id?.slice(-4) || "0", 16)) % colors.length]

  return (
    <div className='overflow-hidden flex flex-col'>

        {/* Image */}

        <div onMouseEnter={()=>setHovered(true)}
            onMouseLeave={()=> setHovered(false)}
            className='flexCenter h-[182px] w-full transition-all duration-300 rounded-xl group relative overflow-hidden'>

                <img src={product.images.length > 1 && hovered ?
                 product.images[1] : product.images[0]} alt="" 
                 className='h-full w-full object-contain'
                 height={144}
                 width={144}/>
                 <div className="absolute bottom-1 left-1 right-1 hidden group-hover:block">
                    <button
                        onClick={()=>{
                            navigate(`/products/${product._id}`)
                            scrollTo(0,0)
                        }}
                        className='btn-secondary !py-2 !px-0 w-full !text-xs'
                    >
                        Quick View
                    </button>
                    <p className="absolute top-2 right-2 ring-1 ring-slate-900/10 px-5 bg-white/50 rounded-full">{product.type}</p>
                 </div>

        </div>

        {/* Info */}
        <div className="pt-3 p-1">
            {/* Title and description */}
            <div className="flexBetween">
                <h5>{product.title}</h5>
                <p>{currency}{product.price[size]}</p>
            </div>
            <p>{product.description}</p>
        </div>

    </div>
  )
}

export default Item