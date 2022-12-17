// 1. Two Sum

const twoSum = (nums: number[], target: number): number[] => {
    let result: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] == target && i != j) {
                result[0] = i;
                result[1] = j;
            }
        }
    }

    return result;
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
