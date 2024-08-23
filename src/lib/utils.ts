import type { LocationStrings, Service } from "@/orval_api/model";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
