import { useTranslations } from "next-intl";
import { Button } from "../custom/button";

export const HeroBlock = () => {
  const t = useTranslations("Home");
  // mdDesktop:bg-contain mdDesktop:bg-no-repeat
  return (
    <div className="mdDesktop:flex-col mdDesktop:items-center mdDesktop:w-full flex items-end">
      <div className="mdDesktop:bg-no-repeat mdDesktop:w-full mobileMax:h-80 mobileMax:bg-cover h-[564px] w-[752px] bg-hero-phone bg-center" />

      <div className="desktopEnd:transform-none desktopEnd:w-full mobileMax:px-4 h-[432px] max-w-[516px] translate-x-[-68px]">
        <h1 className="mobileMax:text-5xl mb-8">{t("title")}</h1>

        <p className="mb-12">{t("description")}</p>

        <div className="desktopEnd:flex-col flex gap-3">
          <Button
            title={t("buttons.apple")}
            color="primary"
            iconSrc="/static/phone/apple-store.svg"
          />
          <Button
            title={t("buttons.android")}
            color="secondary"
            iconSrc="/static/phone/google-play.svg"
          />
        </div>
      </div>
    </div>
  );
};
