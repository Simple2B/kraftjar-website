"use client";

import { useRouter } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { LanguageSwitcher } from "../language-switcher";

export const Header = () => {
  const t = useTranslations("Home.navigation");
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  return (
    <div className="mt-14 flex max-h-max w-full items-center justify-between px-20 desktopEnd:mt-10 desktopEnd:px-4">
      <div
        className="flex cursor-pointer items-center gap-2"
        onClick={goToHome}
      >
        <Image src="/static/logos/logo.svg" alt="logo" width={26} height={32} />

        <span className="font-bold text-textPrimary">{t("label")}</span>
      </div>

      <div className="flex items-center gap-12 text-sm text-textPrimary desktopEnd:hidden">
        <div>{t("benefits")}</div>
        <div>{t("about")}</div>
        <div>{t("faq")}</div>
      </div>

      <LanguageSwitcher />
    </div>
  );
};
