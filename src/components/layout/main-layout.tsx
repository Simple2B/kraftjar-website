import { ChildrenProp } from "@/types/general";
import { Header } from "../header";

export const MainLayout = async ({ children }: ChildrenProp) => {
  return (
    <>
      <Header />

      {children}
    </>
  );
};
