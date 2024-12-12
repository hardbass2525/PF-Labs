const storeValue = (x) => () => x;

const read = storeValue(5);
const value = read();
console.log(value); // Output: 5