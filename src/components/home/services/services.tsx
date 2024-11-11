import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { ServicesList } from "./services-list";

export const Services = () => {
  const t = useTranslations("Home");

  return (
    <div className="py-28 text-center desktopEnd:py-10 smDesktop:px-4">
      <h2 className="mb-6">{t("categories.title")}</h2>

      <p className="mb-14 desktopEnd:mb-8">{t("categories.description")}</p>

      <ServicesList />

      <p className="text-base">
        Більше послуг ви зможете знайти за <b className="underline">пошуком</b>{" "}
        вище або використавши наш{" "}
        <Link className="text-blueMain underline" href="/#how-to-start">
          Додаток
        </Link>
      </p>
    </div>
  );
};
