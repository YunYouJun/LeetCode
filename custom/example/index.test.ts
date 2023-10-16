import { describe, expect, it } from 'vitest'
import { __example__ } from '.'

describe('', () => {
  it('should work', () => {
    expect(__example__(1, 2)).toBe(3)

    expect(__example__(1, 3)).toBe(4)
  })
})
