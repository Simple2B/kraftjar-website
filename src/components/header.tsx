"use client";

import Image from "next/image";
import { redirect } from "next/navigation";
import { LanguageSwitcher } from "./language-switcher";
import { useTranslations } from "next-intl";

export const Header = () => {
  const t = useTranslations("Home.navigation");

  const goToHome = () => {
    console.log("Home page");
    redirect("/");
  };

  return (
    <div className="mobile:w-full mobile:px-4 mobile:mt-10 mt-14 flex max-h-max w-[1280px] items-center justify-between">
      <div
        className="flex cursor-pointer items-center gap-2"
        onClick={goToHome}
      >
        <Image src="/static/logos/logo.svg" alt="logo" width={26} height={32} />

        <span className="font-bold text-textPrimary">{t("label")}</span>
      </div>

      <div className="mobile:hidden flex items-center gap-12 text-sm text-textPrimary">
        <div>{t("benefits")}</div>
        <div>{t("about")}</div>
        <div>{t("faq")}</div>
      </div>

      <LanguageSwitcher />
    </div>
  );
};
