function memoization() {
  return 0;
}

// Un-Optimized way to calculate the sum
const calculateSum = (num: number) => {
  let totalSum = 0;

  for (let i = 1; i <= num; i++) {
    totalSum += i;
  }

  return totalSum;
};

const memoizedSumCalculation = () => {
  const cache: Record<number, number> = {};

  return (num: number) => {
    // 👉 You are't using ""in"" for checking something inside "object", always try to use this while want to check something inside an ""object"".
    if (num in cache) {
      return cache[num];
    }

    const sum = calculateSum(num);
    cache[num] = sum;
    return sum;
  };
};

console.time("Taken Time: ");
console.log("Total sum: ", calculateSum(1000000000));
console.log("Total sum: ", calculateSum(1000000000));
console.timeEnd("Taken Time: ");

const optimizedCalculation = memoizedSumCalculation();

console.time("Optimized way: ");
console.log("Optimized sum: ", optimizedCalculation(1000000000));
console.log("Optimized sum: ", optimizedCalculation(1000000000));
console.timeEnd("Optimized way: ");

export default memoization;
