import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import Image from "next/image";

import type { LocationStrings, Service } from "@/orval_api/model";
import { cn, formatUsersData } from "@/lib/utils";
import { CarouselItem } from "@/components/ui/carousel";
import { Modal } from "@/components/custom/modal";
import { QRCodeWrapper } from "@/components/custom/qr-code";

const USER_ACTIVITY = "Online";
const AVATAR = "/static/girl.svg";

type Props = {
  index: number;
  uuid: string;
  average_rate: number;
  fullname: string;
  owned_rates_count: number;
  services: LocationStrings[];
  locations: Service[];
};

export const CarouselCard = ({
  index,
  uuid,
  average_rate,
  fullname,
  owned_rates_count,
  services,
  locations,
}: Props) => {
  const t = useTranslations("Home");

  const { expertServices, expertLocations } = formatUsersData(
    locations,
    services,
    t("other.noLocation"),
    t("other.noService"),
  );

  return (
    <CarouselItem className={"relative h-[184px] basis-[298px]"}>
      <Link
        href="#"
        className={
          "absolute right-[-8px] top-[-6px] flex h-10 w-10 items-center justify-center rounded-full border border-[#FFFFFF33] bg-blackMain transition-colors hover:bg-[#FFFFFF33]"
        }
      >
        <Image src="/static/share.svg" alt="Share" width={20} height={20} />
      </Link>
      <Link href={`/expert/?uuid=${uuid}`}>
        <div
          className={cn(
            "expert-card h-[184px] w-[298px] select-none rounded-3xl border border-blueMain bg-[linear-gradient(to_right,_#1a73e8,_#89c6ff)] p-3",
            index % 2 === 1 &&
              "border-yellowMain bg-[linear-gradient(0.06deg,#F2B705_0.05%,#FFDB70_99.95%)]",
          )}
        >
          <div className="y-[6px] mb-2 w-max rounded-3xl bg-[#FFFFFF33] px-[10px] text-[#FFFFFF99]">
            {USER_ACTIVITY}
          </div>

          <div className="select-none">
            <div className="flex gap-2">
              <div className="flex h-14 w-14 justify-center rounded-full bg-white">
                <Image src={AVATAR} alt="Avatar" width={50} height={50} />
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

            <div className="mb-2 mt-1">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs text-white">{expertServices}</span>
                <span className="text-xs text-white">•</span>
                <span className="text-xs text-white">{expertLocations}</span>
              </div>
            </div>

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
