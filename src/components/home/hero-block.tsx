import { Button } from "../custom/button";

export const HeroBlock = () => {
  return (
    <div className="flex items-end">
      <div className="bg-hero-phone h-[564px] w-[752px]" />

      <div className="h-[432px] w-[516px] translate-x-[-68px]">
        <h1 className="mb-8">Крафтяр - як для себе</h1>

        <p className="mb-12">
          Ми змінимо твій підхід до пошуку фахівців та завдань у всіх сферах.
          Завантажуй Крафтяр вже сьогодні та знаходь відповіді на всі свої
          потреби
        </p>

        <div className="flex gap-3">
          <Button
            title="Вже в Apple Store"
            color="primary"
            iconSrc="/static/phone/apple-store.svg"
          />
          <Button
            title="Вже в Google Play"
            color="secondary"
            iconSrc="/static/phone/google-play.svg"
          />
        </div>
      </div>
    </div>
  );
};
