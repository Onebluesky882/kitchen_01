import { useState } from "react";

type CountNumber = {
  a: number;
};

const useCountNumber = () => {
  const [count, setCount] = useState<number>(0);

  const Sum = (numberA: number) => {
    setCount((prev) => prev + numberA);
  };
  return { Sum, count };
};

export const defaultUseCountNumber = {
  Sum: () => null,
  count: 0,
};

export default useCountNumber;
