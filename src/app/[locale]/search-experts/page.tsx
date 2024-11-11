import { getUsers } from "@/orval_api/users/users";
import { getTranslations } from "next-intl/server";
import type { SearchParamsProps } from "@/types/general";

import { Experts } from "@/components/experts/experts";
import { AboutApp } from "@/components/home/about-app";
import { Faq } from "@/components/home/faq";
import { ExpertsList } from "@/components/experts/experts-list";
import { backendURL, DEFAULT_PAGE_SIZE } from "@/lib/constants";
import { ExpertsPagination } from "@/components/experts/experts-pagination";
import { OrderType, UsersOrderBy } from "@/orval_api/model";

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
  let pageSize = DEFAULT_PAGE_SIZE;
  let orderType: OrderType = OrderType.desc;
  let orderBy: UsersOrderBy = UsersOrderBy.average_rate;

  if (!!searchParams && typeof searchParams.name === "string") {
    query = searchParams.name;
  }

  if (!!searchParams && typeof searchParams.page === "string") {
    pageNumber = searchParams.page;
  }

  if (!!searchParams && typeof searchParams.size === "string") {
    pageSize = Number(searchParams.size);
  }

  if (!!searchParams && typeof searchParams.order_type === "string") {
    orderType = searchParams.order_type as OrderType;
  }

  if (!!searchParams && typeof searchParams.order_by === "string") {
    orderBy = searchParams.order_by as UsersOrderBy;
  }

  const t = await getTranslations("Home.expertsListPage");
  const { aPIGetUsers } = getUsers();

  const {
    data: { items, total, page, size, pages },
  } = await aPIGetUsers(
    {
      query: query,
      page: Number(pageNumber),
      size: Number(pageSize),
      order_type: orderType,
      order_by: orderBy,
    },
    backendURL,
  );

  return (
    <>
      <Experts
        query={query}
        pageSize={size}
        orderType={orderType}
        orderBy={orderBy}
        currentPage={page}
      >
        <h2 className="mb-8">{t("title")}</h2>
        {!!total && <span>Знайдено {total}</span>}

        {!!total && !!pages ? (
          <>
            <ExpertsList experts={items} />

            {pages > 1 && (
              <ExpertsPagination
                currentPage={page}
                totalPages={pages}
                pageSize={size}
                query={query}
                orderType={orderType}
                orderBy={orderBy}
              />
            )}
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
