/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const transpose = function (A) {
  const ans = []
  for (let i = 0; i < A[0].length; i++) {
    const car = []
    for (let j = 0; j < A.length; j++)
      car.push(A[j][i])

    ans.push(car)
  }
  return ans
}
