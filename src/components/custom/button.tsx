import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  color: "primary" | "secondary";
  iconSrc?: string;
  className?: HTMLElement["className"];
}

export const Button = ({ title, color, iconSrc, className }: Props) => {
  return (
    <button
      className={twMerge(
        "transition-colowercase flex h-12 w-[224px] items-center justify-center gap-[10px] rounded-3xl px-4 py-2 text-white desktopEnd:w-full",
        color === "primary" && "bg-buttonPrimary hover:bg-blue-700",
        color === "secondary" && "bg-buttonSecondary hover:bg-[#e0a70d]",
        className,
      )}
    >
      {iconSrc && getButtonIcon(iconSrc)}
      <span>{title}</span>
    </button>
  );
};

function getButtonIcon(iconSrc: string) {
  return <Image src={iconSrc} alt="Button icon" width={20} height={20} />;
}
