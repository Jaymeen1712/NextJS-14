import { Button } from "@nextui-org/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Logo from "./logo";
import { colors } from "@/utils";

const DashboardContainer = () => {
  return (
    <div className="bg-sky-900 rounded-3xl my-12 p-12 flex items-center justify-center flex-col">
      <div className="mb-6">
        <Logo />
      </div>
      <Button className={`${colors.primary.background} p-6`}>
        Browse all movies & series <FaArrowRight />
      </Button>
    </div>
  );
};

export default DashboardContainer;
