function purchasePlans(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let ans = 0;
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    if (nums[i] + nums[j] > target) {
      j -= 1;
    } else {
      ans += j - i;
      i += 1;
    }
  }
  return ans % 1000000007;
}

import { testFunction } from "../../utils";
const testcases = [
  [[2, 5, 3, 5], 6],
  [[2, 2, 1, 9], 10],
  [[40330, 31957, 63879, 13204, 47923, 56282, 75126, 3423, 98483], 60482],
];
const expectedReults = [1, 4, 7];
testFunction(purchasePlans, testcases, expectedReults);
