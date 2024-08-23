"use client";

import { useTranslations } from "next-intl";
import type { UserSearchOut } from "@/orval_api/model";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselOptions,
  CarouselPlugin,
} from "@/components/ui/carousel";
import { formatUsersData } from "@/lib/utils";
import { CarouselCard } from "./carousel-card";

const CAROUSEL_PLUGINS: CarouselPlugin = [
  Autoplay({
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    delay: 3000,
  }),
];

const CAROUSEL_OPTS: Partial<CarouselOptions> = {
  loop: true,
  align: "center",
};

type Props = {
  experts: UserSearchOut[];
};

export const ExpertsCarousel = ({ experts }: Props) => {
  const t = useTranslations("Home");

  return (
    <Carousel
      plugins={CAROUSEL_PLUGINS}
      className="w-full"
      opts={CAROUSEL_OPTS}
    >
      <CarouselContent className="gap-3 pl-3">
        {experts.map(
          (
            {
              locations,
              services,
              id,
              fullname,
              average_rate,
              owned_rates_count,
              uuid,
            },
            index,
          ) => {
            const { expertServices, expertLocations } = formatUsersData(
              locations,
              services,
              t("other.noLocation"),
              t("other.noService"),
            );

            return (
              <CarouselCard
                key={id}
                index={index}
                uuid={uuid}
                average_rate={average_rate}
                fullname={fullname}
                owned_rates_count={owned_rates_count}
                expertServices={expertServices}
                expertLocations={expertLocations}
              />
            );
          },
        )}
      </CarouselContent>
    </Carousel>
  );
};
