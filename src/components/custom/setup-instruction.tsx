import { Fragment } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Button } from "./button";

type Props = {
  data: { id: number; text: string }[];
};

export const SetupInstruction = ({ data }: Props) => {
  const t = useTranslations("Home");
  const dataLength = data.length;

  return (
    <div className="">
      <ol
        style={{
          gridTemplateRows: `repeat(${dataLength}, minmax(78px, 1fr))`,
        }}
        className="mb-8 grid grid-flow-row auto-rows-max grid-cols-[max-content_1fr] items-center"
      >
        {data.map((item, i) => {
          const lastItem = i === dataLength - 1;

          return (
            <Fragment key={item.id}>
              <li
                className={cn(
                  "relative flex-1",
                  !lastItem &&
                    "after:absolute after:left-5 after:h-[50px] after:border-r-2 after:border-dashed after:border-yellowMain",
                )}
              >
                <div className="flex w-full items-center font-medium">
                  <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-200 bg-gray-50 text-sm">
                    {i + 1}
                  </span>
                </div>
              </li>

              <p
                className={cn(
                  "place-self-center",
                  i === 0 && "place-self-start",
                  lastItem && "place-self-end",
                )}
              >
                {item.text}
              </p>
            </Fragment>
          );
        })}
      </ol>

      <div className="flex gap-3 desktopEnd:flex-col">
        <Button
          title={t("buttons.apple")}
          color="primary"
          iconSrc="/static/phone/apple-store.svg"
        />
        <Button
          title={t("buttons.android")}
          color="secondary"
          iconSrc="/static/phone/google-play.svg"
        />
      </div>
    </div>
  );
};
