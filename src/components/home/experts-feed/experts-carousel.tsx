"use client";

import { PropsWithChildren } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselOptions,
  CarouselPlugin,
} from "@/components/ui/carousel";

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

export const ExpertsCarousel = ({ children }: PropsWithChildren) => {
  return (
    <Carousel
      plugins={CAROUSEL_PLUGINS}
      className="w-full"
      opts={CAROUSEL_OPTS}
    >
      {children}
    </Carousel>
  );
};
