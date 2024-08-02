"use client";

import { useRouter } from "next/navigation";
import { GlobeIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

type Option = {
  code: string;
  label: string;
};

const options: Option[] = [
  { code: "ua", label: "ua" },
  { code: "en", label: "en" },
];

export const LanguageSwitcher = () => {
  const router = useRouter();

  const setOption = (option: Option) => {
    router.push(`/${option.code}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <GlobeIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {options.map((option) => (
          <DropdownMenuItem
            key={option.code}
            className="flex cursor-pointer items-center px-3 py-2 transition-colors duration-300 hover:bg-gray-200 dark:text-black"
            onClick={() => {
              setOption(option);
            }}
          >
            <span>{option.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
