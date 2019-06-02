/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let sum = 0
  S.split('').forEach(s => {
    if (J.indexOf(s) !== -1) sum++
  })
  return sum
}