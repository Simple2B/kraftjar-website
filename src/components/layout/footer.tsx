"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Link } from "@/navigation";
import Image from "next/image";
import { Separator } from "../ui/separator";

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  const t = useTranslations("Home.footer");
  const routeParams = useParams();

  // To hide footer on 404 page
  if (routeParams.hasOwnProperty("error")) {
    return null;
  }

  return (
    <footer className="min-h-[496px] bg-blackMain">
      <div className="p-20 desktopEnd:px-4">
        <div className="flex justify-between desktopEnd:flex-col desktopEnd:items-center desktopEnd:gap-10 desktopEnd:text-center">
          <div>
            <Link
              href="/"
              className="mb-2 flex cursor-pointer items-center gap-2 desktopEnd:justify-center"
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
            </Link>

            <div className="text-xl text-grayLight">{t("sub-label")}</div>
          </div>

          <div className="flex flex-col justify-between gap-9">
            <Link href="/#" className="text-sm text-grayLight">
              {t("main")}
            </Link>

            <Link href="/#advantages" className="text-sm text-grayLight">
              {t("advantages")}
            </Link>

            <Link
              href="/#about"
              className="whitespace-nowrap text-sm text-grayLight"
            >
              {t("about")}
            </Link>

            <Link href="/#faq" className="text-sm text-grayLight">
              {t("faq")}
            </Link>
          </div>

          <div className="flex flex-col justify-between text-white">
            <div className="mb-[72px] text-2xl smDesktop:mb-10">
              {t("send")}
            </div>

            <div className="flex items-end gap-12 smDesktop:flex-col smDesktop:items-center">
              <div className="">
                <div className="text-xl">{t("question")}:</div>
                <Link className="text-xl" href="mailto:help@uakids.org">
                  help@uakids.org
                </Link>
              </div>

              <div className="">
                <div className="text-xl">{t("co-operation")}:</div>
                <Link className="text-xl" href="mailto:help@uakids.org">
                  help@uakids.org
                </Link>
              </div>
              <div className="">
                <div className="text-xl">{t("media")}:</div>
                <Link className="text-xl" href="mailto:help@uakids.org">
                  help@uakids.org
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-[60px] bg-[#FFFFFF33]" />

        <div className="flex items-end justify-between desktopEnd:flex-col desktopEnd:items-center desktopEnd:gap-5 desktopEnd:text-center">
          <div>
            <div className="text-sm text-white">
              {t("label")} {CURRENT_YEAR}
            </div>
            <div className="text-sm text-white">© {t("rights")}</div>
          </div>

          <div className="flex gap-8 text-sm text-[#FFFFFF66] underline underline-offset-2">
            <Link href="">{t("offer")}</Link>

            <Link href="">{t("privacy")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
