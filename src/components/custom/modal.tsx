"use client";

import { useTranslations } from "next-intl";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type Props = {
  modalTitle?: string;
  buttonTitle?: string;
  children: React.ReactNode;
  className?: string;
};

export const Modal = ({
  modalTitle,
  buttonTitle,
  children,
  className,
}: Props) => {
  const t = useTranslations("Home.modal");
  const title = buttonTitle || t("title");
  const button = modalTitle || t("button");

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault(); // Prevent the link from navigating
    event.stopPropagation(); // Prevent the event from bubbling up to the link
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "transition-color flex h-10 w-[214px] items-center justify-center gap-[10px] rounded-3xl bg-yellowMain text-white transition-colors hover:bg-[#e0a70d] desktopEnd:w-full",
        className,
      )}
    >
      <Dialog>
        <DialogTrigger className="h-full w-full">{button}</DialogTrigger>
        <DialogContent aria-describedby={undefined}>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <>{children}</>
        </DialogContent>
      </Dialog>
    </div>
  );
};
