import React, { useMemo } from 'react';

const FactorialComponent = ({ number }) => {
  const factorial = useMemo(() => {
    const calculateFactorial = (n) => {
      if (n <= 1) return 1;
      return n * calculateFactorial(n - 1);
    };

    return calculateFactorial(number);
  }, [number]);

  return <p>Factorial: {factorial}</p>;
};

export default FactorialComponent;
