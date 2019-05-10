/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
  let ans = new Set()
  let mx = x === 1 ? 0 : Math.log(bound - 1) / Math.log(x)
  let my = y === 1 ? 0 : Math.log(bound - 1) / Math.log(y)
  for (let i = 0; i <= mx; i++) {
    for (let j = 0; j <= my; j++) {
      let v = x**i + y**j
      if (v <= bound) {
        ans.add(v)
      }   
    }
  }
  return Array.from(ans)
}