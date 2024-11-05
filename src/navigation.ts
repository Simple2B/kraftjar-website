import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { LocalePrefix } from "next-intl/routing";

export const locales = ["uk", "en"];
export const localePrefix = "always" satisfies LocalePrefix;

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
