import { UkraineMap } from "../ukraine-map";

export const SearchBlock = () => {
  return (
    <div className="bg-blackMain flex h-[698px] w-full items-center justify-between">
      <div className="ml-20 max-w-[512px]">
        <h2 className="mb-6 text-white">Що я можу знайти?</h2>

        <p className="text-grayLight mb-10">
          Ми змінимо твій підхід до пошуку фахівців та завдань у всіх сферах.
          Завантажуй Крафтяр вже сьогодні та знаходь відповіді на всі свої
          потреби
        </p>

        <input className="w-full" type="text" />
      </div>

      <UkraineMap />
    </div>
  );
};
