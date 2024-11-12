import { CustomLink } from "./custom-button";

type Props = {
  appleTitle: string;
  googleTitle: string;
  noTarget?: boolean;
};

export const LinkBundle = ({ appleTitle, googleTitle, noTarget }: Props) => {
  return (
    <div className="flex gap-3 desktopEnd:flex-col">
      <CustomLink
        title={appleTitle}
        color="primary"
        iconSrc="/static/phone/apple-store.svg"
      />
      <CustomLink
        href={process.env.GOOGLE_APP_LINK}
        target={!noTarget ? "_blank" : undefined}
        title={googleTitle}
        color="secondary"
        iconSrc="/static/phone/google-play.svg"
      />
    </div>
  );
};
