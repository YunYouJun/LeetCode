export function maxArea(height: number[]): number {
  let area = 0
  let left = 0
  let right = height.length - 1
  while (left < right) {
    const newArea = Math.abs(left - right) * Math.min(height[left], height[right])
    if (newArea > area)
      area = newArea
    if (height[left] < height[right])
      left++
    else
      right--
  }
  return area
}
