"use client"

import React from "react";
import {
  Avatar,
  Button,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";

import * as actions from "@/actions";

const HeaderAuth = () => {
  const session = useSession();
  let authContent: React.ReactNode;

  if (session.status === "loading") {
    return (authContent = null);
  } else if (session.data?.user) {
    authContent = (
      <>
        <Popover placement="left">
          <PopoverTrigger>
            <Avatar src={session.data.user.image || ""} />
          </PopoverTrigger>

          <PopoverContent>
            <div className="p-4">
              <form action={actions.signOut}>
                <Button type="submit">Sign out</Button>
              </form>
            </div>
          </PopoverContent>
        </Popover>
      </>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="primary" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>

        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="primary" variant="flat">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }

  return authContent;
};

export default HeaderAuth;
