import { useTranslations } from "next-intl";
import Image from "next/image";

import { formatDate } from "@/lib/utils";
import type { UserProfileOut } from "@/orval_api/model";
import { QRCodeWrapper } from "../custom/qr-code";

import { Modal } from "../custom/modal";
import { SetupInstruction } from "../custom/setup-instruction";

import { Stars } from "../custom/stars";
import { Educations } from "./educations";
import { RecentShowcases } from "./showcases";

type Props = {
  expert: UserProfileOut;
};

export const DEFAULT_AVATAR = "/static/default-avatar.png";

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

  const expertLocations =
    locations.map((l) => l.name).join(", ") || t("other.noLocation");
  const expertServices = services.map((s) => s.name).join(", ");

  const joinedDate = formatDate(created_at, t("expertPage.locale"));

  return (
    <div className="mt-14 px-20 desktopEnd:px-4">
      <div className="mb-12 flex items-center justify-between gap-1 rounded-3xl px-10 py-4 shadow-expertInfo desktopEnd:py-10 smDesktop:flex-col">
        <div className="flex items-center gap-6 desktopEnd:mb-10 desktopEnd:flex-col">
          <Image
            src={expert.avatar_url || DEFAULT_AVATAR}
            alt="Avatar"
            width={160}
            height={160}
            className="h-[160px] rounded-full"
          />

          <div className="flex flex-col gap-2 desktopEnd:items-center">
            <div className="text-2xl">{fullname}</div>

            <div className="flex items-center gap-1">
              <Stars rate={receiver_average_rate} />

              <span className="text-xs">
                ({owned_rates_count} {t("other.reviews")})
              </span>
            </div>

            <div className="flex gap-4 smDesktop:flex-col">
              <div className="flex gap-2">
                <Image
                  src="/static/briefcase.svg"
                  alt="Avatar"
                  width={16}
                  height={16}
                />
                <span className="text-xs"> {expertServices}</span>
              </div>

              <div className="flex gap-2">
                <Image
                  src="/static/location.svg"
                  alt="Avatar"
                  width={16}
                  height={16}
                />
                <span className="text-xs">{expertLocations}</span>
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

      {!!expert.educations?.length && (
        <Educations educations={expert.educations} />
      )}

      {!!expert.recent_showcases?.length && (
        <RecentShowcases
          showcases={expert.recent_showcases}
          expertUUID={expert.uuid}
          reviewsCount={owned_rates_count}
        />
      )}
    </div>
  );
};
