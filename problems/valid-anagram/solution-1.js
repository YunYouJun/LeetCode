/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isAnagram = function (s, t) {
  if (s.length !== t.length)
    return false

  const dic = new Map()
  for (const c of s) {
    const val = dic.get(c)
    if (val === undefined)
      dic.set(c, 1)
    else
      dic.set(c, val + 1)
  }
  for (const c of t) {
    const val = dic.get(c)
    if (val === undefined)
      return false

    if (val - 1 < 0)
      return false
    else
      dic.set(c, val - 1)
  }
  let sum = 0
  dic.forEach((value) => {
    sum += value
  })
  return !sum
}
