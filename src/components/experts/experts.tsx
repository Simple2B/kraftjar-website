"use client";

import { useRef } from "react";
import { useRouter } from "@/navigation";
import { useDebounce } from "../../hooks/useDebounce";
import Image from "next/image";

import {
  OrderType,
  PageUserSearchOutPage,
  UsersOrderBy,
  type PageUserSearchOutSize,
  type UserSearchOut,
} from "@/orval_api/model";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { formatURI } from "@/lib/utils";
import { DEFAULT_PAGE } from "@/lib/constants";
import { URIParams } from "@/types/general";
import { useTranslations } from "next-intl";

type Props = {
  experts?: UserSearchOut[];
  query: string;
  children?: React.ReactNode;
  pageSize: PageUserSearchOutSize;
  orderType: OrderType;
  orderBy: UsersOrderBy;
  currentPage: PageUserSearchOutPage;
};

// Art, Low, ENT/ЛОР
const MIN_CHARACTERS = 2;

export const Experts = ({
  children,
  query,
  currentPage,
  pageSize,
  orderType,
  orderBy,
}: Props) => {
  const router = useRouter();
  const currentOrderType = useRef(orderType);
  const currentOrderBy = useRef(orderBy);
  const t = useTranslations("Home");

  const params: URIParams = {
    query,
    page: currentPage,
    size: pageSize,
    orderType,
    orderBy,
  };

  const handleOrderType = (orderType: OrderType) => {
    currentOrderType.current = orderType;

    const uri = formatURI({ ...params, orderType });
    router.replace(uri);
  };

  const handleOrderBy = (orderBy: UsersOrderBy) => {
    currentOrderBy.current = orderBy;

    const uri = formatURI({ ...params, orderBy });
    router.replace(uri);
  };

  const { debounce } = useDebounce((query: string) => {
    if (query.trim() === "") {
      return;
    }

    const uri = formatURI({ ...params, page: DEFAULT_PAGE, query });
    router.push(uri);
  }, 500);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length <= MIN_CHARACTERS) {
      return;
    }

    debounce(value);
  };

  return (
    <div className="mx-auto my-14 max-w-[1280px] mdDesktop:px-4">
      <div className="relative mb-14 rounded-[32px] shadow-inputShadow">
        <Image
          className="absolute left-6 top-1/2 -translate-y-1/2 transform"
          src="/static/search-normal.svg"
          width={20}
          height={20}
          alt="Search"
        />

        <input
          className={
            "h-[68px] w-full rounded-[32px] pl-14 pr-[222px] placeholder:text-primary focus-within:outline-none mobileMax:placeholder:text-xs desktopEnd:pr-[158px]"
          }
          placeholder="Search"
          type="text"
          onChange={handleSearch}
          defaultValue={query}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="absolute right-6 top-1/2 h-11 w-11 -translate-y-1/2 transform rounded-full bg-yellowMain px-1 transition-colors hover:bg-[#e0a70d] desktopEnd:right-4"
              variant="outline"
            >
              <Image
                src="/static/setting.svg"
                alt="Setting"
                width={24}
                height={24}
                className="m-auto"
              />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>{t("ordering.orderType")}:</DropdownMenuLabel>

            <DropdownMenuRadioGroup
              value={currentOrderType.current}
              onValueChange={(value) => handleOrderType(value as OrderType)}
            >
              <DropdownMenuRadioItem value={OrderType.desc}>
                {t("ordering.desc")}
              </DropdownMenuRadioItem>

              <DropdownMenuRadioItem value={OrderType.asc}>
                {t("ordering.asc")}
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>

            <DropdownMenuSeparator />

            <DropdownMenuLabel>{t("ordering.orderBy")}:</DropdownMenuLabel>
            <DropdownMenuRadioGroup
              value={currentOrderBy.current}
              onValueChange={(value) => handleOrderBy(value as UsersOrderBy)}
            >
              <DropdownMenuRadioItem value={UsersOrderBy.average_rate}>
                {t("ordering.rating")}
              </DropdownMenuRadioItem>

              <DropdownMenuRadioItem value={UsersOrderBy.owned_rates_count}>
                {t("ordering.reviews")}
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {children}
    </div>
  );
};
