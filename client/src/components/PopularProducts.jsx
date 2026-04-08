import React, { useState,useEffect } from 'react'
import Title from "./Title";
import { useAppContext } from "./context/AppContext";
import Item from "./Item";

const PopularProducts = () => {

  const [popularProducts, setPopularProducts] = useState([])
  const {products} = useAppContext()

  useEffect(() => {
    const data = products.filter((item) => item.popular && item.inStock)
    setPopularProducts(data.slice(0, 4))
  }, [products])

  return (
    <section className="max-padd-container">
      <Title title1={"Popular"} title2={"Products"} titleStyles={"pb-10"} />
      {/* Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {popularProducts.map((product) => (
          <div key={product._id}>
            <Item product={product} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts