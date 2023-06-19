import { describe, expect, it } from 'vitest'
import { ListNode } from '@yunyoujun/leetcode-utils'
import { reverseList } from './solution-2'

describe('reverseList', () => {
  it('should work', () => {
    expect(reverseList(
      new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))),
    ))
      .toEqual(new ListNode(5, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1))))))
  })

  it('short', () => {
    expect(reverseList(new ListNode(1, new ListNode(2)))).toEqual(new ListNode(2, new ListNode(1)))
  })

  it('empty', () => {
    expect(reverseList(null)).toEqual(null)
  })
})
