/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let say
  if (n === 1) {
    return '1'
  } else {
    say = '1'
    for (let i = 1; i < n; i++) {
      say = countString(say)
    }
  }
  return say
}

function countString(s) {
  let old = s[0]
  let count = 1
  let say = ''
  let cur
  for (let i = 1; i < s.length; i++) {
    cur = s[i]
    if (cur === old) {
      count += 1
    } else {
      say += count.toString() + old
      count = 1
    }
    old = cur
  }
  say += count.toString() + old
  return say
}
