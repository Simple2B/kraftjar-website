import Image from "next/image";
import { SetupInstruction } from "../custom/setup-instruction";
import { INSTRUCTIONS_STEPS } from "@/lib/constants";

export const HowToStart = () => {
  return (
    <div className="flex w-full items-center gap-14">
      <div className="bg-ellipse h-[800px] w-[700px] bg-left bg-no-repeat mobileMax:h-80 mobileMax:bg-cover mdDesktop:w-full">
        <Image
          src="/static/phone/three-phones.png"
          alt="Phones"
          width={932}
          height={700}
          className="translate-y-[84px] object-none object-left"
        />
      </div>

      <div className="w-[660px]">
        <h2 className="mb-6">Як почати?</h2>
        <p className="mb-8">
          Завантажуйте застосунок прямо зараз, щоб почати використовувати усі
          переваги Крафтяр і знаходити фахівців або завдання за вашим запитом
        </p>

        <SetupInstruction data={INSTRUCTIONS_STEPS} />
      </div>
    </div>
  );
};
