import Image from "next/image";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";

interface Props extends React.LinkHTMLAttributes<HTMLLinkElement> {
  title: string;
  color?: "primary" | "secondary" | "white";
  iconSrc?: string;
  href?: string;
  target?: string;
}

export const CustomLink = ({
  title,
  color = "primary",
  iconSrc,
  className,
  href = "#",
  target,
}: Props) => {
  return (
    <Link
      target={target}
      href={href}
      className={cn(
        "transition-colowercase flex h-12 w-[224px] items-center justify-center gap-[10px] rounded-3xl px-4 py-2 text-white transition-colors desktopEnd:w-full",
        color === "primary" && "bg-blueMain hover:bg-blue-700",
        color === "secondary" && "bg-yellowMain hover:bg-[#e0a70d]",
        color === "white" && "bg-white text-blackMain hover:bg-gray-200",
        className,
      )}
    >
      {iconSrc && getLinkIcon(iconSrc)}
      <span>{title}</span>
    </Link>
  );
};

function getLinkIcon(iconSrc: string) {
  return <Image src={iconSrc} alt="Button icon" width={20} height={20} />;
}
