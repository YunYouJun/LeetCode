/**
 * 两数之和
 * @param nums
 * @param target
 */
function twoSum(nums: number[], target: number): number[] {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target)
        return [i, j]
    }
  }
  return []
}
