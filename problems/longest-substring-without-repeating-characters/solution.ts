export function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0

  let right = -1

  const charSet = new Set<string>()
  s.split('').forEach((_char, i) => {
    if (i !== 0)
      charSet.delete(s[i - 1])

    while (right + 1 < s.length && !charSet.has(s[right + 1])) {
      charSet.add(s[right + 1])
      right++
    }

    maxLength = Math.max(maxLength, right - i + 1)
  })

  return maxLength
}
