import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ProductDescription from '../components/Productdescription'
import ProductFeatures from '../components/ProductFeatures'
import RelatedProducts from '../components/RelatedProducts'
import { useAppContext } from '../components/context/AppContext'
import { assets } from '../assets/data'



const Productdetails = () => {

    const {products, currency} = useAppContext()
    const [image, setImage] = useState(null)
    const [size, setSize] = useState(product.sizes[0]) // Default size (first in the array)

    const {productId} = useParams()
    const product = products.find((item)=> item._id === productId)

    useEffect(()=>{
    if(product){
        setImage(product.images[0])
    }
    }, [product])

  return (
    <div>Productdetails</div>
  )
}

export default Productdetails