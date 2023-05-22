/**
 * @param {string} A
 * @param {string} B
 * @param {string} S
 * @return {string}
 */
const smallestEquivalentString = function (A, B, S) {
  const dic = {}
  for (let i = 0; i < 26; i++)
    dic[String.fromCharCode(97 + i)] = String.fromCharCode(97 + i)

  function get(x) {
    if (dic[x] === x)
      return x
    return dic[x] = get(dic[x])
  }

  function merge(x, y) {
    x = get(x)
    y = get(y)
    if (x < y) {
      const temp = y
      y = x
      x = temp
    }
    dic[x] = y
  }

  for (let i = 0; i < A.length; i++)
    merge(A[i], B[i])

  let res = ''
  for (let i = 0; i < S.length; i++)
    res += get(S[i])

  return res
}

// smallestEquivalentString("parker", "morris", "parser")
// smallestEquivalentString("hello", "world", "hold")
// smallestEquivalentString('leetcode', 'programs', 'sourcecode')
