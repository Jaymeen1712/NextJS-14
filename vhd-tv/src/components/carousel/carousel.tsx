"use client";

import React, { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import img1 from "@/images/ford-mustang-gt-fastback-drive-motel-neon-5k-5120x2880-355.jpg";
import img2 from "@/images/marvels-spider-man-miles-morales-photo-mode-dark-background-5120x2880-3444.jpg";
import img3 from "@/images/wallhaven-01vpev.jpg";
import img4 from "@/images/wallhaven-1kvqr1.jpg";
import CarouselImage from "./image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import CarouselDetails from "./details";
import { PaginationOptions } from "swiper/types";
import CarouselPaginationButtons from "./controls/pagination-buttons";

import "./controls/pagination.css";

const pagination: PaginationOptions = {
  // clickable: true,
};

const chips = ["HD", "Movie", "2023"];

const Carousel = () => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <div className="grid grid-cols-12 items-center justify-center">
      <div className="col-span-11 my-16">
        <Swiper
          // pagination={pagination}
          // modules={[Pagination]}
          ref={swiperRef}
          effect="coverflow"
          coverflowEffect={{
            rotate: 20,
            stretch: 25,
            depth: 250,
            modifier: 1,
            slideShadows: false,
          }}
        >
          <SwiperSlide>
            <div className="grid grid-cols-2 gap-8 items-center">
              <CarouselImage src={img1} alt="image" />
              <CarouselDetails
                chips={chips}
                title={"Napoleon"}
                rating="3"
                description="An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 gap-8 items-center">
              <CarouselImage src={img2} alt="image" />
              <CarouselDetails
                chips={chips}
                title={"Napoleon"}
                rating="3"
                description="An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 gap-8 items-center">
              <CarouselImage src={img3} alt="image" />
              <CarouselDetails
                chips={chips}
                title={"Napoleon"}
                rating="3"
                description="An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid grid-cols-2 gap-8 items-center">
              <CarouselImage src={img4} alt="image" />
              <CarouselDetails
                chips={chips}
                title={"Napoleon"}
                rating="3"
                description="An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <CarouselPaginationButtons ref={swiperRef} />
    </div>
  );
};

export default Carousel;
