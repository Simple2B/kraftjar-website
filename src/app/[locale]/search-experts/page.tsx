import { getUsers } from "@/orval_api/users/users";
import { getTranslations } from "next-intl/server";
import type { SearchParamsProps } from "@/types/general";

import { Experts } from "@/components/experts/experts";
import { AboutApp } from "@/components/home/about-app";
import { Faq } from "@/components/home/faq";
import { ExpertsList } from "@/components/experts/experts-list";
import { backendURL, DEFAUL_PAGE_SIZE } from "@/lib/constants";
import { ExpertsPagination } from "@/components/experts/experts-pagination";

export async function generateMetadata({ searchParams }: SearchParamsProps) {
  let query = "";

  if (!!searchParams && typeof searchParams.name === "string") {
    query = searchParams.name;
  }

  return {
    title: query,
    openGraph: {
      title: query,
    },
  };
}

export default async function SearchExpertsPage({
  searchParams,
}: SearchParamsProps) {
  let query = "";
  let pageNumber = "1";
  let pageSize = DEFAUL_PAGE_SIZE;

  if (!!searchParams && typeof searchParams.name === "string") {
    query = searchParams.name;
  }

  if (!!searchParams && typeof searchParams.page === "string") {
    pageNumber = searchParams.page;
  }

  if (!!searchParams && typeof searchParams.size === "string") {
    pageSize = searchParams.size;
  }

  const t = await getTranslations("Home.expertsListPage");
  const { aPIGetUsers } = getUsers();

  const {
    data: { items, total, page, size, pages },
  } = await aPIGetUsers(
    { query: query, page: Number(pageNumber), size: Number(pageSize) },
    backendURL,
  );

  return (
    <>
      <Experts query={query} pageSize={size}>
        <h2 className="mb-8">{t("title")}</h2>
        {!!total && <span>Знайдено {total}</span>}

        {!!total && !!pages ? (
          <>
            <ExpertsList experts={items} />

            <ExpertsPagination
              currentPage={page}
              totalPages={pages}
              pageSize={size}
              query={query}
            />
          </>
        ) : (
          <div>{t("notFound")}</div>
        )}
      </Experts>

      <AboutApp />
      <Faq />
    </>
  );
}
