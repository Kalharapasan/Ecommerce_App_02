import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from '../components/Productdescription'
import ProductFeatures from '../components/ProductFeatures'
import RelatedProducts from '../components/RelatedProducts'
import { useAppContext } from '../components/context/AppContext'
import { assets } from '../assets/data'



const Productdetails = () => {

    const { products, currency, addToCart } = useAppContext()
    const [image, setImage] = useState(null)
    const { productId } = useParams()
    const product = products.find((item) => item._id === productId)
    const [size, setSize] = useState('')

    useEffect(() => {
        if (product) {
            setImage(product.images[0])
            setSize(product.sizes[0])
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
                        <div className="flex-1 px-5 py-3 bg-primary rounded-2xl">
                            <h3 className="h3 leading-none">{product.title}</h3>

                            {/* Rating & Price */}
                            <div className="flex items-center gap-x-2 pt-2">
                                <div className="flex gap-x-2 text-yellow-400">
                                    <img src={assets.star} alt="" width={19} />
                                    <img src={assets.star} alt="" width={19} />
                                    <img src={assets.star} alt="" width={19} />
                                    <img src={assets.star} alt="" width={19} />
                                    <img src={assets.star} alt="" width={19} />
                                </div>
                                <p className="medium-14">(222)</p>
                            </div>

                            <div className="h4 flex items-baseline gap-4 my-2">
                                <h3 className="h3 text-secondary">{currency}{product.price[size]}.00</h3>
                            </div>

                            <p className="max-w-[555px]">{product.description}</p>
                            <div className="flex flex-col gap-4 my-4 mb-5">
                                <div className="flex gap-2">
                                    {[...product.sizes].map((item, i) => (
                                        <button key={i} onClick={() => setSize(item)} className={`${item === size ? "bg-primary-dark" : "bg-white"} medium-14 h-8 w-16 ring-1 ring-slate-900/10 cursor-pointer rounded-lg`}>
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center gap-x-4">
                                <button onClick={() => addToCart(product._id, size)} className="btn-dark sm:w-1/2 flexCenter gap-x-2 capitalize">Add to Cart <img src={assets.cartAdd} alt="" width={19} /></button>
                                <button className="btn-white">
                                    <img src={assets.heartAdd} alt="" width={19} />
                                </button>
                            </div>
                            <div className="flex items-center gap-x-2 mt-3">
                                <img src={assets.delivery} alt="" width={17} />
                                <span className="medium-14">Free Delivery on orders over 500$</span>
                            </div>

                            <hr className="my-3 w-2/3" />
                            <div className="mt-2 flex flex-col gap-1 text-gray-30 text-[14px]">
                                <p>Authenticy You Can Trust</p>
                                <p>Enjoy Cash on Delivery for Your Convenience</p>
                                <p>Easy Returns and Exchanges Within 7 Days</p>
                            </div>

                        </div>
                    </div>
                </div>

                <ProductDescription />
                <ProductFeatures />

                {/* Related Products */}
                <RelatedProducts product={product} id={productId} />

            </div>
        )
    )


}

export default Productdetails
