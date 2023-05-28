export function fourSum(nums: number[], target: number): number[][] {
  const results: number[][] = []

  if (nums.length < 4)
    return results

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 3; i++) {
    // 如果需要使用相同的数字，上次的循环已经使用过了
    if (i > 0 && nums[i] === nums[i - 1])
      continue

    // 提前结束
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target)
      break

    // nums[i+1] 可以更大
    if (nums[i] + nums[nums.length - 1] + nums[nums.length - 2] + nums[nums.length - 3] < target)
      continue

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1])
        continue

      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target)
        break

      // nums[j+1] 可以更大
      if (nums[i] + nums[j] + nums[nums.length - 1] + nums[nums.length - 2] < target)
        continue

      const newTarget = target - nums[i] - nums[j]
      let left = j + 1
      let right = nums.length - 1
      while (left < right) {
        const sum = nums[left] + nums[right]
        if (sum === newTarget) {
          const result = [nums[i], nums[j], nums[left], nums[right]]
          // if (!results.some(r => r.every((v, i) => v === result[i])))
          results.push(result)

          left++
          right--
          while (left < right && nums[left] === nums[left - 1]) left++
          while (left < right && nums[right] === nums[right + 1]) right--
        }
        else if (sum < newTarget) {
          left++
        }
        else {
          right--
        }
      }
    }
  }
  return results
}
