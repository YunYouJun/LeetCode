import { describe, expect, it } from 'vitest'
import { sleep } from './solution'

describe('sleep', () => {
  it('should work', async () => {
    let result = 0
    sleep(200).then(() => {
      result = 1
    })
    expect(result).toBe(0)
    setTimeout(() => {
      expect(result).toBe(1)
    }, 200)
  })
})
