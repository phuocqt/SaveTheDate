import React from "react";
// import required modules
import { Autoplay, Navigation, Pagination, Parallax } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography } from "../../../node_modules/@mui/material/index";
import Heart from "../../components/Heart";
import slideFrame from "../../images/slide-top-arrow.png";

import "./slide.scss";

export default function Slide() {
  return (
    <div id="slide">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        speed={600}
        parallax={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, Parallax, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="slide-item">
          <img src="https://live.staticflickr.com/65535/51980081985_e1b5fcbba5_k.jpg" />
        </SwiperSlide>

        <SwiperSlide className="slide-item">
          <img src="https://live.staticflickr.com/65535/51979522051_1388b4383d_k.jpg" />
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <img src="https://live.staticflickr.com/65535/51978516067_90910e5204_k.jpg" />
        </SwiperSlide>
        <img src={slideFrame} className="slide-frame frame_left" />
        <img src={slideFrame} className="slide-frame frame_right" />
        <Box className="slide-text">
          {/* <Box sx={{ width: { xs: "200px", md: "500px" } }}>
            <img
              src="https://www.pngkit.com/png/full/23-233655_heart-png-hd-transparent-background-transparent-heart-heart.png"
              className="slide-heart"
            />
          </Box> */}
          <Typography
            style={{ fontFamily: "Great Vibes" }}
            className="couple-name"
          >
            Văn Phước & Mai Trâm
          </Typography>
          <Box className="slide-heart_beat">
            <Heart />
          </Box>
        </Box>
      </Swiper>
    </div>
  );
}
