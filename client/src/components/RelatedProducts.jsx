import React, { useEffect, useState } from 'react'
import Title from './Title'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


// import required modules
import { Autoplay } from 'swiper/modules';
import { useAppContext } from './context/AppContext';
import Item from './Item';




const RelatedProducts = ({ product, productId }) => {

  const { products } = useAppContext()
  const [relatedProducts, setRelatedProducts] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) =>
        item.category === product.category && productId !== item._id
      );
      setRelatedProducts(productsCopy.slice(0, 6));
    }
  }, [products]);

  return (
    <section className='max-padd-container mt-28'>
      <Title title1={"Related"} title2={'Products'} title1Styles={'pb-10'} />
      {/* Container */}

      {
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}

          breakpoints={{
            555: {
              slidesPerView: 1
            },
            600: {
              slidesPerView: 2
            },
            1022: {
              slidesPerView: 3
            },
            1350: {
              slidesPerView: 4
            },
          }}

          modules={[Autoplay]}
          className="min-h-[399px]"
        >
          {relatedProducts.map((product) => (
            <SwiperSlide key={product._id}>

              <Item product={product} />

            </SwiperSlide>
          ))

          }

        </Swiper>
      }

    </section>
  )
}


export default RelatedProducts