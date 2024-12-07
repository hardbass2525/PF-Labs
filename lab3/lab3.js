function random(min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//console.log(random(1, 4));

function generateKey (length, characters) {
    let key = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = random(0, characters.length - 1);
        key += characters[randomIndex];
    }
    return key;
}

/*const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i*/

function ipToNumber(ip) {
    return ip.split('.')
             .map(Number)
             .reduce((acc, byte, index) => acc + (byte << (8 * (3 - index))), 0);
}

//console.log(ipToNumber('127.0.0.1'));

function introspectObject(iface) {
    return Object.keys(iface)
                 .filter(key => typeof iface[key] === 'function')
                 .map(key => [key, iface[key].length]);
}

/*const iface = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
};*/

//console.log(introspectObject(iface));
