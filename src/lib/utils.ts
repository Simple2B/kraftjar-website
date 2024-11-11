import {
  LocationStrings,
  OrderType,
  PageUserSearchOutPage,
  PageUserSearchOutPages,
  Service,
  UsersOrderBy,
} from "@/orval_api/model";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from "./constants";

export type URIParams = {
  query: string;
  page?: PageUserSearchOutPage;
  size?: string;
  orderType?: OrderType;
  orderBy?: UsersOrderBy;
};

export function formatURI({
  query,
  page = DEFAULT_PAGE,
  size = DEFAULT_PAGE_SIZE,
  orderType = OrderType.desc,
  orderBy = UsersOrderBy.average_rate,
}: URIParams) {
  return `/search-experts/?name=${query}&page=${page}&size=${size}&order_type=${orderType}&order_by=${orderBy}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type IntlOptions = Intl.DateTimeFormatOptions;

export function formatDate(createdAt: string, locale: string) {
  const date = new Date(createdAt);

  const options: IntlOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat(locale, options).format(date);

  return formattedDate;
}
export function formatUsersData(
  locations: LocationStrings[],
  services: Service[],
  defaultL: string,
  defaultS: string,
) {
  const expertLocations = locations.map((l) => l.name).join(", ") || defaultL;
  const expertServices = services.map((s) => s.name).join(", ") || defaultS;

  return { expertLocations, expertServices };
}

export function getVisiblePages(
  currentPage: PageUserSearchOutPage,
  totalPages: PageUserSearchOutPages,
) {
  const THREE_DOTS = "...";
  const pages = [];

  if (!currentPage || !totalPages) {
    return [];
  }

  if (totalPages <= 5) {
    // If there are 5 or fewer pages, show all
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    if (currentPage <= 3) {
      // Case for pages close to the start
      pages.push(1, 2, 3, 4, THREE_DOTS, totalPages);
    } else if (currentPage >= totalPages - 2) {
      // Case for pages close to the end
      pages.push(
        1,
        THREE_DOTS,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      );
    } else {
      // Case for pages in the middle
      pages.push(
        1,
        THREE_DOTS,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        THREE_DOTS,
        totalPages,
      );
    }
  }

  return pages;
}
