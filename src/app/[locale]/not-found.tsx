import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/navigation";

export default function NotFound() {
  const t = useTranslations("Home.notFound");

  return (
    <div className="flex w-full flex-col items-center justify-center pt-16 desktopEnd:px-4">
      <Image
        src="/static/404-not-found.png"
        width={335}
        height={335}
        alt="404"
      />

      <p className="mb-8 max-w-[784px] text-center">{t("description")}</p>

      <Link
        href="/"
        className="transition-colowercase flex h-12 w-[224px] items-center justify-center gap-[10px] rounded-3xl bg-yellowMain px-4 py-2 text-white transition-colors hover:bg-[#e0a70d] desktopEnd:w-full"
      >
        {t("button")}
      </Link>
    </div>
  );
}
