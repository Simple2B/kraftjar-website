import { useTranslations } from "next-intl";
import { Button } from "../custom/button";

export const HeroBlock = () => {
  const t = useTranslations("Home");

  return (
    <div className="flex items-end">
      <div className="h-[564px] w-[752px] bg-hero-phone" />

      <div className="h-[432px] w-[516px] translate-x-[-68px]">
        <h1 className="mb-8">{t("title")}</h1>

        <p className="mb-12">{t("description")}</p>

        <div className="flex gap-3">
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
