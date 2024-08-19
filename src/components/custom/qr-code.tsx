import { useLocale } from "next-intl";
import QRCode from "react-qr-code";

type Props = {
  expertUUID: string;
};

export const QRCodeWrapper = ({ expertUUID }: Props) => {
  const locale = useLocale();

  return (
    <>
      <div style={{ background: "white", padding: "16px" }}>
        <QRCode
          value={`https://stage.website.kraftjar.net/${locale}/expert?uuid=${expertUUID}`}
          size={120}
          // Almost impossible to scan with this color
          // fgColor="#FFBB02"
        />
      </div>

      <span className="mb-6 text-center text-xs">
        Відскануйте QR, щоб запропонувати роботу фахівцю
      </span>
    </>
  );
};
