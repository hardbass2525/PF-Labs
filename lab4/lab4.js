function sumFor(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

function sumForOf(...args) {
    let sum = 0;
    for(let num of args) {
        sum += num;
    }
    return sum
}

function sumWhile(...args) {
    let sum = 0;
    let i = 0;
    while (i < args.length) {
        sum += args[i];
        i++;
    }
    return sum;
}

function sumDoWhile(...args) {
    let sum = 0;
    let i = 0;
    if (args.length > 0) {
        do {
            sum += args[i];
            i++;
        } while (i <args.length);
    }
    return sum;
}

function sumReduce(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

/*const a = sumFor(1, 2, 3) // a === 6
const b = sumForOf(0) // b === 0
const c = sumWhile() // c === 0
const d = sumDoWhile(1, -1, 1) // d === 1
const e = sumReduce(10, -1, -1, -1) // e === 7
console.log(a, b, c, d, e);*/

function max(matrix) {
    let maxVal = -Infinity;
    for (let row of matrix) {
        for (let num of row) {
            if (num > maxVal) {
                maxVal = num;
            }
        }
    }
    return maxVal;
}

/*const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9*/

function ages(persons) {
    const result = {};
    for (let key in persons) {
        if (persons.hasOwnProperty(key)) {
            const person = persons[key];
            result[key] = person.died - person.born;
        }
    }
    return result;
}

/*const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
console.log(ages(persons));*/
// {
//   lenin: 54,
//   mao: 83,
//   gandhi: 79,
//   hirohito: 88,
// }