/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function(A) {
  let seen =  new Set()
  A.forEach(a => {
    let count = []
    for (let i = 0; i < a.length; i++) {
      let index =  a[i].charCodeAt() - 'a'.charCodeAt() + 26 * (i%2)
      if (count[index] === undefined) {
        count[index] = 0
      } else {
        count[index] += 1
      }
    }
    seen.add(count.toString())
  })
  return seen.size
}