/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let i; let j
  if (!needle) {
    return 0
  }
  if (!haystack) {
    return -1
  }
  for (i = 0; i < haystack.length; i++) {
    if (haystack.length - i < needle.length) {
      return -1
    }
    if (haystack[i] === needle[0]) {
      for (j = 1; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          break
        }
      }
      if (j === needle.length) {
        return i
      }
    }
  }
  return -1
}
