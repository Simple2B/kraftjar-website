import createMiddleware from "next-intl/middleware";
import { pathnames, locales, localePrefix } from "./config";
const middleware = createMiddleware({
  locales,
  pathnames,
  localePrefix,
  defaultLocale: "ua",
});

export default middleware;

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
