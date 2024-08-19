"use client";

import { Fragment } from "react";
import { Link } from "@/navigation";
import Image from "next/image";

import type { UserSearchOut } from "@/orval_api/model";
import { Separator } from "../ui/separator";
import { Modal } from "../custom/modal";

type Props = {
  users: UserSearchOut[];
};

export const ExpertsList = ({ users }: Props) => {
  return (
    <div>
      {users.map((user) => (
        <Fragment key={user.id}>
          <Link
            href={`/expert/?uuid=${user.uuid}`}
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
                      {user.average_rate.toFixed(1)} ({user.owned_rates_count}{" "}
                      відгуків)
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
          </Link>

          <Separator className="" />
        </Fragment>
      ))}
    </div>
  );
};
