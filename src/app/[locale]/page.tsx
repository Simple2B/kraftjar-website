import { Header } from "@/components/header";
import { HeroBlock } from "@/components/home/hero-block";

export default function Home() {
  return (
    <main className="max-w-maxDesktop mx-auto flex min-h-screen flex-col items-center border">
      <div className="desktopEnd:px-0 w-full px-20">
        <Header />
        <HeroBlock />
      </div>
    </main>
  );
}
