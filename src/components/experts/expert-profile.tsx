"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { PublicUserProfileOut } from "@/orval_api/model";
import { StarIcon } from "@/lib/icons";

type Props = {
  expert: PublicUserProfileOut;
};

const TOTAL_STARS = 5;

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
  const roundRating = Math.round(expert.average_rate);

  return (
    <div className="mt-14 px-20">
      <div className="shadow-expertInfo mb-12 flex items-center justify-between rounded-3xl px-10">
        <div className="flex items-center gap-6">
          <Image
            src="/static/experts-avatar.png"
            alt="Avatar"
            width={160}
            height={160}
            className="rounded-full"
          />

          <div className="flex flex-col gap-3">
            <div className="text-2xl">{expert.fullname}</div>

            <div className="star-rating flex gap-1">
              {[...Array(TOTAL_STARS)].map((_, index) => {
                const ratingValue = index + 1;

                return (
                  <div key={ratingValue} className="">
                    <StarIcon
                      fill={
                        ratingValue <= roundRating ? "#FFBB02" : "#15151533"
                      }
                    />
                  </div>
                );
              })}
            </div>

            <div className="flex gap-4">
              <div className="flex gap-2">
                <Image
                  src="/static/location.svg"
                  alt="Avatar"
                  width={16}
                  height={16}
                />
                <span className="text-xs">
                  {expert.locations.map((e) => e.name).join(", ")}
                </span>
              </div>

              <div className="flex gap-2">
                <Image
                  src="/static/briefcase.svg"
                  alt="Avatar"
                  width={16}
                  height={16}
                />
                <span className="text-xs">
                  {" "}
                  {expert.services.map((e) => e.name).join(", ")}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3>QR Code</h3>
        </div>
      </div>

      <div>
        <div className="mb-8 text-2xl font-bold">Інформація про виконавця</div>
        <p className="mb-6">
          Налаштування контекстної реклами Google Adwords; Збір та оптимізація
          семантичного ядра; Якісне опрацювання ключових запитів; Автоматизація
          та оптимізація реклами; Налаштування Таргетингу та Ремаркетингу;
          Налаштування Google Analytics; Налаштування Google Shopping;
          Налаштування Performance Max campaigns
        </p>

        <div className="mb-14 flex max-w-[342px] flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-[#828282]">Email</span>
            <span>******************</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#828282]">Номер телефону</span>
            <span>*************</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#828282]">Приєднався</span>
            <span>{formatDate(expert.created_at, t("locale"))}</span>
          </div>
        </div>
      </div>

      <div className="w-[344px]">
        <div className="mb-8 text-2xl font-bold">Досвід&Сертифікати</div>

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
