"use client";

import React, { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import CarouselImage from "./image";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import CarouselDetails from "./details";
import CarouselPaginationButtons from "./controls/pagination-buttons";

import "./controls/pagination.css";
import { CommonCardType } from "@/types";
import { TMDB_IMAGE_BASE_URL, capitalizeFirstLetter } from "@/utils";

const Carousel = ({ commonDetails }: { commonDetails: CommonCardType[] }) => {
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
          <>
            {commonDetails.map((detail) => {
              let chips: string[] = ["HD"];
              if (detail.media_type) {
                chips.push(
                  detail.media_type.toLowerCase() === "movie"
                    ? "Movie"
                    : "TV Series"
                );
              }

              detail.release_date &&
                chips.push(detail.release_date?.split("-")[0]);

              const title = detail.title || detail.name || "Title";

              return (
                <SwiperSlide key={detail.id}>
                  <div className="grid grid-cols-2 gap-14 items-center">
                    <CarouselImage
                      src={`${TMDB_IMAGE_BASE_URL}/original${detail.backdrop_path}`}
                      alt="image"
                    />
                    <CarouselDetails
                      chips={chips}
                      title={capitalizeFirstLetter(title)}
                      rating={Math.round(detail.vote_average / 2).toString()}
                      description={detail.overview}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </>
        </Swiper>
      </div>
      <CarouselPaginationButtons ref={swiperRef} />
    </div>
  );
};

export default Carousel;
