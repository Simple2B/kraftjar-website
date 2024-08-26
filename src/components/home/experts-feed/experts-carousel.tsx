"use client";

import type { UserSearchOut } from "@/orval_api/model";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselOptions,
  CarouselPlugin,
} from "@/components/ui/carousel";
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
  return (
    <Carousel
      plugins={CAROUSEL_PLUGINS}
      className="w-full"
      opts={CAROUSEL_OPTS}
    >
      <CarouselContent className="gap-3 pl-3">
        {experts.map((expert, index) => (
          <CarouselCard
            key={expert.id}
            index={index}
            uuid={expert.uuid}
            average_rate={expert.average_rate}
            fullname={expert.fullname}
            owned_rates_count={expert.owned_rates_count}
            services={expert.services}
            locations={expert.locations}
          />
        ))}
      </CarouselContent>
    </Carousel>
  );
};
