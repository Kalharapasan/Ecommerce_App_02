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
    const [size, setSize] = useState('')

    useEffect(() => {
        if (product) {
            setImage(product.images[0])
            setSize(product.sizes[0] || '')
        }
    }, [product])



    return (
        product && (
            <div className='max-padd-container pt-20'>
                {/* Product Data */}
                <div className='flex gap-10 flex-col xl:flex-row mt-3 mb-6'>
                    {/* Image */}
                    <div className='flex flex-1 gap-x-2 max-w-[533px]'>
                        <div className='flex-1 flexCenter flex-col gap-[7px] flex-wrap'>
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
                    </div>
                    <div className='flex flex-[4] bg-primary rounded-2xl'>
                        <img src={image} alt="" />
                    </div>

                    <div>
                        {/* Product Info */}
                        <div>
                            <h3 className="h3 leading-none">{product.title}</h3>

                            {/* Rating & Price */}
                            <div>
                                <div>
                                    <img src={assets.star} alt="" width={19} />
                                    <img src={assets.star} alt="" width={19} />
                                    <img src={assets.star} alt="" width={19} />
                                    <img src={assets.star} alt="" width={19} />
                                    <img src={assets.star} alt="" width={19} />
                                </div>
                                <p className="medium-14">(222)</p>
                            </div>

                            <div>
                                <h3 className="h3 text-secondary">{currency}{product.price[size]}.00</h3>
                            </div>

                            <p className="max-w-[555px]">{product.description}</p>
                            <div>
                                <div>
                                    {[...product.sizes].map((item, i) => (
                                        <button key={i} onClick={() => setSize(item)}>
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <button>Add to Cart</button>
                                <button className="btn-white">
                                    <img src={assets.heartAdd} alt="" width={19} />
                                </button>
                            </div>
                            <div>
                                <img src={assets.delivery} alt="" width={17} />
                                <span className="medium-14">Free Delivery on orders over 500$</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    )


}

export default Productdetails
