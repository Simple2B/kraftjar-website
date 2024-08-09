import { RefObject, useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<Element>,
  callback: () => void,
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const isClickTargetValid =
        ref.current &&
        event.target instanceof HTMLElement &&
        !ref.current.contains(event.target);

      if (isClickTargetValid) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, [ref, callback]);
};
