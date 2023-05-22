/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
const addToArrayForm = function (A, K) {
  A[A.length - 1] += K
  let carry = 0
  for (let i = A.length - 1; i >= 0; i--) {
    carry = parseInt(A[i] / 10)
    A[i] = A[i] % 10
    if (i)
      A[i - 1] += carry
  }
  if (carry)
    A = carry.toString().split('').concat(A)

  return A
}
