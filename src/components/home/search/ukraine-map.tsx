"use client";

import { useCallback, useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useTranslations } from "next-intl";
import Image from "next/image";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import type { PublicJobListStatistics } from "@/orval_api/model";
import {
  districtsList,
  showBottom,
  showLeft,
} from "@/lib/ukraine-districts/districts-list";
import { cn } from "@/lib/utils";

type EventType = React.MouseEvent<SVGPathElement, MouseEvent>;

type Props = {
  statistics: PublicJobListStatistics;
};

export const UkraineMap = ({ statistics }: Props) => {
  const t = useTranslations("Home.search.map");

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const mapRef = useRef<SVGSVGElement>(null);

  const handleClick = useCallback(
    (e: EventType) => {
      const district = (e.target as SVGElement).id;

      if (selectedDistrict === district) {
        reset();
        return;
      }

      setSelectedDistrict(district);
    },
    [selectedDistrict],
  );

  const reset = () => {
    setSelectedDistrict("");
  };

  useClickOutside(mapRef, reset);

  console.log(statistics);

  return (
    <svg
      width="805"
      height="540"
      viewBox="0 0 805 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={mapRef}
      className="w-auto pr-3 desktopEnd:hidden"
    >
      {districtsList.map((district) => {
        const isDistrictSelected = selectedDistrict === district.id;

        const jobCounter = statistics[district.backendId]?.jobs_count || 0;
        const expertsCounter =
          statistics[district.backendId]?.experts_count || 0;

        return (
          <Popover open={isDistrictSelected} key={district.id}>
            <PopoverTrigger asChild={true}>
              <path
                id={district.id}
                onClick={handleClick}
                stroke="white"
                strokeWidth="0.449458"
                strokeLinecap="round"
                strokeLinejoin="round"
                d={district.d}
                className={cn(
                  "cursor-pointer fill-grayDark hover:fill-yellowMain",
                  isDistrictSelected && "fill-blueMain hover:fill-blueMain",
                )}
              />
            </PopoverTrigger>

            <PopoverContent
              side={
                showBottom.includes(district.id)
                  ? "bottom"
                  : showLeft.includes(district.id)
                    ? "left"
                    : "top"
              }
              className="w-fit border-none bg-transparent p-0 shadow-none"
            >
              <div className="flex select-none gap-1 bg-transparent">
                <div className="grid h-[120px] w-[120px] place-content-center place-items-center rounded-[32px] bg-white text-center">
                  <Image
                    src="/static/announcement.svg"
                    alt={district.id}
                    width={56}
                    height={56}
                  />
                  <span className="text-xs">
                    {jobCounter} {t("announcement")}
                  </span>
                </div>

                <div className="grid h-[120px] w-[120px] place-content-center place-items-center rounded-[32px] bg-white text-center">
                  <Image
                    src="/static/strength.svg"
                    alt={district.id}
                    width={56}
                    height={56}
                  />
                  <span className="text-xs">
                    {expertsCounter} {t("strength")}
                  </span>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        );
      })}
    </svg>
  );
};
