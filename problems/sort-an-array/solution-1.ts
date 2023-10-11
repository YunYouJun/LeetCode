/**
 * JS 数组排序
 * v8 源码
 * @see https://github.com/v8/v8/blob/98d735069d0937f367852ed968a33210ceb527c2/src/js/array.js#L709
 * n < 10 个元素使用插入排序
 * 10 < n < 1000 个元素使用快速排序，取中间值作为 pivot
 * n > 1000 个元素使用快速排序，每隔 200-215 个元素取一个样本，取中间值作为 pivot 加入到一个数组中，对这个数组进行排序，取中间值作为 pivot
 * @param nums
 */
export function sortArray(nums: number[]): number[] {
  return nums.sort((a, b) => a - b)
}
