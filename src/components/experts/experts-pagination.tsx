import { Fragment } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import type {
  OrderType,
  PageUserSearchOutPage,
  PageUserSearchOutPages,
  PageUserSearchOutSize,
  UsersOrderBy,
} from "@/orval_api/model";
import { getVisiblePages } from "@/lib/utils";

const FIRST_PAGE = 1;
const THREE_DOTS = "...";

type Props = {
  query: string;
  totalPages: PageUserSearchOutPages;
  currentPage: PageUserSearchOutPage;
  pageSize: PageUserSearchOutSize;
  orderType: OrderType;
  orderBy: UsersOrderBy;
};

export const ExpertsPagination = ({
  query,
  totalPages,
  currentPage,
  pageSize,
  orderType,
  orderBy,
}: Props) => {
  const baseUri = "/search-experts/?name=" + `${query}`;
  const sortingParams = `order_type=${orderType}&order_by=${orderBy}`;

  const prevPage =
    currentPage && currentPage !== FIRST_PAGE ? currentPage - 1 : FIRST_PAGE;
  const prevPageLink =
    baseUri + `&page=${prevPage}&size=${pageSize}&${sortingParams}`;

  const nextPage =
    currentPage && currentPage !== totalPages ? currentPage + 1 : currentPage;
  const nextPageLink =
    baseUri + `&page=${nextPage}&size=${pageSize}&${sortingParams}`;

  const pageButtonsList = getVisiblePages(currentPage, totalPages);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={prevPageLink} />
        </PaginationItem>

        {pageButtonsList.map((pageNumber, i) => {
          const isPageActive = pageNumber === currentPage;
          const showThreeDots = pageNumber === THREE_DOTS;

          const isNumber = typeof pageNumber === "number";
          const showPageButton =
            ![FIRST_PAGE, totalPages].includes(isNumber ? pageNumber : 0) &&
            pageNumber !== THREE_DOTS;

          return (
            <Fragment key={pageNumber + "-" + i}>
              {pageNumber === FIRST_PAGE && (
                <PaginationItem>
                  <PaginationLink
                    href={
                      baseUri +
                      `&page=${FIRST_PAGE}&size=${pageSize}&${sortingParams}`
                    }
                    isActive={isPageActive}
                  >
                    {FIRST_PAGE}
                  </PaginationLink>
                </PaginationItem>
              )}

              {showThreeDots && i === 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {showPageButton && (
                <PaginationItem>
                  <PaginationLink
                    href={
                      baseUri +
                      `&page=${pageNumber}&size=${pageSize}&${sortingParams}`
                    }
                    isActive={isPageActive}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              )}

              {showThreeDots && i === pageButtonsList.length - 2 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {pageNumber === totalPages && (
                <PaginationItem>
                  <PaginationLink
                    href={
                      baseUri +
                      `&page=${totalPages}&size=${pageSize}&${sortingParams}`
                    }
                    isActive={isPageActive}
                  >
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              )}
            </Fragment>
          );
        })}

        <PaginationItem>
          <PaginationNext href={nextPageLink} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
