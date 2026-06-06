// Problem Statement:
// 1. Reduce the number of call for a particular timeout
// 2. Suppose user is typing something, After user finishes the typing then after few mill sec, I want to call the function.

function debounce<T>(cb: (args?: T[]) => void, delay: number) {
  let timeoutId: NodeJS.Timeout | null = null;

  return (...args: T[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      cb(args);
    }, delay);
  };
}

// const debounceFunction = debounce(() => {
//   console.log("Hello world");
// }, 500);

export default debounce;
