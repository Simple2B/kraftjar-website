import Image from "next/image";
import { Button } from "../custom/button";
import { useTranslations } from "next-intl";

export const AboutApp = () => {
  const t = useTranslations("Home");

  return (
    <div className="flex w-full items-center justify-between py-28 desktopEnd:py-20 smDesktop:flex-col-reverse">
      <div className="ml-20 max-w-[574px] desktopEnd:ml-0 desktopEnd:px-4">
        <h2 className="mb-6">{t("about.title")}</h2>

        <p className="mb-8">{t("about.description")}</p>

        <div className="flex gap-3 desktopEnd:flex-col">
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

      <div>
        <Image
          src="/static/phone/iPhone-15-Pro.png"
          alt="Phone"
          width={746}
          height={560}
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};
