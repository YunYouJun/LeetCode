/**
 * 题目种类
 */
export const categoryMap: Record<string, {
  name: string
  id: {
    type: string
  }
}> = {
  offer: {
    name: '剑指 Offer',
    id: {
      type: 'string',
    },
  },
  leetcode: {
    name: 'LeetCode',
    id: {
      type: 'number',
    },
  },
  lcp: {
    name: 'LCP',
    id: {
      type: 'number',
    },
  },
  custom: {
    name: '自定义',
    id: {
      type: 'number',
    },
  },
}
