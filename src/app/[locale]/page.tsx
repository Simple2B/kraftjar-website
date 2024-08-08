import { Header } from "@/components/header";
import { HeroBlock } from "@/components/home/hero-block";
import { SearchBlock } from "@/components/home/search/search-block";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-maxDesktop flex-col items-center border">
      <div className="w-full px-20 desktopEnd:px-0">
        <Header />
        <HeroBlock />
      </div>

      <SearchBlock />
    </main>
  );
}
