/**
 * 超时
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
export const sumEvenAfterQueries = function (A, queries) {
  const answer = []
  for (let i = 0; i < queries.length; i++) {
    const val = queries[i][0]
    const index = queries[i][1]
    A[index] += val
    answer[i] = A.filter(v => v % 2 === 0).reduce((sum, cur) => sum + cur, 0)
  }
  return answer
}
