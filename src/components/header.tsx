"use client";

import Image from "next/image";
import { redirect } from "next/navigation";

export const Header = () => {
  const goToHome = () => {
    console.log("Home page");
    redirect("/");
  };

  return (
    <div className="flex h-8 w-[1280px] items-center justify-between pt-14">
      <div
        className="flex cursor-pointer items-center gap-2"
        onClick={goToHome}
      >
        <Image src="/static/logos/logo.svg" alt="logo" width={26} height={32} />

        <span className="text-textPrimary font-bold">Крафтяр</span>
      </div>

      <div className="text-textPrimary flex gap-12 text-sm">
        <div>Головна</div>
        <div>Переваги</div>
        <div>Про додаток</div>
        <div>Питання</div>
      </div>
    </div>
  );
};
