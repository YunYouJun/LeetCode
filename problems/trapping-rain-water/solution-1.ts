/**
 *
 * @param height
 * @returns
 */
export function trap(height: number[]): number {
  let result = 0
  const max = Math.max(...height)

  /**
   * 1. 找到最高的柱子
   * 一层层遍历
   */
  for (let i = 1; i <= max; i++) {
    let start = false
    let temp = 0
    for (let j = 0; j < height.length; j++) {
      if (start && height[j] < i)
        temp++

      if (height[j] >= i) {
        result += temp
        temp = 0
        start = true
      }
    }
  }

  return result
}
