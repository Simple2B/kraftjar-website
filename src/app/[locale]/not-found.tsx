import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/navigation";
import { CustomLink } from "@/components/custom/custom-button";

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

      <Link href="/" className="desktopEnd:w-full">
        <CustomLink color="secondary" title={t("button")} />
      </Link>
    </div>
  );
}
