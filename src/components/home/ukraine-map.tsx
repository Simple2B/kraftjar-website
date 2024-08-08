"use client";

import { useCallback, useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import Image from "next/image";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  distractsList,
  showBottom,
  showLeft,
} from "@/lib/ukraine-districts/districts-list";

export const UkraineMap = () => {
  const [selectedPart, setSelectedPart] = useState("");
  const mapRef = useRef<SVGSVGElement>(null);

  const handleClick = useCallback(
    (
      e: React.MouseEvent<SVGPathElement, MouseEvent>,
      selectedDistrict: string,
    ) => {
      const district = (e.target as SVGElement).id;

      if (selectedDistrict === district) {
        return;
      }

      setSelectedPart(district);
    },
    [],
  );

  const reset = () => {
    setSelectedPart("");
  };

  useClickOutside(mapRef, reset);

  return (
    <svg
      width="805"
      height="540"
      viewBox="0 0 805 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={mapRef}
    >
      {distractsList.map((district) => (
        <Popover key={district.id}>
          <PopoverTrigger asChild={true}>
            <path
              id={district.id}
              onClick={(e) => handleClick(e, selectedPart)}
              fill={selectedPart === district.id ? "#1b76ff" : "#333333"}
              stroke="white"
              stroke-width="0.449458"
              stroke-linecap="round"
              stroke-linejoin="round"
              d={district.d}
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
            <div className="flex gap-1 bg-transparent">
              <div className="grid h-[120px] w-[120px] place-content-center place-items-center rounded-[32px] bg-white text-center">
                <Image
                  src="/static/announcement.svg"
                  alt={district.id}
                  width={56}
                  height={56}
                />
                <span className="text-xs">{56} оголошень</span>
              </div>

              <div className="grid h-[120px] w-[120px] place-content-center place-items-center rounded-[32px] bg-white text-center">
                <Image
                  src="/static/strength.svg"
                  alt={district.id}
                  width={56}
                  height={56}
                />
                <span className="text-xs">{88} фахівців</span>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      ))}
    </svg>
  );
};
