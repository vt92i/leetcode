// 2. Add Two Numbers

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    let l1_arr: number[] = [];
    for (let i = l1; i != null; i = i.next)
        l1_arr.push(i.val);

    let l2_arr: number[] = [];
    for (let i = l2; i != null; i = i.next)
        l2_arr.push(i.val);

    // l1_arr = l1_arr.reverse();
    // l2_arr = l2_arr.reverse();

    let l3_arr: number[] = [];
    let carry = 0;
    let i = 0;
    while (i < l1_arr.length || i < l2_arr.length) {
        let sum = carry;
        if (i < l1_arr.length) sum += l1_arr[i];
        if (i < l2_arr.length) sum += l2_arr[i];
        if (sum >= 10) {
            carry = 1;
            l3_arr.push(sum % 10);
        } else {
            carry = 0;
            l3_arr.push(sum);
        }
        i++;
    }

    if (carry > 0) l3_arr.push(carry);
    l3_arr = l3_arr.reverse();

    let l3: ListNode | null = null;
    for (let i = 0; i < l3_arr.length; i++)
        l3 = new ListNode(l3_arr[i], l3);

    return l3;
};

let arr_l1: number[] = [2, 4, 9].reverse();
let l1: ListNode | null = null;
for (let i = 0; i < arr_l1.length; i++)
    l1 = new ListNode(arr_l1[i], l1);

let arr_l2: number[] = [5, 6, 4, 9].reverse();
let l2: ListNode | null = null;
for (let i = 0; i < arr_l2.length; i++)
    l2 = new ListNode(arr_l2[i], l2);

let l3: ListNode | null = addTwoNumbers(l1, l2);
for (let i = l3; i != null; i = i.next)
    console.log(i.val);

