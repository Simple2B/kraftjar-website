"use client";

import { usePathname, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

type Option = {
  code: string;
  label: string;
};

const options: Option[] = [
  { code: "ua", label: "Укр" },
  { code: "en", label: "Eng" },
];

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const setOption = (option: Option) => {
    router.push(`/${option.code}${pathname.slice(3)}`);
  };

  return (
    <div className="flex">
      {options.map((option) => (
        <div
          key={option.code}
          className={twMerge(
            "flex select-none items-center rounded-md p-1",
            !pathname.includes(option.code) &&
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
