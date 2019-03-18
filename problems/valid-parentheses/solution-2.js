/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let map = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (!map[c]) {
      arr.push(c);
      continue;
    }
    if (arr.pop() !== map[c]) 
      return false;
  }
  return !arr.length;
};