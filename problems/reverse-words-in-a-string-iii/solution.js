/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  return s.split(' ').map((item) => {
    return item.split('').reverse().join('')
  }).join(' ')
}
