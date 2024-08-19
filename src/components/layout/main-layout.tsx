import type { PropsWithChildren } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const MainLayout = async ({ children }: PropsWithChildren) => {
  return (
    <div className="mx-auto min-h-screen max-w-maxDesktop">
      <Header />

      {children}

      <Footer />
    </div>
  );
};
