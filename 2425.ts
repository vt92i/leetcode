// 2425. Bitwise XOR of All Pairings

const xorAllNums = (nums1: number[], nums2: number[]): number => {
    let result: number = 0;

    if (nums1.length % 2)
        nums2.forEach(v => result ^= v);

    if (nums2.length % 2)
        nums1.forEach(v => result ^= v);

    return result;
};


console.log(xorAllNums([1, 2], [3, 4]));
console.log(xorAllNums([2, 1, 3], [10, 2, 5, 0]));
