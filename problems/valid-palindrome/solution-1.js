/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let regex = new RegExp('[^A-Za-z0-9]', 'g');
  let s2 = s.replace(regex, '').toLowerCase();
  let l = s2.length
  for (let i = 0; i < parseInt(l/2); i++) {
    if (s2[i] !== s2[l-i-1]) {
      return false;
    }
  }
  return true;
};
