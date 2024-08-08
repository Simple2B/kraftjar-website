import { Header } from "@/components/header";
import { HeroBlock } from "@/components/home/hero-block";
import { UkraineMap } from "@/components/home/ukraine-map";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-maxDesktop flex-col items-center border">
      <div className="w-full px-20 desktopEnd:px-0">
        <Header />
        <HeroBlock />
      </div>

      <UkraineMap />
    </main>
  );
}
