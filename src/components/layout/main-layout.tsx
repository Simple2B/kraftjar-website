import type { PropsWithChildren } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const MainLayout = async ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};
