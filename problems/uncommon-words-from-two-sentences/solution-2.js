/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  let words = A.split(' ').concat(B.split(' '))
  let map = {}
  words.forEach(word => map[word] = (map[word] || 0) + 1)
  return words.filter(word => map[word] === 1)
}