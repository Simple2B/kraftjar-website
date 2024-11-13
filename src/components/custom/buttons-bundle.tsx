import { Link } from "@/navigation";
import { Button } from "./button";

type Props = {
  appleTitle: string;
  googleTitle: string;
};

export const ButtonBundle = ({ appleTitle, googleTitle }: Props) => {
  return (
    <div className="flex gap-3 desktopEnd:flex-col">
      <Button
        title={appleTitle}
        color="primary"
        iconSrc="/static/phone/apple-store.svg"
      />
      <Link href={process.env.GOOGLE_APP_LINK || "#"} target="_blank">
        <Button
          title={googleTitle}
          color="secondary"
          iconSrc="/static/phone/google-play.svg"
        />
      </Link>
    </div>
  );
};
