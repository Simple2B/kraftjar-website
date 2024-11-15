import Image from "next/image";
import { useTranslations } from "next-intl";
import { formatDate } from "@/lib/utils";
import { UserEducation } from "@/orval_api/model";

type Props = {
  educations: UserEducation[];
};

export const Educations = ({ educations }: Props) => {
  const t = useTranslations("Home");

  return (
    <div className="mb-14 max-w-[344px]">
      <div className="mb-4 text-2xl font-bold">
        {t("expertPage.experience")}
      </div>

      <div className="space-y-6">
        {educations?.map((e) => (
          <div key={e.uuid} className="flex flex-col gap-2">
            <div className="text-base text-grayDark">{e.institution}</div>

            <div className="text-base text-[#828282]">{`${e.degree}, ${e.specialization}`}</div>

            <div>
              <span className="text-base text-[#828282]">
                {formatDate(e.start_date, t("expertPage.locale"))}
              </span>
              {e.end_date && (
                <span className="text-base text-[#828282]">
                  {" - "}
                  {formatDate(e.end_date, t("expertPage.locale"))}
                </span>
              )}
            </div>

            {!!e.files?.length &&
              e.files.map((file) => (
                <Image
                  key={file.uuid}
                  src={file.url}
                  alt="University"
                  width={116}
                  height={68}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};
