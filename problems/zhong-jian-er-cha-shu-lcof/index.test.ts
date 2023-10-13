import { describe, expect, it } from 'vitest'
import { arrayToTree, buildTree } from './solution_3'

describe('buildTree', () => {
  it('should work', () => {
    expect(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])).toEqual(
      arrayToTree([3, 9, 20, null, null, 15, 7]),
    )
  })
})
