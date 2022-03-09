import { useState, useEffect } from "react";

export function useCounter() {
  const [value, setValue] = useState(0);

  const [isEven, setIsEven] = useState(false);

  useEffect(() => {
    if (value % 2 === 0) {
      setIsEven(true);
    } else {
      setIsEven(false);
    }
  }, [value]);

  const handleIncrement = () => {
    setValue(value + 1);
  };
  const handleDecrement = () => {
    setValue(value - 1);
  };

  return [value, isEven, handleIncrement, handleDecrement];
}
