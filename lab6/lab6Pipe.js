const pipe = (...fns) => {
  for (const f of fns) {
    if (!fns.every(fn => typeof fn === 'function')) {
      throw new Error('ERROR - All arguments must be functions');
    }
  }
  return x => fns.reduce((value, fn) => fn(value), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
console.log(f(5));//1728
const f2 = pipe(inc, inc);
console.log(f2(7));//9

//the ERROR
try {
  const f3 = pipe(inc, 7, cube);
} catch (e) {
  console.log(e.message);
};
