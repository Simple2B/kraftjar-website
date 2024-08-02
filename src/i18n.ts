import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./config";

type Language = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as Language)) {
    notFound();
  }

  return {
    messages: (await import(`../content/${locale}.json`)).default,
  };
});
