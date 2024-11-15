import { useTranslations } from "next-intl";
import Image from "next/image";

import { UserRecentShowcase } from "@/orval_api/model";
import { formatDate } from "@/lib/utils";
import { Stars } from "../custom/stars";
import { Separator } from "../ui/separator";
import { DEFAULT_AVATAR } from "./expert-profile";
import { Link } from "@/navigation";

const JOBS_LIMIT = 3;

type Props = {
  showcases: UserRecentShowcase[];
  expert_uuid: string;
};

export const RecentShowcases = ({ showcases, expert_uuid }: Props) => {
  const t = useTranslations("Home");

  return (
    <>
      <div className="mb-4 text-2xl font-bold">Останні роботи</div>

      <div>
        {showcases.map((showcase) => (
          <div key={showcase.title} className="mb-3">
            <div className="mb-3">
              <div className="text-lg font-bold">{showcase.title}</div>
              <p className="text-base">{showcase.description}</p>
            </div>

            <div>
              {showcase.rates?.map((rate) => (
                <div key={rate.uuid}>
                  <div className="mb-3 flex items-center gap-2">
                    <Image
                      src={rate.avatar_url || DEFAULT_AVATAR}
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="h-[40px] rounded-full"
                    />

                    <div>
                      <div className="text-xl leading-3">
                        {rate.gives.fullname}
                      </div>

                      <span className="text-xs text-grayDark">(замовник)</span>
                    </div>
                  </div>

                  <div>
                    <p>{rate.review}</p>

                    <Stars rate={rate.rate} />

                    <div>
                      Виконано:{" "}
                      {formatDate(rate.created_at, t("expertPage.locale"))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Separator className="my-8" />
          </div>
        ))}
      </div>

      {showcases.length === JOBS_LIMIT && (
        <p className="text-base">
          Щоб переглянути більше робіт скористайтесь нашим {/*  */}
          <Link
            className="text-blueMain underline"
            href={`/expert?uuid=${expert_uuid}#about`}
          >
            додатком
          </Link>
        </p>
      )}
    </>
  );
};
