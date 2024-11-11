import {
  OrderType,
  PageUserSearchOutPage,
  PageUserSearchOutSize,
  UsersOrderBy,
} from "@/orval_api/model";

export type SearchParamsProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export type URIParams = {
  query: string;
  page?: PageUserSearchOutPage;
  size?: PageUserSearchOutSize;
  orderType?: OrderType;
  orderBy?: UsersOrderBy;
};
