"use client";

import { useTranslations } from "next-intl";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Link } from "@/navigation";
import Image from "next/image";

import type {
  LocationStrings,
  Service,
  UserSearchOutAvatarUrl,
} from "@/orval_api/model";
import { cn, formatUsersData } from "@/lib/utils";
import { CarouselItem } from "@/components/ui/carousel";
import { Modal } from "@/components/custom/modal";
import { QRCodeWrapper } from "@/components/custom/qr-code";
import { twMerge } from "tailwind-merge";
import { DEFAULT_AVATAR } from "@/components/experts/expert-profile";

const TEXT_LIMIT = 40;
const LARGE_TEXT_LIMIT = 116;

type Props = {
  index: number;
  uuid: string;
  average_rate: number;
  fullname: string;
  owned_rates_count: number;
  services: Service[];
  locations: LocationStrings[];
  createdAt: string;
  avatar?: UserSearchOutAvatarUrl;
};

export const CarouselCard = ({
  index,
  uuid,
  average_rate,
  fullname,
  owned_rates_count,
  services,
  locations,
  createdAt,
  avatar,
}: Props) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  const t = useTranslations("Home");

  const { expertServices, expertLocations } = formatUsersData(
    locations,
    services,
    t("other.noLocation"),
  );

  const handleCopy = () => {
    if (isCopied) {
      return;
    }

    copyToClipboard(window.location.href + `/expert?uuid=${uuid}`);
  };

  return (
    <CarouselItem className={"relative h-[204px] basis-[298px]"}>
      <button
        onClick={handleCopy}
        title="Copy link"
        className={
          "absolute right-[-8px] top-[-6px] flex h-10 w-10 items-center justify-center rounded-full border border-[#FFFFFF33] bg-blackMain transition-colors hover:bg-[#FFFFFF33]"
        }
      >
        <Image
          className={twMerge(!isCopied && "hidden")}
          src="/static/check.svg"
          alt="Copied"
          width={40}
          height={40}
        />
        <Image
          className={twMerge(isCopied && "hidden")}
          src="/static/share.svg"
          alt="Share"
          width={20}
          height={20}
        />
      </button>
      <Link href={`/expert/?uuid=${uuid}`}>
        <div
          className={cn(
            "expert-card h-[204px] w-[298px] select-none rounded-3xl border border-blueMain bg-[linear-gradient(to_right,_#1a73e8,_#89c6ff)] p-3",
            index % 2 === 1 &&
              "border-yellowMain bg-[linear-gradient(0.06deg,#F2B705_0.05%,#FFDB70_99.95%)]",
          )}
        >
          <div className="y-[6px] mb-2 w-max rounded-3xl bg-[#59565636] px-[10px] text-[#ffffffbd]">
            {createdAt}
          </div>

          <div className="flex h-[146px] select-none flex-col justify-between">
            <div className="flex gap-2">
              <div className="flex h-14 w-14 justify-center rounded-full bg-white">
                <Image
                  src={avatar || DEFAULT_AVATAR}
                  alt="Avatar"
                  width={56}
                  height={56}
                  className="rounded-full"
                />
              </div>

              <div className="flex flex-col items-start">
                <div
                  className={cn(
                    "text-xl text-white",
                    fullname.length > 18 && "text-base",
                  )}
                >
                  {fullname}
                </div>

                <div className="">
                  <span className="mr-2 inline-block h-max w-max scale-150 text-white">
                    ★
                  </span>
                  <span className="text-xs text-white">
                    {average_rate.toFixed(1)} ({owned_rates_count}{" "}
                    {t("other.reviews")})
                  </span>
                </div>
              </div>
            </div>

            {expertServices.length < TEXT_LIMIT &&
            expertLocations.length < TEXT_LIMIT ? (
              <div className="mb-2 mt-1">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xs text-white">{expertServices}</span>
                  <span className="text-xs text-white">•</span>
                  <span className="text-xs text-white">{expertLocations}</span>
                </div>
              </div>
            ) : (
              <>
                <div
                  className={cn(
                    "inline-flex w-full flex-nowrap",
                    expertServices.length < TEXT_LIMIT && "justify-center",
                  )}
                >
                  <ul
                    className={cn(
                      "md:justify-start flex items-center justify-center [&_img]:max-w-none [&_li]:mx-2",
                      expertServices.length > TEXT_LIMIT &&
                        "animate-infinite-scroll text-red-600",
                      expertServices.length > LARGE_TEXT_LIMIT &&
                        "duration-25000",
                    )}
                  >
                    {services.map((e) => (
                      <li className="w-max text-xs text-white" key={e.uuid}>
                        {e.name}
                      </li>
                    ))}
                  </ul>
                  {expertServices.length > TEXT_LIMIT && (
                    <ul
                      className={cn(
                        "md:justify-start flex animate-infinite-scroll items-center justify-center [&_img]:max-w-none [&_li]:mx-2",
                        expertServices.length > LARGE_TEXT_LIMIT &&
                          "duration-25000",
                      )}
                      aria-hidden="true"
                    >
                      {services.map((e, i) => (
                        <li
                          className="w-max text-xs text-white"
                          key={e.uuid + "-" + i}
                        >
                          {e.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Duplicate need for circular scrolling */}
                <div
                  className={cn(
                    "inline-flex w-full flex-nowrap",
                    expertLocations.length < TEXT_LIMIT && "justify-center",
                  )}
                >
                  <ul
                    className={cn(
                      "md:justify-start flex items-center justify-center [&_img]:max-w-none [&_li]:mx-2",
                      expertLocations.length > TEXT_LIMIT &&
                        "animate-infinite-scroll",
                      expertLocations.length > LARGE_TEXT_LIMIT &&
                        "duration-25000",
                    )}
                  >
                    {locations.length ? (
                      locations.map((e) => (
                        <li className="w-max text-xs text-white" key={e.uuid}>
                          {e.name}
                        </li>
                      ))
                    ) : (
                      <li className="w-max text-xs text-white">
                        {t("other.noLocation")}
                      </li>
                    )}
                  </ul>
                  {expertLocations.length > TEXT_LIMIT && (
                    <ul
                      className={cn(
                        "md:justify-start flex animate-infinite-scroll items-center justify-center [&_img]:max-w-none [&_li]:mx-2",
                        expertLocations.length > LARGE_TEXT_LIMIT &&
                          "duration-25000",
                      )}
                      aria-hidden="true"
                    >
                      {locations.length ? (
                        locations.map((e, i) => (
                          <li
                            className="w-max text-xs text-white"
                            key={e.uuid + "-" + i}
                          >
                            {e.name}
                          </li>
                        ))
                      ) : (
                        <li className="w-max text-xs text-white">
                          {t("other.noLocation")}
                        </li>
                      )}
                    </ul>
                  )}
                </div>
              </>
            )}

            <Modal className="w-full bg-white text-blackMain hover:bg-gray-200">
              <div className="flex flex-col items-center text-center">
                <QRCodeWrapper expertUUID={uuid} />
              </div>
            </Modal>
          </div>
        </div>
      </Link>
    </CarouselItem>
  );
};
