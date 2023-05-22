/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
const uncommonFromSentences = function (A, B) {
  const all = A.split(' ').concat(B.split(' '))
  const ans = []
  for (let i = 0; i < all.length; i++) {
    if (all.indexOf(all[i]) === all.lastIndexOf(all[i]))
      ans.push(all[i])
  }
  return ans
}
