/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const missingElement = function (nums, k) {
  let n = nums[0]
  for (let i = 1; i < nums.length; i++) {
    while (n < nums[i] && k) {
      n++
      k--
      if (n === nums[i])
        k++
    }
  }
  while (k) {
    n++
    k--
  }
  return n
}
