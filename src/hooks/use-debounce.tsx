import { useEffect, useState } from "react";

export const useDebounce = (val: any, delay: number) => {
  const [value, setValue] = useState(val);
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timerID = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timerID);
    };
  }, [value]);
  return [debouncedValue, setValue];
};
