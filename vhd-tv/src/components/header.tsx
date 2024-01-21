"use client";

import React from "react";
import {
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { colors, dashboardMenuItems } from "@/utils";
import Logo from "@/components/logo";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const selectedMenuItem = pathname.split("/")[1];

  const menuItems = dashboardMenuItems.map((item) => (
    <NavbarItem key={item.key}>
      <Link
        href={item.link}
        className={`hover:text-primary ${
          selectedMenuItem === item.key ? "text-primary" : "text-white"
        }`}
      >
        {item.name.toUpperCase()}
      </Link>
    </NavbarItem>
  ));

  return (
    <Navbar
      className={`shadow mb-6 bg-neutral-950 m-0 ${
        selectedMenuItem.toLowerCase() === "home" && "bg-0 absolute w-full top-0 left-0 right-0"
      }`}
      height={"90px"}
    >
      <NavbarBrand>
        <Link href="/">
          <Logo />
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end" className="">
        <NavbarItem>
          <Input
            size="sm"
            radius="sm"
            // startContent={<Search />}
            placeholder="Search for movies or tv series"
            variant="faded"
            labelPlacement="outside"
            // classNames={{
            //   label: "text-white",
            //   input: ["bg-neutral-700"],
            // }}
            className="min-w-[550px]"
          />
        </NavbarItem>

        {/* Menu Items */}
        <div className="space-x-10 flex flex-row mx-10">{menuItems}</div>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
