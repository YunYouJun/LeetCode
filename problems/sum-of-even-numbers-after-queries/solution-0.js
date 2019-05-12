/** 超时
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
  let answer = []
  for (let i = 0; i < queries.length; i++) {
    let val = queries[i][0]
    let index = queries[i][1]
    A[index] += val
    answer[i] = A.filter(v => v % 2 === 0).reduce((sum, cur) => sum + cur, 0)
  }
  return answer
}