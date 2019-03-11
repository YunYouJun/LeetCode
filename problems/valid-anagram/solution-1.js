/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let dic = new Map();
  for (const c of s) {
    let val = dic.get(c);
    if (val === undefined) {
      dic.set(c, 1);
    } else {
      dic.set(c, val + 1);
    }
  }
  for (const c of t) {
    let val = dic.get(c);
    if (val === undefined) {
      return false;
    }
    if (val - 1 < 0) {
      return false;
    } else {
      dic.set(c, val - 1);
    }
  }
  let sum = 0;
  dic.forEach(function(value){
    sum += value;
  })
  return !sum;
};
