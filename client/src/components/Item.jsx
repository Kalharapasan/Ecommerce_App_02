import React, { useState } from 'react'
import { useAppContext } from './context/AppContext'

const Item = () => {

    const {navigate,currency} = useAppContext()
    const [hovered,setHovered] =useState(false)
    const[size,setSize] = useState(product.sizes[0])

  return (
    <div className='overflow-hidden'>

        {/* Image */}

        <div onMouseEnter={()=>setHovered(true)}
            onMouseLeave={()=> setHovered(false)}
            className='flexCenter h-[182px] w-full transition-all duration-300 rounded-xl group relative'>

                <img src={product.images.lenght > 1 && hovered ?
                 product.imges[1] : product.imges[0]} alt="" 
                 height={144}
                 width={144}/>
                 <div>
                    <button onClick={()=>{
                        navigate('/products/${product._id}');
                        scrollTo(0,0);
                        className='btn-secondary !py-2 !px-0  w-full !text-xs';
                    }}>
                        Quick View
                    </button>
                    <p className="absolute top-2 right-2 ring-1 ring-slate-900/10 px-5 bg-white/50 rounded-full">{product.type}</p>
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
        
    </div>
  )
}

export default Item