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
  PageUserSearchOutPage,
  PageUserSearchOutPages,
  PageUserSearchOutSize,
} from "@/orval_api/model";
import { getVisiblePages } from "@/lib/utils";

const FIRST_PAGE = 1;
const THREE_DOTS = "...";

type Props = {
  query: string;
  totalPages: PageUserSearchOutPages;
  currentPage: PageUserSearchOutPage;
  pageSize: PageUserSearchOutSize;
};

export const ExpertsPagination = ({
  query,
  totalPages,
  currentPage,
  pageSize,
}: Props) => {
  const baseUri = "/search-experts/?name=" + `${query}`;
  const prevPage =
    baseUri +
    `&page=${currentPage && currentPage !== FIRST_PAGE ? currentPage - 1 : FIRST_PAGE}&size=${pageSize}`;

  const nextPage =
    baseUri +
    `&page=${currentPage && currentPage !== totalPages ? currentPage + 1 : currentPage}&size=${pageSize}`;

  const pagesList = getVisiblePages(currentPage, totalPages);

  return (
    totalPages &&
    totalPages > 1 && (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={prevPage} />
          </PaginationItem>

          {pagesList.map((pageNumber, i) => {
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
                      href={baseUri + `&page=${FIRST_PAGE}&size=${pageSize}`}
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
                      href={baseUri + `&page=${pageNumber}&size=${pageSize}`}
                      isActive={isPageActive}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                )}

                {showThreeDots && i === pagesList.length - 2 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}

                {pageNumber === totalPages && (
                  <PaginationItem>
                    <PaginationLink
                      href={baseUri + `&page=${totalPages}&size=${pageSize}`}
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
            <PaginationNext href={nextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  );
};
