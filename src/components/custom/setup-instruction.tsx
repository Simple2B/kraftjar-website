import { Fragment } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { ButtonBundle } from "./button-bundle";

type Props = {
  hideTitle?: boolean;
};

export const SetupInstruction = ({ hideTitle }: Props) => {
  const t = useTranslations("Home");

  const INSTRUCTIONS_STEPS = [
    {
      id: 1,
      text: t("instruction.firstStep"),
    },
    {
      id: 2,
      text: t("instruction.secondStep"),
    },
    {
      id: 3,
      text: t("instruction.thirdStep"),
    },
  ];

  const dataLength = INSTRUCTIONS_STEPS.length;

  return (
    <div className="max-w-[660px] desktopEnd:px-4">
      {!hideTitle && <h2 className="mb-6">{t("instruction.title")}</h2>}
      <p className="mb-8 desktopEnd:text-base">
        {t("instruction.description")}
      </p>

      <div>
        <ol
          style={{
            gridTemplateRows: `repeat(${dataLength}, minmax(78px, 1fr))`,
          }}
          className="mb-8 grid grid-flow-row auto-rows-max grid-cols-[max-content_1fr] items-center desktopEnd:gap-y-10"
        >
          {INSTRUCTIONS_STEPS.map((item, i) => {
            const isLastItem = i === dataLength - 1;

            return (
              <Fragment key={item.id}>
                <li
                  className={cn(
                    "relative flex-1",
                    !isLastItem &&
                      "after:absolute after:left-5 after:h-[50px] after:border-r-2 after:border-dashed after:border-yellowMain desktopEnd:after:h-[108px]",
                  )}
                >
                  <div className="flex w-full items-center font-medium">
                    <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm shadow-step">
                      {i + 1}
                    </span>
                  </div>
                </li>

                <p
                  className={cn(
                    "place-self-center desktopEnd:text-base",
                    i === 0 && "place-self-start",
                    isLastItem && "place-self-end",
                  )}
                >
                  {item.text}
                </p>
              </Fragment>
            );
          })}
        </ol>

        <ButtonBundle
          appleTitle={t("buttons.apple")}
          googleTitle={t("buttons.google")}
        />
      </div>
    </div>
  );
};
