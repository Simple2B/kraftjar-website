import { Header } from "@/components/header";
import { HeroBlock } from "@/components/home/hero-block";

export default function Home() {
  return (
    <main className="mobile:w-auto mx-auto flex min-h-screen w-maxDesktop flex-col items-center border">
      <Header />
      <HeroBlock />
    </main>
  );
}
