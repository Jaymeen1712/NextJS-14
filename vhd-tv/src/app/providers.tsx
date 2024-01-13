"use client";
import { NextUIProvider } from "@nextui-org/react";
import { DefaultContextProvider } from "@/context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <DefaultContextProvider>{children}</DefaultContextProvider>
    </NextUIProvider>
  );
}
