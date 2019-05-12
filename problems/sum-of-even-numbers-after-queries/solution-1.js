/** 超时
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
  let answer = []
  let S = A.filter(v => v % 2 === 0).reduce((acc, cur) => acc + cur, 0)
  for (let i = 0; i < queries.length; i++) {
    let val = queries[i][0]
    let index = queries[i][1]
    if (A[index] % 2 === 0) S -= A[index]
    A[index] += val
    if (A[index] % 2 === 0) S += A[index]
    answer.push(S)
  }
  return answer
}