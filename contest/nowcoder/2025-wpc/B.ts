/* eslint-disable no-console */
/* eslint-disable unicorn/prefer-node-protocol */
import * as process from 'process'
import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
const input: string[] = []

rl.on('line', (line) => {
  input.push(line)
})

rl.on('close', () => {
  const T = Number.parseInt(input[0])
  let idx = 1
  const results: string[] = []

  for (let t = 0; t < T; t++) {
    const [n, k] = input[idx++].split(' ').map(Number)
    const s = input[idx++]
    results.push(solve(n, k, s))
  }

  console.log(results.join('\n'))
})

/**
 * Alice 和 Bob 的游戏
 *
 * 思路：
 * 1. 如果字符串全是 'A'，Alice 直接获胜
 * 2. 关键在于找出所有 'B' 的位置
 * 3. 检查是否存在一个长度为 k 的窗口可以覆盖所有 'B'
 * 4. 长度为 k 的窗口可以覆盖从位置 i 到 i+k-1 的所有字符
 * 5. 如果最左边的 'B' 和最右边的 'B' 之间的跨度 <= k-1，说明存在这样的窗口
 * 6. 此时 Alice 第一步就能清除所有 'B' 并获胜
 * 7. 否则 Bob 可以通过不断在不同区域制造 'B' 来阻止 Alice
 */
export function solve(n: number, k: number, s: string): string {
  // 找出所有 'B' 的位置
  const bPositions: number[] = []
  for (let i = 0; i < n; i++) {
    if (s[i] === 'B') {
      bPositions.push(i)
    }
  }

  // 如果没有 'B'，Alice 直接获胜
  if (bPositions.length === 0) {
    return 'Alice'
  }

  // 如果只有一个 'B'，Alice 一定可以在第一步覆盖它
  if (bPositions.length === 1) {
    return 'Alice'
  }

  // 计算最左边的 'B' 到最右边的 'B' 的跨度（包含的字符数量）
  const leftmost = bPositions[0]
  const rightmost = bPositions[bPositions.length - 1]
  const span = rightmost - leftmost + 1 // +1 是因为要计算包含两端的字符数

  // 如果跨度 <= k，说明可以用一个长度为 k 的窗口覆盖所有 'B'
  // Alice 第一步就可以清除所有 'B' 并获胜
  if (span <= k) {
    return 'Alice'
  }

  // 否则 Bob 可以通过不断在不同区域制造 'B' 来阻止 Alice
  return 'Bob'
}

// 测试用例（仅用于本地验证）
if (process.env.NODE_ENV === 'test') {
  console.log('=== 运行测试用例 ===')

  // 示例1: 5 2 AABAA
  console.log(solve(5, 2, 'AABAA')) // 期望: Alice

  // 示例2: 7 4 ABAABAA
  console.log(solve(7, 4, 'ABAABAA')) // 期望: Alice

  // 示例3: 6 1 BABBBB
  console.log(solve(6, 1, 'BABBBB')) // 期望: Bob

  // 示例4: 4 1 AAAA
  console.log(solve(4, 1, 'AAAA')) // 期望: Alice

  // 示例5: 8 3 ABAABAAB
  console.log(solve(8, 3, 'ABAABAAB')) // 期望: Bob

  // 示例6: 6 4 AAAAAA
  console.log(solve(6, 4, 'AAAAAA')) // 期望: Alice
}
