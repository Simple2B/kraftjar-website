"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { LanguageSwitcher } from "../language-switcher";
import { Link } from "@/navigation";

export const Header = () => {
  const t = useTranslations("Home.navigation");

  return (
    <nav className="mt-14 flex max-h-max w-full items-center justify-between px-20 desktopEnd:mt-10 desktopEnd:px-4">
      <Link href="/" className="flex cursor-pointer items-center gap-2">
        <Image src="/static/logos/logo.svg" alt="logo" width={26} height={32} />

        <span className="font-bold text-textPrimary">{t("label")}</span>
      </Link>

      <div className="flex items-center gap-12 text-sm text-textPrimary desktopEnd:hidden">
        <Link className="link-style" href="/#advantages">
          {t("advantages")}
        </Link>
        <Link className="link-style" href="/#about">
          {t("about")}
        </Link>
        <Link className="link-style" href="/#faq">
          {t("faq")}
        </Link>
      </div>

      <LanguageSwitcher />
    </nav>
  );
};
