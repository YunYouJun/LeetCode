/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let l = s.length;
  if (l === 1) {
    return 0;
  }
  let dic = {};
  for (let i = 0; i < l; i++) {
    let char = s[i];
    if (dic[char]) {
      dic[char] += 1;
    } else {
      dic[char] = 1;
    }
  }
  for (let i = 0; i < l; i++) {
    if (dic[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};