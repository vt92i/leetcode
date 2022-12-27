// 2279. Maximum Bags With Full Capacity of Rocks

const maximumBags = (capacity: number[], rocks: number[], additionalRocks: number): number => {
    let diff = capacity.map((v, i) => v - rocks[i]).sort((a, b) => a - b);
    let result = 0;

    for (let i = 0; i < diff.length; i++) {
        while (diff[i] != 0 && additionalRocks > 0) {
            let n = 1;
            if (additionalRocks > diff[i]) n = diff[i];
            diff[i] -= n;
            additionalRocks -= n;
        }
        if (diff[i] == 0) result++;
    }

    return result;
};

console.time();
// console.log(maximumBags([2, 3, 4, 5], [1, 2, 4, 4], 2));
// console.log(maximumBags([10, 2, 2], [2, 2, 0], 100));
// console.log(maximumBags([91, 54, 63, 99, 24, 45, 78], [35, 32, 45, 98, 6, 1, 25], 17));
console.log(maximumBags(
    [54, 18, 91, 49, 51, 45, 58, 54, 47, 91, 90, 20, 85, 20, 90, 49, 10, 84, 59, 29, 40, 9, 100, 1, 64, 71, 30, 46, 91],
    [14, 13, 16, 44, 8, 20, 51, 15, 46, 76, 51, 20, 77, 13, 14, 35, 6, 34, 34, 13, 3, 8, 1, 1, 61, 5, 2, 15, 18],
    77
));
console.timeEnd();

