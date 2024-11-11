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

  return (
    <>
      <div className="p-4">
        <QRCode
          value={qrCodeValue}
          size={220}
        />
      </div>
      <span className="mb-6 text-center text-xs">{t("subTitle")}</span>
    </>
  );
};
