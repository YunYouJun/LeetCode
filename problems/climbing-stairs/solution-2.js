/**
 * @param {number} n
 * @return {number}
 */
let dic = [0, 1, 2]
var climbStairs = function(n) {
  if (n > 2) {
    if (!dic[n-2]) dic[n-2] = climbStairs(n-2)
    if (!dic[n-1]) dic[n-1] = climbStairs(n-1)
    dic[n] = dic[n-1] + dic[n-2]
  }
  return dic[n]
}