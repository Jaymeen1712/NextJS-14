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

const Header = async () => {
  const menuItems = dashboardMenuItems.map((item, index) => (
    <NavbarItem key={index}>
      <Link
        href={item.link}
        className={`text-white hover:${colors.primary.text} duration-200`}
      >
        {item.name.toUpperCase()}
      </Link>
    </NavbarItem>
  ));

  return (
    <Navbar className="shadow mb-6 bg-neutral-950 m-0" height={"90px"}>
      <NavbarBrand>
        <Link href="/">
          <Logo />
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
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
