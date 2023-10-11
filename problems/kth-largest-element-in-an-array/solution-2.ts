function partition(nums: number[], left: number, right: number): number {
  const pivot = nums[left]
  let j = left

  for (let i = left + 1; i <= right; i++) {
    if (nums[i] < pivot) {
      j++
      swap(nums, i, j)
    }
  }

  swap(nums, left, j)

  return j
}

function swap(nums: number[], i: number, j: number) {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}

/**
 * 快速排序
 * @param nums
 * @param k
 */
export function findKthLargest(nums: number[], k: number): number {
  const len = nums.length
  const target = len - k

  let left = 0
  let right = len - 1

  while (true) {
    const index = partition(nums, left, right)

    if (index === target)
      return nums[index]
    else if (index < target)
      left = index + 1
    else
      right = index - 1
  }
}
