import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

interface RatingProps {
  stop?: number;
}

const Rating = ({ stop = 0 }: RatingProps) => {
  return (
    <div className="flex items-centers space-x-1">
      {Array(stop).fill(0).map((_, index) => {
        console.log("first");
        return <FaStar key={index} color="white" size={20} />;
      })}
      {Array(5 - stop).fill(0).map((_, index) => (
        <FaRegStar key={index} color="white" size={20} />
      ))}
    </div>
  );
};

export default Rating;
