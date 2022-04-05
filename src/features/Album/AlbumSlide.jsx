import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.scss";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper";
import { Box, Typography } from "@mui/material";

export default function AlbumSlide(props) {
  const { images } = props;

  return (
    <div style={{ backgroundColor: "#ff4061" }}>
      <Swiper
        style={{
          "--swiper-navigation-color": "rgba(255,255,255,0.8)",
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        className="ab-swiper"
        autoHeight={true}
        modules={[Zoom, Navigation, Pagination]}
      >
        {images.map((image) => (
          <SwiperSlide key={image.src}>
            <div
              className="ab-swiper-slide"
              style={{ backgroundImage: `url(${image.src})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
