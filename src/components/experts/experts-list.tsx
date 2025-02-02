import { Fragment } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import Image from "next/image";

import type { UserSearchOut } from "@/orval_api/model";
import { Separator } from "../ui/separator";
import { Modal } from "../custom/modal";
import { QRCodeWrapper } from "../custom/qr-code";
import { DEFAULT_AVATAR } from "./expert-profile";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const FIRST_ITEMS = 3;

type Props = {
  experts: UserSearchOut[];
};

export const ExpertsList = ({ experts }: Props) => {
  const t = useTranslations("Home.other");

  return (
    <div className="mb-5">
      {experts.map(
        ({
          locations,
          services,
          id,
          uuid,
          receiver_average_rate,
          fullname,
          owned_rates_count,
          avatar_url,
        }) => {
          const avgRate = receiver_average_rate.toFixed(1);

          const firstLocations = locations.slice(0, FIRST_ITEMS);
          const expertLocations =
            firstLocations.map((l) => l.name).join(", ") || t("noLocation");
          const restLocations = locations.slice(FIRST_ITEMS);

          const firstServices = services.slice(0, FIRST_ITEMS);
          const expertServices = firstServices.map((s) => s.name).join(", ");
          const restServices = services.slice(FIRST_ITEMS);

          return (
            <Fragment key={id}>
              <Link
                href={`/expert/?uuid=${uuid}`}
                className="flex cursor-pointer select-none items-center justify-between p-8 transition-colors hover:bg-grayLight desktopEnd:h-auto desktopEnd:flex-col desktopEnd:items-start desktopEnd:p-3"
              >
                <div className="flex gap-6 desktopEnd:mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full shadow-avatarShadow">
                    <Image
                      src={avatar_url || DEFAULT_AVATAR}
                      alt="Avatar"
                      width={80}
                      height={80}
                      className="h-20 rounded-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col items-start justify-center">
                    <div className={"text-xl"}>{fullname}</div>

                    <div className="flex items-center gap-2 desktopEnd:flex-col desktopEnd:items-start">
                      <div>
                        <span className="mr-2 inline-block h-max w-max scale-150">
                          ★
                        </span>
                        <span className="text-xs">
                          {avgRate} ({owned_rates_count} {t("reviews")})
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs">•</span>
                        <span className="text-xs">{expertServices}</span>

                        {!!restServices.length && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className="rounded-full bg-[#b0a8a836] p-1 text-xs transition-colors hover:bg-[#59565636]">
                                  +{restServices.length}
                                </span>
                              </TooltipTrigger>

                              <TooltipContent>
                                {restServices.map((l) => (
                                  <div key={l.uuid} className="text-xs">
                                    {l.name}
                                  </div>
                                ))}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs">•</span>
                        <span className="text-xs">{expertLocations}</span>

                        {!!restLocations.length && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className="rounded-full bg-[#b0a8a836] p-1 text-xs transition-colors hover:bg-[#59565636]">
                                  +{restLocations.length}
                                </span>
                              </TooltipTrigger>

                              <TooltipContent>
                                {restLocations.map((l) => (
                                  <div key={l.uuid} className="text-xs">
                                    {l.name}
                                  </div>
                                ))}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <Modal preventEventTrigger>
                  <div className="flex flex-col items-center text-center">
                    <QRCodeWrapper expertUUID={uuid} />
                  </div>
                </Modal>
              </Link>

              <Separator className="" />
            </Fragment>
          );
        },
      )}
    </div>
  );
};
