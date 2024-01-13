"use client";

import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import img1 from "@/images/ford-mustang-gt-fastback-drive-motel-neon-5k-5120x2880-355.jpg";
import img2 from "@/images/marvels-spider-man-miles-morales-photo-mode-dark-background-5120x2880-3444.jpg";
import img3 from "@/images/wallhaven-01vpev.jpg";
import img4 from "@/images/wallhaven-1kvqr1.jpg";

const Carousel = () => {
  return (
    <div>
      <Swiper
      // slidesPerView={3}
      // breakpoints={{ 900: { slidesPerView: 4 } }}
      // on={{
      //   slideChange: () => console.log("slide changed"),
      //   progress: (s, progress) => console.log(`progress is ${progress}`),
      // }}
      >
        <SwiperSlide>
          <Image src={img1} alt="image" width={900} className="rounded-xl" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
