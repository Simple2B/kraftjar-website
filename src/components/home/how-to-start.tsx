import Image from "next/image";
import { SetupInstruction } from "../custom/setup-instruction";

export const HowToStart = () => {
  return (
    <div
      id="how-to-start"
      className="flex w-full items-center gap-14 desktopEnd:flex-col"
    >
      <div className="h-[800px] max-w-[700px] bg-ellipse bg-left bg-no-repeat mobileMax:max-h-[538px] mobileMax:bg-cover mobileMax:bg-center desktopEnd:bg-ellipse-mobile mdDesktop:w-full smDesktopPart:bg-contain">
        <Image
          src="/static/phone/three-phones.png"
          alt="Phones"
          width={932}
          height={700}
          className="translate-y-[84px] object-none object-left mobileMax:h-[456px] mobileMax:translate-x-[-4%] mobileMax:translate-y-[8%] mobileMax:object-cover smDesktopPart:object-contain"
        />
      </div>

      <SetupInstruction />
    </div>
  );
};
