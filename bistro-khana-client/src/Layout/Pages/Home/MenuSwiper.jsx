import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
const MenuSwiper = () => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={-295}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <p className='uppercase -mt-18 px-20 text-3xl text-white'>salad</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <p className='uppercase -mt-18 px-20 text-3xl text-white'>pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <p className='uppercase -mt-18 px-20 text-3xl text-white'>soup</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <p className='uppercase -mt-18 px-20 text-3xl text-white'>desserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <p className='uppercase -mt-18 px-20 text-3xl text-white'>salad</p>
                </SwiperSlide>

            </Swiper>

        </>
    );
};

export default MenuSwiper;