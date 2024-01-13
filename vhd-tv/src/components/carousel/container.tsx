import React from "react";
import Carousel from "./carousel";
import CarouselDetails from "./details";

const chips = ["HD", "Movie", "2023"];

const CarouselContainer = () => {
  return (
    <div className="my-8 flex justify-center items-center">
      <div>
        <Carousel />
      </div>
      <div>
        <CarouselDetails
          chips={chips}
          title={"Napoleon"}
          rating="3"
          description="An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife"
        />
      </div>
    </div>
  );
};

export default CarouselContainer;
