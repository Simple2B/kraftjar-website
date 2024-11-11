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
import { formatURI, getVisiblePages } from "@/lib/utils";
import { URIParams } from "@/types/general";

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
  const params: URIParams = {
    query,
    page: currentPage,
    size: pageSize,
    orderType,
    orderBy,
  };

  const prevPage =
    currentPage && currentPage !== FIRST_PAGE ? currentPage - 1 : FIRST_PAGE;
  const prevPageLink = formatURI({ ...params, page: prevPage });

  const nextPage =
    currentPage && currentPage !== totalPages ? currentPage + 1 : currentPage;
  const nextPageLink = formatURI({ ...params, page: nextPage });

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
                    href={formatURI({ ...params, page: FIRST_PAGE })}
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
                    href={formatURI({ ...params, page: Number(pageNumber) })}
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
                    href={formatURI({ ...params, page: totalPages })}
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
