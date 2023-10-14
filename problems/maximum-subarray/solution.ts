export function maxSubArray(nums: number[]): number {
  let max = nums[0]
  let sum = 0

  for (const num of nums) {
    if (sum < 0)
      sum = 0

    sum += num
    max = Math.max(max, sum)
  }

  return max
};
