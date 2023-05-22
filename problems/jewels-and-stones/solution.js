/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function (J, S) {
  let sum = 0
  S.split('').forEach((s) => {
    if (J.includes(s))
      sum++
  })
  return sum
}
