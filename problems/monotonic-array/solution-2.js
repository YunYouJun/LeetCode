/**
 * @param {number[]} A
 * @return {boolean}
 */
export const isMonotonic = function (A) {
  return increasing(A) || decreasing(A)
  function increasing(A) {
    for (let i = 0; i < A.length - 1; i++) {
      if (A[i] > A[i + 1])
        return false
    }

    return true
  }
  function decreasing(A) {
    for (let i = 0; i < A.length - 1; i++) {
      if (A[i] < A[i + 1])
        return false
    }

    return true
  }
}
