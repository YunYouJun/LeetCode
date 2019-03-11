/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  for (const c of s) {
    if (s.length !== t.length || s === t) break; 
    s = s.replace(new RegExp(c, 'g'), '');
    t = t.replace(new RegExp(c, 'g'), '');
  }
  return s === t;
};
