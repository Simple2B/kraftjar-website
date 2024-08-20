"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import { formatDate } from "@/lib/utils";
import { StarIcon } from "@/lib/icons";
import type { PublicUserProfileOut } from "@/orval_api/model";
import { QRCodeWrapper } from "../custom/qr-code";

import { Modal } from "../custom/modal";
import { SetupInstruction } from "../custom/setup-instruction";

type Props = {
  expert: PublicUserProfileOut;
};

const TOTAL_STARS = 5;
const STAR_LIST = [...Array(TOTAL_STARS)];

const EXPERIENCE = [
  {
    id: 1,
    name: "Київський національний університет імені Тараса Шевченка",
    degree: "Ступінь Бакалавра, Лінгвістика",
    date: "1.01.2016 - 1.01.2022",
    image: "/static/btca.png",
  },
  {
    id: 2,
    name: "Київський національний університет імені Тараса Шевченка",
    degree: "Ступінь Бакалавра, Лінгвістика",
    date: "1.01.2016 - 1.01.2022",
    image: "",
  },
];

export const ExpertProfile = ({ expert }: Props) => {
  const t = useTranslations("Home.expertPage");
  const { average_rate, locations, services, fullname, uuid, created_at } =
    expert;

  const roundRating = Math.round(average_rate);

  const expertLocations =
    locations.map((l) => l.name).join(", ") || "Немає локації...";
  const expertServices =
    services.map((s) => s.name).join(", ") || "Немає послуг...";

  const joinedDate = formatDate(created_at, t("locale"));

  return (
    <div className="mt-14 px-20 desktopEnd:px-4">
      <div className="mb-12 flex items-center justify-between rounded-3xl px-10 py-4 shadow-expertInfo desktopEnd:py-10 smDesktop:flex-col">
        <div className="flex items-center gap-6 desktopEnd:mb-10 desktopEnd:flex-col">
          <Image
            src="/static/experts-avatar.png"
            alt="Avatar"
            width={160}
            height={160}
            className="rounded-full"
          />

          <div className="flex flex-col gap-3 desktopEnd:items-center">
            <div className="text-2xl">{fullname}</div>

            <div className="star-rating flex gap-1">
              {STAR_LIST.map((_, index) => {
                const ratingValue = index + 1;
                const starColor =
                  ratingValue <= roundRating ? "#FFBB02" : "#15151533";

                return (
                  <div key={ratingValue} className="">
                    <StarIcon fill={starColor} />
                  </div>
                );
              })}
            </div>

            <div className="flex gap-4 smDesktop:flex-col">
              <div className="flex gap-2">
                <Image
                  src="/static/location.svg"
                  alt="Avatar"
                  width={16}
                  height={16}
                />
                <span className="text-xs">{expertLocations}</span>
              </div>

              <div className="flex gap-2">
                <Image
                  src="/static/briefcase.svg"
                  alt="Avatar"
                  width={16}
                  height={16}
                />
                <span className="text-xs"> {expertServices}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-start">
          <QRCodeWrapper expertUUID={uuid} />

          <Modal>
            <SetupInstruction hideTitle />
          </Modal>
        </div>
      </div>

      <div>
        <div className="mb-8 text-2xl font-bold">{t("info")}</div>
        <p className="mb-6">
          Налаштування контекстної реклами Google Adwords; Збір та оптимізація
          семантичного ядра; Якісне опрацювання ключових запитів; Автоматизація
          та оптимізація реклами; Налаштування Таргетингу та Ремаркетингу;
          Налаштування Google Analytics; Налаштування Google Shopping;
          Налаштування Performance Max campaigns
        </p>

        <div className="mb-14 flex max-w-[342px] flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-[#828282]">{t("email")}</span>
            <span>******************</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#828282]">{t("phone")}</span>
            <span>*************</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#828282]">{t("joined")}</span>
            <span>{joinedDate}</span>
          </div>
        </div>
      </div>

      <div className="max-w-[344px]">
        <div className="mb-8 text-2xl font-bold">{t("experience")}</div>

        {EXPERIENCE.map((e) => (
          <div key={e.id} className="mb-6 flex flex-col gap-2">
            <div className="text-base text-grayDark">{e.name}</div>
            <div className="text-base text-[#828282]">{e.degree}</div>
            <div className="text-base text-[#828282]">{e.date}</div>

            {!!e.image && (
              <Image src={e.image} alt="University" width={116} height={68} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
