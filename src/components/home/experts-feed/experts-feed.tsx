import { ExpertsCarousel } from "./experts-carousel";

export const ExpertsFeed = () => {
  return (
    <div className="w-full bg-blackMain">
      <div className="flex justify-between px-20 py-28">
        <p className="w-[408px] text-grayLight">
          Завдяки швидкому алгоритму пошуку, Крафтяр допомагає знайти вам
          фахівців в найкоротший термін
        </p>
        <h2 className="text-grayLight">
          Знайти фахівця з Крафтяр - тепер легше!
        </h2>
      </div>

      <ExpertsCarousel />
    </div>
  );
};
