/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let l = s.length;
  for (let i = 0; i < l; i++) {
    let char = s[i];
    if (s.indexOf(char) === s.lastIndexOf(char)) {
      return i
    }
  }
  return -1;
};