"use client";

import { usePathname, useRouter } from "@/navigation";
import { useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

type Option = {
  code: string;
  label: string;
};

const OPTIONS: Option[] = [
  { code: "uk", label: "Укр" },
  { code: "en", label: "Eng" },
];

export const LanguageSwitcher = () => {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setOption = (option: Option) => {
    if (locale === option.code) {
      return;
    }

    let path = pathname;

    if (searchParams.toString()) {
      path = path + `?${searchParams.toString()}`;
    }

    router.push(path, { locale: option.code });
  };

  return (
    <div className="flex">
      {OPTIONS.map((option) => (
        <div
          key={option.code}
          className={cn(
            "flex select-none items-center rounded-md p-1",
            locale !== option.code &&
              "cursor-pointer text-textDisabled transition-colors duration-200 hover:bg-gray-200",
          )}
          onClick={() => {
            setOption(option);
          }}
        >
          <span className="text-sm">{option.label}</span>
        </div>
      ))}
    </div>
  );
};
