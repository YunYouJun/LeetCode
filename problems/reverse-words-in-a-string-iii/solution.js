/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.split(' ').map(item => {return item.split('').reverse().join('')}).join(' ')
}