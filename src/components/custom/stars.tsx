import { StarIcon } from "@/lib/icons";

const TOTAL_STARS = 5;
const STAR_LIST = [...Array(TOTAL_STARS)];

type Props = {
  rate: number;
};

export const Stars = ({ rate }: Props) => {
  const roundRating = Math.round(rate);

  return (
    <div className="star-rating my-2 flex items-center gap-1">
      {STAR_LIST.map((_, index) => {
        const ratingValue = index + 1;
        const starColor = ratingValue <= roundRating ? "#FFBB02" : "#15151533";

        return (
          <div key={ratingValue} className="">
            <StarIcon fill={starColor} />
          </div>
        );
      })}
    </div>
  );
};
