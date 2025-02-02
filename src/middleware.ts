import createMiddleware from "next-intl/middleware";
import { localePrefix, locales } from "./navigation";
import { uk } from "./config";

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: uk,
});

// only applies this middleware to files in the app directory
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
