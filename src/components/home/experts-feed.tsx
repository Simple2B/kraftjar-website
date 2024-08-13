"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";

// background: linear-gradient(0.06deg, #1B76FF 0.05%, #6FA9FF 99.95%);
// background: linear-gradient(0.06deg, #F2B705 0.05%, #FFDB70 99.95%);

const EXPERTS = Array.from({ length: 20 });

export const ExpertsFeed = () => {
  return (
    <div className="w-full">
      <Carousel
        // plugins={[
        //   Autoplay({
        //     stopOnInteraction: false,
        //     stopOnMouseEnter: true,
        //     delay: 3000,
        //   }),
        // ]}
        className="w-full max-w-sm"
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <CarouselContent className="gap-3 pl-3">
          {EXPERTS.map((_, index) => (
            <CarouselItem
              key={index}
              className={cn(
                "expert-card relative h-[178px] basis-[298px] rounded-3xl border bg-[linear-gradient(0.06deg,#1B76FF_0.05%,#6FA9FF_99.95%)]",
                index % 2 === 1 &&
                  "bg-[linear-gradient(0.06deg,#F2B705_0.05%,#FFDB70_99.95%)]",
              )}
            >
              {/* <div className="absolute right-0 h-10 w-10 bg-black"></div> */}
              {index + 1}
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </div>
  );
};
