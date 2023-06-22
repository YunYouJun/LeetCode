export function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = []
  let l = 0
  let r = matrix[0].length - 1
  let t = 0
  let b = matrix.length - 1

  while (true) {
    // ->
    for (let i = l; i <= r; i++)
      result.push(matrix[t][i])

    t++
    if (t > b)
      break

    // v
    for (let i = t; i <= b; i++)
      result.push(matrix[i][r])

    r--
    if (l > r)
      break

    // <-
    for (let i = r; i >= l; i--)
      result.push(matrix[b][i])

    b--
    if (t > b)
      break

    // ^
    for (let i = b; i >= t; i--)
      result.push(matrix[i][l])

    l++
    if (l > r)
      break
  }

  return result
}
