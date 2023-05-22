/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = []
  let shift = ''
  const l = s.length
  s = s.split('')
  for (let i = 0; i < l; i++) {
    shift = s.shift()
    switch (shift) {
      case '(':
      case '[':
      case '{':
        stack.push(shift)
        break
      case ')':
        if (stack[stack.length - 1] === '(')
          stack.pop()
        else
          return false

        break
      case ']':
        if (stack[stack.length - 1] === '[')
          stack.pop()
        else
          return false

        break
      case '}':
        if (stack[stack.length - 1] === '{')
          stack.pop()
        else
          return false

        break
      default:
        break
    }
  }
  if (stack.length === 0)
    return true
  else
    return false
}
