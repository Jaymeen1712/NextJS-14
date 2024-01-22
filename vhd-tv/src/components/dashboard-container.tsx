import { Button } from "@nextui-org/react";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Logo from "./logo";
import Link from "next/link";

const DashboardContainer = () => {
  return (
    <div className="my-12 flex flex-col items-center justify-center rounded-3xl bg-sky-900 p-12">
      <div className="mb-6">
        <Logo />
      </div>
      <Button className={`bg-primary p-6`}>
        <Link href={"/home"} className="flex justify-center items-center">
          Browse all movies & series <FaArrowRight  className="ml-2"/>
        </Link>
      </Button>
    </div>
  );
};

export default DashboardContainer;
