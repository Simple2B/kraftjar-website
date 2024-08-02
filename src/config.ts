import { Pathnames } from "next-intl/routing";

export const locales = ["ua", "en"] as const;

export const pathnames = {
  "/": "/",
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
