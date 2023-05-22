/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = function (A) {
  const N = A.length
  let j = 0
  while (j < N && A[j] < 0)
    j += 1

  let i = j - 1
  const ans = []
  while (i >= 0 && j < N) {
    if (A[i] ** 2 < A[j] ** 2) {
      ans.push(A[i] ** 2)
      i -= 1
    }
    else {
      ans.push(A[j] ** 2)
      j += 1
    }
  }
  while (i >= 0) {
    ans.push(A[i] ** 2)
    i -= 1
  }
  while (j < N) {
    ans.push(A[j] ** 2)
    j += 1
  }
  return ans
}
