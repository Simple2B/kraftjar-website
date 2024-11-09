"use client";

import { useState } from "react";
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
  query,
  children,
  pageSize,
  orderType,
  orderBy,
  currentPage,
}: Props) => {
  const router = useRouter();
  const [currentOrderType, setCurrentOrderType] = useState(orderType);
  const [currentOrderBy, setCurrentOrderBy] = useState(orderBy);

  const baseUri = `/search-experts?name=${query}&page=${currentPage}&size=${pageSize}`;

  const handleOrderType = (value: OrderType) => {
    setCurrentOrderType(value);
    router.replace(`${baseUri}&order_type=${value}&order_by=${orderBy}`);
  };

  const handleOrderBy = (value: UsersOrderBy) => {
    setCurrentOrderBy(value);
    router.replace(`${baseUri}&order_type=${orderType}&order_by=${value}`);
  };

  const { debounce } = useDebounce((value: string) => {
    if (value.trim() === "") {
      return;
    }

    router.push(
      `/search-experts?name=${value}` +
        `&page=${currentPage}&size=${pageSize}&order_type=${orderType}&order_by=${orderBy}`,
    );
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
            <DropdownMenuLabel>Сортувати за:</DropdownMenuLabel>

            <DropdownMenuRadioGroup
              value={currentOrderType}
              onValueChange={(value) => handleOrderType(value as OrderType)}
            >
              <DropdownMenuRadioItem value={OrderType.desc}>
                спаданням
              </DropdownMenuRadioItem>

              <DropdownMenuRadioItem value={OrderType.asc}>
                зростанням
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>

            <DropdownMenuSeparator />

            <DropdownMenuLabel>Сортувати по:</DropdownMenuLabel>
            <DropdownMenuRadioGroup
              value={currentOrderBy}
              onValueChange={(value) => handleOrderBy(value as UsersOrderBy)}
            >
              <DropdownMenuRadioItem value={UsersOrderBy.average_rate}>
                рейтингу
              </DropdownMenuRadioItem>

              <DropdownMenuRadioItem value={UsersOrderBy.owned_rates_count}>
                кількості відгуків
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {children}
    </div>
  );
};
