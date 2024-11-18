import { Pathnames } from "next-intl/routing";

export const uk = "uk";
export const en = "en";

export const locales = [uk, en] as const;

export const pathnames = {
  "/": "/",
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
