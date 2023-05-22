/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  const l = s.length
  for (let i = 0; i < l; i++) {
    const char = s[i]
    if (s.indexOf(char) === s.lastIndexOf(char))
      return i
  }
  return -1
}
