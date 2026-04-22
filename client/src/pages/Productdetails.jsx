import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from '../components/Productdescription'
import ProductFeatures from '../components/ProductFeatures'
import RelatedProducts from '../components/RelatedProducts'
import { useAppContext } from '../components/context/AppContext'
import { assets } from '../assets/data'



const Productdetails = () => {

    const { products, currency } = useAppContext()
    const [image, setImage] = useState(null)
    const { productId } = useParams()
    const product = products.find((item) => item._id === productId)
    const [size, setSize] = useState(product.sizes[0]) // Default size (first in the array)

    useEffect(() => {
        if (product) {
            setImage(product.images[0])
        }
    }, [product])



    return (
        product && (
            <div className=''>
                {/* Product Data */}
                <div>
                    {/* Image */}
                    <div>

                        <div>
                            {product.images.map((item, i) => (
                                <div key={i} className='bg-primary rounded-xl'>
                                    <img
                                        onClick={() => setImage(item)}
                                        src={item}
                                        alt="productImg"
                                        className='object-cover aspect-square'
                                    />
                                </div>
                            ))}
                        </div>
                        
                        <div>
                            <img src={image} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        )
    )


}

export default Productdetails