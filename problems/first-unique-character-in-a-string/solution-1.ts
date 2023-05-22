/**
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * @param s 字符串
 */
function firstUniqChar(s: string): number {
  const l = s.length
  for (let i = 0; i < l; i++) {
    const char = s[i]
    if (s.indexOf(char) === s.lastIndexOf(char))
      return i
  }
  return -1
}

// const result = firstUniqChar("leetcode");
// console.log(result);
