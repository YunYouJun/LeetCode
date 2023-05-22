/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
const powerfulIntegers = function (x, y, bound) {
  const ans = new Set()
  const mx = x === 1 ? 0 : Math.log(bound - 1) / Math.log(x)
  const my = y === 1 ? 0 : Math.log(bound - 1) / Math.log(y)
  for (let i = 0; i <= mx; i++) {
    for (let j = 0; j <= my; j++) {
      const v = x ** i + y ** j
      if (v <= bound)
        ans.add(v)
    }
  }
  return Array.from(ans)
}
