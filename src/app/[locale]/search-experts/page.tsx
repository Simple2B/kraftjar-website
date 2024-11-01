import { getUsers } from "@/orval_api/users/users";
import { getTranslations } from "next-intl/server";
import type { SearchParamsProps } from "@/types/general";

import { Experts } from "@/components/experts/experts";
import { AboutApp } from "@/components/home/about-app";
import { Faq } from "@/components/home/faq";
import { ExpertsList } from "@/components/experts/experts-list";
import { backendURL } from "@/lib/constants";

export default async function SearchExpertsPage({
  searchParams,
}: SearchParamsProps) {
  let query = "";

  if (!!searchParams && typeof searchParams.name === "string") {
    query = searchParams.name;
  }

  const t = await getTranslations("Home.expertsListPage");
  const { aPIGetUsers } = getUsers();

  const {
    data: { items },
  } = await aPIGetUsers({ query: query }, backendURL);

  return (
    <>
      <Experts query={query}>
        <h2 className="mb-8">{t("title")}</h2>

        {!!items?.length ? (
          <ExpertsList experts={items} />
        ) : (
          <div>{t("notFound")}</div>
        )}
      </Experts>

      <AboutApp />
      <Faq />
    </>
  );
}
