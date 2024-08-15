import { useTranslations } from "next-intl";
import { ExpertsCarousel } from "./experts-carousel";

export const ExpertsFeed = () => {
  const t = useTranslations("Home.expertsFeed");

  return (
    <div className="h-[546px] w-full bg-blackMain smDesktop:h-[604px]">
      <div className="flex justify-between gap-6 px-20 pb-14 pt-28 desktopEnd:flex-col-reverse desktopEnd:px-4 desktopEnd:pb-10 desktopEnd:pt-20">
        <p className="max-w-[408px] text-grayLight">{t("description")}</p>

        <h2 className="text-grayLight">{t("title")}</h2>
      </div>

      <ExpertsCarousel />
    </div>
  );
};
