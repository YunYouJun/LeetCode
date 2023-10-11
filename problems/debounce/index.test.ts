import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { debounce } from './solution'

// const start = Date.now()
const log = vi.fn((...inputs: any[]) => {})
const dlog = debounce(log, 50)

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should work', () => {
    setTimeout(() => dlog(1), 50)
    setTimeout(() => dlog(2), 75)
    setTimeout(() => {
      expect(log).not.toHaveBeenCalled()
    }, 50)
    setTimeout(() => {
      expect(log).not.toHaveBeenCalled()
    }, 80)
    setTimeout(() => {
      expect(log).toHaveBeenCalled()
    }, 130)
    vi.runAllTimers()
  })
})
