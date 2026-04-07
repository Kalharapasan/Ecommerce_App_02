import React from 'react'
import Title from './Title'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay} from 'swiper/modules';


const NewArrivals = () => {
    return (
        <section>
            <Title title1={"New"} title2={'Arrivals'} title1Styles={'pb-10'} />
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
                        555:{
                            slidesPerView:1
                        },
                        600:{
                            slidesPerView:2
                        },
                        1022:{
                            slidesPerView:3
                        },
                        1350:{
                            slidesPerView:4
                        },
                    }}

                    modules={[Autoplay]}
                    className="min-h-[399px]"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            }

        </section>
    )
}

export default NewArrivals