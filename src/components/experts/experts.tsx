"use client";

import { useRouter } from "@/navigation";
import { useDebounce } from "./useDebounce";
import Image from "next/image";

import type { PublicUsersSearchOut } from "@/orval_api/model";
import { ExpertsList } from "./experts-list";

type Props = {
  experts: PublicUsersSearchOut;
  query: string;
};

// Art, Low, ENT/ЛОР
const MIN_CHARACTERS = 2;

export const Experts = ({ experts, query }: Props) => {
  const router = useRouter();

  const { debounce } = useDebounce((value: string) => {
    if (value.trim() === "") {
      return;
    }

    router.push(`/search-experts?name=${value}`);
  }, 500);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length <= MIN_CHARACTERS) {
      return;
    }

    debounce(value);
  };

  return (
    <div className="mx-auto my-14 max-w-[1280px] mdDesktop:px-4">
      <div className="relative mb-14 rounded-[32px] shadow-inputShadow">
        <Image
          className="absolute left-6 top-1/2 -translate-y-1/2 transform"
          src="/static/search-normal.svg"
          width={20}
          height={20}
          alt="Search"
        />

        <input
          className={
            "h-[68px] w-full rounded-[32px] pl-14 pr-[222px] placeholder:text-primary focus-within:outline-none mobileMax:placeholder:text-xs desktopEnd:pr-[158px]"
          }
          placeholder="Search"
          type="text"
          onChange={handleSearch}
          defaultValue={query}
        />

        <button className="absolute right-6 top-1/2 h-11 w-11 -translate-y-1/2 transform rounded-full bg-yellowMain transition-colors hover:bg-[#e0a70d] desktopEnd:right-4">
          <Image
            src="/static/setting.svg"
            alt="Setting"
            width={24}
            height={24}
            className="m-auto"
          />
        </button>
      </div>

      <h2 className="mb-8">Топ Фахівці в цій категорії</h2>

      {!!experts.top_users?.length ? (
        <ExpertsList users={experts.top_users} />
      ) : (
        <div>За вашим запитом нічого не знайдено</div>
      )}
    </div>
  );
};
