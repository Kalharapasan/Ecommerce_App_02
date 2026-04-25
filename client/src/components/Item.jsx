import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'

const Item = ({ product }) => {

    const {navigate,currency} = useAppContext()
    const [hovered,setHovered] =useState(false)
    const[size,setSize] = useState(product.sizes[0])

    // colors to cycle through
    const colors = ["#f2f2f2", "#f6f9f6", "#f6f8fe"]
    // compute an index from product._id; parseInt fallback to 0 for safety
    const bgcolor = colors[(parseInt(product._id?.slice(-4) || "0", 16)) % colors.length]

  return (
    <div className='overflow-hidden flex flex-col gap-3'>

        {/* Image */}

        <div onMouseEnter={()=>setHovered(true)}
            onMouseLeave={()=> setHovered(false)}
            className='flexCenter h-[170px] w-full transition-all duration-300 rounded-2xl group relative overflow-hidden px-6'
            style={{ backgroundColor: bgcolor }}>

                <img src={product.images.length > 1 && hovered ?
                 product.images[1] : product.images[0]} alt="" 
                 className='h-[110px] w-[110px] object-contain transition-transform duration-300 group-hover:scale-105'
                 height={144}
                 width={144}/>
                 <div className="absolute bottom-2 left-2 right-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <button
                        onClick={()=>{
                            navigate(`/collection/${product._id}`)
                            scrollTo(0,0)
                        }}
                        className='btn-secondary !py-2 !px-0 w-full !text-xs'
                    >
                        Quick View
                    </button>
                    <p className="absolute top-2 right-2 rounded-full border border-slate-200 bg-white/80 px-4 py-0.5 text-sm text-slate-500 shadow-sm">{product.type}</p>
                 </div>

        </div>

        {/* Info */}
        <div className="px-1 pb-1">
            {/* Title and description */}
            <div className="flexBetween">
                <h5 className='h5 uppercase truncate pr-2'>{product.title}</h5>
                <p className='shrink-0 text-slate-500'>
                    {currency}{product.price[size]}
                </p>
            </div>
            <p className='mt-1 line-clamp-3'>{product.description}</p>
        </div>

    </div>
  )
}

export default Item