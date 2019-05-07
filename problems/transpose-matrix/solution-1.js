/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  let ans = []
  for (let i = 0; i < A[0].length; i++) {
    let car = []
    for (let j = 0; j < A.length; j++) {
      car.push(A[j][i])
    }
    ans.push(car)
  }
  return ans
}