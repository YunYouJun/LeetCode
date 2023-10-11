import { describe, expect, it } from 'vitest'
import { getIntersectionNode } from './solution-2'
import pkg from './package.json'
import { ListNode } from '@/utils'

describe(pkg.title, () => {
  it('intersect', () => {
    const commonList = new ListNode(8, new ListNode(4, new ListNode(5)))
    const listA = new ListNode(4, new ListNode(1, commonList))
    const listB = new ListNode(5, new ListNode(6, new ListNode(1, commonList)))

    expect(
      getIntersectionNode(listA, listB),
    ).toBe(commonList)
  })

  it('19124 intersect', () => {
    const commonList = new ListNode(2, new ListNode(4))
    const listA = new ListNode(1, new ListNode(9, new ListNode(1, commonList)))
    const listB = new ListNode(3, commonList)

    expect(
      getIntersectionNode(listA, listB),
    ).toBe(commonList)
  })

  it('not intersect', () => {
    const listA = new ListNode(2, new ListNode(6, new ListNode(4)))
    const listB = new ListNode(1, new ListNode(5))

    expect(
      getIntersectionNode(listA, listB),
    ).toBe(null)
  })
})
