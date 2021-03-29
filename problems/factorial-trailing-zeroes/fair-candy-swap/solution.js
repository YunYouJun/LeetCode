/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  let sa = 0, sb = 0
  A.forEach(a => {
    sa += a
  })
  B.forEach(b => {
    sb += b
  })
  let setB = new Set(B)
  for (const a of A) {
    if (setB.has(a + (sb - sa) / 2)) {
      return [a, a + (sb - sa) / 2]
    }
  }
}