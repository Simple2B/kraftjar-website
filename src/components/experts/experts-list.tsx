"use client";

import { Fragment } from "react";
import Image from "next/image";

import type { PublicUsersSearchOut } from "@/orval_api/model";
import { Separator } from "../ui/separator";
import { Modal } from "../custom/modal";

type Props = {
  experts: PublicUsersSearchOut;
};

export const ExpertsList = ({ experts }: Props) => {
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
          placeholder={"Search"}
          type="text"
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
        <div>
          {experts.top_users?.map((user) => (
            <Fragment key={user.id}>
              <div
                onClick={() => console.log(user.fullname)}
                className="flex cursor-pointer select-none items-center justify-between py-8 transition-colors hover:bg-grayLight desktopEnd:h-auto desktopEnd:flex-col desktopEnd:items-start"
              >
                <div className="flex gap-6 desktopEnd:mb-6">
                  <div className="flex h-20 w-20 justify-center rounded-full shadow-avatarShadow">
                    <Image
                      src="/static/boy.svg"
                      alt="Avatar"
                      width={50}
                      height={50}
                      style={{ objectPosition: "center" }}
                    />
                  </div>

                  <div className="flex flex-col items-start justify-center">
                    <div className={"text-xl"}>{user.fullname}</div>

                    <div className="flex items-center gap-2 desktopEnd:flex-col desktopEnd:items-start">
                      <div>
                        <span className="mr-2 inline-block h-max w-max scale-150">
                          ★
                        </span>
                        <span className="text-xs">
                          {user.average_rate.toFixed(1)} (
                          {user.owned_rates_count} відгуків)
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <span className="text-xs">•</span>
                        <span className="text-xs">
                          {user.services.map((s) => s.name).join(", ") ||
                            "Немає... Чому?"}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <span className="text-xs">•</span>
                        <span className="text-xs">
                          {user.locations.map((l) => l.name).join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <Modal
                  modalTitle="Запропонувати роботу фахівцеві"
                  buttonTitle="Запропонувати роботу"
                >
                  {user.fullname}
                </Modal>
              </div>

              <Separator className="" />
            </Fragment>
          ))}
        </div>
      ) : (
        <div>Немає фахівців</div>
      )}
    </div>
  );
};
