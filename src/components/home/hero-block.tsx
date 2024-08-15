import { useTranslations } from "next-intl";
import { ButtonBundle } from "../custom/button-bundle";

export const HeroBlock = () => {
  const t = useTranslations("Home");

  return (
    <div className="flex items-end mdDesktop:w-full mdDesktop:flex-col mdDesktop:items-center">
      <div className="h-[564px] w-[752px] bg-hero-phone bg-center mobileMax:h-80 mobileMax:bg-cover mdDesktop:w-full mdDesktop:bg-no-repeat" />

      <div className="h-[432px] max-w-[516px] translate-x-[-68px] mobileMax:px-4 desktopEnd:w-full desktopEnd:transform-none">
        <h1 className="mb-8 mobileMax:text-5xl">{t("title")}</h1>

        <p className="mb-12">{t("description")}</p>

        <ButtonBundle
          appleTitle={t("buttons.apple")}
          googleTitle={t("buttons.google")}
        />
      </div>
    </div>
  );
};
