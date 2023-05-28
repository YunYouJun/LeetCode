export function threeSum(nums: number[]): number[][] {
  const result: number[][] = []

  const len = nums.length
  nums.sort((a, b) => a - b)

  for (let i = 0; i < len; i++) {
    const num = nums[i]
    if (num > 0)
      continue
    if (num === nums[i - 1])
      continue

    let left = i + 1
    let right = len - 1
    while (left < right) {
      const sum = num + nums[left] + nums[right]
      if (sum === 0) {
        result.push([num, nums[left], nums[right]])
        left++
        right--
        while (left < right && nums[left] === nums[left - 1]) left++
        while (left < right && nums[right] === nums[right + 1]) right--
      }
      else if (sum < 0) {
        left++
      }
      else {
        right--
      }
    }
  }
  return result
}
