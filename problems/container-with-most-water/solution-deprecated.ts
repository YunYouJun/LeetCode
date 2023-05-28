/**
 * 超时
 * @param height
 * @returns
 */
export function maxArea(height: number[]): number {
  const sortedHeight: number[][] = []
  height.forEach((h, i) => {
    sortedHeight[i] = [i, h]
  })
  sortedHeight.sort((a, b) => b[1] - a[1])

  let area = 0
  for (let i = 0; i < sortedHeight.length; i++) {
    for (let j = i + 1; j < sortedHeight.length; j++) {
      const [iIndex, iHeight] = sortedHeight[i]
      const [jIndex, jHeight] = sortedHeight[j]
      const newArea = Math.abs(iIndex - jIndex) * Math.min(iHeight, jHeight)
      if (newArea > area)
        area = newArea
    }
  }
  return area
}
