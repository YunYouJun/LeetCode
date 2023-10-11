/**
 * 动态规划
 * @param height
 */
export function trap(height: number[]): number {
  let result = 0

  const maxLeft: number[] = []
  const maxRight: number[] = []

  maxLeft[0] = height[0]
  for (let i = 1; i < height.length; i++)
    maxLeft[i] = Math.max(maxLeft[i - 1], height[i])

  maxRight[height.length - 1] = height[height.length - 1]
  for (let i = height.length - 2; i >= 0; i--)
    maxRight[i] = Math.max(maxRight[i + 1], height[i])

  for (let i = 1; i < height.length - 1; i++) {
    const min = Math.min(maxLeft[i], maxRight[i])
    if (min > height[i])
      result += min - height[i]
  }

  return result
}
