import React, { useMemo } from 'react';

const FactorialComponent = ({ number }) => {
  const factorial = useMemo(() => {
    const calculateFactorial = (n) => {
      if (n === 0 || n === 1) {
        return 1;
      }
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    };

    return calculateFactorial(number);
  }, [number]);

  return <p>Factorial: {factorial}</p>;
};

export default FactorialComponent;
