/**
 * 快速排序
 * @param nums
 */
export function sortArray(nums: number[]): number[] {
  const quickSort = (nums: number[], left: number, right: number) => {
    if (left >= right)
      return

    let i = left
    let j = right
    // 随机取一个数作为 pivot
    const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left
    const pivot = nums[pivotIndex]

    nums[pivotIndex] = nums[i]

    while (i < j) {
      while (i < j && nums[j] >= pivot) j--
      nums[i] = nums[j]

      while (i < j && nums[i] <= pivot) i++
      nums[j] = nums[i]
    }

    nums[i] = pivot

    quickSort(nums, left, i - 1)
    quickSort(nums, i + 1, right)
  }

  quickSort(nums, 0, nums.length - 1)

  return nums
}
