import { getJobs } from "@/orval_api/jobs/jobs";
import { getUsers } from "@/orval_api/users/users";
import { backendURL } from "@/lib/constants";
import type { UserSearchOut } from "@/orval_api/model";

import { HeroBlock } from "@/components/home/hero-block";
import { SearchBlock } from "@/components/home/search/search-block";
import { UkraineMap } from "@/components/home/search/ukraine-map";
import { Categories } from "@/components/home/categories";
import { Advantages } from "@/components/home/advantages";
import { AboutApp } from "@/components/home/about-app";
import { ExpertsFeed } from "@/components/home/experts-feed/experts-feed";
import { ExpertsCarousel } from "@/components/home/experts-feed/experts-carousel";
import { HowToStart } from "@/components/home/how-to-start";
import { Faq } from "@/components/home/faq";
import { RevealOnScroll } from "@/components/reveal-on-scroll";

const COMPONENTS = [
  { id: 1, component: <Categories /> },
  { id: 2, component: <Advantages /> },
  { id: 3, component: <AboutApp /> },
  {
    id: 4,
    component: (top_experts: UserSearchOut[]) => (
      <ExpertsFeed>
        <ExpertsCarousel experts={top_experts} />
      </ExpertsFeed>
    ),
  },
  { id: 5, component: <HowToStart /> },
  { id: 6, component: <Faq /> },
];

export default async function Home() {
  const { aPIGetPublicJobStatistics } = getJobs();
  const { aPIGetPublicTopExperts } = getUsers();
  const {
    data: { statistics },
  } = await aPIGetPublicJobStatistics(backendURL);

  const {
    data: { top_experts },
  } = await aPIGetPublicTopExperts({}, backendURL);

  return (
    <main className="flex flex-col items-center">
      <HeroBlock />

      <SearchBlock>
        <UkraineMap statistics={statistics} />
      </SearchBlock>

      {COMPONENTS.map(({ id, component }) => (
        <RevealOnScroll key={id}>
          {typeof component === "function" ? component(top_experts) : component}
        </RevealOnScroll>
      ))}
    </main>
  );
}
