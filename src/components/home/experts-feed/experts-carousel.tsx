"use client";

import { Link } from "@/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Button } from "../../custom/button";
import { DUMMY_USERS } from "@/lib/constants";

export const ExpertsCarousel = () => {
  const t = useTranslations("Home.expertsFeed.carousel");

  return (
    <Carousel
      plugins={[
        Autoplay({
          stopOnInteraction: false,
          stopOnMouseEnter: true,
          delay: 3000,
        }),
      ]}
      className="w-full"
      opts={{
        loop: true,
        align: "center",
      }}
    >
      <CarouselContent className="gap-3 pl-3">
        {DUMMY_USERS.map((user, index) => (
          <CarouselItem
            key={user.id}
            className={cn("relative h-[198px] basis-[298px]")}
          >
            <Link
              href="#"
              className={cn(
                "absolute right-[-8px] top-[-6px] flex h-10 w-10 items-center justify-center rounded-full border border-[#FFFFFF33] bg-blackMain transition-colors hover:bg-[#FFFFFF33]",
              )}
            >
              <Image
                src="/static/share.svg"
                alt="Share"
                width={20}
                height={20}
              />
            </Link>

            <div
              className={cn(
                "expert-card h-[198px] w-[298px] select-none rounded-3xl border border-blueMain bg-[linear-gradient(to_right,_#1a73e8,_#89c6ff)] p-3",
                index % 2 === 1 &&
                  "border-yellowMain bg-[linear-gradient(0.06deg,#F2B705_0.05%,#FFDB70_99.95%)]",
              )}
            >
              <div className="y-[6px] mb-2 w-max rounded-3xl bg-[#FFFFFF33] px-[10px] text-[#FFFFFF99]">
                {user.lastOnline}
              </div>

              <div className="select-none">
                <div className="flex gap-2">
                  <div className="flex h-14 w-14 justify-center rounded-full bg-white">
                    <Image
                      src={user.avatar}
                      alt="Avatar"
                      width={50}
                      height={50}
                      style={{ objectPosition: "center" }}
                    />
                  </div>

                  <div className="flex flex-col items-start">
                    <div
                      className={cn(
                        "text-xl text-white",
                        user.name.length > 18 && "text-base",
                      )}
                    >
                      {user.name}
                    </div>

                    <div className="">
                      <span className="mr-2 inline-block h-max w-max scale-150 text-white">
                        ★
                      </span>
                      <span className="text-xs text-white">
                        {user.rating.toFixed(1)} ({user.reviews} відгуків)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-2 mt-1">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs text-white">
                      {user.profession}
                    </span>
                    <span className="text-xs text-white">•</span>
                    <span className="text-xs text-white">{user.district}</span>
                  </div>
                </div>

                <Button
                  title={t("button")}
                  color="white"
                  className="h-10 w-full"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
