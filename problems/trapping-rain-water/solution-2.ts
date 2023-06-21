/**
 * 列遍历
 * @param height
 * @returns
 */
export function trap(height: number[]): number {
  let result = 0

  // 两端不考虑，因为一定不会有水 1～height.length - 2
  for (let i = 1; i < height.length - 1; i++) {
    let maxLeft = 0
    // 找到左边最高的柱子
    for (let j = i - 1; j >= 0; j--)
      maxLeft = Math.max(maxLeft, height[j])

    let maxRight = 0
    // 找到右边最高的柱子
    for (let j = i + 1; j < height.length; j++)
      maxRight = Math.max(maxRight, height[j])

    // 取左右最高的柱子中较小的一个
    const min = Math.min(maxLeft, maxRight)
    if (min > height[i])
      result += min - height[i]
  }

  return result
}
