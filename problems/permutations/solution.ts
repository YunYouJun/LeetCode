export function permute(nums: number[]): number[][] {
  const list: number[][] = []

  function backtrack(first = 0) {
    if (first === nums.length)
      list.push([...nums])

    for (let i = first; i < nums.length; i++) {
      [nums[first], nums[i]] = [nums[i], nums[first]]
      backtrack(first + 1);
      [nums[first], nums[i]] = [nums[i], nums[first]]
    }
  }
  backtrack()
  return list
}
