import { getJobs } from "@/orval_api/jobs/jobs";
import { backendURL } from "@/lib/constants";

import { HeroBlock } from "@/components/home/hero-block";
import { SearchBlock } from "@/components/home/search/search-block";
import { UkraineMap } from "@/components/home/search/ukraine-map";
import { Categories } from "@/components/home/categories";
import { Advantages } from "@/components/home/advantages";
import { AboutApp } from "@/components/home/about-app";
import { ExpertsFeed } from "@/components/home/experts-feed/experts-feed";
import { HowToStart } from "@/components/home/how-to-start";
import { Faq } from "@/components/home/faq";
import { RevealOnScroll } from "@/components/reveal-on-scroll";

const COMPONENTS = [
  { id: 1, component: <Categories /> },
  { id: 2, component: <Advantages /> },
  { id: 3, component: <AboutApp /> },
  { id: 4, component: <ExpertsFeed /> },
  { id: 5, component: <HowToStart /> },
  { id: 6, component: <Faq /> },
];

export default async function Home() {
  const { aPIGetJobsByLocations } = getJobs();
  const {
    data: { statistics },
  } = await aPIGetJobsByLocations(backendURL);

  return (
    <main className="flex flex-col items-center">
      <HeroBlock />

      <SearchBlock>
        <UkraineMap statistics={statistics} />
      </SearchBlock>

      {COMPONENTS.map(({ id, component }) => (
        <RevealOnScroll key={id}>{component}</RevealOnScroll>
      ))}
    </main>
  );
}
