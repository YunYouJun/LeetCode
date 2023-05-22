/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
const uncommonFromSentences = function (A, B) {
  const words = A.split(' ').concat(B.split(' '))
  const map = {}
  words.forEach(word => map[word] = (map[word] || 0) + 1)
  return words.filter(word => map[word] === 1)
}
