// Напишите функцию, которая возвращает сумму таким образом:

// f(1)(2)(3) - 6
// f(1)(2)..(n) - 1 + 2 + ...+ n

const infiniteCurry = (fn, seed) => {
  const reduceValue = (args, seedValue) =>
    args.reduce((acc, a) => {
      return fn.call(fn, acc, a);
    }, seedValue);
  const next = (...args) => {
    return (...x) => {
      if (!x.length) {
        return reduceValue(args, seed);
      }
      return next(...args, reduceValue(x, seed));
    };
  };
  return next();
};

const f = infiniteCurry((x, y) => x + y, 0);
const iMul = infiniteCurry((x, y) => x * y, 1);


console.log(f(1)(3, 4)(5, 6)(7, 8, 9)());
