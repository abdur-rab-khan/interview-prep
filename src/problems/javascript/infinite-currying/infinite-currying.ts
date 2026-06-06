const add = (a: number) => {
  return function (b?: number) {
    if (b) return add(a + b);
    return a;
  };
};

console.log(add(5)(5)(9)());
