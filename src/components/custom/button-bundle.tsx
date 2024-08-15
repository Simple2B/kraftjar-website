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
      <Button
        title={googleTitle}
        color="secondary"
        iconSrc="/static/phone/google-play.svg"
      />
    </div>
  );
};
