import type { PropsWithChildren } from "react";
import { Header } from "../header";

export const MainLayout = async ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />

      {children}
    </>
  );
};
