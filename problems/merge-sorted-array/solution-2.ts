/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  let tmp: number;
  while (j >= 0) {
    if (i < 0) {
      tmp = nums2[j];
      j -= 1;
    } else if (nums1[i] > nums2[j]) {
      tmp = nums1[i];
      i -= 1;
    } else {
      tmp = nums2[j];
      j -= 1;
    }
    nums1[k] = tmp;
    k -= 1;
  }
}

import { testFunction } from "@/utils";
const testcases = [
  [[1, 2, 3, 0, 0, 0], 3],
  [[2, 5, 6], 3],
];
const expectedReults = [];
testFunction(merge, testcases, expectedReults);
