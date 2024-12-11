const seq = (func) => (inputData) => {
    if (typeof inputData === "number") {
        return func(inputData);
    }
    return seq(x => func(inputData(x)));
};

console.log(seq(x => x + 7)(x => x * 2)(5));//17
console.log(seq(x => x * 2)(x => x + 7)(5));//24
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));//3


function array () {
    const data = [];
    const index = (i) => data[i];
    index.push = (x) => data.push(x);
    index.pop = () => data.pop();
    return index;
};

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Выводит: first
console.log(arr(1)); // Выводит: second
console.log(arr(2)); // Выводит: third

console.log(arr.pop()); // Выводит: third
console.log(arr.pop()); // Выводит: second
console.log(arr.pop()); // Выводит: first

console.log(arr.pop()); // Выводит: undefined