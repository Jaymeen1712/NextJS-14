import React from "react";
import Carousel from "./carousel";
import { CommonCardType } from "@/types";

const CarouselContainer = ({
  commonDetails,
}: {
  commonDetails: CommonCardType[] | null;
}) => {
  return (
    <div className="my-8 items-center mx-16">
      {commonDetails && <Carousel commonDetails={commonDetails}/>}
    </div>
  );
};

export default CarouselContainer;
