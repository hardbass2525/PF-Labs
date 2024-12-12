const contract = (fn, ...types) => {
  return (...args) => {
    args.forEach((arg, index) => {
      const expectedType = types[index]?.name.toLowerCase();
      if (typeof arg !== expectedType) {
        throw new TypeError(`Argument at position ${index} must be ${expectedType}`);
      }
    });

    const result = fn(...args);
    const returnType = types[types.length - 1]?.name.toLowerCase();
    if (typeof result !== returnType) {
      throw new TypeError(`Return value must be ${returnType}`);
    }

    return result;
  };
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1); // Output: 5

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2); // Output: Hello world!