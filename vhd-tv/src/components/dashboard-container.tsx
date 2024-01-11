import { Button } from "@nextui-org/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const DashboardContainer = () => {
  return (
    <div className="bg-sky-900 rounded-3xl my-12 p-12 flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold text-white">VHD</h1>
      <Button className="bg-cyan-300">
        Browse all movies & series <FaArrowRight />
      </Button>
    </div>
  );
};

export default DashboardContainer;
