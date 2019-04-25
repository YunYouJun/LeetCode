/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  if (A.length !== B.length) return false
  if (A === B) {
    if ((new Set(A)).size === A.length) return false
    else return true
  }
  let diff = []
  for (let i = 0; i < A.length; i++) {
    if (B[i] !== A[i]) {
      diff.push(i)
    }
  }
  if (diff.length === 2) {
    if (A[diff[0]] === B[diff[1]] && A[diff[1]] === B[diff[0]]) return true
  }
  return false
}