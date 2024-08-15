import { useTranslations } from "next-intl";
import Image from "next/image";

const ADVANTAGES = [
  {
    key: "fast",
    name: "Fast search",
    icon: "/static/advantages/using-binoculars.svg",
  },
  {
    key: "opportunities",
    name: "Expanding opportunities",
    icon: "/static/advantages/using-a-tablet.svg",
  },
  {
    key: "quality",
    name: "Quality guarantee",
    icon: "/static/advantages/approval.svg",
  },
];

export const Advantages = () => {
  const t = useTranslations("Home.advantages");

  return (
    <div
      id="advantages"
      className="flex min-h-[484px] w-full flex-wrap items-center justify-center gap-8 bg-blackMain text-center desktopEnd:bg-white desktopEnd:py-20 smDesktop:px-4 smDesktopPart:py-28"
    >
      {ADVANTAGES.map(({ key, name, icon }) => (
        <div
          key={key}
          className="grid h-[262px] w-[358px] grid-rows-[repeat(auto-fit,auto)] place-content-start gap-3 rounded-3xl bg-white px-8 pt-8 smDesktop:shadow-cardShadow"
        >
          <Image
            className="mx-auto"
            src={icon}
            alt={name}
            width={48}
            height={48}
          />
          <h3>{t(`${key}.title`)}</h3>
          <p className="text-base leading-5">{t(`${key}.description`)}</p>
        </div>
      ))}
    </div>
  );
};
