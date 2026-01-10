import { describe, expect, it } from 'vitest'
import { solve } from './B'

describe('2025 WPC - B: Alice 和 Bob 的游戏', () => {
  it('示例1: 5 2 AABAA', () => {
    expect(solve(5, 2, 'AABAA')).toBe('Alice')
  })

  it('示例2: 7 4 ABAABAA', () => {
    expect(solve(7, 4, 'ABAABAA')).toBe('Alice')
  })

  it('示例3: 6 1 BABBBB', () => {
    expect(solve(6, 1, 'BABBBB')).toBe('Bob')
  })

  it('示例4: 4 1 AAAA', () => {
    expect(solve(4, 1, 'AAAA')).toBe('Alice')
  })

  it('示例5: 8 3 ABAABAAB', () => {
    expect(solve(8, 3, 'ABAABAAB')).toBe('Bob')
  })

  it('示例6: 6 4 AAAAAA', () => {
    expect(solve(6, 4, 'AAAAAA')).toBe('Alice')
  })

  it('边界情况: 只有一个B', () => {
    expect(solve(5, 3, 'AABAA')).toBe('Alice')
  })

  it('边界情况: 全是B但可以一次覆盖', () => {
    expect(solve(4, 4, 'BBBB')).toBe('Alice')
  })

  it('边界情况: 两个B距离正好等于k-1', () => {
    // BAAAB: B在位置0和4，跨度是5，k=3，无法用长度3的窗口覆盖
    expect(solve(5, 3, 'BAAAB')).toBe('Bob')
  })

  it('边界情况: 两个B跨度正好等于k', () => {
    // BAB: B在位置0和2，跨度是3，k=3，可以用长度3的窗口覆盖
    expect(solve(3, 3, 'BAB')).toBe('Alice')
  })

  it('复杂情况: 多个B分散', () => {
    expect(solve(10, 5, 'BAAAABAAB')).toBe('Bob')
  })

  it('复杂情况: 多个B集中', () => {
    expect(solve(10, 5, 'BBBBAAAAAA')).toBe('Alice')
  })
})
