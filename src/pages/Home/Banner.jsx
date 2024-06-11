


import img1 from '../../assets/image1.jpg'
import img2 from '../../assets/image2.jpg'
import img3 from '../../assets/image3.jpg'
import img4 from '../../assets/image4.jpg'
import img5 from '../../assets/image5.jpg'
import img6 from '../../assets/image6.jpg'
import img7 from '../../assets/image7.jpg'

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div >
      <Swiper  
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full md:h-[70vh]"
      >
        <SwiperSlide >
            <img src={img1} alt="" />
           
            
        </SwiperSlide>
        <SwiperSlide>
        <img src={img2} alt="" />

        </SwiperSlide>
        <SwiperSlide>
        <img src={img3} alt="" />

        </SwiperSlide>
        <SwiperSlide>
        <img src={img4} alt="" />

        </SwiperSlide>
        <SwiperSlide>
        <img src={img5} alt="" />

        </SwiperSlide>
        <SwiperSlide>
        <img src={img6} alt="" />

        </SwiperSlide>
        <SwiperSlide>
        <img src={img7} alt="" />

        </SwiperSlide>
        {/* <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
    );
};

export default Banner;