import { useTranslations } from "next-intl";
import Image from "next/image";

import { formatDate } from "@/lib/utils";
import { StarIcon } from "@/lib/icons";
import type { UserProfileOut } from "@/orval_api/model";
import { QRCodeWrapper } from "../custom/qr-code";

import { Modal } from "../custom/modal";
import { SetupInstruction } from "../custom/setup-instruction";

type Props = {
  expert: UserProfileOut;
};

const TOTAL_STARS = 5;
const STAR_LIST = [...Array(TOTAL_STARS)];
export const DEFAULT_AVATAR = "/static/default-avatar.png";

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
  const t = useTranslations("Home");
  const {
    receiver_average_rate,
    locations,
    services,
    fullname,
    uuid,
    created_at,
    owned_rates_count,
  } = expert;

  const roundRating = Math.round(receiver_average_rate);

  const expertLocations =
    locations.map((l) => l.name).join(", ") || t("other.noLocation");
  const expertServices = services.map((s) => s.name).join(", ");

  const joinedDate = formatDate(created_at, t("expertPage.locale"));

  return (
    <div className="mt-14 px-20 desktopEnd:px-4">
      <div className="mb-12 flex items-center justify-between rounded-3xl px-10 py-4 shadow-expertInfo desktopEnd:py-10 smDesktop:flex-col">
        <div className="flex items-center gap-6 desktopEnd:mb-10 desktopEnd:flex-col">
          <Image
            src={expert.avatar_url || DEFAULT_AVATAR}
            alt="Avatar"
            width={160}
            height={160}
            className="h-[160px] rounded-full"
          />

          <div className="flex flex-col gap-3 desktopEnd:items-center">
            <div className="text-2xl">{fullname}</div>

            <div className="star-rating flex items-center gap-1">
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

              <span className="text-xs">
                ({owned_rates_count} {t("other.reviews")})
              </span>
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
            <SetupInstruction hideTitle isStepLineLg />
          </Modal>
        </div>
      </div>

      <div>
        <div className="mb-8 text-2xl font-bold">{t("expertPage.info")}</div>
        <p className="mb-6">{expert.description}</p>

        <div className="mb-14 flex max-w-[342px] flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-[#828282]">{t("expertPage.email")}</span>
            <span>******************</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#828282]">{t("expertPage.phone")}</span>
            <span>*************</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#828282]">{t("expertPage.joined")}</span>
            <span>{joinedDate}</span>
          </div>
        </div>
      </div>

      {/* Hide for now */}
      {/* <div className="max-w-[344px]">
        <div className="mb-8 text-2xl font-bold">
          {t("expertPage.experience")}
        </div>

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
      </div> */}
    </div>
  );
};
