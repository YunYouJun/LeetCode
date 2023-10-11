export function restoreIpAddresses(s: string): string[] {
  const SEG_COUNT = 4
  const segments: number[] = Array.from({ length: SEG_COUNT })

  const ans: string[] = []

  const dfs = (s: string, segId: number, segStart: number) => {
    // 如果找到了 4 段 IP 地址并且遍历完了字符串，则是一种答案
    if (segId === SEG_COUNT) {
      if (segStart === s.length)
        ans.push(segments.join('.'))

      return
    }

    // 如果还没找到 4 段 IP 地址就已经遍历完了字符串，则不是一种答案
    if (segStart === s.length)
      return

    if (s[segStart] === '0') {
      segments[segId] = 0
      dfs(s, segId + 1, segStart + 1)
    }

    let addr = 0
    for (let segEnd = segStart; segEnd < s.length; segEnd++) {
      addr = addr * 10 + Number.parseInt(s[segEnd])

      if (addr > 0 && addr <= 255) {
        segments[segId] = addr
        dfs(s, segId + 1, segEnd + 1)
      }
      else {
        break
      }
    }
  }

  dfs(s, 0, 0)
  return ans
}
