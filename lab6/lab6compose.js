const compose = (...fns) => {
    const errorHandlers = [];

    const composedFunction = (...args) => {
        try {
            return fns.reduceRight((result, fn) => [fn(...result)], args)[0];
        } catch (e) {
            errorHandlers.forEach((handler) => handler(e));
            return undefined;
        }
    };

    composedFunction.on = (event, handler) => {
        if (event === 'error') errorHandlers.push(handler);
    };

    return composedFunction;
};
  
const fn1 = (x) => x * 2;
const fn2 = (x) => { throw new Error('ERROR in fn2'); };
const fn3 = (x) => x ** 3;

const f = compose(fn1, fn2, fn3);

f.on('error', (e) => {
    console.error('ERROR:', e.message);
});

console.log(f(3));