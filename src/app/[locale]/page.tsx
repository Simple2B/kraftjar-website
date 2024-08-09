import { HeroBlock } from "@/components/home/hero-block";
import { SearchBlock } from "@/components/home/search/search-block";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="w-full px-20 desktopEnd:px-0">
        <HeroBlock />
      </div>

      <SearchBlock />
    </main>
  );
}
