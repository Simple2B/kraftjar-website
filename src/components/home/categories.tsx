import { useTranslations } from "next-intl";

const name = { id: "id", name: "Назва категорії" };
const CATEGORIES = Array(18).fill(name);

export const Categories = () => {
  const t = useTranslations("Home.categories");

  return (
    <div className="my-28 text-center desktopEnd:my-20 smDesktop:px-4">
      <h2 className="mb-6">{t("title")}</h2>

      <p className="mb-[60px]">{t("description")}</p>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(max-content,320px))] grid-rows-6 place-content-center place-items-center gap-y-6">
        {CATEGORIES.map((category, index) => (
          <div key={category.id + "-" + index}>
            <span className="text-xl">
              {category.name}
              {` ${index + 1}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
