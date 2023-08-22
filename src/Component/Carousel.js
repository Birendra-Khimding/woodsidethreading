import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css'; 
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import facial from "../Images/facial-2.jpg";
import waxing from "../Images/waxing-3.png";
import threading from "../Images/threading-2.jpg";
import eyelash from "../Images/eyelash-2.jpg";
import "./Carousel.css";

function Carousel(){
  return (
    
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      
      <SwiperSlide>
      <h4 className="sml">Eyelash Extension</h4>
        <div className="ins"><img src={eyelash} />
          </div>
        <div className="ins-1">
        <h4 className="bg">Eyelash Extension</h4>
          <p>"Imagine waking up with full, long lashes that enhance your 
            eyes. Our eyelash extensions are designed to give you that natural 
            yet dramatic look."</p>
          </div>
          </SwiperSlide>
        
        <SwiperSlide>
          <h4 className="sml">Thnreading</h4>
        <div className="ins"><img src={threading} />
          </div>
        <div className="ins-1">
        <h4 className="bg">Thnreading</h4>
          <p>"Threading is like magic for your eyebrows! Our skilled professionals 
            use gentle threads to shape your brows exactly how you want them. 
            Say hello to well-defined, gorgeous brows."</p>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <h4 className="sml">Facial</h4>
        <div className="ins">
          <img src={facial} />
         </div>
           
           <div className="ins-1">
           <h4 className="bg">Facial</h4>
          <p>"Our facials are made for your skin's needs. 
            If you want your skin to be soft, or if you're looking to fight signs of getting older, 
            or even if you're dealing with pimples, we've got you covered!s"</p>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <h4 className="sml">Waxing</h4>
        <div className="ins">
          <img src={waxing} />

          </div>
          <div className="ins-1">
          <h4 className="bg">Waxing</h4>
          <p>"Say goodbye to unwanted hair and hello to touchably smooth skin.
             Our waxing treatments are designed to make your skin feel incredibly soft."</p>
          </div>
          </SwiperSlide>
      </Swiper>
    );
  
 
}

export default Carousel;