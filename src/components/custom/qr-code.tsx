import { useLocale, useTranslations } from "next-intl";
import QRCode from "react-qr-code";

type Props = {
  expertUUID: string;
};

export const QRCodeWrapper = ({ expertUUID }: Props) => {
  const t = useTranslations("Home.qrCode");
  const locale = useLocale();

  return (
    <>
      <div className="p-4">
        <QRCode
          value={`https://kraftjar.net/${locale}/expert?uuid=${expertUUID}`}
          size={120}
        />
      </div>

      <span className="mb-6 text-center text-xs">{t("subTitle")}</span>
    </>
  );
};
