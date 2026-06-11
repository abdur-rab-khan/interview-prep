// Problem: Reduce the number of function call, for some delay.

function throttling<T extends unknown[]>(cb: (args: T) => void, delay: number) {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (...args: T) {
    if (timer) return;
    timer = setTimeout(() => {
      cb(args);
      timer = null;
    }, delay);
  };
}

export default throttling;
