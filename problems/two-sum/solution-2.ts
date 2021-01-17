/**
 * 两数之和
 * @param nums
 * @param target
 */
function twoSum(nums: number[], target: number): number[] {
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const another = target - num;
    if (hashMap.has(another)) {
      return [i, hashMap.get(another)];
    }
    hashMap.set(num, i);
  }
  return [1];
}

import { testFunction } from "../../utils/test";
const testcases = [
  [[2, 7, 11, 15], 9],
  [[3, 2, 4], 6],
];
testFunction(twoSum, testcases);
