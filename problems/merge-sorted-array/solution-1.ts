/**
 Do not return anything, modify nums1 in-place instead.
 */
import { testFunction } from '@/utils'

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]
      i -= 1
    }
    else {
      nums1[k] = nums2[j]
      j -= 1
    }
    k -= 1
  }

  if (j >= 0)
    nums1.splice(0, j + 1, ...nums2.slice(0, j + 1))
}
const testcases = [
  [[1, 2, 3, 0, 0, 0], 3],
  [[2, 5, 6], 3],
]
const expectedReults = []
testFunction(merge, testcases, expectedReults)
