// 13. Roman to Integer

// I             1
// IV            4
// V             5
// IX            9
// X             10
// XL            40
// L             50
// XC            90
// C             100
// CD            400
// D             500
// CM            900
// M             1000

// MCMXCIV = 1994
const romanToInt = (s: string): number => {
    let result: number = 0;
    for (let i = 0; i < s.length; ++i) {
        switch (s.charAt(i)) {
            case 'I':
                result += 1;
                break;

            case 'V':
                result += 5;
                break;

            case 'X':
                result += 10;
                break;

            case 'L':
                result += 50;
                break;

            case 'C':
                result += 100;
                break;

            case 'D':
                result += 500;
                break;

            case 'M':
                result += 1000;
                break;
        }

    }
    if (s.includes("IV") || s.includes("IX")) {
        result -= 2;
    }
    if (s.includes("XL") || s.includes("XC")) {
        result -= 20;
    }
    if (s.includes("CD") || s.includes("CM")) {
        result -= 200;
    }

    return result;
};

console.log(romanToInt("MCMXCIV"));
