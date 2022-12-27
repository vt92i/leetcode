// 7. Reverse Integer

const reverse = (x: number): number => {
    const min = (-2) ** 31;
    const max = (2 ** 31 - 1);
    const fx = x.toString().split('').reverse().join('');
    let result: number;

    switch (fx[fx.length - 1]) {
        case '-':
            result = parseInt(fx.slice(0, fx.length - 1), 10) * -1;
            break;

        default:
            result = parseInt(fx, 10);
            break;
    }

    if (result < min || result > max) return 0;
    return result;
};


console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));
