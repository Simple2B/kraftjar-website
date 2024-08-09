"use client";

import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/navigation";
import Image from "next/image";
import { Separator } from "../ui/separator";

export const Footer = () => {
  const t = useTranslations("Home.navigation");

  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-[496px] bg-blackMain">
      <div className="p-20 desktopEnd:px-4">
        <div className="flex justify-between desktopEnd:flex-col desktopEnd:items-center desktopEnd:gap-10 desktopEnd:text-center">
          <div>
            <div
              className="mb-2 flex cursor-pointer items-center gap-2 desktopEnd:justify-center"
              onClick={goToHome}
            >
              <Image
                src="/static/logos/logo.svg"
                alt="logo"
                width={38}
                height={48}
              />

              <span className="text-xl font-bold text-grayLight">
                {t("label")}
              </span>
            </div>

            <div className="text-xl text-grayLight">Крафтяр - як для себе</div>
          </div>

          <div className="flex flex-col justify-between gap-9">
            <div className="text-sm text-grayLight">Головна</div>
            <div className="text-sm text-grayLight">Переваги</div>
            <div className="whitespace-nowrap text-sm text-grayLight">
              Про додаток
            </div>
            <div className="text-sm text-grayLight">Питання</div>
          </div>

          <div className="flex flex-col justify-between text-white">
            <div className="mb-[72px] text-2xl smDesktop:mb-10">
              Надсилайте свої запитання та пропозиції
            </div>

            <div className="flex items-end gap-12 smDesktop:flex-col smDesktop:items-center">
              <div className="">
                <div className="text-xl">Запитання:</div>
                <div className="text-xl">help@uakids.org</div>
              </div>

              <div className="">
                <div className="text-xl">Співпраця:</div>
                <div className="text-xl">help@uakids.org</div>
              </div>
              <div className="">
                <div className="text-xl">Медія:</div>
                <div className="text-xl">help@uakids.org</div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-[60px] bg-[#FFFFFF33]" />

        <div className="flex items-end justify-between desktopEnd:flex-col desktopEnd:items-center desktopEnd:gap-5 desktopEnd:text-center">
          <div>
            <div className="text-sm text-white">Крафтяр 2024</div>
            <div className="text-sm text-white">© Усі права захищені</div>
          </div>

          <div className="flex gap-8 text-sm text-[#FFFFFF66] underline underline-offset-2">
            <Link href="">Договір оферти</Link>

            <Link href="">Політика конфіденційності</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
