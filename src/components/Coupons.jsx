import { useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import  './Coupon.css'

const Coupons = () => {

    const axiosPublic=useAxiosPublic()
    const [coupons, setCoupons]=useState([])
    useEffect(()=>{
        const getCount = async ()=> {
            const {data}= await axiosPublic.get('/coupons')
            setCoupons(data)
        }
        getCount()
    }, [axiosPublic])
   
  return (
    
    <>
    <Swiper navigation={true} modules={[Navigation]} loop={true} 
          centeredSlides={true} className="mySwiper my-16">
      
      {
        coupons.map(coupon=> <SwiperSlide key={coupon._id}>
            <div className="slide slide1 ">
              <div className="text-center md:px-6">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold  text-white p-2 ">Coupon Code : {coupon.code}</h1>
              <p className="text-lg md:text-xl  font-bold  text-white p-2  ">Coupon Discount :{coupon.discount}%</p>
              <p className="text-lg  font-bold  text-white p-2 ">Coupon Description : {coupon.description}</p>
              
              
              </div>
            </div>
          </SwiperSlide>)
      }
      
    </Swiper>
  </>
  );
};

export default Coupons;
