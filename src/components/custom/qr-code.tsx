import { Link } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";
import QRCode from "react-qr-code";

type Props = {
  expertUUID: string;
};

export const QRCodeWrapper = ({ expertUUID }: Props) => {
  const t = useTranslations("Home.qrCode");
  const locale = useLocale();

  // QR code URL pointing back to this page
  const qrCodeValue = `https://kraftjar.net/${locale}/expert/${expertUUID}`;
  const qrCodeSize = 220;

  return (
    <>
      <div className="p-4">
        <Link className="hidden mobileMax:block" href={`/expert/${expertUUID}`}>
          <QRCode value={qrCodeValue} size={qrCodeSize} />
        </Link>

        <QRCode
          className="mobileMax:hidden"
          value={qrCodeValue}
          size={qrCodeSize}
        />
      </div>

      <span className="mb-6 hidden text-center text-xs mobileMax:block">
        {t("mobileSubTitle")}
      </span>
      <span className="mb-6 text-center text-xs mobileMax:hidden">
        {t("subTitle")}
      </span>
    </>
  );
};
