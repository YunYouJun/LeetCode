/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let store = 0
  for (let i = 1; i < A.length; i++) {
    let c = 0
    if (A[i] > A[i-1]) {
      c = -1
    } else if (A[i] < A[i-1]) {
      c = 1
    }
    if (c) {
      if (c !== store && store !==0) return false
      store = c
    }
  }
  return true
}