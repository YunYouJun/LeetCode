import { describe, expect, it } from 'vitest'
import { ListNode } from '@yunyoujun/leetcode-utils'
import { reverseKGroup } from './solution'
import pkg from './package.json'

describe(pkg.title, () => {
  it('should work 2', () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

    expect(
      reverseKGroup(head, 2),
    ).toMatchObject(
      new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(3, new ListNode(5))))),
    )
  })

  it('should work 3', () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

    expect(
      reverseKGroup(head, 3),
    ).toMatchObject(
      new ListNode(3, new ListNode(2, new ListNode(1, new ListNode(4, new ListNode(5))))),
    )
  })
})
