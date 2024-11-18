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
  expertUUID: string;
  reviewsCount: number;
};

export const RecentShowcases = ({
  showcases,
  expertUUID,
  reviewsCount,
}: Props) => {
  const t = useTranslations("Home");

  return (
    <>
      <div className="mb-4 text-2xl font-bold">{t("expertPage.lastJobs")}</div>

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

                      <span className="text-xs text-grayDark">
                        ({t("expertPage.owner")})
                      </span>
                    </div>
                  </div>

                  <div>
                    <p>{rate.review}</p>

                    <Stars rate={rate.rate} />

                    <div>
                      {t("expertPage.completed")}:{" "}
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

      {reviewsCount > JOBS_LIMIT && (
        <p className="text-base">
          {t("expertPage.subText")} {/*  */}
          <Link
            className="text-blueMain underline"
            href={`/expert?uuid=${expertUUID}#about`}
          >
            {t("expertPage.app")}
          </Link>
        </p>
      )}
    </>
  );
};
