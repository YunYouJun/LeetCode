export function purchasePlans(nums: number[], target: number): number {
  nums.sort((a, b) => a - b)
  let ans = 0
  let i = 0
  let j = nums.length - 1
  while (i < j) {
    if (nums[i] + nums[j] > target) {
      j -= 1
    }
    else {
      ans += j - i
      i += 1
    }
  }
  return ans % 1000000007
}
