/**
 * 我使用了数组的方式（性能较低）
 * 题解是使用 hash / map 来实现
 * https://leetcode.cn/problems/lru-cache/solution/lruhuan-cun-ji-zhi-by-leetcode-solution/
 */
class LRUCache {
  cache: (null | [number, number])[]
  constructor(capacity: number) {
    this.cache = Array.from({ length: capacity }, () => null)
  }

  get(key: number): number {
    const i = this.cache.findIndex((c) => {
      return c && c[0] === key
    })
    const item = this.cache[i]
    if (item) {
      this.cache = this.cache.slice(0, i).concat(this.cache.slice(i + 1))
      this.cache.unshift(item)

      return item[1]
    }
    else {
      return -1
    }
  }

  put(key: number, value: number): void {
    const i = this.cache.findIndex((c) => {
      return c && c[0] === key
    })
    if (i === -1) {
      this.cache.pop()
      this.cache.unshift([key, value])
    }
    else {
      this.cache = this.cache.slice(0, i).concat(this.cache.slice(i + 1))
      this.cache.unshift([key, value])
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
