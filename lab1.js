function inc1(n){
    return n + 1;
}

const a = 5;
const b = inc1(a);
console.dir({ a, b });

function inc2(num){
    if (num && typeof num.n === 'number') {
        num.n += 1;
    }
}
const obj = { n: 5 };
inc2(obj); 
console.dir(obj);

const array = [true, 'Yuuki', 'Aqua', 44.5, 'world', 1, 'generation', 18, 17, 20, false, false]
const collection = {};

for (const item of array) {
    const type = typeof item;
    if (!collection[type]) {
        collection[type] = 0;
    }
    collection[type]++;
}

console.dir(collection);