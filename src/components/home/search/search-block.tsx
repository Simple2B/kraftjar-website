"use client";

import { useRouter } from "@/navigation";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import Image from "next/image";
import type { PropsWithChildren } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { SearchSchema, TypeSearchSchema } from "@/types/zod-scheme";

import { Button } from "@/components/custom/button";
import { cn, formatURI } from "@/lib/utils";

export const SearchBlock = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const t = useTranslations("Home.search");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeSearchSchema>({
    resolver: zodResolver(SearchSchema),
    reValidateMode: "onSubmit",
  });

  const onSubmit = async (data: TypeSearchSchema) => {
    const uri = formatURI({ query: data.name });
    router.push(uri);
  };

  return (
    <div className="flex h-[698px] w-full items-center justify-between bg-blackMain desktopEnd:h-[434px] desktopEnd:justify-center desktopEnd:px-4 smDesktop:flex-col smDesktop:gap-3 smDesktop:py-3">
      <div className="ml-20 max-w-[512px] desktopEnd:ml-0">
        <h2 className="mb-6 text-white">{t("title")}</h2>

        <p className="mb-10 text-grayLight">{t("description")}</p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <div className="relative">
            <Image
              className="absolute left-6 top-1/2 -translate-y-1/2 transform"
              src="/static/search-normal.svg"
              width={20}
              height={20}
              alt="Search"
            />

            <input
              {...register("name")}
              className={cn(
                "h-[68px] w-full rounded-[32px] pl-14 pr-[222px] placeholder:text-primary focus-within:outline-none mobileMax:placeholder:text-xs desktopEnd:pr-[158px]",
                errors.name && "border-2 border-red-500",
              )}
              placeholder={t("placeholder")}
              type="text"
            />

            <Button
              type="submit"
              color="primary"
              title={t("button")}
              className="absolute right-6 top-1/2 h-10 max-w-[188px] -translate-y-1/2 transform desktopEnd:right-4 desktopEnd:w-[138px] desktopEnd:text-sm"
            />
          </div>
        </form>
      </div>

      {children}
    </div>
  );
};
