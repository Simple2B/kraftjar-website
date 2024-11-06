import { backendURL, formatDate } from "@/lib/constants";
import { getUsers } from "@/orval_api/users/users";
import { ExpertsCarousel } from "./experts-carousel";
import { CarouselContent } from "@/components/ui/carousel";
import { CarouselCard } from "./carousel-card";

export async function ExpertsFetchWrapper() {
  const { aPIGetUsers } = getUsers();

  const {
    data: { items },
  } = await aPIGetUsers({ query: "test" }, backendURL);

  return (
    <ExpertsCarousel>
      <CarouselContent className="gap-3 pl-3">
        {items.map((expert, index) => (
          <CarouselCard
            key={expert.id}
            index={index}
            uuid={expert.uuid}
            average_rate={expert.average_rate}
            fullname={expert.fullname}
            owned_rates_count={expert.owned_rates_count}
            services={expert.services}
            locations={expert.locations}
            createdAt={formatDate(expert.created_at, "uk")}
          />
        ))}
      </CarouselContent>
    </ExpertsCarousel>
  );
}
