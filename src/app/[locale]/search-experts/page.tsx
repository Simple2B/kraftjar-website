import { getUsers } from "@/orval_api/users/users";
import { getTranslations } from "next-intl/server";
import type { SearchParamsProps } from "@/types/general";

import { Experts } from "@/components/experts/experts";
import { AboutApp } from "@/components/home/about-app";
import { Faq } from "@/components/home/faq";
import { ExpertsList } from "@/components/experts/experts-list";

export default async function SearchExpertsPage({
  searchParams,
}: SearchParamsProps) {
  let query = "";

  if (!!searchParams && typeof searchParams.name === "string") {
    query = searchParams.name;
  }

  const t = await getTranslations("Home.expertsListPage");
  const { aPIPublicSearchUsers } = getUsers();

  const {
    data: { top_users },
  } = await aPIPublicSearchUsers({
    lang: "ua",
    selected_locations: [],
    query: query,
  });

  return (
    <>
      <Experts query={query}>
        <h2 className="mb-8">{t("title")}</h2>

        {!!top_users?.length ? (
          <ExpertsList users={top_users} />
        ) : (
          <div>{t("notFound")}</div>
        )}
      </Experts>

      <AboutApp />
      <Faq />
    </>
  );
}
