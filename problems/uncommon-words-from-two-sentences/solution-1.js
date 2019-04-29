/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  let all = A.split(' ').concat(B.split(' '))
  let ans = []
  for (let i = 0; i < all.length; i++) {
    if (all.indexOf(all[i]) === all.lastIndexOf(all[i])) {
      ans.push(all[i])
    }
  }
  return ans
}