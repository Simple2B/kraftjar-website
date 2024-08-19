import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  modalTitle: string;
  buttonTitle: string;
  children: React.ReactNode;
};

export const Modal = ({ modalTitle, buttonTitle, children }: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault(); // Prevent the link from navigating
    event.stopPropagation(); // Prevent the event from bubbling up to the link
  };

  return (
    <div
      onClick={handleClick}
      className="transition-colowercase flex h-10 w-[214px] items-center justify-center gap-[10px] rounded-3xl bg-yellowMain px-4 py-2 text-white transition-colors hover:bg-[#e0a70d] desktopEnd:w-full"
    >
      <Dialog>
        <DialogTrigger>{buttonTitle}</DialogTrigger>
        <DialogContent>
          <DialogTitle className="text-2xl">{modalTitle}</DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};
